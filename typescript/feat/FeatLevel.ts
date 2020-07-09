import { ReactNode } from 'react'

import { Arrays } from '../Arrays'

import { FeatLevelBuilder } from './FeatLevelBuilder'

export type FeatLevel = {
  description: ReactNode,
  requirements: ReactNode[]
}

export namespace FeatLevel {
  export function equals (left : FeatLevel, right : FeatLevel) : boolean {
    if (left == null) return left === right
    if (right == null) return false
    if (left === right) return true

    return left.description === right.description &&
           Arrays.equals(left.requirements, right.requirements)
  }

  export function builder () : FeatLevelBuilder {
    return FeatLevelBuilder.builder()
  }
}
