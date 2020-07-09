import { ReactNode } from 'react'

import { Arrays } from '../Arrays'

import { FeatLevel } from './FeatLevel'

export class FeatLevelBuilder {
  public readonly requirements : ReactNode[]
  public description : ReactNode

  public constructor () {
    this.requirements = []
    this.description = null
  }

  public build () : FeatLevel {
    return {
      requirements: [].concat(this.requirements),
      description: this.description
    }
  }

  public clear () : void {
    this.requirements.length = 0
    this.description = null
  }

  public addRequirement (effect : ReactNode) : FeatLevelBuilder {
    this.requirements.push(effect)
    return this
  }

  public setRequirement (index : number, effect : ReactNode) : FeatLevelBuilder {
    while (this.requirements.length <= index) {
      this.requirements.push(null)
    }

    this.requirements[index] = effect
    return this
  }

  public setDescription (description : ReactNode) : FeatLevelBuilder {
    this.description = description
    return this
  }

  public copy (toCopy : FeatLevel) : void {
    Arrays.copy(toCopy.requirements, this.requirements)
    this.description = toCopy.description
  }

  public clone () : FeatLevelBuilder {
    const result : FeatLevelBuilder = new FeatLevelBuilder()
    result.copy(this)

    return result
  }

  public equals (other : any) : boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof FeatLevelBuilder) {
      return FeatLevel.equals(this, other)
    }

    return false
  }
}

export namespace FeatLevelBuilder {
  export const BUILDER : FeatLevelBuilder = new FeatLevelBuilder()

  export function clone (builder : FeatLevelBuilder) : FeatLevelBuilder {
    return builder == null ? builder : builder.clone()
  }

  export function equals (left : FeatLevelBuilder, right : FeatLevelBuilder) : boolean {
    return left == null ? left === right : left.equals(right)
  }

  export function builder () : FeatLevelBuilder {
    BUILDER.clear()
    return BUILDER
  }
}
