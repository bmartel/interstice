import "./registerSw";
import "./style.css";
import "./elements/theme-provider";
import "./pages/page-index";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <theme-provider>
    <page-index></page-index>
  </theme-provider>
`;
