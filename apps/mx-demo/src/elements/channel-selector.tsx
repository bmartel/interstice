import { CustomElement, MXElement, On, State, Storage } from "@interstice/mx";

@MXElement({ tag: "channel-selector" })
export class ChannelSelector extends CustomElement {
  async elements() {
    await import("./channel-item");
    await import("./message-list");
  }

  @Storage({ key: "channels" })
  @State()
  channels: any = [];

  @On("addChannel")
  addChannel = (e: any) => {
    e.preventDefault();
    const form = new FormData(e.target);
    e.target.reset();
    const id = Date.now();
    this.channels = [
      {
        id,
        name: form.get("name"),
        createdAt: new Date().toISOString(),
      },
      ...this.channels,
    ];
  };

  @On("updateChannel")
  updateChannel = (e: CustomEvent<any>) => {
    this.channels = this.channels.map((m: any) => {
      if (m.id === e.detail.id) {
        return {
          ...m,
          ...e.detail,
        };
      }
      return m;
    });
  };

  @On("deleteChannel")
  deleteChannel = (e: CustomEvent<any>) => {
    this.channels = this.channels.filter((m: any) => m.id === e.detail.id);
  };

  styles() {
    return `
      ${super.styles()}
      :host {
        display: flex;
        flex-direction: column;
        flex: 1;
      }
      .channel-pane {
        width: 320px;
        height: calc(100vh - 36px);
        overflow-y: auto;
        border-width: 0 2px 0 0;
        border-style: solid solid solid solid;
        border-color: var(--input-background-color);
      }
      .message-pane {
        display: flex;
        flex: 1;
      }
      message-list {
        display: flex;
        flex: 1;
        width: 100%;
        height: calc(100vh - 36px);
        overflow-y: auto;
      }
      .container {
        display: flex;
        flex: 1;
      }
      ul {
        margin: 0;
        padding: 1rem 0;
        list-style: none;
      }
      form {
        top: 0;
        z-index: 2;
        position: sticky;
        display: flex;
        width: 100%;
        border-width: 0 0 2px 0;
        border-style: solid solid solid solid;
        border-color: var(--input-background-color);
        will-change: border-color;
        transition: border-color 0.2s ease-out;
      }
      form:focus-within {
        border-color: var(--outline-color);
      }
      input {
        border: none;
        outline: none;
        flex: 1;
        display: inline-flex;
        align-items: center;
        height: 48px;
        padding: 0 1rem;
        color: var(--color);
        background-color: var(--background-color);
      }
      input:focus {
        background-color: var(--input-background-color);
      }
      button {
        appearance: none;
        border: none;
        background-color: var(--background-color);
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
        background-color: var(--accent-color);
      }
    `;
  }

  // 🗨️
  // ✍️
  // 💬
  // 📨
  // ✉️
  // ✖️
  // ✅
  // 🗑️
  // 🔗
  // 🔎
  // ⚙️
  // 🕑
  // 📑
  // 🔥
  // ✨
  // 📝
  // 🔔
  // 📋
  // 🔶
  // ⬜
  render() {
    return (
      <div class="container">
        <div className="channel-pane">
          <form onSubmit={this.addChannel}>
            <input name="name" type="text" placeholder="Channel" />
            <button type="submit">➕</button>
          </form>
          <ul>
            {this.channels.map((m: any) => (
              <li key={m.id}>
                <channel-item id={m.id} name={m.name}></channel-item>
              </li>
            ))}
          </ul>
        </div>
        <div className="message-pane">
          <message-list></message-list>
        </div>
      </div>
    );
  }
}
