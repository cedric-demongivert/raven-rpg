import { Arrays } from '../Arrays'
import { Sets } from '../Sets'

import { FeatLevel } from './FeatLevel'
import { FeatBuilder } from './FeatBuilder'

import { ReactNode } from 'react'

export type Feat = {
  identifier: string,
  name: string,
  keywords: Set<string>,
  description: ReactNode
}

export namespace Feat {
  export function equals (left : Feat, right : Feat) : boolean {
    if (left == null) return left === right
    if (right == null) return false
    if (left === right) return true

    return left.name === right.name &&
           left.identifier === right.identifier &&
           left.description === right.description &&
           Sets.equals(left.keywords, right.keywords)
  }

  export function builder () : FeatBuilder {
    return FeatBuilder.builder()
  }
}
