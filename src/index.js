import loadBlocks from './grapespectre';

export default (editor, options = {}) => {

  loadBlocks(editor, options);

  editor.on('load', () => {
    editor.addComponents(
      `
      <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css">
      <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css">
      <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css">
      `,
      {at: 0}
    );

    const openBl = editor.Panels.getButton('views', 'open-blocks');
    openBl && openBl.set('active', 1);
    editor.Blocks.getCategories().filter(c => ['SVG➡️Patterns', 'Fonts', 'Nim lang➡️SCF', 'Unsplash➡️Images', 'Spectre➡️Icons', 'Spectre➡️Buttons', 'Spectre➡️Experimentals', 'Spectre➡️Utils', 'Spectre➡️Media'].includes(c.get('id'))).forEach(c => c.set('open', 0));

  })

  editor.Panels.addPanel({id: 'views'}).get('buttons').add([{
    attributes: {
      title: 'Open Code'
    },
    className: 'fa fa-file-code-o',
    command: 'open-code',
    id: 'open-code'
  }]);

  editor.Panels.addPanel({id: 'options'}).get('buttons').add([{
    attributes: {
      title: 'Open Templates'
    },
    className: 'fa fa-paperclip',
    command: 'open-templates',//Open modal with templates which can be used when creating new page
    id: 'open-templates'
  }, {
    attributes: {
      title: 'Open Pages'
    },
    className: 'fa fa-file-o',
    command: 'open-pages',//Open modal listing your pages
    id: 'open-pages'
  }, {
    attributes: {
      title: 'Save As Template'
    },
    className: 'fa fa-archive',
    command: 'save-as-template',//Save page as template
    id: 'save-as-template'
  }, {
    attributes: {
      title: 'Delete from IDB'
    },
    className: 'fa fa-trash-o',
    command: 'delete-from-idb',//Delete open page or template
    id: 'delete-from-idb'
  }]);

};
