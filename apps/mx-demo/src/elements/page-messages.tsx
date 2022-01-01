import { MXElement } from "@interstice/mx";
import { PageElement } from "./page-element";

@MXElement({
  tag: "page-messages",
  route: "^/channels/?<channelId>(\\d+)?(/messages)?$",
})
export class PageMessages extends PageElement {
  async elements() {
    await import("./channel-selector");
  }

  render() {
    return (
      <main>
        <channel-selector></channel-selector>
      </main>
    );
  }
}
