import test from 'ava'
import { createStoredValue } from 'typed-ls'

const mockLocalStorage = () => {
  let mockLocalStorageValue: string | undefined

  // @ts-expect-error All functions don't need to be mocked
  global.localStorage = {
    getItem: () => {
      return mockLocalStorageValue
    },
    setItem: (_key: string, payload: string) => {
      mockLocalStorageValue = payload
    },
    removeItem: () => {
      mockLocalStorageValue = undefined
    },
  }
}

test('Test', (t) => {
  mockLocalStorage()

  const value = createStoredValue('value', 'a default string')

  t.is(value.get(), 'a default string')

  value.set('an updated value')

  t.is(value.get(), 'an updated value')

  value.remove()

  t.is(value.get(), 'a default string')
})
