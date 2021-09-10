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
        const id = randomID('accordion');
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
        variant: toOptions(['light', 'dark']),
    },
    render: ({
        images,
        controls,
        indicators,
        captions,
        variant,
    }) => {
        images = normInt(images);

        const id = randomID('carousel');
        return `

        <div id="${id}" class="carousel${variant === 'dark' ? ' carousel-dark' : ''} slide" data-bs-ride="carousel">
            ${indicators ? `
            <div class="carousel-indicators">
                ${new Array(images).fill().map((x, i) => `<button type="button" data-bs-target="#${id}" data-bs-slide-to="${i}"${i === 0 ? ' class="active" aria-current="true"' : ''} aria-label="Slide ${i + 1}"></button>`).join('')}
            </div>` : ''}
            <div class="carousel-inner">
                ${new Array(images).fill().map((x, i) => ` <div class="carousel-item${i === 0 ? ' active' : ''}">
                <img src="./blank.png" class="d-block w-100" alt="...">
                ${captions ? `<div class="carousel-caption d-none d-md-block">
                    <h5>Slide ${i + 1} label</h5>
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
    name: 'Container',
    props: {
        maxWidth: toOptions(['', 'sm', 'md', 'lg', 'xl', 'xxl', 'fluid']),
    },
    render: ({
        maxWidth,
    }) => {
        return `<div class="container${maxWidth ? ' container-' + maxWidth : ''}">
                Container Content
           </div>`
    }
}, {
    name: 'Dropdown',
    props: {
        menus: toNumber,
        color: toOptions([...colors, ...(colors.map(x => 'outline-' + x))]),
        direction: toOptions(['down', 'start', 'end', 'up']),
        split: toCheckBox,
        dark: toCheckBox,
        alignEnd: toCheckBox,
        asNavItem: toCheckBox,
    },
    render: ({
        menus,
        color,
        direction,
        split,
        dark,
        alignEnd,
        asNavItem,
    }) => {
        menus = normInt(menus);
        if (direction === 'down' && !asNavItem)
            direction = '';
        var id = randomID('dropdown');
        var tag = asNavItem ? `a` : `button`;
        var attr = asNavItem ? `href="#"` : `type="button"`;
        var btn = asNavItem ? `nav-link` : `btn btn-${color}`;
        return `<div class="${asNavItem ? 'nav-item':'btn-group'}${direction ? ' drop' + direction : ''}">
        ${split ? `<${tag} ${attr} class="${btn}">
            Split Drop${direction || 'down'}
        </${tag}>
        <${tag} ${attr} class="${btn} dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Toggle Drop${direction || 'down'}</span>
        </${tag}>`: `<${tag} ${attr} class="${btn} dropdown-toggle"
            id="${id}" data-bs-toggle="dropdown" aria-expanded="false">
          Drop${direction || 'down'}
        </${tag}>`}
        <ul class="dropdown-menu${dark ? ' dropdown-menu-dark': ''}${alignEnd ? ' dropdown-menu-end': ''}" aria-labelledby="${id}">
            ${new Array(menus).fill().map((x, i) => `<li><a class="dropdown-item" href="#">Menu ${i + 1}</a></li>`).join('')}
        </ul>
      </div>`
    }
}, {
    name: 'Dropdown Item',
    props: {
        type: toOptions(['item', 'text', 'active', 'disabled', 'divider', 'header']),
    },
    render: ({
        type
    }) => {
        switch (type) {
            case 'item':
                return `<li><a class="dropdown-item" href="#">Menu item</a></li>`;
            case 'active':
                return `<li><a class="dropdown-item active" href="#" aria-current="true">Menu item</a></li>`;
            case 'disabled':
                return `<li><a class="dropdown-item disabled" href="#" aria-disabled="true">Menu item</a></li>`;
            case 'divider':
                return `<li><hr class="dropdown-divider"></li>`;
            case 'header':
                return `<li><h6 class="dropdown-header">Dropdown header</h6></li>`;
            case 'text':
                return `<div class="dropdown-menu text-muted">
                 Text content inside dropdown
              </div>`;
        }
    }
}, {
    name: 'Form',
    props: {
        inputs: toNumber,
    },
    render: ({
        inputs
    }) => {
        inputs = normInt(inputs);
        var inputRenderer = components.find(x => x.name === 'Form Control').render;
        return `<form method="POST">
        ${new Array(inputs).fill().map(x => inputRenderer()).join('')}
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
            `
    }
}, {
    name: 'Form Control',
    props: {
        type: toOptions([...inputTypes, 'textarea', 'select']),
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
        const id = randomID('input');
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
    name: 'Navs',
    props: {
        items: toNumber,
        justify: toOptions(['start', 'center', 'end']),
        pills: toCheckBox,
    },
    render: ({
        items,
        justify,
        pills
    }) => {
        return `
        <ul class="nav${justify ? ' justify-content-' + justify : ''}${pills ? ' nav-pills' : ''}">
        ${new Array(items).fill().map((x, i) => `<li class="nav-item">
                <a class="nav-link${i === 0 ? ' active' : ''} " href="#">Nav ${i + 1}</a>
            </li>`).join('')}
        </ul>`
    }
}, {
    name: 'Navbar',
    props: {
        menus: toNumber,
        justify: toOptions(['start', 'center', 'end']),
        variant: toOptions(['light', 'dark']),
        background: toOptions(['', ...colors]),
        collapse: toOptions(['', 'never', 'sm', 'md', 'lg', 'xl', 'xxl', 'always']),
        searchBar: toCheckBox,
    },
    render: ({
        menus,
        variant,
        justify,
        background,
        collapse,
        searchBar,
    }) => {
        menus = normInt(menus);
        if (!collapse)
            collapse = 'md';
        if (collapse === 'never')
            collapse = 'navbar-expand'
        else if (collapse === 'always')
            collapse = ''
        else
            collapse = 'navbar-expand-' + collapse
        if (!background)
            background = variant;
        justify = ({
            start: 'me-auto',
            center: 'mx-auto',
            end: 'ms-auto'
        })[justify];
        return `
            <nav class="navbar ${collapse} navbar-${variant} bg-${background}">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="/blank.png" alt="" width="30" class="d-inline-block me-2">
                        Navbar
                    </a>
                    ${collapse !== 'navbar-expand' ? `<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>` : ''}
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ${justify} mb-2 mb-lg-0">
                    ${new Array(menus).fill().map((x, i) => `<li class="nav-item">
                            <a class="nav-link${i === 0 ? ' active' : ''} " href="#">Nav ${i + 1}</a>
                        </li>`).join('')}
                    </ul>
                    ${searchBar ? `<form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>` : ''}
                    </div>
                </div>
            </nav>`
    }
}, {
    name: 'Progress',
    props: {
        width: toNumber,
        color: toOptions(['', ...colors]),
        text: toCheckBox,
        animated: toCheckBox,
    },
    render: ({
        width,
        color,
        text,
        animated,
    }) => {
        width = normInt(width, 50);
        return `<div class="progress">
        <div class="progress-bar${ animated ? ' progress-bar-striped progress-bar-animated' : ''}${color ? ' bg-' + color : ''}" role="progressbar"
        aria-valuenow="${width}" aria-valuemin="0" aria-valuemax="100" style="width: ${width}%">${text ? `${width}%` : ''}</div>
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
    name: 'Spinner',
    props: {
        type: toOptions(['border', 'grow']),
        color: toOptions(['', ...colors]),
    },
    render: ({
        type,
        color,
    }) => {
        return `<div class="spinner-${type}${color? ' text-' + color : ''}" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>`
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

        const id = randomID('tabs');
        return `<div id="${id}"><nav>
        <div class="nav${pills ? ' nav-pills' : ''} nav-tabs" id="${id}-tab" role="tablist">
            ${new Array(tabs).fill().map((x, i) => ` <button class="nav-link${i === 0 ? ' active' : ''}" id="${id}-tab-${i}" data-bs-toggle="tab" data-bs-target="#${id}-tabContent-${i}" type="button" role="tab" aria-controls="${id}-tabContent-${i}">Tab ${i + 1}</button>`).join('')}
        </div>
      </nav>
      <div class="tab-content" id="${id}-tabContent">
        ${new Array(tabs).fill().map((x, i) => `
        <div class="tab-pane fade${i === 0 ? ' show active' : ''}" id="${id}-tabContent-${i}" role="tabpanel" aria-labelledby="${id}-tab-${i}">Tab ${i + 1} Content</div>`).join('')}
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