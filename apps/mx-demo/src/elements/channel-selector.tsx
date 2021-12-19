import { CustomElement, MXElement, On, State } from "@interstice/mx";
import "./channel-item";

@MXElement({ tag: "channel-selector" })
export class ChannelSelector extends CustomElement {
  @State()
  channels: any = [];

  @On("addChannel")
  addChannel = (e: any) => {
    e.preventDefault();
    const form = new FormData(e.target);
    e.target.reset();

    this.channels = this.channels.concat({
      id: Date.now(),
      name: form.get('name'),
      createdAt: new Date().toISOString(),
    })
  };

  @On("updateChannel")
  updateChannel = (e: CustomEvent<any>) => {
    console.log("updating message", e.detail);
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
      :host {
        height: 100%;
      }
      .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        width: 320px;
      }
      ul {
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
            <channel-item
              key={m.id}
              id={m.id}
              name={m.name}
            ></channel-item>
          ))}
        </ul>
      </div>
    );
  }
}

