import { CustomElement, MXElement, On, State } from "@interstice/mx";
import { Message } from "@/store";
import "./counter-button";
import "./message-list";

@MXElement({ tag: "page-messages", route: "^/messages$" })
export class PageMessages extends CustomElement {
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

  styles() {
    return /* css */ `
      main {
        background: hotpink;
      }
    `;
  }
  render() {
    return (
      <main>
        <h1>Messages</h1>

        <message-list messages={this.messages}></message-list>
      </main>
    );
  }
}
