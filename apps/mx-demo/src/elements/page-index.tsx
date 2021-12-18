import {
  CustomElement,
  MXElement,
  On,
  QueryParam,
  State,
  Storage,
} from "@interstice/mx";
import { Message } from "@/store";
import "./counter-button";
import "./message-list";

@MXElement({ tag: "index-page", route: "^/$" })
export class IndexPage extends CustomElement {
  @QueryParam("stuff")
  @Storage("otherThings")
  @State()
  stuff: string = "";

  @State()
  totalCount: number = 0;

  @State()
  messages: Array<Message> = [];

  @On("addMessage")
  addMessage = (e: CustomEvent<Message>) => {
    this.messages = this.messages.concat(e.detail);
  };

  @On("updateMessage")
  updateMessage = (e: CustomEvent<Partial<Message>>) => {
    this.messages = this.messages.map((m) => {
      if (m.id === e.detail.id) {
        return {
          ...m,
          ...e.detail,
        };
      }
      return m;
    });
  };

  @On("updateCount")
  updateCount = () => {
    this.totalCount++;
  };

  styles() {
    return /* css */ `
      main {
        background: hotpink;
      }
    `;
  }

  updateQuery = () => {
    this.stuff = "other";
  };

  render() {
    return (
      <main>
        <h1>Simple Counter</h1>

        <counter-button text=" +"></counter-button>
        <counter-button></counter-button>
        <counter-button defaultCount={this.totalCount}></counter-button>

        <h1>Messages</h1>

        <message-list messages={this.messages}></message-list>
        <button onclick={this.updateQuery}>{this.stuff}</button>
      </main>
    );
  }
}
