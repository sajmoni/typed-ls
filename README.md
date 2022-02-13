<h1 align="center">
  typed-ls
</h1>
<h4 align="center">
    Type-safe local storage
</h4>

<div align="center">
  <img src="https://badgen.net/npm/v/typed-ls?icon=npm" />
  <img src="https://badgen.net/bundlephobia/minzip/typed-ls" />
</div>

## :sparkles: Features

This is a tiny helper library that creates type-safe `get` and `set` functions for working with local storage.

It has only one export `createCommand`:

```ts
import { createCommand } from 'typed-ls'

export const language = createCommand('language', 'en')
// language.get() => 'en'
// language.set('jp')
// language.remove()
```

## :newspaper: API

```ts
createCommand<T>(key: string, defaultPayload: T): Command
```

```ts
type Command = {
  get: () => T
  set: (payload: T) => void
  remove: () => void
}
```

### key

The local storage key.

### defaultPayload

If there is no value in local storage, `get` will return the `defaultPayload` instead.

---

## :package: Install

**npm**

```
npm install typed-ls
```

**yarn**

```
yarn add typed-ls
```
