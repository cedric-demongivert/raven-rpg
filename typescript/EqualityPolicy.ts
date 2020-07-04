export type EqualityPolicy<T> = (left : T, right : T) => boolean

export namespace EqualityPolicy {
  export function strict <T> (left : T, right : T) : boolean {
    return left === right
  }

  export function loose <T> (left : T, right : T) : boolean {
    return left == right
  }

  export function deep <T> (left : T, right : T) : boolean {
    if (left == null || typeof left !== 'object') {
      return left === right
    }

    return (left as any).equals(right)
  }
}
