export type ClonePolicy<T> = (value : T) => T

export namespace ClonePolicy {
  export function identity <T> (value : T) : T {
    return value
  }
}
