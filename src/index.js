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
    editor.Blocks.getCategories().filter(c => ['Fonts', 'Nim lang➡️SCF', 'Unsplash➡️Images', 'Spectre➡️Icons', 'Spectre➡️Buttons', 'Spectre➡️Experimentals', 'Spectre➡️Utils', 'Spectre➡️Media'].includes(c.get('id'))).forEach(c => c.set('open', 0));

  })
};
