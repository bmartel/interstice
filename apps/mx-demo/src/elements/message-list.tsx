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

  render() {
    return (
      <div>
        <form onSubmit={this.submitMessage}>
          <input name="content" type="text" placeholder="message" />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {this.messages.map((m: any) => (
            <message-item key={m.id} message={m}></message-item>
          ))}
        </ul>
      </div>
    );
  }
}
