export type StoredValue<Payload> = {
  get: () => Payload
  set: (payload: Payload) => void
  remove: () => void
}

export const createStoredValue = <Payload>(
  key: string,
  defaultValue: Payload,
): StoredValue<Payload> => {
  return {
    get: () => {
      try {
        const restored: string | null = localStorage.getItem(key)

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
    set: (payload) => {
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
