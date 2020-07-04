import { ClonePolicy } from './ClonePolicy'

export namespace Sets {
  export function equals <T> (left : Set<T>, right : Set<T>) : boolean {
    if (left == null) return left === right
    if (right == null) return false
    if (left === right) return true

    if (left.size === right.size) {
      for (const element of left) {
        if (!right.has(element)) {
          return false
        }
      }

      return true
    }

    return false
  }

  export function copy <T> (origin : Set<T>, target : Set<T>, copy : ClonePolicy<T> = ClonePolicy.identity) : void {
    target.clear()

    for (const element of origin) {
      target.add(copy(element))
    }
  }
}
