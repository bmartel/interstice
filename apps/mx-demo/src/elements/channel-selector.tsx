import { CustomElement, MXElement, On, State, Storage } from "@interstice/mx";
import "./channel-item";

@MXElement({ tag: "channel-selector" })
export class ChannelSelector extends CustomElement {
  @Storage({ key: "channels" })
  @State()
  channels: any = [];

  @On("addChannel")
  addChannel = (e: any) => {
    e.preventDefault();
    const form = new FormData(e.target);
    e.target.reset();

    this.channels = [
      {
        id: Date.now(),
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

  styles() {
    return `
      ${super.styles()}
      :host {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 320px;
      }
      .container {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 36px);
        overflow-y: auto;
      }
      ul {
        margin: 0;
        padding: 1rem 0;
        list-style: none;
      }
    `;
  }

  render() {
    return (
      <div class="container">
        <form onSubmit={this.addChannel}>
          <input name="name" type="text" placeholder="Channel" />
          <button type="submit">+</button>
        </form>
        <ul>
          {this.channels.map((m: any) => (
            <channel-item key={m.id} id={m.id} name={m.name}></channel-item>
          ))}
        </ul>
      </div>
    );
  }
}
