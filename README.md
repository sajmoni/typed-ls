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

This is a tiny helper library that creates type-safe `get` and `set` functions for working with local storage

### Why?

- The key is only defined once
- Ensures the same type is used when both getting and setting the value
- Reduces boilerplate

```ts
import { createStoredValue } from 'typed-ls'

const defaultValue = 'en'

export const language = createStoredValue('language', defaultValue)
// language.get() => 'en'
// language.set('jp')
// language.remove()
```

The type will be inferred from the default value. If this is not possible (for example if the default value is `undefined` or `[]`) you can explicitly set the type instead:

```ts
export const language = createStoredValue<string[]>('languages', [])
```

## :newspaper: API

```ts
createStoredValue<T>(key: string, defaultPayload: T): StoredValue
```

```ts
type StoredValue = {
  get: () => T
  set: (payload: T) => void
  remove: () => void
}
```

### key

The local storage key

### defaultPayload

If there is no value in local storage, `get` will return the `defaultPayload` instead

---

## :package: Install

```console
npm install typed-ls
```

---

## Local storage not available

If local storage is not available then:

- `get` always returns default values
- `set` and `remove` are no-ops

This can happen if the user has turned off local storage in the privacy setting of their browser
