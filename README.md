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
createCommand<T>(key: string, payload: T): Command
```
  
```ts
type Command = {
  get: () => T
  set: (payload: T) => void
  remove: () => void
}
```ts
