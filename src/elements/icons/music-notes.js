
import { html } from 'lit-element';
import { spread } from '@open-wc/lit-helpers';

export default (props = {}) => html`
  <svg fill="currentColor" ...=${spread(props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 2.5V0L6 2v12.17A3 3 0 0 0 5 14H3a3 3 0 0 0 0 6h2a3 3 0 0 0 3-3V5.71L18 4.3v7.88a3 3 0 0 0-1-.17h-2a3 3 0 0 0 0 6h2a3 3 0 0 0 3-3V2.5z"/></svg>`