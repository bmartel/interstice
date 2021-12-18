import "./style.css";
import "./elements/page-index";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <index-page></index-page>
`;
