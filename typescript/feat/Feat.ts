import { Arrays } from '../Arrays'
import { Sets } from '../Sets'

import { FeatLevel } from './FeatLevel'
import { FeatBuilder } from './FeatBuilder'

export type Feat = {
  identifier: string,
  name: string,
  keywords: Set<string>,
  levels: FeatLevel[]
}

export namespace Feat {
  export function equals (left : Feat, right : Feat) : boolean {
    if (left == null) return left === right
    if (right == null) return false
    if (left === right) return true

    return left.name === right.name &&
           left.identifier === right.identifier &&
           Arrays.equals(left.levels, right.levels, FeatLevel.equals) &&
           Sets.equals(left.keywords, right.keywords)
  }

  export function builder () : FeatBuilder {
    return FeatBuilder.builder()
  }
}
