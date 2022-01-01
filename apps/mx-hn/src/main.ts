import './registerSw';
import './style.css';
import './elements/theme-provider';
import './elements/hn-navigation';
import './pages/page-index';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <theme-provider>
    <hn-navigation></hn-navigation>
    <page-index></page-index>
  </theme-provider>
`;
