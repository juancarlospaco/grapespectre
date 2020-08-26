export default (editor, opts = {}) => {
  const plugin = editor.BlockManager.add; // Alias for convenience.


  /* Nim-lang.org Source Code Filter *********************************************************/


  plugin('nim_scf_header_basic', {
    label: 'Header Basic',
    content: '#? stdtmpl\n',
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://nim-lang.org/docs/filters.html';
      el.appendChild(a);
    },
  });

  plugin('nim_scf_header_full', {
    label: 'Header Full',
    content: `
    #? stdtmpl | strip
    #include prelude
    #
    #
    #proc generateHTML*(argument: string): string =
    #  discard
    #end proc
    #
    `,
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://nim-lang.org/docs/filters.html';
      el.appendChild(a);
    },
  });

  plugin('nim_scf_proc', {
    label: 'Function',
    content: `
    #
    #proc generateHTML*(argument: string): string =
    #  discard
    #end proc
    #
    `,
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://nim-lang.org/docs/manual.html#procedures';
      el.appendChild(a);
    },
  });

  plugin('nim_scf_template', {
    label: 'Template',
    content: `
    #
    #template generateHTML*(argument: string): string =
    #  discard
    #end template
    #
    `,
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://nim-lang.org/docs/manual.html#templates';
      el.appendChild(a);
    },
  });

  plugin('nim_scf_arrow_func', {
    label: 'Arrow Functions',
    content: `
    #
    #let name0 = (argument: int) {.inline.} => echo argument
    #let name1 = (argument: bool) {.inline.} => echo argument
    #let name2 = (argument: float) {.inline.} => echo argument
    #
    `,
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://github.com/nim-lang/Nim/wiki/Nim-for-TypeScript-Programmers#arrow-functions';
      el.appendChild(a);
    },
  });

  plugin('nim_scf_comprehension', {
    label: 'List Comprehension',
    content: `
    #
    #let variable = collect(newSeq):
    #  for item in @[-9, 1, 42, 0, -1, 9]: item
    #
    #let variable = collect(initTable(4)):
    #  for key, value in @[-9, 1, 42, 0, -1, 9]: {key: value}
    #
    `,
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://github.com/nim-lang/Nim/wiki/Nim-for-Python-Programmers#list-comprehensions';
      el.appendChild(a);
    },
  });

  plugin('nim_scf_if', {
    label: 'if...elif...else',
    content: `
    #
    #if condition:
    #  discard
    #elif condition:
    #  discard
    #else:
    #  discard
    #end if
    #
    `,
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://nim-lang.org/docs/manual.html#statements-and-expressions-if-statement';
      el.appendChild(a);
    },
  });

  plugin('nim_scf_for', {
    label: 'for loop',
    content: `
    #
    #for i in 0..9:
    #  echo i
    #end for
    #
    `,
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://nim-lang.org/docs/manual.html#iterators-and-the-for-statement';
      el.appendChild(a);
    },
  });

  plugin('nim_scf_case', {
    label: 'case switch',
    content: `
    #
    #case condition
    #of value0:
    #  discard
    #of value1:
    #  discard
    #else:
    #  discard
    #end case
    #
    `,
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://nim-lang.org/docs/manual.html#statements-and-expressions-case-statement';
      el.appendChild(a);
    },
  });

  plugin('nim_scf_while', {
    label: 'while infinite loop',
    content: `
    #
    #while true:
    #  discard
    #end while
    #
    `,
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://nim-lang.org/docs/manual.html#statements-and-expressions-while-statement';
      el.appendChild(a);
    },
  });

  plugin('nim_scf_try', {
    label: 'try...except...finally',
    content: `
    #
    #try:
    #  discard
    #except IOError as e:
    #  echo e.msg
    #except:
    #  discard
    #finally:
    #  discard
    #end try
    #
    `,
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://nim-lang.org/docs/manual.html#exception-handling-try-statement';
      el.appendChild(a);
    },
  });

  plugin('nim_scf_variables', {
    label: 'variables declaration',
    content: `
    #
    #const
    #  constant_immutable0 = 0
    #  constant_immutable1 = 42
    #  constant_immutable2 = 666
    #  constant_immutable3 = true
    #  constant_immutable4 = 3.14
    #  constant_immutable5 = @[1, 2, 3]
    #
    #let
    #  variable_immutable0 = 0
    #  variable_immutable1 = 42
    #  variable_immutable2 = 666
    #  variable_immutable3 = true
    #  variable_immutable4 = 3.14
    #  variable_immutable5 = @[1, 2, 3]
    #
    #var
    #  variable_mutable0: int
    #  variable_mutable1: char
    #  variable_mutable2: float
    #  variable_mutable3: string
    #
    `,
    category: 'Nim lang➡️SCF',
    media:    '<img src="nim.svg" height=32 width=64 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://nim-lang.org/docs/manual.html#statements-and-expressions-var-statement';
      el.appendChild(a);
    },
  });


  /* Fonts *********************************************************/


  plugin('fonts_ubuntu', {
    label: 'Ubuntu',
    content: '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"  async defer >',
    category: 'Fonts',
    media:    '<img src="google_fonts.webp" height=32 width=64 loading="lazy">'
  });

  plugin('fonts_oxygen', {
    label: 'Oxygen',
    content: '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap" async defer >',
    category: 'Fonts',
    media:    '<img src="google_fonts.webp" height=32 width=64 loading="lazy">'
  });

  plugin('fonts_roboto', {
    label: 'Roboto',
    content: '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" async defer >',
    category: 'Fonts',
    media:    '<img src="google_fonts.webp" height=32 width=64 loading="lazy">'
  });

  plugin('fonts_lato', {
    label: 'Lato',
    content: '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato&display=swap" async defer >',
    category: 'Fonts',
    media:    '<img src="google_fonts.webp" height=32 width=64 loading="lazy">'
  });


  /* Unsplash images *********************************************************/


  plugin('unsplash_images_random', {
    label:    'Random',
    content:  '<img src="https://source.unsplash.com/random" height="99" width="99" loading="lazy">\n',
    category: 'Unsplash➡️Images',
    media:    '<img src="unsplash.svg" height=32 width=32 loading="lazy">'
  });

  plugin('unsplash_images_daily', {
    label:    'Daily Best',
    content:  '<img src="https://source.unsplash.com/daily" height="99" width="99" loading="lazy">\n',
    category: 'Unsplash➡️Images',
    media:    '<img src="unsplash.svg" height=32 width=32 loading="lazy">'
  });

  plugin('unsplash_images_weekly', {
    label:    'Weekly Best',
    content:  '<img src="https://source.unsplash.com/weekly" height="99" width="99" loading="lazy">\n',
    category: 'Unsplash➡️Images',
    media:    '<img src="unsplash.svg" height=32 width=32 loading="lazy">'
  });

  plugin('unsplash_images_featured', {
    label:    'Featured Curated',
    content:  '<img src="https://source.unsplash.com/featured" height="99" width="99" loading="lazy">\n',
    category: 'Unsplash➡️Images',
    media:    '<img src="unsplash.svg" height=32 width=32 loading="lazy">'
  });


  /* SVG Patterns *********************************************************/


  plugin('svg_patterns_gradient', {
    label:    'Gradient',
    content: `
    <svg xmlns='http://www.w3.org/2000/svg' width='99' height='99'>
      <linearGradient id='g' x2='1' y2='1'>
      <stop stop-color='#F19'/>
      <stop offset='100%' stop-color='#0CF'/>
      </linearGradient>
      <rect width='99' height='99' fill='url(#g)'/>
    </svg>`,
    category: 'SVG➡️Patterns',
    media:    '<img src="svg.svg" height=32 width=32 loading="lazy">'
  });

  plugin('svg_patterns_noise', {
    label:    'Perlin Noise',
    content: `
    <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='99' height='99'>
      <filter id='n'>
        <feTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='10' stitchTiles='stitch'/>
      </filter>
      <rect width='500' height='500' fill='#000'/>
      <rect width='500' height='500' filter="url(#n)" opacity='0.4'/>
    </svg>`,
    category: 'SVG➡️Patterns',
    media:    '<img src="svg.svg" height=32 width=32 loading="lazy">'
  });


  /* Spectre Layout *********************************************************/


  plugin('spectre_layout_hero', {
    label: 'Hero',
    content: `
    <div class="hero hero-sm bg-gray">
      <div class="hero-body">
        <h1>Hero</h1>
        <p>Hero example</p>
      </div>
    </div>`,
    category: 'Spectre➡️Layout',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/layout/hero.html';
      el.appendChild(a);
    },
  });

  plugin('spectre_layout_navbar', {
    label: 'Navbar',
    content: `
    <header class="navbar bg-grey">
      <section class="navbar-section">
        <a href="#" class="navbar-brand mr-2">Spectre</a>
        <a href="#" class="btn btn-link">Nim</a>
      </section>
      <section class="navbar-center">
      <!-- centered logo or brand -->
      <img src="spectre.svg" height=32 width=32 loading="lazy">
      </section>
      <section class="navbar-section">
        <div class="input-group input-inline">
          <input class="form-input" type="search" placeholder="Search..." required >
          <button class="btn btn-primary input-group-btn" onclick="">Search</button>
        </div>
      </section>
    </header>`,
    category: 'Spectre➡️Layout',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/layout/navbar.html';
      el.appendChild(a);
    },
  });


  /* Spectre Code *********************************************************/


  plugin('spectre_code_multiline', {
    label: 'Multiline',
    content: '<pre class="code" data-lang="Nim"><code>echo "Hello World"</code></pre>\n',
    category: 'Spectre➡️Code',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render: ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/elements/code.html#code-snippet';
      el.appendChild(a);
    },
  });

  plugin('spectre_code_textarea', {
    label: 'Textarea',
    content: '<textarea class="form-input" placeholder="" title="" rows=9 readonly >echo "Hello World"</textarea>\n',
    category: 'Spectre➡️Code',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });


  /* Spectre Accordions *********************************************************/


  plugin('spectre_accordion_details', {
    label: 'Details-Based',
    content: `
    <details class="accordion" open >
      <summary class="accordion-header">
        <i class="icon icon-arrow-right mr-1"></i> Title
      </summary>
      <div class="accordion-body">
        content
      </div>
    </details>
    <details class="accordion" open >
      <summary class="accordion-header">
        <i class="icon icon-arrow-right mr-1"></i> Title
      </summary>
      <div class="accordion-body">
        body
      </div>
    </details>`,
    category: 'Spectre➡️Accordions',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/accordions.html';
      el.appendChild(a);
    },
  });

  plugin('spectre_accordion_radio', {
    label: 'Radio-Based Mutually-Exclusive',
    content: `
    <div class="accordion">
      <input type="radio" id="accordion-1" name="accordion-radio" hidden>
      <label class="accordion-header" for="accordion-1">Title</label>
      <div class="accordion-body">
        body
      </div>
    </div>
    <div class="accordion">
      <input type="radio" id="accordion-1" name="accordion-radio" hidden>
      <label class="accordion-header" for="accordion-1">Title</label>
      <div class="accordion-body">
        body
      </div>
    </div>`,
    category: 'Spectre➡️Accordions',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/accordions.html';
      el.appendChild(a);
    },
  });


  /* Spectre Avatars *********************************************************/


  plugin('spectre_avatars_tiny', {
    label: 'Tiny, Presence, Icon, Badge',
    content: `
    <figure class="avatar badge" data-initial="??" data-badge="9" style="background-color:grey"><!-- Replace "??" with user initials; Replace "9" with Badge value, like Rank, etc -->
      <img src="https://source.unsplash.com/99x99/?kitten" alt="" title="" height=32 width=32 loading="lazy"><!-- Photo 32x32 px -->
      <img src="icon.png" class="avatar-icon"><!-- Icon: admin.png, guest.png, etc -->
      <i class="avatar-presence online"></i><!-- Status: online, busy, away, etc -->
    </figure>`,
    category: 'Spectre➡️Avatars',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/avatars.html';
      el.appendChild(a);
    },
  });

  plugin('spectre_avatars_big', {
    label: 'Big, Presence, Icon, Badge',
    content: `
    <figure class="avatar avatar-xl badge" data-initial="??" data-badge="9" style="background-color:grey"><!-- Replace "??" with User Initials; Replace "9" with Badge value, like Rank, etc -->
      <img src="https://source.unsplash.com/99x99/?kitten" alt="" title="" height=32 width=32 loading="lazy"><!-- Photo 64x64 px -->
      <img src="icon.png" class="avatar-icon"><!-- Icon: admin.png, guest.png, etc -->
      <i class="avatar-presence online"></i><!-- Status: online, busy, away, etc -->
    </figure>`,
    category: 'Spectre➡️Avatars',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/avatars.html';
      el.appendChild(a);
    },
  });


  /* Spectre Table *********************************************************/


  plugin('spectre_table_scroll', {
    label: 'Striped Hover Scrollable',
    content: `
    <table class="table table-striped table-hover table-scroll">
      <thead>
        <tr>
          <th>title</th>
          <th>title</th>
          <th>title</th>
        </tr>
      </thead>
      <tbody>
        <tr class="active">
          <td>value</td>
          <td>value</td>
          <td>value</td>
        </tr>
        <tr>
          <td>value</td>
          <td>value</td>
          <td>value</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>title</th>
          <th>title</th>
          <th>title</th>
        </tr>
      </tfoot>
    </table>
    `,
    category: 'Spectre➡️Table',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render: ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/elements/tables.html';
      el.appendChild(a);
    },
  });


  plugin('spectre_table_full_width', {
    label: 'Striped Hover Full Width',
    content: `
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>title</th>
          <th>title</th>
          <th>title</th>
        </tr>
      </thead>
      <tbody>
        <tr class="active">
          <td>value</td>
          <td>value</td>
          <td>value</td>
        </tr>
        <tr>
          <td>value</td>
          <td>value</td>
          <td>value</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>title</th>
          <th>title</th>
          <th>title</th>
        </tr>
      </tfoot>
    </table>
    `,
    category: 'Spectre➡️Table',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render: ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/elements/tables.html';
      el.appendChild(a);
    },
  });


  /* Spectre Labels *********************************************************/


  plugin('spectre_labels_primary', {
    label: 'Primary',
    content: '<span class="label label-rounded label-primary">primary</span>\n',
    category: 'Spectre➡️Labels',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render: ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/elements/labels.html#labels-rounded';
      el.appendChild(a);
    },
  });

  plugin('spectre_labels_secondary', {
    label: 'Secondary',
    content: '<span class="label label-rounded label-secondary">secondary</span>\n',
    category: 'Spectre➡️Labels',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render: ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/elements/labels.html#labels-rounded';
      el.appendChild(a);
    },
  });


  /* Spectre Breadcrumbs *********************************************************/


  plugin('spectre_breadcrumbs_tiny', {
    label: 'Tiny with Badge',
    content: `
    <ul class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="#">Home</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#">0</a>
      </li>
      <li class="breadcrumb-item badge" data-badge="42">
        <a href="#">1</a>
      </li>
    </ul>`,
    category: 'Spectre➡️Breadcrumbs',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/breadcrumbs.html';
      el.appendChild(a);
    },
  });

  plugin('spectre_breadcrumbs_big', {
    label: 'Big with Badge',
    content: `
    <ul class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="#">Home</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#">0</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#">1</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#">2</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#">3</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#">4</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#">5</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#">6</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#">7</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#">8</a>
      </li>
      <li class="breadcrumb-item badge" data-badge="42">
        <a href="#">9</a>
      </li>
    </ul>`,
    category: 'Spectre➡️Breadcrumbs',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/breadcrumbs.html';
      el.appendChild(a);
    },
  });


  /* Spectre Cards *********************************************************/


  plugin('spectre_cards_basic', {
    label: 'Basic',
    content: `
    <div class="card">
      <div class="card-image badge" data-badge="666">
        <img src="https://source.unsplash.com/99x99/?kitten" class="img-responsive" alt="" title="" loading="lazy">
      </div>
      <div class="card-header">
        <div class="card-title h5">Title</div>
        <div class="card-subtitle text-gray">Subtitle</div>
      </div>
      <div class="card-body">
        body
      </div>
      <div class="card-footer">
        footer
      </div>
    </div>`,
    category: 'Spectre➡️Cards',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/cards.html';
      el.appendChild(a);
    },
  });

  plugin('spectre_cards_basic_noimg', {
    label: 'Basic No Image',
    content: `
    <div class="card">
      <div class="card-header">
        <div class="card-title h5">Title</div>
        <div class="card-subtitle text-gray">Subtitle</div>
      </div>
      <div class="card-body">
        body
      </div>
      <div class="card-footer">
        <div class="btn-group btn-group-block">
          <button class="btn btn-primary">Buy!</button>
          <button class="btn btn-success">Like</button>
          <button class="btn btn-warning">More</button>
        </div>
      </div>
    </div>`,
    category: 'Spectre➡️Cards',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/cards.html';
      el.appendChild(a);
    },
  });


  /* Spectre Chips *********************************************************/


  plugin('spectre_chips_tiny', {
    label: 'Tiny with Image',
    content: `
    <div class="chip">
      <img src="avatar.png" class="avatar avatar-sm" loading="lazy">
      content
      <a href="#" class="btn btn-clear" aria-label="Close" role="button"></a>
    </div>`,
    category: 'Spectre➡️Chips',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/chips.html';
      el.appendChild(a);
    },
  });

  plugin('spectre_chips_big', {
    label: 'Big with Image',
    content: `
    <div class="chip">
      <img src="avatar.png" class="avatar" height=32 width=32 loading="lazy">
      content
      <a href="#" class="btn btn-clear btn-lg" aria-label="Close" role="button"></a>
    </div>`,
    category: 'Spectre➡️Chips',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/chips.html';
      el.appendChild(a);
    },
  });


  /* Spectre Empty *********************************************************/


  plugin('spectre_empty_tiny', {
    label: 'Tiny',
    content: `
    <div class="empty">
      <p class="empty-title h5">No updates</p>
      <p class="empty-subtitle">Nothing to see here...</p>
    </div>`,
    category: 'Spectre➡️Empty',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/empty.html';
      el.appendChild(a);
    },
  });

  plugin('spectre_empty_big', {
    label: 'Big',
    content: `
    <div class="empty">
      <div class="empty-icon badge" data-badge="0">
        <i class="icon icon-people"></i>
      </div>
      <p class="empty-title h5">No updates</p>
      <p class="empty-subtitle">Nothing to see here...</p>
      <div class="empty-action">
        <button class="btn btn-primary">Ok</button>
        <button class="btn btn-secondary">Nope</button>
      </div>
    </div>`,
    category: 'Spectre➡️Empty',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/empty.html';
      el.appendChild(a);
    },
  });


  /* Spectre Menu *********************************************************/


  plugin('spectre_menu', {
    label: 'Tiny Dropdown',
    content: `
    <ul class="menu">
      <!-- menu header text -->
      <li class="divider" data-content="Items">
      </li>
      <!-- menu item standard -->
      <li class="menu-item">
        <a href="#">
          <i class="icon icon-link"></i>Foo
        </a>
      </li>
      <!-- menu item with form control -->
      <li class="menu-item">
        <label class="form-checkbox">
          <input type="checkbox">
          <i class="form-icon"></i>Bar
        </label>
      </li>
      <!-- menu divider -->
      <li class="divider"></li>
      <!-- menu item with badge -->
      <li class="menu-item">
        <a href="#">
          <i class="icon icon-link"></i>Baz
        </a>
        <div class="menu-badge">
          <label class="label label-primary">2</label>
        </div>
      </li>
      <li class="menu-item">
        <a href="#">My profile</a>
        <div class="menu-badge">
          <label class="form-checkbox">
            <input type="checkbox">
            <i class="form-icon"></i> Public
          </label>
        </div>
      </li>
    </ul>`,
    category: 'Spectre➡️Menu',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/menu.html#menu';
      el.appendChild(a);
    },
  });

  plugin('spectre_menu_button', {
    label: 'Big Dropdown',
    content: `
    <div class="dropdown">
      <div class="btn-group">
        <a href="#" class="btn">
          dropdown button
        </a>
        <a href="#" class="btn dropdown-toggle" tabindex="0">
          <i class="icon icon-caret"></i>
        </a>
        <!-- menu component -->
        <ul class="menu">
        <!-- menu header text -->
        <li class="divider" data-content="Items">
        </li>
        <!-- menu item standard -->
        <li class="menu-item">
          <a href="#">
            <i class="icon icon-link"></i>Foo
          </a>
        </li>
        <!-- menu item with form control -->
        <li class="menu-item">
          <label class="form-checkbox">
            <input type="checkbox">
            <i class="form-icon"></i>Bar
          </label>
        </li>
        <!-- menu divider -->
        <li class="divider"></li>
        <!-- menu item with badge -->
        <li class="menu-item">
          <a href="#">
            <i class="icon icon-link"></i>Baz
          </a>
          <div class="menu-badge">
            <label class="label label-primary">2</label>
          </div>
        </li>
        <li class="menu-item">
          <a href="#">My profile</a>
          <div class="menu-badge">
            <label class="form-checkbox">
              <input type="checkbox">
              <i class="form-icon"></i> Public
            </label>
          </div>
        </li>
      </ul>
      </div>
    </div>`,
    category: 'Spectre➡️Menu',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/menu.html#menu-dropdown';
      el.appendChild(a);
    },
  });


  /* Spectre Modals *********************************************************/


  plugin('spectre_modals_tiny', {
    label: 'Tiny',
    content: `
    <div class="modal modal-sm active" id="modal-id">
      <a href="#close" class="modal-overlay" aria-label="Close"></a>
      <div class="modal-container">
        <div class="modal-header">
          <a href="#close" class="btn btn-clear float-right" aria-label="Close"></a>
          <div class="modal-title h5">Title</div>
        </div>
        <div class="modal-body">
          <div class="content">
            body
          </div>
        </div>
      </div>
    </div>`,
    category: 'Spectre➡️Modals',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/modals.html';
      el.appendChild(a);
    },
  });

  plugin('spectre_modals_big', {
    label: 'Big',
    content: `
    <div class="modal modal-lg active" id="modal-id">
      <a href="#close" class="modal-overlay" aria-label="Close"></a>
      <div class="modal-container">
        <div class="modal-header">
          <a href="#close" class="btn btn-clear float-right" aria-label="Close"></a>
          <div class="modal-title h5">Title</div>
        </div>
        <div class="modal-body">
          <div class="content">
            body
          </div>
        </div>
        <div class="modal-footer">
          footer
        </div>
      </div>
    </div>`,
    category: 'Spectre➡️Modals',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/modals.html';
      el.appendChild(a);
    },
  });


  /* Spectre Nav *********************************************************/


  plugin('spectre_nav_tiny', {
    label: 'Tiny',
    content: `
    <ul class="nav">
      <li class="nav-item active">
        <a href="#">Navigation item</a>
      </li>
      <li class="nav-item">
        <a href="#">Navigation item</a>
      </li>
    </ul>`,
    category: 'Spectre➡️Nav',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/nav.html';
      el.appendChild(a);
    },
  });

  plugin('spectre_nav_big', {
    label: 'Big',
    content: `
    <ul class="nav">
      <li class="nav-item">
        <a href="#">Navigation item</a>
      </li>
      <li class="nav-item active">
        <a href="#">Navigation item</a>
        <ul class="nav">
          <li class="nav-item">
            <a href="#">Navigation item</a>
          </li>
          <li class="nav-item">
            <a href="#">Navigation item</a>
          </li>
          <li class="nav-item">
            <a href="#">Navigation item</a>
          </li>
          <li class="nav-item">
            <a href="#">Navigation item</a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a href="#">Navigation item</a>
      </li>
      <li class="nav-item">
        <a href="#">Navigation item</a>
      </li>
    </ul>`,
    category: 'Spectre➡️Nav',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/nav.html';
      el.appendChild(a);
    },
  });


  /* Spectre Pagination *********************************************************/


  plugin('spectre_pagination_tiny', {
    label: 'Tiny',
    content: `
    <ul class="pagination">
      <li class="page-item">
        <a href="#" tabindex="-1"><</a>
      </li>
      <li class="page-item active">
        <a href="#">0</a>
      </li>
      <li class="page-item">
        <a href="#">1</a>
      </li>
      <li class="page-item">
        <a href="#">2</a>
      </li>
      <li class="page-item">
        <a href="#">3</a>
      </li>
      <li class="page-item">
        <a href="#">4</a>
      </li>
      <li class="page-item">
        <a href="#">5</a>
      </li>
      <li class="page-item">
        <a href="#">6</a>
      </li>
      <li class="page-item">
        <a href="#">7</a>
      </li>
      <li class="page-item">
        <a href="#">8</a>
      </li>
      <li class="page-item">
        <a href="#">9</a>
      </li>
      <li class="page-item">
        <a href="#">></a>
      </li>
    </ul>`,
    category: 'Spectre➡️Pagination',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/pagination.html';
      el.appendChild(a);
    },
  });

  plugin('spectre_pagination_big', {
    label: 'Big',
    content: `
    <ul class="pagination">
      <li class="page-item page-prev">
        <a href="#">
          <div class="page-item-subtitle">Previous</div>
          <div class="page-item-title h5">Basic</div>
        </a>
      </li>
      <li class="page-item active">
        <a href="#">0</a>
      </li>
      <li class="page-item">
        <a href="#">1</a>
      </li>
      <li class="page-item">
        <a href="#">2</a>
      </li>
      <li class="page-item">
        <a href="#">3</a>
      </li>
      <li class="page-item">
        <a href="#">4</a>
      </li>
      <li class="page-item">
        <a href="#">5</a>
      </li>
      <li class="page-item">
        <a href="#">6</a>
      </li>
      <li class="page-item">
        <a href="#">7</a>
      </li>
      <li class="page-item">
        <a href="#">8</a>
      </li>
      <li class="page-item">
        <a href="#">9</a>
      </li>
      <li class="page-item page-next">
        <a href="#">
          <div class="page-item-subtitle">Next</div>
          <div class="page-item-title h5">Advanced</div>
        </a>
      </li>
    </ul>`,
    category: 'Spectre➡️Pagination',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/pagination.html';
      el.appendChild(a);
    },
  });


  /* Spectre Panels *********************************************************/


  plugin('spectre_panels_tiny', {
    label: 'Tiny AutoScroll Body',
    content: `
    <div class="panel">
      <div class="panel-header">
        <div class="panel-title">Title</div>
      </div>
      <div class="panel-body">
        body
      </div>
    </div>`,
    category: 'Spectre➡️Panels',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/panels.html';
      el.appendChild(a);
    },
  });

  plugin('spectre_panels_big', {
    label: 'Big AutoScroll Body',
    content: `
    <div class="panel">
      <div class="panel-header">
        <div class="panel-title">Title</div>
      </div>
      <div class="panel-nav">
        navigation, tabs, breadcrumbs, pagination, etc
      </div>
      <div class="panel-body">
        body
      </div>
      <div class="panel-footer">
        footer
      </div>
    </div>`,
    category: 'Spectre➡️Panels',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/panels.html';
      el.appendChild(a);
    },
  });


  /* Spectre PopOvers *********************************************************/


  plugin('spectre_popovers_top', {
    label: 'Top',
    content: `
    <div class="popover popover-top">
      <button class="btn btn-primary">Ok</button>
      <div class="popover-container">
        <div class="card">
          <div class="card-header">
            Title
          </div>
          <div class="card-body">
            body
          </div>
          <div class="card-footer">
            footer
          </div>
        </div>
      </div>
    </div>`,
    category: 'Spectre➡️Popovers',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/popovers.html';
      el.appendChild(a);
    },
  });

  plugin('spectre_popovers_bottom', {
    label: 'Bottom',
    content: `
    <div class="popover popover-bottom">
      <button class="btn btn-primary">Ok</button>
      <div class="popover-container">
        <div class="card">
          <div class="card-header">
            Title
          </div>
          <div class="card-body">
            body
          </div>
          <div class="card-footer">
            footer
          </div>
        </div>
      </div>
    </div>`,
    category: 'Spectre➡️Popovers',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/popovers.html';
      el.appendChild(a);
    },
  });


  /* Spectre Steps ********************************************************/


  plugin('spectre_steps_tiny', {
    label: 'Tiny',
    content: `
    <ul class="step">
      <li class="step-item">
        <a href="#" class="tooltip" data-tooltip="Step 1">1</a>
      </li>
      <li class="step-item active">
        <a href="#" class="tooltip" data-tooltip="Step 2">2</a>
      </li>
      <li class="step-item">
        <a href="#" class="tooltip" data-tooltip="Step 3">3</a>
      </li>
    </ul>`,
    category: 'Spectre➡️Steps',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/steps.html';
      el.appendChild(a);
    },
  });

  plugin('spectre_steps_big', {
    label: 'Big',
    content: `
    <ul class="step">
      <li class="step-item">
        <a href="#" class="tooltip" data-tooltip="Step 1">1</a>
      </li>
      <li class="step-item">
        <a href="#" class="tooltip" data-tooltip="Step 2">2</a>
      </li>
      <li class="step-item">
        <a href="#" class="tooltip" data-tooltip="Step 3">3</a>
      </li>
      <li class="step-item">
        <a href="#" class="tooltip" data-tooltip="Step 4">4</a>
      </li>
      <li class="step-item active">
        <a href="#" class="tooltip" data-tooltip="Step 5">5</a>
      </li>
      <li class="step-item">
        <a href="#" class="tooltip" data-tooltip="Step 6">6</a>
      </li>
      <li class="step-item">
        <a href="#" class="tooltip" data-tooltip="Step 7">7</a>
      </li>
      <li class="step-item">
        <a href="#" class="tooltip" data-tooltip="Step 8">8</a>
      </li>
      <li class="step-item">
        <a href="#" class="tooltip" data-tooltip="Step 9">9</a>
      </li>
    </ul>`,
    category: 'Spectre➡️Steps',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/steps.html';
      el.appendChild(a);
    },
  });


  /* Spectre Tiles ********************************************************/


  plugin('spectre_tiles_tiny', {
    label: 'Compact',
    content: `
    <div class="tile tile-centered">
      <div class="tile-icon">
        <div class="example-tile-icon">
          <i class="icon icon-file centered"></i>
        </div>
      </div>
      <div class="tile-content">
        <div class="tile-title">Title</div>
        <small class="tile-subtitle text-gray">Subtitle</small>
        Body
      </div>
      <div class="tile-action">
        <button class="btn btn-link">
          <i class="icon icon-more-vert"></i>
        </button>
      </div>
    </div>`,
    category: 'Spectre➡️Tiles',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/tiles.html';
      el.appendChild(a);
    },
  });

  plugin('spectre_tiles_big', {
    label: 'Big',
    content: `
    <div class="tile">
      <div class="tile-icon">
        <div class="example-tile-icon">
          <i class="icon icon-file centered"></i>
        </div>
      </div>
      <div class="tile-content">
        <p class="tile-title">Title</p>
        <p class="tile-subtitle">Subtitle</p>
        Body
      </div>
      <div class="tile-action">
        <button class="btn btn-primary">Ok</button>
      </div>
    </div>`,
    category: 'Spectre➡️Tiles',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/tiles.html';
      el.appendChild(a);
    },
  });


  /* Spectre Toasts ********************************************************/


  plugin('spectre_toasts_success', {
    label: 'Success',
    content: `
    <div class="toast toast-success">
      <button class="btn btn-clear float-right"></button>
      Toast Text
    </div>`,
    category: 'Spectre➡️Toasts',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/toasts.html';
      el.appendChild(a);
    },
  });

  plugin('spectre_toasts_error', {
    label: 'Error',
    content: `
    <div class="toast toast-error">
      <button class="btn btn-clear float-right"></button>
      Toast Text
    </div>`,
    category: 'Spectre➡️Toasts',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/toasts.html';
      el.appendChild(a);
    },
  });


  /* Spectre Tooltips ********************************************************/


  plugin('spectre_tooltips_top', {
    label: 'Top Multiline',
    content: '<div class="tooltip tooltip-top" data-tooltip="Line 1 \n Line 2 \n Line 3">tooltip</div>',
    category: 'Spectre➡️Tooltips',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/tooltips.html';
      el.appendChild(a);
    },
  });

  plugin('spectre_tooltips_bottom', {
    label: 'Bottom Multiline',
    content: '<div class="tooltip tooltip-bottom" data-tooltip="Line 1 \n Line 2 \n Line 3">tooltip</div>',
    category: 'Spectre➡️Tooltips',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/tooltips.html';
      el.appendChild(a);
    },
  });


  /* Spectre Tabs ********************************************************/


  plugin('spectre_tabs_wide', {
    label: 'Full Width',
    content: `
    <ul class="tab tab-block">
      <li class="tab-item active">
        <a href="#">Tab 0</a>
      </li>
      <li class="tab-item">
        <a href="#" class="active">Tab 1</a>
      </li>
      <li class="tab-item">
        <a href="#">Tab 2</a>
      </li>
      <li class="tab-item">
        <a href="#" class="badge" data-badge="9">Tab 3</a>
      </li>
      <li class="tab-item">
        <a href="#">Tab 4</a>
      </li>
      <li class="tab-item">
        <a href="#" class="badge" data-badge="5">Tab 5</a>
      </li>
      <li class="tab-item">
        <a href="#">Tab 6</a>
      </li>
      <li class="tab-item">
        <a href="#">Tab 7</a>
      </li>
      <li class="tab-item">
        <a href="#">Tab 8</a>
      </li>
      <li class="tab-item">
        <a href="#">Tab 9</a>
      </li>
      <li class="tab-item tab-action">
        <div class="input-group input-inline">
          <input class="form-input input-sm" type="search">
          <button class="btn btn-primary btn-sm input-group-btn">Search</button>
        </div>
      </li>
    </ul>`,
    category: 'Spectre➡️Tabs',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/tabs.html';
      el.appendChild(a);
    },
  });


  plugin('spectre_tabs_tiny', {
    label: 'Tiny',
    content: `
    <ul class="tab">
      <li class="tab-item active">
        <a href="#">Tab 0</a>
      </li>
      <li class="tab-item">
        <a href="#" class="active">Tab 1</a>
      </li>
      <li class="tab-item">
        <a href="#">Tab 2</a>
      </li>
      <li class="tab-item">
        <a href="#">Tab 3</a>
      </li>
    </ul>`,
    category: 'Spectre➡️Tabs',
    media:    '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/components/tabs.html';
      el.appendChild(a);
    },
  });


  /* Spectre Media *********************************************************/


  plugin('spectre_media_image_responsive', {
    label: 'Image AutoResponsive',
    content: `
    <figure class="figure">
      <img class="img-responsive" src="https://source.unsplash.com/99x99/?kitten" alt="" title="">
      <figcaption class="figure-caption text-center">Image Description</figcaption>
    </figure>`,
    category: 'Spectre➡️Media',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render: ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/elements/media.html#media-images';
      el.appendChild(a);
    },
  });

  plugin('spectre_media_image_crop', {
    label: 'Image AutoCrop',
    content: `
    <figure class="figure">
      <img class="img-fit-contain" src="https://source.unsplash.com/99x99/?kitten" alt="" title="">
      <figcaption class="figure-caption text-center">Image Description</figcaption>
    </figure>`,
    category: 'Spectre➡️Media',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render: ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/elements/media.html#media-images';
      el.appendChild(a);
    },
  });

  plugin('spectre_media_image_resize', {
    label: 'Image AutoResize',
    content: `
    <figure class="figure">
      <img class="img-fit-cover" src="https://source.unsplash.com/99x99/?kitten" alt="" title="">
      <figcaption class="figure-caption text-center">Image Description</figcaption>
    </figure>`,
    category: 'Spectre➡️Media',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render: ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/elements/media.html#media-images';
      el.appendChild(a);
    },
  });

  plugin('spectre_media_video_169', {
    label: 'Video 16:9 AutoResponsive ',
    content: `
    <div class="video-responsive">
      <iframe src="video.webm" frameborder=0 allowfullscreen >Video Not Supported</iframe>
      <!-- <video src="video.webm" allowfullscreen >Video Not Supported</video> -->
    </div>`,
    category: 'Spectre➡️Media',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render: ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/elements/media.html#media-video';
      el.appendChild(a);
    },
  });

  plugin('spectre_media_video_43', {
    label: 'Video 4:3 AutoResponsive ',
    content: `
    <div class="video-responsive video-responsive-4-3">
      <iframe src="video.webm" frameborder=0 allowfullscreen >Video Not Supported</iframe>
      <!-- <video src="video.webm" allowfullscreen >Video Not Supported</video> -->
    </div>`,
    category: 'Spectre➡️Media',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render: ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/elements/media.html#media-video';
      el.appendChild(a);
    },
  });

  plugin('spectre_media_video_11', {
    label: 'Video 1:1 AutoResponsive',
    content: `
    <div class="video-responsive video-responsive-1-1">
      <iframe src="video.webm" frameborder=0 allowfullscreen >Video Not Supported</iframe>
      <!-- <video src="video.webm" allowfullscreen >Video Not Supported</video> -->
    </div>`,
    category: 'Spectre➡️Media',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render: ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/elements/media.html#media-video';
      el.appendChild(a);
    },
  });


  /* Spectre Utils *********************************************************/


  plugin('spectre_utils_text', {
    label: 'Text',
    content: `
    <div class="
      text-center text-justify text-right
      text-lowercase text-uppercase text-capitalize
      text-bold text-italic text-muted text-large text-tiny
      text-ellipsis text-clip text-break
    "> Remove the classes you dont need! </div>`,
    category: 'Spectre➡️Utils',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render: ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/utilities/text.html#text';
      el.appendChild(a);
    },
  });

  plugin('spectre_utils_position', {
    label: 'Position',
    content: `
    <div class="
      float-left float-right p-relative p-absolute p-fixed p-sticky p-centered clearfix
    "> Remove the classes you dont need! </div>`,
    category: 'Spectre➡️Utils',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/utilities/position.html#position';
      el.appendChild(a);
    },
  });

  plugin('spectre_utils_display', {
    label: 'Display',
    content: `
    <div class="
      d-block d-inline d-inline-block d-flex d-inline-flex d-visible
    "> Remove the classes you dont need! </div>`,
    category: 'Spectre➡️Utils',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/utilities/display.html#display';
      el.appendChild(a);
    },
  });

  plugin('spectre_utils_loading', {
    label: 'Loading Spinner',
    content: '<div class="loading loading-lg" title="Loading"></div>\n',
    category: 'Spectre➡️Utils',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/utilities/loading.html#loading';
      el.appendChild(a);
    },
  });

  plugin('spectre_utils_divider', {
    label: 'Divider',
    content: '<div class="divider text-center" data-content="Divider Text"></div>\n',
    category: 'Spectre➡️Utils',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/utilities/divider.html#divider';
      el.appendChild(a);
    },
  });

  plugin('spectre_utils_cursors', {
    label: 'Cursors',
    content: `
      <div class="c-hand">Hand</div>
      <div class="c-move">Move</div>
      <div class="c-zoom-in">Zoom+</div>
      <div class="c-zoom-out">Zoom-</div>
      <div class="c-not-allowed">Forbidden</div>
      <div class="c-auto">Auto</div>
    `,
    category: 'Spectre➡️Utils',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/utilities/cursors.html#cursors';
      el.appendChild(a);
    },
  });

  plugin('spectre_utils_background_colors', {
    label: 'Colors Background',
    content: `
      <div class="bg-primary">primary</div>
      <div class="bg-secondary">secondary</div>
      <div class="bg-dark">dark</div>
      <div class="bg-gray">gray</div>
      <div class="bg-success">success</div>
      <div class="bg-warning">warning</div>
      <div class="bg-error">error</div>
    `,
    category: 'Spectre➡️Utils',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/utilities/colors.html#colors-background';
      el.appendChild(a);
    },
  });

  plugin('spectre_utils_text_colors', {
    label: 'Colors Text',
    content: `
      <span class="text-primary">primary</span>
      <span class="text-secondary">secondary</span>
      <span class="text-dark">dark</span>
      <span class="text-gray">gray</span>
      <span class="text-light">light</span>
      <span class="text-success">success</span>
      <span class="text-warning">warning</span>
      <span class="text-error">error</span>
    `,
    category: 'Spectre➡️Utils',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/utilities/colors.html#colors-text';
      el.appendChild(a);
    },
  });


  /* Spectre Experimentals *********************************************************/


  plugin('spectre_experimentals_timeline', {
    label: 'Timeline',
    content: `
    <div class="timeline">
      <div class="timeline-item" id="timeline-example-1">
        <div class="timeline-left">
          <a class="timeline-icon" href="#timeline-example-1"></a>
        </div>
        <div class="timeline-content">
          <!-- tiles structure -->
        </div>
      </div>
      <div class="timeline-item" id="timeline-example-2">
        <div class="timeline-left">
          <a class="timeline-icon icon-lg" href="#timeline-example-2">
            <i class="icon icon-check"></i>
          </a>
        </div>
        <div class="timeline-content">
          <!-- tiles structure -->
        </div>
      </div>
      ...
    </div>`,
    category: 'Spectre➡️Experimentals',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/experimentals/timelines.html#timelines';
      el.appendChild(a);
    },
  });

  plugin('spectre_experimentals_slider', {
    label: 'Slider with Tooltip',
    content: `<input class="slider tooltip" type="range" min="0" max="100" value="50" step="1" oninput="this.setAttribute('value', this.value);">`,
    category: 'Spectre➡️Experimentals',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/experimentals/sliders.html#sliders';
      el.appendChild(a);
    },
  });

  plugin('spectre_experimentals_progress', {
    label: 'Progress',
    content: `<progress class="progress" value="25" min="0" max="100"></progress>`,
    category: 'Spectre➡️Experimentals',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/experimentals/progress.html#progress';
      el.appendChild(a);
    },
  });

  plugin('spectre_experimentals_parallax', {
    label: 'Parallax',
    content: `
    <div class="parallax">
      <div class="parallax-top-left" tabindex="1"></div>
      <div class="parallax-top-right" tabindex="2"></div>
      <div class="parallax-bottom-left" tabindex="3"></div>
      <div class="parallax-bottom-right" tabindex="4"></div>
      <div class="parallax-content">
        <div class="parallax-front">
          <h2>tvOS parallax demo</h2>
        </div>
        <div class="parallax-back">
          <img src="img/osx-el-capitan.jpg" class="img-responsive rounded" ...>
        </div>
      </div>
    </div>
    `,
    category: 'Spectre➡️Experimentals',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/experimentals/parallax.html#parallax';
      el.appendChild(a);
    },
  });

  plugin('spectre_experimentals_meter', {
    label: 'Meter',
    content: `<meter class="meter" value="20" title="20" optimum="90" min="0" max="100" low="30" high="80"></meter>`,
    category: 'Spectre➡️Experimentals',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/experimentals/meters.html#meters';
      el.appendChild(a);
    },
  });

  plugin('spectre_experimentals_filter', {
    label: 'Filter',
    content: `
    <div class="filter">
      <input type="radio" id="tag-0" class="filter-tag" name="filter-radio" hidden checked >
      <input type="radio" id="tag-1" class="filter-tag" name="filter-radio" hidden >
      <input type="radio" id="tag-2" class="filter-tag" name="filter-radio" hidden >

      <div class="filter-nav">
        <label class="chip" for="tag-0">All</label>
        <label class="chip" for="tag-1">Filter 1</label>
        <label class="chip" for="tag-2">Filter 2</label>
      </div>

      <div class="filter-body">
        <div class="filter-item card" data-tag="tag-1">
          <p> Filter 1 content </p>
        </div>
        <div class="filter-item card" data-tag="tag-2">
          <p> Filter 2 content </p>
        </div>
        <!-- Filter items -->
      </div>
    </div>`,
    category: 'Spectre➡️Experimentals',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/experimentals/filters.html#filters';
      el.appendChild(a);
    },
  });

  plugin('spectre_experimentals_comparison_slider', {
    label: 'Comparison Slider',
    content: `
    <div class="comparison-slider">
      <figure class="comparison-before">
        <!-- image (before) -->
        <div class="comparison-label">Before</div>
      </figure>

      <figure class="comparison-after">
        <!-- image (after) -->
        <div class="comparison-label">After</div>
        <textarea class="comparison-resizer" readonly></textarea>
      </figure>
    </div>`,
    category: 'Spectre➡️Experimentals',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/experimentals/comparison.html#comparison';
      el.appendChild(a);
    },
  });

  plugin('spectre_experimentals_carousel', {
    label: 'Image Carrousel',
    content: `
    <div class="carousel">
      <!-- carousel locator -->
      <input class="carousel-locator" id="slide-1" type="radio" name="carousel-radio" hidden="" checked="">
      <input class="carousel-locator" id="slide-2" type="radio" name="carousel-radio" hidden="">
      <input class="carousel-locator" id="slide-3" type="radio" name="carousel-radio" hidden="">
      <input class="carousel-locator" id="slide-4" type="radio" name="carousel-radio" hidden="">

      <!-- carousel container -->
      <div class="carousel-container">
        <!-- carousel item -->
        <figure class="carousel-item">
          <label class="item-prev btn btn-action btn-lg" for="slide-4"><i class="icon icon-arrow-left"></i></label>
          <label class="item-next btn btn-action btn-lg" for="slide-2"><i class="icon icon-arrow-right"></i></label>
          <img class="img-responsive rounded" src="img/osx-yosemite.jpg" alt="macOS Yosemite Wallpaper">
        </figure>
        <figure class="carousel-item">
          <label class="item-prev btn btn-action btn-lg" for="slide-1"><i class="icon icon-arrow-left"></i></label>
          <label class="item-next btn btn-action btn-lg" for="slide-3"><i class="icon icon-arrow-right"></i></label>
          <img class="img-responsive rounded" src="img/osx-yosemite-2.jpg" alt="macOS Yosemite Wallpaper">
        </figure>
        <figure class="carousel-item">
          <label class="item-prev btn btn-action btn-lg" for="slide-2"><i class="icon icon-arrow-left"></i></label>
          <label class="item-next btn btn-action btn-lg" for="slide-4"><i class="icon icon-arrow-right"></i></label>
          <img class="img-responsive rounded" src="img/osx-el-capitan.jpg" alt="macOS El Capitan Wallpaper">
        </figure>
        <figure class="carousel-item">
          <label class="item-prev btn btn-action btn-lg" for="slide-3"><i class="icon icon-arrow-left"></i></label>
          <label class="item-next btn btn-action btn-lg" for="slide-1"><i class="icon icon-arrow-right"></i></label>
          <img class="img-responsive rounded" src="img/osx-el-capitan-2.jpg" alt="macOS El Capitan Wallpaper">
        </figure>
      </div>
      <!-- carousel navigation -->
      <div class="carousel-nav">
        <label class="nav-item text-hide c-hand" for="slide-1">1</label>
        <label class="nav-item text-hide c-hand" for="slide-2">2</label>
        <label class="nav-item text-hide c-hand" for="slide-3">3</label>
        <label class="nav-item text-hide c-hand" for="slide-4">4</label>
      </div>
    </div>`,
    category: 'Spectre➡️Experimentals',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/experimentals/carousels.html#carousels';
      el.appendChild(a);
    },
  });

  plugin('spectre_experimentals_calendar', {
    label: 'Calendar',
    content: `
    <div class="calendar calendar-lg">
      <!-- calendar navbar -->
      <div class="calendar-nav navbar">
        <button class="btn btn-action btn-link btn-lg">
          <i class="icon icon-arrow-left"></i>
        </button>
        <div class="navbar-primary">May 2020</div>
        <button class="btn btn-action btn-link btn-lg">
          <i class="icon icon-arrow-right"></i>
        </button>
      </div>

      <div class="calendar-container">
        <div class="calendar-header">
          <div class="calendar-date">Sun</div>
          <div class="calendar-date">Mon</div>
          <div class="calendar-date">Tue</div>
          <div class="calendar-date">Wed</div>
          <div class="calendar-date">Thu</div>
          <div class="calendar-date">Fri</div>
          <div class="calendar-date">Sat</div>
        </div>

        <div class="calendar-body">
          <!-- calendar previous month -->
          <div class="calendar-date prev-month">
            <button class="date-item">26</button>
          </div>
          ...
          <div class="calendar-date prev-month">
            <button class="date-item">28</button>
          </div>

          <!-- calendar current month -->
          <div class="calendar-date">
            <button class="date-item">1</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">2</button>
          </div>
          <div class="calendar-date">
            <button class="date-item">3</button>
          </div>
          <!-- calendar date: today -->
          <div class="calendar-date">
            <button class="date-item date-today">4</button>
          </div>
          <!-- calendar date: tooltip -->
          <div class="calendar-date tooltip" data-tooltip="You have appointments">
            <button class="date-item">5</button>
          </div>
          <!-- calendar date: not available -->
          <div class="calendar-date tooltip" data-tooltip="Not available">
            <button class="date-item" disabled="">6</button>
          </div>

          <!-- calendar range -->
          <div class="calendar-date calendar-range range-start">
            <button class="date-item">7</button>
          </div>
          <div class="calendar-date calendar-range">
            <button class="date-item">8</button>
          </div>
          <div class="calendar-date calendar-range range-end">
            <button class="date-item">9</button>
          </div>
          ...
          <div class="calendar-date">
            <button class="date-item">31</button>
          </div>

          <!-- calendar next month -->
          <div class="calendar-date next-month">
            <button class="date-item">1</button>
          </div>
        </div>
      </div>
    </div>`,
    category: 'Spectre➡️Experimentals',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/experimentals/calendars.html#calendars-sizes';
      el.appendChild(a);
    },
  });

  plugin('spectre_experimentals_360viewer', {
    label: '360 Degree Viewer',
    content: `
    <div class="viewer-360">
      <input class="viewer-slider slider" type="range" min="1" max="36" value="1" oninput="this.setAttribute('value', this.value);">
      <figure class="viewer-image" style="background-image:url('...');"></figure>
    </div>`,
    category: 'Spectre➡️Experimentals',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">',
    render:   ({ el }) => {
      const a = document.createElement('a');
      a.target = '_blank';
      a.innerHTML = '?';
      a.title = 'Docs';
      a.href = 'https://picturepan2.github.io/spectre/experimentals/viewer-360.html';
      el.appendChild(a);
    },
  });


  /* Spectre Templates *********************************************************/


  plugin('spectre_templates_basic', {
    label: 'Simple Page',
    content: `
    <div class="container">
      <div class="columns">

        <!-- LEFT COLUMN -->
        <div class="column col-3">
          <h3>News</h3>
          <p>Quote here</p>
          <h4>Local</h4>
          <ul class="nav">
            <li class="nav-item"><a href="#">News</a></li>
            <li class="nav-item"><a href="#">Updates</a></li>
            <li class="nav-item"><a href="#">Products</a></li>
            <li class="nav-item"><a href="#">More</a></li>
          </ul>
          <br>
          <h4>Site</h4>
          <ul class="nav">
            <li class="nav-item"><a href="#">About</a></li>
            <li class="nav-item"><a href="#">Contact</a></li>
            <li class="nav-item"><a href="#">Privacy</a></li>
            <li class="nav-item"><a href="#">Terms</a></li>
          </ul>
        </div><!-- .column .col-3 -->

        <!-- RIGHT COLUMN -->
        <div class="column col-9 rel">
          <h1>Title</h1>
          <p>Content here</p>
          <h2>Notes</h2>
          <ul>
            <li>
              <p>More content here.</p>
            </li>
            <li>
              <img src="https://source.unsplash.com/999x666/?kitten" alt="" title="" height=666 width=999 loading="lazy">
            </li>
            <li>
              <img src="https://source.unsplash.com/999x666/?kitten" alt="" title="" height=666 width=999 loading="lazy">
            </li>
        </ul>

        </div><!-- .column .col-9 .rel -->
      </div><!-- .columns -->
    </div><!-- .container -->`,
    category: 'Spectre➡️Templates',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_templates_pricing', {
    label: 'Pricing Bussiness',
    content: `
    <!-- top navbar -->
    <header class="navbar navshadow" style="padding: 1rem;" >
      <!-- Logo on the left -->
      <div class="navbar-primary">
        <a href="#" class="navbar-brand"><span class="text-large">YourSite</span></a>
      </div>
      <!-- Supporting links on on the right -->
      <div class="navbar-section">
        <a href="#" class="btn btn-link">FAQ</a>
        <a href="#" class="btn btn-link">Support</a>
        <a href="#" class="btn btn-link">About</a>
        <a href="#" class="btn btn-success">Sign Up</a>
      </div>
    </header>

    <div class="container centered">
      <h1 class="text-center" style="margin-top: 5%">Pricing</h1>
      <p class="text-center text-large explanation">It's usually good to offer 3 options for pricing.</p>
      <div class="columns" style="margin-left: 15%; margin-right: 15%">
        <div class="column col-4 text-center">
          <!-- mt-2 style pushes down left & right columns -->
          <div class="card mt-2">
            <div class="card-header bg-gray">
              <div class="card-title">
                <h2>Starter</h2>
              </div><!-- .card-title -->
            </div><!--- .card-header -->
            <div class="card-body">
              <p class="h3">Free <span class="bg-gray h5">$0/month</span></p>
              <p>1 User</p>
              <p>1G RAM</p>
              <p>1G SDD</p>
              <button class="btn btn-default">Order</button>
            </div><!-- .card-body -->
          </div><!-- .card -->

        </div><!-- .column .col-4 -->

        <div class="column col-4 text-center">

          <!-- Without mt-2 style this "pushes up" the center column -->
          <div class="card navshadow">
            <div class="card-header bg-primary">
              <div class="card-title">
                <h2>Small Business</h2>
              </div><!-- .card-title -->
            </div><!--- .card-header -->
            <div class="card-body">
              <p class="h3">$59/mo <span class="bg-gray h5">$300/quarter</span></p>
              <p>5 Users</p>
              <p>9G RAM</p>
              <p>1T SSD</p>
              <p><span class="text-bold text-large text-success"> BEST VALUE </span></p>
              <button class="btn btn-primary">Order</button>
            </div><!-- .card-body -->
          </div><!-- .card -->

        </div><!-- .column .col-4 -->

        <div class="column col-4 text-center">

          <!-- mt-2 style pushes down left & right columns -->
          <div class="card mt-2">
            <div class="card-header bg-gray">
              <div class="card-title">
                <h2>Enterprise</h2>
              </div><!-- .card-title -->
            </div><!--- .card-header -->
            <div class="card-body">
              <p class="h3">$199/mo <span class="bg-gray h5">$999/quarter</span></p>
              <p>9 Users</p>
              <p>1T RAM</p>
              <p>9T SSD</p>
              <button class="btn btn-default">Order</button>
            </div><!-- .card-body -->
          </div><!-- .card -->
        </div>

      </div><!-- .columns -->

    </div><!--  .container -->

    <footer>
      <div class="columns" style="margin-top: 5%; margin-left: 10%; margin-right: 10%";>
        <div class="column col-3">
          <ul>
            <h5>About</h5>
            <li><a href="#">Server status</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">History</a></li>
            <li><a href="#">Privacy poliscy</a></li>
            <li><a href="#">Terms of use</a></li>
            <li><a href="#">Team</a></li>
          </ul>
        </div><!-- .column .col-3 -->

        <div class="column col-3">
          <ul>
            <h5>Mobile</h5>
            <li><a href="#">iPhone</a></li>
            <li><a href="#">Google</a></li>
            <li><a href="#">Amazon</a></li>
          </ul>
        </div><!-- .column .col-3 -->

        <div class="column col-3">
          <ul>
            <h5>Help</h5>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Tutorial</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Command reference</a></li>
            <li><a href="#">API reference</a></li>
          </ul>
        </div><!-- .column .col-3 -->

        <div class="column col-3">
          <ul>
            <h5>Making money</h5>
            <li><a href="#">Affiliate program</a></li>
            <li><a href="#">Getting started</a></li>
            <li><a href="#">Approval process</a></li>
          </ul>
        </div><!-- .column .col-3 -->

      </div><!-- columns -->

    </footer><!-- footer-->`,
    category: 'Spectre➡️Templates',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_templates_basic2', {
    label: 'Simple Page 2',
    content: `
    <div class="columns">
			<div class="column col-1">
				</div><!-- .column .col-1 -->
				  <div class="column col-11">
            <header class="navbar">
              <div class="navbar-section hide-sm">
                <a href="#" class="navbar-brand">Your Page</a>
              </div>
              <div class="navbar-section hide-sm">
                <a  href="#" class="btn btn-link">About</a>
                <a  href="#" class="btn btn-link">Contact</a>
                <a  href="#" class="btn btn-link">FAQ</a>
              </div>
              <ul class="nav show-sm">
                <li class="menu-item">
                  <a  href="#" class="btn btn-link selected">Home</a>
                </li>
                <li class="menu-item">
                  <a  href="#" class="btn btn-link">About</a>
                </li>
                <li class="menu-item">
                  <a  href="#" class="btn btn-link">Contact</a>
                </li>
                <li class="menu-item">
                  <a  href="#" class="btn btn-link">FAQ</a>
                </li>
              </ul>
            </header><!-- .navbar -->
			  	</div><!-- .column .col-11 -->
			  </div><!-- .columns -->
			  <div class="columns">
				  <div class="column col-1 col-sm-1">
				  </div><!-- .column col-1 -->
          <div class="column col-5 col-sm-5">
            <article>
              <h1 class="massive big-top-margin">Title
                <span class="bold-statement">Bold Statement.</span>
              </h1>
              <header>
              </header>
              <section>
                <h2>Content here.</h2>
                <p class="massive">More content.</p>
                <ul class="massive">
                  <li>Responsive.</li>
                  <li>More bullets.</li>
                  <li>More Spectre.</li>
                </ul>
              </section>
            </article>
          </div><!-- column col-6 -->
          <div class="column col-4 col-sm-12">
            <p  class="column col-4 big-top-margin">&nbsp;</p>
            <img src="https://source.unsplash.com/666x666/?kitten" alt="" title="" height=666 width=666 loading="lazy">
            <p  class="massive">You need a
            <span class="warning">Kitten</span></p>
				  </div><!-- .column col-4 -->
			  </div><!-- .columns -->`,
    category: 'Spectre➡️Templates',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_templates_login', {
    label: 'Login Page',
    content: `
    <div class="columns">
      <div class="column col-6 col-sm-12 bg-secondary">
        <img src="https://source.unsplash.com/666x666/?kitten" alt="" title="" height=666 width=666 loading="lazy">
      </div>
      <div class="column col-6 col-sm-12" style="height: 100vh;">
        <div style="display: table; width: 100%; height: 100vh;">
          <div style="display: table-cell; vertical-align: middle;">
            <div class="card my-2" style="border: none;">
              <div class="card-header">
                <h4 class="card-title">Login</h4>
                <div class="card-subtitle text-gray">Provide User and Password</div>
              </div>
              <div class="card-body">
                <form class="mb-2" method="POST" action="javascript:;">
                  <div class="form-group">
                    <label class="form-label" for="username">Username</label>
                    <input class="form-input" type="text" name="username" id="username" placeholder="Username" required>
                  </div>

                  <div class="form-group">
                    <label class="form-label" for="password">Password</label>
                    <input class="form-input" type="password" name="password" id="password" placeholder="Password" required>
                  </div>

                  <div class="form-group">
                    <label class="form-checkbox">
                      <input type="checkbox">
                      <i class="form-icon"></i> Remember Me
                    </label>
                  </div>

                  <div class="form-group">
                    <button type="submit" class="btn btn-primary">Login</button>
                    <a class="btn btn-link btn-sm" href="javascript:;">
                        Forgot Your Password?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    category: 'Spectre➡️Templates',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });


  /* Spectre Buttons *********************************************************/


  plugin('spectre_button_primary', {
    label: 'Primary',
    content: '<button class="btn btn-primary" onclick="">primary</button>\n',
    category: 'Spectre➡️Buttons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_button_secondary', {
    label: 'Secondary',
    content: '<button class="btn btn-secondary" onclick="">secondary</button>\n',
    category: 'Spectre➡️Buttons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_button_primary_small', {
    label: 'Primary Small',
    content: '<button class="btn btn-primary btn-sm" onclick="">primary</button>\n',
    category: 'Spectre➡️Buttons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_button_secondary_small', {
    label: 'Secondary Small',
    content: '<button class="btn btn-secondary btn-sm" onclick="">secondary</button>\n',
    category: 'Spectre➡️Buttons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_button_primary_large', {
    label: 'Primary Large',
    content: '<button class="btn btn-primary btn-lg" onclick="">primary</button>\n',
    category: 'Spectre➡️Buttons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_button_secondary_large', {
    label: 'Secondary Large',
    content: '<button class="btn btn-secondary btn-lg" onclick="">secondary</button>\n',
    category: 'Spectre➡️Buttons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_button_hamburger_primary', {
    label: 'Hamburger Primary',
    content: '<button class="btn btn-action btn-primary" onclick=""><i class="icon icon-menu"></i></button>\n',
    category: 'Spectre➡️Buttons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_button_hamburger_primary_circle', {
    label: 'Hamburger Primary Circle',
    content: '<button class="btn btn-action s-circle btn-primary" onclick=""><i class="icon icon-menu"></i></button>\n',
    category: 'Spectre➡️Buttons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_button_primary_small_loading', {
    label: 'Loading Primary Small',
    content: '<button class="btn btn-primary btn-sm loading" onclick="">primary</button>\n',
    category: 'Spectre➡️Buttons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_button_group_small_wide', {
    label: 'Group Small Full Width',
    content: `
    <div class="btn-group btn-group-block">
      <button class="btn btn-primary btn-sm" onclick=""> 0 </button>
      <button class="btn btn-primary btn-sm" onclick=""> 1 </button>
      <button class="btn btn-primary btn-sm" onclick=""> 2 </button>
      <button class="btn btn-primary btn-sm" onclick=""> 3 </button>
      <button class="btn btn-primary btn-sm" onclick=""> 4 </button>
      <button class="btn btn-primary btn-sm" onclick=""> 5 </button>
      <button class="btn btn-primary btn-sm" onclick=""> 6 </button>
      <button class="btn btn-primary btn-sm" onclick=""> 7 </button>
      <button class="btn btn-primary btn-sm" onclick=""> 8 </button>
      <button class="btn btn-primary btn-sm" onclick=""> 9 </button>
    </div>`,
    category: 'Spectre➡️Buttons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_button_group_small', {
    label: 'Group Small',
    content: `
    <div class="btn-group">
      <button class="btn btn-primary btn-sm s-circle" onclick=""> 0 </button>
      <button class="btn btn-primary btn-sm" onclick=""> 1 </button>
      <button class="btn btn-primary btn-sm" onclick=""> 2 </button>
      <button class="btn btn-primary btn-sm" onclick=""> 3 </button>
      <button class="btn btn-primary btn-sm" onclick=""> 4 </button>
      <button class="btn btn-primary btn-sm" onclick=""> 5 </button>
      <button class="btn btn-primary btn-sm" onclick=""> 6 </button>
      <button class="btn btn-primary btn-sm" onclick=""> 7 </button>
      <button class="btn btn-primary btn-sm" onclick=""> 8 </button>
      <button class="btn btn-primary btn-sm s-circle" onclick=""> 9 </button>
    </div>`,
    category: 'Spectre➡️Buttons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_button_group', {
    label: 'Group',
    content: `
    <div class="btn-group">
      <button class="btn btn-primary s-circle" onclick=""> 0 </button>
      <button class="btn btn-primary" onclick=""> 1 </button>
      <button class="btn btn-primary" onclick=""> 2 </button>
      <button class="btn btn-primary" onclick=""> 3 </button>
      <button class="btn btn-primary" onclick=""> 4 </button>
      <button class="btn btn-primary" onclick=""> 5 </button>
      <button class="btn btn-primary" onclick=""> 6 </button>
      <button class="btn btn-primary" onclick=""> 7 </button>
      <button class="btn btn-primary" onclick=""> 8 </button>
      <button class="btn btn-primary s-circle" onclick=""> 9 </button>
    </div>`,
    category: 'Spectre➡️Buttons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });


  /* Spectre Icons *********************************************************/


  plugin('spectre_icons_arrow_up', {
    label: 'Arrow Up',
    content: '<i class="icon icon-arrow-up"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_arrow_right', {
    label: 'Arrow Right',
    content: '<i class="icon icon-arrow-right"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_arrow_down', {
    label: 'Arrow Down',
    content: '<i class="icon icon-arrow-down"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_arrow_left', {
    label: 'Arrow Left',
    content: '<i class="icon icon-arrow-left"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_upward', {
    label: 'Upward',
    content: '<i class="icon icon-upward"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_forward', {
    label: 'Forward',
    content: '<i class="icon icon-forward"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_downward', {
    label: 'Downward',
    content: '<i class="icon icon-downward"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_back', {
    label: 'Backward',
    content: '<i class="icon icon-back"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_caret', {
    label: 'Caret',
    content: '<i class="icon icon-caret"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_menu', {
    label: 'Menu',
    content: '<i class="icon icon-menu"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_apps', {
    label: 'Apps',
    content: '<i class="icon icon-apps"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_horiz', {
    label: 'More Horizontal',
    content: '<i class="icon icon-more-horiz"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_vert', {
    label: 'More Vertical',
    content: '<i class="icon icon-more-vert"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_resize_horiz', {
    label: 'Resize Horizontal',
    content: '<i class="icon icon-resize-horiz"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_resize_vert', {
    label: 'Resize Vertical',
    content: '<i class="icon icon-resize-vert"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_plus', {
    label: 'Plus',
    content: '<i class="icon icon-plus"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_minus', {
    label: 'Minus',
    content: '<i class="icon icon-minus"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_cross', {
    label: 'Cross',
    content: '<i class="icon icon-cross"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_check', {
    label: 'Check',
    content: '<i class="icon icon-check"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_stop', {
    label: 'Stop',
    content: '<i class="icon icon-stop"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_shutdown', {
    label: 'Shutdown',
    content: '<i class="icon icon-shutdown"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_refresh', {
    label: 'Refresh',
    content: '<i class="icon icon-refresh"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_search', {
    label: 'Search',
    content: '<i class="icon icon-search"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_flag', {
    label: 'Flag',
    content: '<i class="icon icon-flag"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_bookmark', {
    label: 'Bookmark',
    content: '<i class="icon icon-bookmark"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_edit', {
    label: 'Edit',
    content: '<i class="icon icon-edit"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_delete', {
    label: 'Delete',
    content: '<i class="icon icon-caret"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_share', {
    label: 'Share',
    content: '<i class="icon icon-share"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_download', {
    label: 'Download',
    content: '<i class="icon icon-download"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_upload', {
    label: 'Upload',
    content: '<i class="icon icon-upload"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_copy', {
    label: 'Copy',
    content: '<i class="icon icon-copy"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_mail', {
    label: 'Mail',
    content: '<i class="icon icon-mail"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_people', {
    label: 'People',
    content: '<i class="icon icon-people"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_message', {
    label: 'Message',
    content: '<i class="icon icon-message"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_photo', {
    label: 'Photo',
    content: '<i class="icon icon-photo"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_time', {
    label: 'Time',
    content: '<i class="icon icon-time"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_location', {
    label: 'Location',
    content: '<i class="icon icon-location"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_link', {
    label: 'Link',
    content: '<i class="icon icon-link"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });

  plugin('spectre_icons_emoji', {
    label: 'Emoji',
    content: '<i class="icon icon-emoji"></i>',
    category: 'Spectre➡️Icons',
    media: '<img src="spectre.svg" height=32 width=32 loading="lazy">'
  });


}
