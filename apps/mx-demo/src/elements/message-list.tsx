import { CustomElement, Dispatch, MXElement, Prop } from "@interstice/mx";
import "./message-item";

@MXElement({ tag: "message-list" })
export class MessageList extends CustomElement {
  @Prop()
  messages: any = [];

  @Dispatch("addMessage")
  submitMessage = (e: any) => {
    e.preventDefault();
    const form = new FormData(e.target);
    e.target.reset();

    return {
      id: Date.now(),
      content: form.get("content") as string,
      user: {
        email: "user@example.com",
      },
      createdAt: new Date().toISOString(),
    };
  };

  styles() {
    return `
      .container {
        display: grid;
        margin: 0 auto;
        max-width: 1200px;
        grid-template-columns: 320px 1fr;
      }
      ul {
        list-style: none;
      }
    `;
  }

  render() {
    return (
      <div class="container">
        <form onSubmit={this.submitMessage}>
          <input name="content" type="text" placeholder="message" />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {this.messages.map((m: any) => (
            <message-item
              key={m.id}
              id={m.id}
              content={m.content}
            ></message-item>
          ))}
        </ul>
      </div>
    );
  }
}
