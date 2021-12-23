import {
  CustomElement,
  MXElement,
  Param,
  State,
  Storage,
} from "@interstice/mx";

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

  submitMessage = (e: any) => {
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

  styles() {
    return `
      ${super.styles()}
      .container {
        display: flex;
        flex: 1;
      }
      ul {
        list-style: none;
      }
    `;
  }

  render() {
    return (
      <div class="container">
        <ul>
          {this.messages.map((m: any) => (
            <message-item
              key={m.id}
              id={m.id}
              content={m.content}
            ></message-item>
          ))}
        </ul>
        <form onSubmit={this.submitMessage}>
          <input name="content" type="text" placeholder="message" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
