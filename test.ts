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

test('Works normally', (t) => {
  mockLocalStorage()

  const value = createStoredValue('value', 'a default string')

  t.is(value.get(), 'a default string')

  value.set('an updated value')

  t.is(value.get(), 'an updated value')

  value.remove()

  t.is(value.get(), 'a default string')
})

test('Local storage not available - error', (t) => {
  const value = createStoredValue('value', 'a default string')

  t.is(value.get(), 'a default string')

  // No-op
  value.set('an updated value')

  // If local storage is not available, default value will always be returned
  t.is(value.get(), 'a default string')

  // No-op
  value.remove()

  t.is(value.get(), 'a default string')
})
