const template = `<!DOCTYPE html><html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
<body>
<div class="container"><h1>Edit Here</p></div>
</body></html>`;

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function normInt(v) {
    if (v)
        v = parseInt(v);
    if (!v)
        v = 3;
    v = Math.max(v, 1);
    return v;
}

var randomID = () => makeid(5);

var escapeHTML = function (unsafe) {
    return unsafe.replace(/[&<"']/g, function (m) {
        switch (m) {
            case '&':
                return '&amp;';
            case '<':
                return '&lt;';
            case '"':
                return '&quot;';
            default:
                return '&#039;';
        }
    });
};

var toOptions = (list) => `<select class="form-select form-select-sm">${list.map(x => `<option>${x}</option>`).join('')}</select>`;
var toCheckBox = '<input type="checkbox" class="form-check-input form-control-sm">';
var toNumber = '<input type="number" class="form-control form-control-sm">';
var toText = '<input type="text" class="form-control form-control-sm">';
var colors = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];

const components = [{
    name: 'Accordion',
    props: {
        rows: '<input type="string">',
    },
    render: ({
        rows,
    }) => {
        if (rows)
            rows = parseInt(rows);
        if (!rows)
            rows = 3;
        const id = randomID();
        return `
            <div class="accordion" id="${id}">
            ${new Array(rows).fill().map((x, i) => `<div class="accordion-item">
            <h2 class="accordion-header" id="${id}-head-${i + 1}">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${id}-${i + 1}" aria-expanded="true" aria-controls="${id}-${i + 1}">
                Accordion Item #${i + 1}
                </button>
            </h2>
            <div id="${id}-${i + 1}" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#${id}">
                <div class="accordion-body">
                    Accordion content.
                </div>
            </div>
        </div>`).join('')}

        </div>
        `
    }
}, {
    name: 'Alert',
    props: {
        color: toOptions(colors),
        title: toCheckBox,
        dismissible: toCheckBox,
    },
    render: ({
        color,
        title,
        dismissible,
    }) => {
        if (!color)
            color = 'primary';
        return `<div class="alert alert-${color}${dismissible ? ' alert-dismissible fade show' : ''}" role="alert">
        ${title ? '<h4 class="alert-heading">Alert Title</h4>' : ''}
        A simple alert—check it out!
        ${dismissible ? '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' : ''}
      </div>
        `
    }
}, {
    name: 'Badge',
    props: {
        color: toOptions(colors),
    },
    render: ({
        color,
    }) => {
        if (!color)
            color = 'primary';
        return `<div class="badge bg-${color}">
        Badge
      </div>
        `
    }
}, {
    name: 'Button',
    props: {
        color: toOptions([...colors, ...(colors.map(x => 'outline-' + x)), 'link']),
        size: toOptions(['', 'lg', 'sm']),
        type: toOptions(['button', 'submit', 'reset', 'link']),
        disabled: toCheckBox,
    },
    render: ({
        color,
        title,
        disabled,
        size,
        type,
    }) => {
        if (!title)
            title = 'Button';
        if (!color)
            color = 'primary';
        const classes = `btn btn-${color}${size ? ' btn-' + size : ''}${disabled ? ' disabled' : ''}`;
        return type === 'link' ?
            `<a href="#" class="${classes}" role="button"${disabled ? ' aria-disabled="true"' : ''}>Button link</a>` :
            `<button type="${type}" class="${classes}">Button</button>`
    }
}, {
    name: 'Button Group',
    props: {
        buttons: toNumber,
        color: toOptions([...colors, ...(colors.map(x => 'outline-' + x)), 'link']),
        size: toOptions(['', 'lg', 'sm']),
    },
    render: ({
        buttons,
        color,
        size,
    }) => {
        if (buttons)
            buttons = parseInt(buttons);
        if (!buttons)
            buttons = 3;
        const classes = `btn-${color}${size ? ' btn-' + size : ''}`;
        return `<div class="btn-group" role="group">${new Array(buttons).fill().map(x =>
            `<button type="button" class="btn ${classes}">Button</button>`).join('')}</div>`;
    }
}, {
    name: 'Breadcrumb',
    props: {
        items: toNumber,
        delimiter: toOptions(['/', '>', '']),
    },
    render: ({
        items,
        delimiter,
    }) => {
        items = normInt(items);
        return `
        <nav${delimiter ? ` style="--bs-breadcrumb-divider: '${delimiter}';"` : ''} aria-label="breadcrumb">
          <ol class="breadcrumb">
            ${new Array(items - 1).fill().map((x, i) => `<li class="breadcrumb-item"><a href="#">Page ${i + 1}</a></li>`).join('')}
            <li class="breadcrumb-item active" aria-current="page">This Page</li>
          </ol>
        </nav>`;
    }
}, {
    name: 'Carousel',
    props: {
        images: toNumber,
        controls: toCheckBox,
        indicators: toCheckBox,
        captions: toCheckBox,
    },
    render: ({
        images,
        controls,
        indicators,
        captions,
    }) => {
        images = normInt(images);

        const id = randomID();
        return `

        <div id="${id}" class="carousel slide" data-bs-ride="carousel">
            ${indicators ? `
            <div class="carousel-indicators">
                ${new Array(images).fill().map((x, i) => `<button type="button" data-bs-target="#${id}" data-bs-slide-to="${i}"${i === 0 ? ' class="active" aria-current="true"' : ''} aria-label="Slide ${i + 1}"></button>`).join('')}
            </div>` : ''}
            <div class="carousel-inner">
                ${new Array(images).fill().map((x, i) => ` <div class="carousel-item${i === 0 ? ' active' : ''}">
                <img src="./blank.png" class="d-block w-100" alt="...">
                ${captions ? `<div class="carousel-caption d-none d-md-block">
                    <h5>Slide ${i} label</h5>
                    <p>Some representative placeholder content for the slide ${i + 1}.</p>
                </div>` : ''}
                </div>`).join('')}
            </div>
            ${controls ? `
            <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            ` : ''}</div>`;
    }
}, {
    name: 'Card',
    props: {
        title: toCheckBox,
        image: toCheckBox,
        button: toCheckBox,
        shadow: toOptions(['', 'none', 'sm', 'md', 'lg', 'inset'])
    },
    render: ({
        title,
        image,
        button,
        shadow,
    }) => {
        return `<div class="card${shadow ? ' shadow-' + shadow : ''}">
            ${image ? ` <img src="./blank.png" class="card-img-top" alt="">` : ''}
            <div class="card-body">
              ${title ? `<h5 class="card-title">Card title</h5>` : ''}
              <p class="card-text">Card content here</p>
              ${button ? `<a href="#" class="btn btn-primary">Button</a>` : ''}
            </div>
          </div>`
    }
}, {
    name: 'Form',
    props: {},
    render: ({

    }) => {
        return `<form method="POST">

        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
            `
    }
}, {
    name: 'Form Control',
    props: {
        type: toOptions(['input', 'number', 'textarea', 'select', 'checkbox', 'radio', 'email', 'password', 'range', 'date', 'time', 'datetime-local', 'color', 'file']),
        validity: toOptions(['', 'valid', 'invalid']),
        noLabel: toCheckBox,
        disabled: toCheckBox,
    },
    render: ({
        type,
        noLabel,
        validity,
        disabled
    }) => {
        const id = randomID();
        const label = type[0].toUpperCase() + type.slice(1);
        const attrs = `class="form-${type === 'checkbox' || type === 'radio' ? 'form-check-input': (type === 'select' || type ==='range' ? type : 'control')}${validity ? ' is-' + validity : ''}" id="${id}"${disabled ? ' disabled': ''} placeholder="Enter ${label}"`;
        let elem;
        switch (type) {
            case 'textarea':
                elem = `<textarea ${attrs}></textarea>`
                break;
            case 'select':
                elem = `<select ${attrs}></select>`
                break;
            default:
                elem = `<input type="${type}" ${attrs}>`
                break;
        }
        return type === 'checkbox' || type === 'radio' ? `<div class="form-check">
        ${elem}
        ${noLabel ? '' : `<label for="${id}" class="form-check-label">${label} Label</label>`}
        ${noLabel || !validity ? '' : `<div class="${validity}-feedback">${validity} feedback</div>`}
      </div>` : `<div class="mb-3">
      ${noLabel ? '' : `<label for="${id}" class="form-label">${label} Label</label>`}
            ${elem}
            ${noLabel || !validity ? '' : `<div class="${validity}-feedback">${validity} feedback</div>`}
            </div>`
    }
}, {
    name: 'Rows',
    props: {
        columns: toOptions(['', '1', '2', '3', '4', '5', '6', '8', '9', '10', '12']),
        gutter: toOptions(['', '0', '1', '2', '3', '4', '5']),
        itemClasses: toText,
    },
    render: ({
        columns,
        gutter,
        itemClasses,
    }) => {
        if (columns)
            columns = parseInt(columns);
        if (!columns)
            columns = 2;
        if (gutter)
            gutter = parseInt(gutter);
        if (!itemClasses)
            itemClasses = 'col';

        return `<div class="row${gutter ? ' g-' + gutter: ''}">
            ${new Array(columns).fill().map((x, i) => `<div class="${escapeHTML(itemClasses)}">Column ${i + 1}</div>`).join('')}
            </div>
            `
    }
}, {
    name: 'Tabs',
    props: {
        tabs: toNumber,
        pills: toCheckBox,
        vertical: toCheckBox,
    },
    render: ({
        tabs,
        pills,
        vertical
    }) => {
        tabs = normInt(tabs);

        const id = randomID();
        return `<div><nav>
        <div class="nav${pills ? ' nav-pills' : ''} nav-tabs" id="${id}-tab" role="tablist">
            ${new Array(tabs).fill().map((x, i) => ` <button class="nav-link${i === 0 ? ' active' : ''}" id="${id}-${i}-tab" data-bs-toggle="tab" data-bs-target="#${id}-${i}" type="button" role="tab" aria-controls="${id}-${i}">Tab ${i + 1}</button>`).join('')}
        </div>
      </nav>
      <div class="tab-content" id="${id}-tabContent">
        ${new Array(tabs).fill().map((x, i) => `
        <div class="tab-pane fade${i === 0 ? ' show active' : ''}" id="${id}-${i}" role="tabpanel" aria-labelledby="${id}-${i}-tab">Tab ${i + 1} Content</div>`).join('')}
      </div></div>`;
    }
}, {
    name: 'Tables',
    props: {
        columns: toNumber,
        rows: toNumber,
        striped: toCheckBox,
        bordered: toCheckBox,
        responsive: toCheckBox,
        compact: toCheckBox,
    },
    render: ({
        columns,
        rows,
        striped,
        bordered,
        responsive,
        compact,
    }) => {
        columns = normInt(columns);
        rows = normInt(rows);

        const id = randomID();
        return `
        ${responsive ? '<div class="table-responsive">' : ''}
        <table class="table${striped ? ' table-striped' : ''}${bordered ? ' table-bordered' : ''}${compact ? ' table-sm' : ''}">
        <thead>
          <tr>
            ${new Array(columns).fill().map(x => `<th scope="col">#</th>`).join('')}
          </tr>
        </thead>
        <tbody>
        ${new Array(rows).fill().map((x, i) => `<tr><td>${i + 1}</td>${new Array(columns - 1).fill().map(x => `<td></td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
      ${responsive ? '</div>' : ''}
      `;
    }
}, {
    name: 'Typography',
    props: {
        heading: toOptions(['', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
        leading: toCheckBox,
        monospace: toCheckBox,
        align: toOptions(['', 'start', 'center', 'end']),
        transform: toOptions(['', 'lowercase', 'uppercase', 'capitalize']),
        fontSize: toOptions(['', '1', '2', '3', '4', '5', '6']),
        fontWeight: toOptions(['', 'bold', 'bolder', 'normal', 'light', 'lighter']),
        fontStyle: toOptions(['', 'italic', 'normal']),
        lineHeight: toOptions(['', '1', 'sm', 'base', 'lg']),
        whiteSpace: toOptions(['', 'wrap', 'nowrap']),
    },
    render: ({
        heading,
        leading,
        monospace,
        align,
        transform,
        fontSize,
        fontWeight,
        fontStyle,
        lineHeight,
        whiteSpace,
    }) => {
        let classes = [];
        if (heading) {
            if (!leading)
                classes.push(heading);
            else if (heading === 'p') {
                classes.push('lead');
            } else {
                classes.push('display-' + heading.substr(1));
            }
        }
        if (align) {
            classes.push('text-' + align);
        }
        if (monospace) {
            classes.push('text-monospace');
        }
        if (transform) {
            classes.push('text-' + transform);
        }
        if (fontSize) {
            classes.push('fs-' + fontSize);
        }
        if (fontWeight) {
            classes.push('fw-' + fontWeight);
        }
        if (fontStyle) {
            classes.push('fst-' + fontStyle);
        }
        if (lineHeight) {
            classes.push('lh-' + lineHeight);
        }
        if (whiteSpace) {
            classes.push('text-' + whiteSpace);
        }
        const element = heading || 'div';

        return `<${element} class="${classes.join(' ')}">Text here</${element}>`
    }
}]
export {
    template,
    components
}