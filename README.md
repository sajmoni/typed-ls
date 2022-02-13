# typed-ls
> Type-safe local storage

This is a tiny helper library that creates typesafe `get` and `set` functions for working with local storage.


It has only one export `createCommand`:

```ts
import { createCommand } from 'typed-ls'

export const language = createCommand('language', 'en')
// language.get() => 'en'
// language.set('jp')
// language.remove()
```

## API 

```ts
createCommand<T>(key: string, defaultPayload: T): Command
```
  
```ts
type Command = {
  get: () => T
  set: (payload: T) => void
  remove: () => void
}
```ts

### key

The local storage key.

### defaultPayload

If there is no value in local storage, `get` will return the `defaultPayload` instead. 

