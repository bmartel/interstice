# \<i-component-name>

A collection of webcomponents which follow the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
 npm install @interstice/component-name
```

## Usage

```html
<script type="module">
  import '@interstice/component-name';
</script>

<i-component-name></i-component-name>
```

## Linting with ESLint, Prettier, and Types

To scan the project for linting errors, run

```bash
npm run lint
```

You can lint with ESLint and Prettier individually as well

```bash
npm run lint:eslint
```

```bash
npm run lint:prettier
```

To automatically fix many linting errors, run

```bash
npm run format
```

You can format using ESLint and Prettier individually as well

```bash
npm run format:eslint
```

```bash
npm run format:prettier
```

## Testing with Karma

To run the suite of karma tests, run

```bash
lerna run test
```

or to run them in compatibility mode for legacy browsers

```bash
lerna run test:compatibility
```

To run the tests in watch mode (for <abbr title="test driven development">TDD</abbr>, for example), run

```bash
lerna run test:watch
```

or

```bash
lerna run test:compatibility
```

## Testing with Karma via BrowserStack

To run the suite of karma tests in BrowserStack, run

```bash
lerna run test:bs
```

## Managing Test Snapshots

You can manage the test snapshots using

```bash
lerna run test:update-snapshots
```

or

```bash
lerna run test:prune-snapshots
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```
