import {
  CustomElement,
  Dispatch,
  MXElement,
  Prop,
  State,
} from "@interstice/mx";

@MXElement({ tag: "message-item" })
export class ChannelItem extends CustomElement {
  @Prop()
  id: string = "";

  @Prop()
  name: string = "";

  @State()
  editing: boolean = false;

  edit = () => {
    this.editing = true;
  };

  @Dispatch("updateChannel")
  updateChannel = (e: any) => {
    e.preventDefault();

    if (!this.id) return {};

    const form = new FormData(e.target);
    const name= form.get("name") as string;

    this.name = name;
    this.editing = false;

    return {
      id: this.id!,
      name,
      updatedAt: new Date().toISOString(),
    };
  };

  styles() {
    return `
      li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
    `;
  }

  render() {
    return (
      <li>
        {this.editing ? (
          <form onSubmit={this.updateChannel}>
            <input
              name="content"
              type="text"
              value={this.name}
              placeholder="message"
            />
            <button type="submit">Update</button>
          </form>
        ) : (
          <span onclick={this.edit}>{this.name}</span>
        )}
      </li>
    );
  }
}

