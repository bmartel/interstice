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
  @Prop("someText")
  text: string = "";

  @Prop()
  defaultCount: number = 0;

  @State()
  count: number = 0;

  @On("click")
  increment = (e: any) => {
    this.updateCount(e);
    this.count++;
  };

  get combinedCount() {
    return this.defaultCount + this.count;
  }

  @Dispatch("updateCount")
  updateCount = (_e: any) => {
    return this.combinedCount;
  };

  render() {
    return (
      <button type="button">
        {this.combinedCount.toString()}
        {this.text}
      </button>
    );
  }
}
