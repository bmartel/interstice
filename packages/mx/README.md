# mx

WebComponents powered by [Million](https://million.js.org/)

**Warning** This was a thought experiment of creating a concise api to facilitate WebComponents creation using a lightweight vdom that supports jsx. This is not production ready by any stretch.

# Getting started

```
npm i @interstice/mx
```

## Components

Creating a component is similar to any jsx based rendering lib

```tsx
import { MXElement, CustomElement, Prop, State } from '@interstice/mx'

@MXElement({ tag: 'my-button' })
class MyButton extends CustomElement {

  @Prop()
  title: string = "this is a default prop value"

  @State()
  count: number = 0

  increment = () => {
    this.count++
  }

  render() {
    return (
      <button title={this.title} onclick={this.increment}>
        {this.count}
      </button>
    )
  }
}

```

## Running unit tests

Run `nx test mx` to execute the unit tests via [Jest](https://jestjs.io).
