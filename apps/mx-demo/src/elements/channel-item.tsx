import {
  CustomElement,
  Dispatch,
  MXElement,
  Prop,
  State,
} from "@interstice/mx";

@MXElement({ tag: "channel-item" })
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

  editName: string = "";

  updateName = (e: any) => {
    this.editName = e.target.value;
  };

  @Dispatch("updateChannel")
  updateChannel = (e: any) => {
    e.preventDefault();

    if (!this.id) return {};

    const newName = this.editName;

    if (!newName) return {};

    this.editing = false;
    this.name = newName;

    return {
      id: this.id!,
      name: newName,
      updatedAt: new Date().toISOString(),
    };
  };

  styles() {
    return `
      ${super.styles()}
      div {
        display: flex;
        margin: 0;
        padding: 0;
        width: 100%;
      }
      mx-link {
        display: inline-flex;
        width: 100%;
        align-items: center;
        justify-content: flex-start;
      }
      mx-link::part(anchor) {
        width: 100%;
        padding-inline: 1rem;
        height: 48px;
        color: var(--color);
        background-color: transparent;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-decoration: none;
        will-change: background-color;
        transition: background-color 0.2s ease-out;
        gap: 1rem;
      }
      mx-link:hover::part(anchor) {
        background-color: var(--hover-button-background-color);
      }
      mx-link[active]::part(anchor) {
        background-color: var(--button-background-color);
      }
      .emoji-bullet:before {
        content: var(--emoji-bullet);
      }
    `;
  }

  render() {
    return (
      <div>
        {this.editing ? (
          <form onSubmit={this.updateChannel}>
            <input
              name="content"
              type="text"
              value={this.name}
              oninput={this.updateName}
              placeholder="Channel"
            />
            <button type="submit">Update</button>
          </form>
        ) : (
          <mx-link href={`/channels/${this.id}/messages`} exact="">
            <span class="emoji-bullet"></span>
            <span>{this.name}</span>
          </mx-link>
        )}
      </div>
    );
  }
}
