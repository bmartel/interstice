
import { html } from 'lit-element';
import { spread } from '@open-wc/lit-helpers';

export default (props = {}) => html`
  <svg fill="currentColor" ...=${spread(props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 2h20v4H0V2zm0 8h20v2H0v-2zm0 6h20v2H0v-2z"/></svg>`