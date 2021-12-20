import {
  CustomElement,
  Dispatch,
  MXElement,
  On,
  Prop,
  State,
} from "@interstice/mx";

@MXElement({ tag: "counter-button" })
export class CounterButtonElement extends CustomElement {
  @Prop({ key: "someText" })
  text: string = "";

  @Prop()
  totalCount: number = 0;

  @State()
  count: number = 0;

  @On("click")
  increment = (e: any) => {
    this.updateCount(e);
    this.count++;
  };

  get combinedCount() {
    return this.totalCount + this.count;
  }

  @Dispatch("updateCount")
  updateCount = (_e: any) => {
    return this.combinedCount;
  };

  styles() {
    return `
      ${super.styles()}
      button {
        background-color: var(--button-background-color);
        color: var(--color);
        cursor: pointer;
        font-size: 20px;
        appearance: none;
        border: none;
        padding: 0.75rem 1rem;
        border-radius: 6px;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        will-change: background-color;
        transition: background-color 0.2s ease-out;
        height: 52px;
      }
      button:hover {
        background-color: var(--hover-button-background-color);
      }
    `;
  }

  render() {
    return (
      <button type="button">
        {this.combinedCount.toString()}
        {this.text}
      </button>
    );
  }
}
