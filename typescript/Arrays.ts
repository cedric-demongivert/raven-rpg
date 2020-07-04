import { EqualityPolicy } from './EqualityPolicy'
import { ClonePolicy } from './ClonePolicy'

export namespace Arrays {
  export function copy <T> (origin : T[], target : T[], copy : ClonePolicy<T> = ClonePolicy.identity) : void {
    target.length = 0

    for (const element of origin) {
      target.push(copy(element))
    }
  }

  export function equals <T> (left : T[], right : T[], equality : EqualityPolicy<T> = EqualityPolicy.strict) : boolean {
    if (left == null) return left === right
    if (right == null) return false
    if (left === right) return true

    if (left.length === right.length) {
      for (let index = 0, size = left.length; index < size; ++index) {
        if (!equality(left[index], right[index])) {
          return false
        }
      }

      return true
    }

    return false
  }
}
