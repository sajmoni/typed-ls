import { expect, test, vi } from 'vitest'

import { createStoredValue } from './src'

test('Works normally', () => {
  const value = createStoredValue('value', 'a default string')

  expect(value.get()).toBe('a default string')

  value.set('an updated value')

  expect(value.get()).toBe('an updated value')

  value.remove()

  expect(value.get()).toBe('a default string')
})

test('Local storage not available - error', () => {
  vi.stubGlobal('localStorage', {})
  const value = createStoredValue('value', 'a default string')

  expect(value.get()).toBe('a default string')

  // No-op
  value.set('an updated value')

  // If local storage is not available, default value will always be returned
  expect(value.get()).toBe('a default string')

  // No-op
  value.remove()

  expect(value.get()).toBe('a default string')

  vi.unstubAllGlobals()
})
