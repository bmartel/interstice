import {
  CustomElement,
  MXElement,
  On,
  Param,
  State,
  Storage,
} from "@interstice/mx";
import { Message } from "@/store";

@MXElement({
  tag: "message-list",
  route: `^\/channels\/<channelId>(\\d+)(\/messages)$`,
})
export class MessageList extends CustomElement {
  async elements() {
    await import("./message-item");
  }

  @Param({ key: "channelId" })
  channelId: number | null = null;

  @Storage({
    key: "channelMessages",
    scope: (c: MessageList) => `channel:${c.channelId}`,
  })
  @State()
  messages: any = [];

  addMessage = (e: any) => {
    e.preventDefault();
    const form = new FormData(e.target);
    e.target.reset();

    this.messages = this.messages.concat({
      id: Date.now(),
      content: form.get("content") as string,
      user: {
        email: "user@example.com",
      },
      createdAt: new Date().toISOString(),
    });
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
    return `
      ${super.styles()}
      :host {
        display: flex;
        flex: 1;
      }
      .container {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding:  2rem 2rem 0;
      }
      ul {
        list-style: none;
        flex: 1;
        padding: 0 0 calc(4rem + 96px) 0;
        margin: 0;
      }
      message-item {
        display: flex;
        width: 100%;
      }
      .form-opacity-wrapper {
        z-index: 2;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: hsl(var(--hsl-background-color), 0.8);
        padding-bottom: 1px;
      }
      .form-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: sticky;
        bottom: 0;
      }
      .form-wrapper:before {
        content: '';
        height: 3.4rem;
        width: 100%;
        background: linear-gradient(hsl(var(--hsl-background-color), 0), hsl(var(--hsl-background-color), 0.6));
      }
      .form-wrapper:after {
        content: '';
        height: 2rem;
        width: 100%;
        background: linear-gradient(hsl(var(--hsl-background-color), 0.83), hsl(var(--hsl-background-color)));
      }

      form {
        z-index: 2;
        position: relative;
        border-radius: 6px;
        align-items: center;
        background-color: var(--input-background-color);
        display: flex;
        width: 100%;
        overflow: hidden;
        transition: all 0.2s ease-out;
      }
      form:focus-within {
        background-color: var(--button-background-color);
      }
      textarea {
        border: none;
        outline: none;
        flex: 1;
        display: inline-flex;
        align-items: center;
        font-size: 16px;
        padding: 1rem;
        height: 96px;
        color: var(--color);
        background-color: var(--input-background-color);
        resize: none;
        transition: all 0.2s ease-out;
      }
      textarea:focus {
        background-color: var(--button-background-color);
      }
      button {
        border-radius: 6px;
        margin: 1rem;
        appearance: none;
        border: none;
        background-color: var(--message-button-background-color);
        font-size: 18px;
        cursor: pointer;
        appearance: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        width: 48px;
        will-change: background-color;
        transition: background-color 0.2s ease-out;
      }
      button:hover {
        background-color: var(--hover-message-button-background-color);
      }
    `;
  }

  render() {
    return (
      <div class="container">
        <ul>
          <li class="top-sentinel"></li>
          {this.messages.map((m: any) => (
            <message-item
              key={m.id}
              id={m.id}
              content={m.content}
            ></message-item>
          ))}
          <li className="bottom-sentinel"></li>
        </ul>
        <div class="form-wrapper">
          <div class="form-opacity-wrapper">
            <form onSubmit={this.addMessage}>
              <textarea
                name="content"
                placeholder="Type a message here"
                rows="2"
              ></textarea>
              <button type="submit">✉️</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
