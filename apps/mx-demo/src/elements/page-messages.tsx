import { MXElement, On, State } from "@interstice/mx";
import { PageElement } from "./page-element";
import { Message } from "@/store";

@MXElement({
  tag: "page-messages",
  route: `^\/channels\/?<channelId>(\\d+)?(\/messages)?$`,
})
export class PageMessages extends PageElement {
  async elements() {
    await import("./channel-selector");
  }

  @State()
  messages: any = [];

  @On("addMessage")
  addMessage = (e: CustomEvent<Message>) => {
    this.messages = this.messages.concat(e.detail);
  };

  @On("updateMessage")
  updateMessage = (e: CustomEvent<Partial<Message>>) => {
    this.messages = this.messages.map((m: any) => {
      if (m.id === e.detail.id) {
        return {
          ...m,
          ...e.detail,
        };
      }
      return m;
    });
  };

  render() {
    return (
      <main>
        <channel-selector></channel-selector>
      </main>
    );
  }
}
