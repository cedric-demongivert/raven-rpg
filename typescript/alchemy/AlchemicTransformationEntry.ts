import { AlchemicMaterial } from './AlchemicMaterial'
import { AlchemicTransformation } from './AlchemicTransformation'

export type AlchemicTransformationEntry = [AlchemicTransformation, AlchemicMaterial]

export namespace AlchemicTransformationEntry {
  export function equals (left : AlchemicTransformationEntry, right : AlchemicTransformationEntry) : boolean {
    if (left == null) return left === right
    if (right == null) return false
    if (left === right) return true

    return left[0] === right[0] &&
           AlchemicMaterial.equals(left[1], right[1])
  }
}
