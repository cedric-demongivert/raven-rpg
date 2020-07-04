import { ReactNode } from 'react'

import { Arrays } from '../Arrays'

import { AlchemicPropertyBuilder } from './AlchemicPropertyBuilder'

export type AlchemicProperty = {
  effects: ReactNode[],
  cost: ReactNode,
  duration: ReactNode
}

export namespace AlchemicProperty {
  export function equals (left : AlchemicProperty, right : AlchemicProperty) : boolean {
    if (left == null) return left === right
    if (right == null) return false
    if (left === right) return true

    return left.duration === right.duration &&
           left.cost === right.cost &&
           Arrays.equals(left.effects, right.effects)
  }

  export function builder () : AlchemicPropertyBuilder {
    return AlchemicPropertyBuilder.builder()
  }
}
