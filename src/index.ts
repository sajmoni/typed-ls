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
      const restored: string | null = localStorage.getItem(key)

      return restored === null
        ? defaultValue
        : (JSON.parse(restored) as Payload)
    },
    set: (payload) => {
      localStorage.setItem(key, JSON.stringify(payload))
    },
    remove: () => {
      localStorage.removeItem(key)
    },
  }
}
