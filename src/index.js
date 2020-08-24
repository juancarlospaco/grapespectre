import loadBlocks from './grapespectre';

export default (editor, options = {}) => {
  loadBlocks(editor, options);
  // Inject Spectre CSS
  editor.on('load', () =>
    editor.addComponents(
      `
      <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css">
      <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css">
      <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css">
      `,
      { at: 0 }
    ))
};
