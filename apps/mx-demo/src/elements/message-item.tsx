import {
  CustomElement,
  Dispatch,
  MXElement,
  Prop,
  State,
} from "@interstice/mx";
import { Message } from "@/store";

@MXElement({ tag: "message-item" })
export class MessageItem extends CustomElement {
  @Prop()
  id: Message["id"] = "";

  @Prop()
  content: Message["content"] = "";

  @State()
  editing: boolean = false;

  isOwner: boolean = Math.random() > 0.5;

  edit = () => {
    this.editing = true;
  };

  @Dispatch("updateMessage")
  updateMessage = (e: any) => {
    e.preventDefault();

    if (!this.id) return {};

    const form = new FormData(e.target);
    const content = form.get("content") as string;

    this.content = content;
    this.editing = false;

    return {
      id: this.id!,
      content,
      updatedAt: new Date().toISOString(),
    };
  };

  styles() {
    return `
      ${super.styles()}
      :host {
        width: 100%;
      }
      li {
        max-width: 75%;
        display: flex;
        align-items: center;
        padding: 1rem 1.25rem;
        margin-bottom: 1.5rem;
      }
      li[data-owner=false] {
        background-color: var(--outline-color);
        color: white;
        border-radius: 12px 12px 0 12px ;
        margin-left: auto;
      }
      li[data-owner=true] {
        background-color: var(--button-background-color);
        border-radius: 12px 12px 12px 0;
        margin-right: auto;
      }
    `;
  }

  render() {
    return (
      <li data-owner={this.isOwner}>
        {this.editing ? (
          <form onSubmit={this.updateMessage}>
            <input
              name="content"
              type="text"
              value={this.content}
              placeholder="message"
            />
            <button type="submit">Update</button>
          </form>
        ) : (
          <span onclick={this.edit}>{this.content}</span>
        )}
      </li>
    );
  }
}
