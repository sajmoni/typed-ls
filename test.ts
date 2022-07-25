import test from 'ava'
import { createStoredValue } from 'typed-ls'

const mockLocalStorage = () => {
  let mockLocalStorageValue: string | null = null

  // @ts-expect-error All properties don't need to be mocked
  global.localStorage = {
    getItem: () => {
      return mockLocalStorageValue
    },
    setItem: (_key: string, payload: string) => {
      mockLocalStorageValue = payload
    },
    removeItem: () => {
      mockLocalStorageValue = null
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
