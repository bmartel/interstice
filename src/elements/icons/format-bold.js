
import { html } from 'lit-element';
import { spread } from '@open-wc/lit-helpers';

export default (props = {}) => html`
  <svg fill="currentColor" ...=${spread(props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M3 19V1h8a5 5 0 0 1 3.88 8.16A5.5 5.5 0 0 1 11.5 19H3zm7.5-8H7v5h3.5a2.5 2.5 0 1 0 0-5zM7 4v4h3a2 2 0 1 0 0-4H7z"/></svg>`