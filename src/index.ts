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
      } catch (error) {
        console.error(
          'Failed to get value from local storage:',
          (error as Error).message,
        )
        return defaultValue
      }
    },
    set: (payload) => {
      try {
        localStorage.setItem(key, JSON.stringify(payload))
      } catch (error) {
        console.error(
          'Failed to set value to local storage:',
          (error as Error).message,
        )
      }
    },
    remove: () => {
      try {
        localStorage.removeItem(key)
      } catch (error) {
        console.error(
          'Failed to remove from local storage:',
          (error as Error).message,
        )
      }
    },
  }
}
