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
  message: Message | null = null;

  @State()
  editing: boolean = false;

  edit = () => {
    this.editing = true;
  };

  @Dispatch("updateMessage")
  updateMessage = (e: any) => {
    e.preventDefault();

    if (!this.message) return {};

    const form = new FormData(e.target);
    this.editing = false;

    this.message = {
      ...this.message,
      content: form.get("content") as string,
      updatedAt: new Date().toISOString(),
    };
    return {
      id: this.message!.id,
      content: form.get("content") as string,
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
              value={this.message?.content || ""}
              placeholder="message"
            />
            <button type="submit">Update</button>
          </form>
        ) : (
          <span onclick={this.edit}>{this.message?.content}</span>
        )}
      </li>
    );
  }
}
