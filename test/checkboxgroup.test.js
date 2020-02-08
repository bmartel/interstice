import { html, fixture, expect } from '@open-wc/testing';

import '../src/elements/checkboxgroup.js';

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
];
[
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
];

describe('CheckBoxGroup', () => {
  it('renders a label', async () => {
    const el = await fixture(html`
      <z-checkboxgroup label="Test Label"></z-checkboxgroup>
    `);

    expect(el.label).to.equal('Test Label');
  });

  it('renders with options', async () => {
    const el = await fixture(html`
      <z-checkboxgroup .options=${options}></z-checkboxgroup>
    `);

    expect(el.options).to.equal(options);
  });

  it('can select an option', async () => {
    const el = await fixture(html`
      <z-checkboxgroup .options=${options}></z-checkboxgroup>
    `);

    el.shadowRoot.querySelector('z-checkbox').click();

    expect(el.value).to.equal(['apple']);
  });

  // it('shows initially the text "hey there Nr. 5!" and an "increment" button', async () => {
  //   const el = await fixture(html`
  //     <z-checkboxgroup></z-checkboxgroup>
  //   `);

  //   expect(el).shadowDom.to.equalSnapshot();
  // });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <z-checkboxgroup></z-checkboxgroup>
    `);

    expect(el).shadowDom.to.be.accessible();
  });
});
