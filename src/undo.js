// https://github.com/jzaefferer/undo/blob/master/undo.js
var ctor = function () {};
var inherits = function (parent, protoProps) {
    var child;

    if (protoProps && protoProps.hasOwnProperty('constructor')) {
        child = protoProps.constructor;
    } else {
        child = function () {
            return parent.apply(this, arguments);
        };
    }

    ctor.prototype = parent.prototype;
    child.prototype = new ctor();

    if (protoProps) extend(child.prototype, protoProps);

    child.prototype.constructor = child;
    child.__super__ = parent.prototype;
    return child;
};

function extend(target, ref) {
    var name, value;
    for (name in ref) {
        value = ref[name];
        if (value !== undefined) {
            target[name] = value;
        }
    }
    return target;
};

var Undo = {
    version: '0.1.15'
};

Undo.Stack = function () {
    this.commands = [];
    this.stackPosition = -1;
    this.savePosition = -1;
};

extend(Undo.Stack.prototype, {
    reset: function () {
        this.commands = [];
        this.stackPosition = -1;
        this.savePosition = -1;
    },
    execute: function (command) {
        this._clearRedo();
        command.execute();
        this.commands.push(command);
        this.stackPosition++;
        this.changed();
    },
    undo: function () {
        this.commands[this.stackPosition].undo();
        this.stackPosition--;
        this.changed();
    },
    canUndo: function () {
        return this.stackPosition >= 0;
    },
    redo: function () {
        this.stackPosition++;
        this.commands[this.stackPosition].redo();
        this.changed();
    },
    canRedo: function () {
        return this.stackPosition < this.commands.length - 1;
    },
    save: function () {
        this.savePosition = this.stackPosition;
        this.changed();
    },
    dirty: function () {
        return this.stackPosition != this.savePosition;
    },
    _clearRedo: function () {
        this.commands.splice(this.stackPosition + 1);
    },
    changed: function () {
        // do nothing, override
    }
});

Undo.Command = function (name) {
    this.name = name;
}

var up = new Error("override me!");

extend(Undo.Command.prototype, {
    execute: function () {
        throw up;
    },
    undo: function () {
        throw up;
    },
    redo: function () {
        this.execute();
    }
});

Undo.Command.extend = function (protoProps) {
    var child = inherits(this, protoProps);
    child.extend = Undo.Command.extend;
    return child;
};

// custom undo/redo handler


var stack = new Undo.Stack();

stack.changed = () => {
    $('#undo').prop('disabled', !stack.canUndo());
    $('#redo').prop('disabled', !stack.canRedo());
    setHighlightElement(highlightedElement);
    var html = generateCleanExportedHtml();
    watchedLastCleanHtmlExport = html;
    sessionStorage['webgen-workspace'] = html;
    if (watchedWindow) {
        watchedWindowDirty = true;
    }
}
var CombineCommand = Undo.Command.extend({
    constructor: function (...commands) {
        this.commands = commands;
    },
    execute: function () {},
    undo: function () {
        for (let i = this.commands.length; i-- > 0;) {
            this.commands[i].undo();
        }
    },
    redo: function () {
        for (let i = 0; i < this.commands.length; i++) {
            this.commands[i].redo();
        }
    }
});
var SelectionCommand = Undo.Command.extend({
    constructor: function ( /** @type {Document} */ document) {
        this.target = document;
        const sel = document.getSelection();
        if (sel && sel.rangeCount) {
            this.range = sel.getRangeAt(0).cloneRange();
            this.start = this.range.startOffset;
            this.end = this.range.endOffset;
        }
    },
    execute: function () {},
    undo: function () {
        if (this.range) {
            const sel = this.target.getSelection();
            // this.range.startOffset = this.start;
            // this.range.endOffset = this.end;
            sel.removeAllRanges();
            sel.addRange(this.range);
        }
    },
    redo: function () {}
});

var AttributeCommand = Undo.Command.extend({
    constructor: function ( /** @type {MutationRecord} */ mutation) {
        this.target = mutation.target;
        this.name = mutation.attributeName;
        this.old = mutation.oldValue;
        this.new = mutation.target.getAttribute(mutation.attributeName);
    },
    execute: function () {},
    undo: function () {
        this.target.setAttribute(this.name, this.old);
    },
    redo: function () {
        this.target.setAttribute(this.name, this.new);
    }
});

var DataCommand = Undo.Command.extend({
    constructor: function ( /** @type {MutationRecord} */ mutation) {
        this.target = mutation.target;
        this.old = mutation.oldValue;
        this.new = mutation.target.data;
    },
    execute: function () {},
    undo: function () {
        this.target.data = this.old;
    },
    redo: function () {
        this.target.data = this.new;
    }
});
var NodeListCommand = Undo.Command.extend({
    constructor: function ( /** @type {MutationRecord} */ mutation) {
        this.target = mutation.target;
        this.added = mutation.addedNodes;
        this.removed = mutation.removedNodes;
        this.before = mutation.nextSibling;
    },
    execute: function () {},
    undo: function () {
        for (let i = this.added.length; i-- > 0;) {
            const element = this.added[i];
            this.target.removeChild(element);
        }
        for (let i = 0; i < this.removed.length; i++) {
            const element = this.removed[i];
            this.target.insertBefore(element, this.before);
        }
    },
    redo: function () {
        for (let i = this.removed.length; i-- > 0;) {
            const element = this.removed[i];
            this.target.removeChild(element);
        }
        for (let i = 0; i < this.added.length; i++) {
            const element = this.added[i];
            this.target.insertBefore(element, this.before);
        }
    }
});

// Options for the observer (which mutations to observe)
const mutationConfig = {
    childList: true,
    subtree: true,
    attributes: true,
    attributeOldValue: true,
    characterData: true,
    characterDataOldValue: true
};

// Callback function to execute when mutations are observed
var blocked = false;

const mutationCallback = function (mutationsList, observer) {
    if (blocked) {
        blocked = false;
        return;
    }
    // Use traditional 'for loops' for IE 11
    for (const mutation of mutationsList) {
        if (mutation.target === highlightBeacon)
            continue;
        let command;
        switch (mutation.type) {
            case 'childList':
                command = new NodeListCommand(mutation);
                break;
            case 'characterData':
                command = new DataCommand(mutation);
                break;
            case 'attributes':
                command = new AttributeCommand(mutation);
                break;
        }
        command = new CombineCommand(new SelectionCommand(workdoc()), command)
        stack.execute(command);
    }
};