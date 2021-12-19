import "./style.css";
import "./elements/theme-provider";
import "./elements/navigation-tabs";
import "./elements/page-index";
import "./elements/page-counter";
import "./elements/page-messages";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <theme-provider>
    <navigation-tabs></navigation-tabs>
    <page-index></page-index>
    <page-counter></page-counter>
    <page-messages></page-messages>
  </theme-provider>
`;
