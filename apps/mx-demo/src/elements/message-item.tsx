import {
  CustomElement,
  Dispatch,
  MXElement,
  Prop,
  State,
} from "@interstice/mx";
import { Message } from "@/store";

@MXElement({ tag: "message-item" })
export class MessageList extends CustomElement {
  @Prop()
  id: Message["id"] = "";

  @Prop()
  content: Message["content"] = "";

  @State()
  editing: boolean = false;

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

  render() {
    return (
      <li>
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
