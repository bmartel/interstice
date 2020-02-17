import { html, fixture, expect, waitUntil } from '@open-wc/testing';

import '../src/checkboxgroup.js';

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
];

describe('CheckBoxGroup', () => {
  it('renders a label', async () => {
    const el = await fixture(html`
      <i-checkboxgroup label="Test Label"></i-checkboxgroup>
    `);

    expect(el.label).to.equal('Test Label');
  });

  it('renders with options', async () => {
    const el = await fixture(html`
      <i-checkboxgroup .options=${options}></i-checkboxgroup>
    `);

    expect(el.options).to.equal(options);
  });

  it('renders with a value', async () => {
    const el = await fixture(html`
      <i-checkboxgroup .options=${options} .value=${['apple', 'orange']}></i-checkboxgroup>
    `);

    expect(el.value.length).to.equal(2);
  });

  it('renders with a dependent option', async () => {
    const el = await fixture(html`
      <i-checkboxgroup
        .options=${options}
        .value=${['apple', 'banana', 'orange']}
        dependent
      ></i-checkboxgroup>
    `);

    const checkboxes = el.shadowRoot.querySelectorAll('i-checkbox');

    expect(checkboxes[0].label).to.equal('All');
    expect(checkboxes.length).to.equal(4);
  });

  it('renders with a custom dependent option', async () => {
    const el = await fixture(html`
      <i-checkboxgroup
        .options=${options}
        .value=${['apple', 'banana', 'orange']}
        .dependentOptions=${{ label: 'All Fruits', value: '_all_fruit' }}
        dependent
      ></i-checkboxgroup>
    `);

    const checkboxes = el.shadowRoot.querySelectorAll('i-checkbox');

    expect(checkboxes[0].label).to.equal('All Fruits');
    expect(checkboxes[0].value).to.equal('_all_fruit');
    expect(checkboxes.length).to.equal(4);
  });

  it('renders with a label and checkboxes some selected', async () => {
    const el = await fixture(html`
      <i-checkboxgroup
        label="Favorite Fruits"
        .options=${options}
        .value=${['apple', 'orange']}
      ></i-checkboxgroup>
    `);

    expect(el).shadowDom.to.equalSnapshot();
  });

  it('can select an option', async () => {
    const el = await fixture(html`
      <i-checkboxgroup .options=${options}></i-checkboxgroup>
    `);

    el.shadowRoot
      .querySelector('i-checkbox')
      .shadowRoot.querySelector('input')
      .click();

    expect(el.value[0]).to.equal('apple');
  });

  it('can select multiple options', async () => {
    const el = await fixture(html`
      <i-checkboxgroup .options=${options}></i-checkboxgroup>
    `);

    const checkboxes = el.shadowRoot.querySelectorAll('i-checkbox');

    checkboxes.forEach((checkbox, index) => {
      checkbox.shadowRoot.querySelector('input').click();
      expect(el.value[index]).to.equal(options[index].value);
    });

    expect(el.value.length).to.equal(options.length);
  });

  it('can select a dependent option', async () => {
    const el = await fixture(html`
      <i-checkboxgroup .options=${options} .value=${['apple']} dependent></i-checkboxgroup>
    `);

    const checkbox = el.shadowRoot.querySelector('i-checkbox');
    checkbox.shadowRoot.querySelector('input').click();

    expect(el.value.length).to.equal(3);
    el.value.forEach((v, index) => {
      expect(v).to.equal(options[index].value);
    });
  });

  it('will select a dependent option if all others are selected', async () => {
    const el = await fixture(html`
      <i-checkboxgroup .options=${options} dependent></i-checkboxgroup>
    `);

    const checkboxes = el.shadowRoot.querySelectorAll('i-checkbox');

    checkboxes.forEach(checkbox => {
      checkbox.shadowRoot.querySelector('input').click();
    });

    await waitUntil(() => checkboxes[0].checked === true);
    expect(checkboxes[0].checked).to.equal(true);
  });

  it('can deselect an option', async () => {
    const el = await fixture(html`
      <i-checkboxgroup .options=${options} .value=${['apple', 'orange']}></i-checkboxgroup>
    `);

    const checkbox = el.shadowRoot.querySelector('i-checkbox');
    checkbox.shadowRoot.querySelector('input').click();

    expect(el.value.length).to.equal(1);
  });

  it('can deselect multiple options', async () => {
    const el = await fixture(html`
      <i-checkboxgroup
        .options=${options}
        .value=${['apple', 'banana', 'orange']}
      ></i-checkboxgroup>
    `);

    const checkboxes = el.shadowRoot.querySelectorAll('i-checkbox');

    let expectedLength = el.value.length;

    checkboxes.forEach(checkbox => {
      expectedLength--; // eslint-disable-line no-plusplus
      checkbox.shadowRoot.querySelector('input').click();
      expect(el.value.length).to.equal(expectedLength);
    });

    expect(el.value.length).to.equal(0);
  });

  it('can deselect a dependent option', async () => {
    const el = await fixture(html`
      <i-checkboxgroup
        .options=${options}
        .value=${['apple', 'banana', 'orange']}
        dependent
      ></i-checkboxgroup>
    `);

    const checkbox = el.shadowRoot.querySelector('i-checkbox');
    checkbox.shadowRoot.querySelector('input').click();

    expect(el.value.length).to.equal(0);
  });

  it('will deselect a dependent option if any others are deselected', async () => {
    const el = await fixture(html`
      <i-checkboxgroup
        .options=${options}
        .value=${['apple', 'banana', 'orange']}
        dependent
      ></i-checkboxgroup>
    `);

    const checkboxes = el.shadowRoot.querySelectorAll('i-checkbox');
    checkboxes[1].shadowRoot.querySelector('input').click();

    expect(checkboxes[1].checked).to.equal(false);
    await waitUntil(() => checkboxes[0].checked === false);
    expect(checkboxes[0].checked).to.equal(false);
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <i-checkboxgroup></i-checkboxgroup>
    `);

    expect(el).shadowDom.to.be.accessible();
  });
});
