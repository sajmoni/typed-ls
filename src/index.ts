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
      return get(key) ?? defaultValue
    },
    set: (payload) => {
      set(key, payload)
    },
    remove: () => {
      remove(key)
    },
  }
}

const set = <Key extends string, Payload>(key: Key, payload: Payload): void => {
  localStorage.setItem(key, JSON.stringify(payload))
}

const get = <Key extends string, Value>(key: Key): Value | undefined => {
  const restored = localStorage.getItem(key)
  return restored === null ? undefined : (JSON.parse(restored) as Value)
}

const remove = <Key extends string>(key: Key): void => {
  localStorage.removeItem(key)
}
