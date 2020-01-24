import {
  addParameters,
  addDecorator,
  setCustomElements,
  withKnobs,
  withWebComponentsKnobs,
  withA11y,
} from '@open-wc/demoing-storybook';

async function run() {
  const customElements = await (
    await fetch(new URL('../custom-elements.json', import.meta.url))
  ).json();
  setCustomElements(customElements);

  addDecorator(withA11y);
  addDecorator(withKnobs);
  addDecorator(withWebComponentsKnobs);

  addParameters({
    a11y: {
      config: {},
      options: {
        checks: { 'color-contrast': { options: { noScroll: true } } },
        restoreScroll: true,
      },
    },
    docs: {
      iframeHeight: '200px',
    },
  });
}

run();
