import CommandPalette from 'react-command-palette';

function Palette() {
  const commands = [{
    id: 1,
    color: 'pink',
    name: "Foo",
    command() {
      console.log('jere')
    }},
    {
      id: 2,
      color: 'read',
      name: "bar",
      command() {
        console.log('therer')
      }
    }
   ];
  return (
    <CommandPalette
    commands={commands}
    placeholder='test'
    hotKeys='command+k'
    onRequestClose={() => {
      console.log("The palette was closed.");
    }}
    theme={{
      container: 'chrome-container',
      containerOpen: 'chrome-containerOpen',
      content: 'chrome-content',
      header: 'chrome-header',
      input: 'chrome-input',
      inputFocused: 'chrome-inputFocused',
      inputOpen: 'chrome-inputOpen',
      modal: 'chrome-modal',
      overlay: 'chrome-overlay',
      spinner: 'chrome-spinner',
      suggestion: 'chrome-suggestion',
      suggestionFirst: 'chrome-suggestionFirst',
      suggestionHighlighted: 'chrome-suggestionHighlighted',
      suggestionsContainer: 'chrome-suggestionsContainer',
      suggestionsContainerOpen: 'chrome-suggestionsContainerOpen',
      suggestionsList: 'chrome-suggestionsList',
      trigger: 'chrome-trigger'
    }}
  />
  );
}

export default Palette;