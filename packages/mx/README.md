# mx

WebComponents powered by [Million](https://million.js.org/)

**Warning** This was a thought experiment of creating a concise api to facilitate WebComponents creation using a lightweight vdom that supports jsx. This is not production ready by any stretch.

# Getting started

```
npm i @interstice/mx
```

## CustomElement

Creating a CustomElement is similar to any jsx based rendering lib

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

    styles() {
        return /* css */ `
          button {
            border: none;
            background: hotpink;
            color: black;
            padding: 0.5rem 0.75rem;
          }
    `
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

## Dynamic Elements

To allow for a CustomElement to naturally codesplit on an element and its children, you can dynamically import and await the promises of the child elements in an `elements` async method.
You are always free to dynamically import lazily from any other method if wanting to defer a specific child element to button click or state change for example.

A safe default of importing and nesting elements.

```tsx
import { MXElement, CustomElement, Prop, State } from '@interstice/mx'

@MXElement({ tag: 'my-button' })
class MyButton extends CustomElement {

    async elements() {
        await import('./my-icon.tsx')
    }

    render() {
        return (
            <button>
                Edit <my-icon name="pencil"></my-icon>
            </button>
        )
    }
}
```

## Lifecycle Methods

```tsx
import { MXElement, CustomElement, Prop, State } from '@interstice/mx'

@MXElement({ tag: 'my-button' })
class MyButton extends CustomElement {

    // Beginning of connectedCallback of CustomElement
    async connected(): Promise<void> {
        // This is likely where you will want to fetch data from api's and do other work before the DOM is ready.
        // This is a setup method, can be also used for manually adding any event listeners. Prefer using `On` decorator for event listeners.
    }

    // End of connectedCallback of CustomElement, DOM exists and is mounted
    mounted(): void {
        // There is now access to DOM nodes, and VDOM has executed it's first render.
    }

    // Beginning of disconnectedCallback of CustomElement
    async disconnected(): Promise<void> {
        // This is a teardown method, can be also used for analytics beacons or to remove any event listeners that were manually attached.
    }

    // End of disconnectedCallback of CustomElement, DOM no longer exists and is unmounted
    unmounted(): void {
        // There is no access to DOM nodes, and VDOM is also removed.
    }

    render() {
        return (
            <button>
                Edit <my-icon name="pencil"></my-icon>
            </button>
        )
    }
}
```

## Events

MX Supports event emission through a method decorator `Dispatch` and event listening through the method decorator `On`.

### Dispatch

**Option**
- `string` (required eventName)

Sending events is done in the natively supported way of the web platform, by creating and dispatching events.

The single string property serves as the name of the CustomEvent you will create and dispatch, the return value of the method becomes the `detail` value of the event.

```tsx
import { MXElement, CustomElement, State, Dispatch } from '@interstice/mx'

@MXElement({ tag: 'my-button' })
class MyButton extends CustomElement {

    @State()
    count: number = 0
    
    @Dispatch('updateCountTotal')
    increment = () => {
        this.count++
        
        return this.count
    }
    
    
    render() {
        return (
            <button title={this.title} onclick={this.increment}>
                My Button
            </button>
        )
    }
}
```

### On

**Option**
- `string` (required eventName)

Receiving events is done in the natively supported way of the web platform, by listening to events.

The single string property serves as the name of the Event you will listen for.

```tsx
import { MXElement, CustomElement, State, On } from '@interstice/mx'

@MXElement({ tag: 'my-counter' })
class MyButton extends CustomElement {

    @State()
    totalCount: number = 0
    
    @On('updateCountTotal')
    updateTotal(e: CustomEvent<number>) {
        this.totalCount = e.detail
    }
    
    render() {
        return (
            <div>
                <h1>Total clicked: {this.totalCount}</h1>
                <my-button></my-button>
            <div>
        )
    }
}
```

## State Management

MX supports various forms of state through the following property decorators.
Decorators can be used in conjunction but are limited to one decorator type per element property and execute in the order of appearance.

### Prop

Serves as the basis of parent -> child data passing via observed attributes.
Changes to these properties will cause automatic rerender of the element.

```tsx
import { MXElement, CustomElement, Prop } from '@interstice/mx'

@MXElement({ tag: 'my-button' })
class MyButton extends CustomElement {

    @Prop()
    title: string = "this is a default prop value"

    render() {
        return (
            <button title={this.title}>
                My Button
            </button>
        )
    }
}
```

### State

Allows for element owned state to be tracked. Any updates to these properties will cause automatic rerender of the element.

```tsx
import { MXElement, CustomElement, State } from '@interstice/mx'

@MXElement({ tag: 'my-button' })
class MyButton extends CustomElement {

    @State()
    count: number = 0

    render() {
        return (
            <button>
                {this.count}
            </button>
        )
    }
}
```

### Storage

Storage as the name suggests is a way to interface with a backing storage through a property decorator.
There are currently four supported adapters for the storage decorator: `local`, `session`, `cookie`, and `memory`.

#### Local (LocalStorage)

**Options**
- key: `string`
- storageType: `'local'` (default)
- scope: `string|(el: CustomElement) => string` (optional)

LocalStorage is supported by default and can optionally be scoped to a value specific to the element instance, and can be dynamic to another property.
```tsx
import { MXElement, CustomElement, Storage } from '@interstice/mx'

@MXElement({ tag: 'my-button' })
class MyButton extends CustomElement {

    @Storage({ key: 'count' })
    count: number = 0

    render() {
        return (
            <button>
                {this.count}
            </button>
        )
    }
}
```

#### Session

**Options**
- key: `string`
- storageType: `'session'`
- scope: `string|(el: CustomElement) => string` (optional)

SessionStorage is supported in the identical way as LocalStorage.
```tsx
import { MXElement, CustomElement, Storage } from '@interstice/mx'

@MXElement({ tag: 'my-button' })
class MyButton extends CustomElement {

    @Storage({ key: 'count', storageType: 'session' })
    count: number = 0

    render() {
        return (
            <button>
                {this.count}
            </button>
        )
    }
}
```

#### Cookie

**Options**
- key: `string`
- storageType: `'cookie'`
- expiry: `1` (optional) expiry in days
- scope: `string|(el: CustomElement) => string` (optional)

CookieStorage is currently supported much like local and session storage, and as a result cannot yet pass the full range cookie options. Currently only expiry is supported.
```tsx
import { MXElement, CustomElement, Storage } from '@interstice/mx'

@MXElement({ tag: 'my-button' })
class MyButton extends CustomElement {

    @Storage({ key: 'count', storageType: 'cookie', expiry: 1 })
    count: number = 0

    render() {
        return (
            <button>
                {this.count}
            </button>
        )
    }
}
```

#### Memory

**Options**
- key: `string`
- storageType: `'memory'`
- scope: `string|(el: CustomElement) => string` (optional)

This stores information in a Map, and is global to all elements.
```tsx
import { MXElement, CustomElement, Storage } from '@interstice/mx'

@MXElement({ tag: 'my-button' })
class MyButton extends CustomElement {

    @Storage({ key: 'count', storageType: 'memory' })
    count: number = 0

    render() {
        return (
            <button>
                {this.count}
            </button>
        )
    }
}
```

##### Multiple

Property decorators stack and can be used to work with various states in sync.
If for example, you want a component to rerender automatically when interfacing with Storage adapters,
you can add a State decorator as well.

This ensures the data is loaded from local storage initially, but updates to the property not only update local storage it will rerender the component automatically.

```tsx
import { MXElement, CustomElement, Storage, State } from '@interstice/mx'

@MXElement({ tag: 'my-button' })
class MyButton extends CustomElement {

    @Storage({ key: 'count' })
    @State()
    count: number = 0

    render() {
        return (
            <button>
                {this.count}
            </button>
        )
    }
}
```

##### Scoped

This allows storage access to be scoped or grouped to specific data and can operate on other instance properties of the element.

Static Reference:
```tsx
import { MXElement, CustomElement, Storage } from '@interstice/mx'

@MXElement({ tag: 'my-button' })
class MyButton extends CustomElement {

    @Storage({ key: 'count', scope: 'group:1' })
    count: number = 0
    
    render() {
        return (
            <button>
                {this.count}
            </button>
        )
    }
}

```
Dynamic Reference:
```tsx
import { MXElement, CustomElement, Storage } from '@interstice/mx'

@MXElement({ tag: 'my-button' })
class MyButton extends CustomElement {

    id: string
    
    @Storage({ key: 'count', scope: '@scopeId' })
    count: number = 0
    
    scopeId() {
        return `group:${el.id}`
    }

    render() {
        return (
            <button>
                {this.count}
            </button>
        )
    }
}
```

Dynamic Function:
```tsx
import { MXElement, CustomElement, Storage } from '@interstice/mx'

@MXElement({ tag: 'my-button' })
class MyButton extends CustomElement {

    id: string
    
    @Storage({ key: 'count', scope: (el: MyButton) => `group:${el.id}` })
    count: number = 0

    render() {
        return (
            <button>
                {this.count}
            </button>
        )
    }
}
```

## Styles

To more easily streamline styling, any string that is returned from a CustomElement `styles` method will be inserted into the ShadowDOM of the element.
Styling native WebComponents can be done in any possible way that leads to the `styles` property returning a string, babel macros or other solutions may be possible here as decorated functionality though not explicitly supported.

For Design systems and theming management check out the [OpenProps](https://open-props.style/) project.

```tsx
import { MXElement, CustomElement } from '@interstice/mx'

@MXElement({ tag: 'my-button' })
class MyButton extends CustomElement {
    styles() {
        return /* css */ `
          button {
            border: none;
            background: hotpink;
            color: black;
            padding: 0.5rem 0.75rem;
          }
        `
    }

    render() {
        return (
            <button>
                {this.count}
            </button>
        )
    }
}
```

### Dark mode

Dark mode toggling can be achieved through a couple custom elements and a few of the earlier introduced concepts.

`ThemeProvider` - manage the style state

```tsx
import { CustomElement, MXElement, On, Storage } from "@interstice/mx";

@MXElement({ tag: "theme-provider" })
export class ThemeProvider extends CustomElement {
    @Storage({ key: "darkMode" })
    darkMode: boolean | undefined = undefined;

    @On("updateDarkMode")
    updateDarkMode(e: CustomEvent<boolean>) {
        this.darkMode = e.detail;
        super.updateStyles();
    }

    async connected() {
        if (typeof this.darkMode !== "boolean") {
            this.darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
    }

    darkModeStyles() {
        return `
          --background-color: black;
          --color: white;
        `;
    }

    lightModeStyles() {
        return `
          --background-color: white;
          --color: black;
        `;
    }

    styles() {
        return `
          ${super.styles()}
          :host {
            ${this.darkMode ? this.darkModeStyles() : this.lightModeStyles()}
          }
        `;
    }

    render() {
        return (
            <slot></slot>
        );
    }
}

```

`ThemeToggle` - a button to trigger the change in the ThemeProvider

```tsx
import {
    CustomElement,
    Dispatch,
    MXElement,
    State,
    Storage,
} from "@interstice/mx";

@MXElement({ tag: "theme-toggle" })
export class ThemeToggle extends CustomElement {
    @Storage({ key: "darkMode" })
    @State()
    enabled: boolean | undefined = undefined;

    @Dispatch("updateDarkMode")
    toggle = () => {
        this.enabled = !this.enabled;

        return this.enabled;
    };

    styles() {
        return /* css */ `
          button {
            background-color: transparent;
            cursor: pointer;
            font-size: 20px;
            appearance: none;
            border: none;
            height: 34px;
            width: 34px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            will-change: background-color;
            transition: background-color 0.2s ease-out;
          }
          button:hover {
            background-color: var(--background-color);
          }
        `;
    }

    render() {
        return (
            <button type="button" onclick={this.toggle}>
                {this.enabled ? "🌙" : "☀️️️"}
            </button>
        );
    }
}
```

Using the ThemeProvider and ThemeToggle in an AppShell like element:

```tsx
import { CustomElement, MXElement } from "@interstice/mx";

@MXElement({ tag: "my-app" })
export class MyApp extends CustomElement {
    async elements() {
        await Promise.all([
            import('./theme-provider.tsx'),
            import('./theme-toggle.tsx')
        ])
    }
    
    render() {
        return (
            <theme-provider>
                <theme-toggle></theme-toggle>
                {<!-- Remainder of application -->}
            </theme-provider>
        );
    }
}
```

## Routing

MX includes a nested router capable of transforming any element into a RouteElement by simply specifying that the element responds to a route pattern.

Route patterns are just regex or strings containing regex.

```tsx
import { CustomElement, MXElement } from "@interstice/mx";

@MXElement({ tag: "page-index", route: '^/$' })
export class PageIndex extends CustomElement {
    render() {
        return (
            <div>
                Page Index matches `/` only.
                <slot></slot>
            </div>
        );
    }
}
```

Routes can match dynamic portions

```tsx
import { CustomElement, MXElement } from "@interstice/mx";

@MXElement({ tag: "page-details", route: '^\/details\/?(\\d+)?$' })
export class PageDetails extends CustomElement {
    render() {
        return (
            <div>
                Page Details matches `/details` or `/details/` or `/details/1`, but not `/details/a.
            </div>
        );
    }
}
```

Dynamic portions can be named for easier reference later.
Any value between `<` and `>` and immediately preceding a capture group will name that group. The `<name>` capture group labels are removed and do not affect route matching.

```tsx
import { CustomElement, MXElement } from "@interstice/mx";

@MXElement({ tag: "page-details", route: '^\/details\/?<id>(\\d+)?$' })
export class PageDetails extends CustomElement {
    render() {
        return (
            <div>
                Page Details matches `/details` or `/details/` or `/details/1`, but not `/details/a.
            </div>
        );
    }
}
```

```tsx
import { CustomElement, MXElement } from "@interstice/mx";

@MXElement({ tag: "my-app" })
export class MyApp extends CustomElement {
    render() {
        return (
            <div>
                <page-index>
                    <page-details></page-details>
                </page-index>
            </div>
        );
    }
}
```

### Route Params

All the details of a matched route can be mapped to a nested elements properties via a set of three property decorators: `Param`, `QueryParam`, `HashParam`.

#### Param

Given this button is used within the previous `page-details` element example the id Param can be retrieved in 2 ways.

##### Indexed

The params are matched within a RegExpMatchArray, so the first group match will be index 1...n

```tsx
import { CustomElement, MXElement, Param } from "@interstice/mx";

@MXElement({ tag: "my-button" })
export class MyApp extends CustomElement {
    @Param(1)
    id: number|undefined = undefined

    render() {
        return (
            <button>
                Add {this.id} to cart.
            </button>
        );
    }
}
```

##### Named

```tsx
import { CustomElement, MXElement, Param } from "@interstice/mx";

@MXElement({ tag: "my-button" })
export class MyApp extends CustomElement {
    @Param('id')
    id: number|undefined = undefined
    
    render() {
        return (
            <button>
                Add {this.id} to cart.
            </button>
        );
    }
}
```

#### QueryParam

Any query params contained in the url can be interacted with.

```tsx
import { CustomElement, MXElement, Param, QueryParam } from "@interstice/mx";

@MXElement({ tag: "my-button" })
export class MyApp extends CustomElement {
    @Param('id')
    id: number|undefined = undefined
    
    @QueryParam('addedToCart')
    addedToCart: string = ''
    
    toggle = () => {
        this.addedToCart = this.addedToCart ? '' : this.id.toString()
    }

    render() {
        return (
            <button onClick={this.clicked}>
                {this.addedToCart ? `Add ${this.id} to cart` : `Remove ${this.id} from cart`}
            </button>
        );
    }
}
```

#### HashParam

Any hash params contained in the url can be interacted with.

```tsx
import { CustomElement, MXElement, Param, HashParam } from "@interstice/mx";

@MXElement({ tag: "my-button" })
export class MyApp extends CustomElement {
    @Param('id')
    id: number|undefined = undefined
    
    @HashParam('addedToCart')
    addedToCart: string = ''
    
    toggle = () => {
        this.addedToCart = this.addedToCart ? '' : this.id.toString()
    }

    render() {
        return (
            <button onClick={this.clicked}>
                {this.addedToCart ? `Add ${this.id} to cart` : `Remove ${this.id} from cart`}
            </button>
        );
    }
}
```

### MXLink

To single page route between pages a CustomElement is already defined `mx-link` which can be used to route between any matching route elements.

```tsx
import { CustomElement, MXElement } from "@interstice/mx";

@MXElement({ tag: "my-app" })
export class MyApp extends CustomElement {
    // Active links can be styled
    // Links which are set as `root` are considered `aria-current="page"` and have a shadow part `anchor-current-page`.
    // All other Links are are considered `aria-current="location"` and have a shadow part `anchor-current-location` denoting nested matched route links.
    styles() {
        return `
          mx-link::part(anchor),
          mx-link::part(anchor-current-page),
          mx-link::part(anchor-current-location) {
            color: white;
            background-color: black;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            height: 36px;
            padding-inline: 1rem;
            will-change: background-color;
            transition: background-color 0.2s ease-out;
          }
          mx-link:hover::part(anchor) {
            color: black;
            background-color: pink;
          }
          mx-link::part(anchor-current-page)  {
            color: black;
            background-color: lavender;
          }
          mx-link::part(anchor-current-location)  {
            color: black;
            background-color: hotpink;
          }
        `
    }
    
    render() {
        return (
            <div>
                <nav>
                    <mx-link href="/" root="">Home</mx-link>
                    <mx-link href="/details">Details</mx-link>
                </nav>
                <page-index>
                    <page-details></page-details>
                </page-index>
            </div>
        );
    }
}
```

### navigate

It is possible to navigate in code using the same underlying function as is used in `mx-link`, `navigate`.

```tsx
import {CustomElement, MXElement, navigate} from "@interstice/mx";

@MXElement({tag: "my-app"})
export class MyApp extends CustomElement {
    selectedId: number = 1
    
    loadSelectedDetails = (e: any) => {
        e.preventDefault()
        navigate(e.target.href)
    }

    render() {
        return (
            <div>
                <nav>
                    <mx-link href="/" root="">Home</mx-link>
                    <mx-link href="/details">Details</mx-link>
                    <a href={`/details/${this.selectedId}`} onClick={this.loadSelectedDetails}>Selected Details</a>
                </nav>
                <page-index>
                    <page-details></page-details>
                </page-index>
            </div>
        );
    }
}
```
