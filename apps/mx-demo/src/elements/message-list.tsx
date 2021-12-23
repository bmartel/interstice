import {
  CustomElement,
  Dispatch,
  MXElement,
  Param,
  State,
} from "@interstice/mx";

@MXElement({
  tag: "message-list",
  route: `^\/channels\/<channelId>(\\d+)(\/messages)$`,
})
export class MessageList extends CustomElement {
  async elements() {
    await import("./message-item")
  }

  @Param({ key: "channelId" })
  channelId: number | null = null;

  @State()
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
      ${super.styles()}
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
        {this.channelId}
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
