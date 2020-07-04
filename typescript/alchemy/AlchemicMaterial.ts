import { ReactNode } from 'react'

import { Arrays } from '../Arrays'
import { Sets } from '../Sets'

import { AlchemicTransformationEntry } from './AlchemicTransformationEntry'
import { AlchemicProperty } from './AlchemicProperty'
import { AlchemicMaterialBuilder } from './AlchemicMaterialBuilder'

export type AlchemicMaterial = {
  identifier: string,
  name: string,
  keywords: Set<string>,
  description: ReactNode,
  properties: ReactNode[],
  transformations: AlchemicTransformationEntry[]
}

export namespace AlchemicMaterial {
  export function equals (left : AlchemicMaterial, right : AlchemicMaterial) : boolean {
    if (left == null) return left === right
    if (right == null) return false
    if (left === right) return true

    return left.name === right.name &&
           left.identifier === right.identifier &&
           left.description === right.description &&
           Arrays.equals(left.properties, right.properties, AlchemicProperty.equals) &&
           Arrays.equals(left.transformations, right.transformations, AlchemicTransformationEntry.equals) &&
           Sets.equals(left.keywords, right.keywords)
  }

  export function builder () : AlchemicMaterialBuilder {
    return AlchemicMaterialBuilder.builder()
  }
}
