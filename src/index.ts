export type StoredValue<Payload> = ReturnType<typeof createStoredValue<Payload>>

export const createStoredValue = <Payload>(
  key: string,
  defaultValue: Payload,
) => {
  return {
    get: () => {
      try {
        const restored = localStorage.getItem(key)

        return restored === null
          ? defaultValue
          : (JSON.parse(restored) as Payload)
      } catch {
        console.warn(
          'typed-ls: localStorage not available - default value was used',
        )
        return defaultValue
      }
    },
    set: (payload: Payload) => {
      try {
        localStorage.setItem(key, JSON.stringify(payload))
      } catch {
        console.warn(
          'typed-ls: localStorage not available - no value was saved',
        )
      }
    },
    remove: () => {
      try {
        localStorage.removeItem(key)
      } catch {
        console.warn(
          'typed-ls: localStorage not available - no value was removed',
        )
      }
    },
  }
}
