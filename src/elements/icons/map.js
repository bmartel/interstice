
import { html } from 'lit-element';
import { spread } from '@open-wc/lit-helpers';

export default (props = {}) => html`
  <svg fill="currentColor" ...=${spread(props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 0l6 4 8-4 6 4v16l-6-4-8 4-6-4V0zm7 6v11l6-3V3L7 6z"/></svg>`