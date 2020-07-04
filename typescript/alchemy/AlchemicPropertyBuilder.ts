import { ReactNode } from 'react'

import { Arrays } from '../Arrays'

import { AlchemicProperty } from './AlchemicProperty'

export class AlchemicPropertyBuilder {
  public readonly effects : ReactNode[]
  public duration : ReactNode
  public cost : ReactNode

  public constructor () {
    this.effects = []
    this.duration = null
    this.cost = null
  }

  public build () : AlchemicProperty {
    return {
      effects: [].concat(this.effects),
      duration: this.duration,
      cost: this.cost
    }
  }

  public clear () : void {
    this.effects.length = 0
    this.duration = null
    this.cost = null
  }

  public addEffect (effect : ReactNode) : AlchemicPropertyBuilder {
    this.effects.push(effect)
    return this
  }

  public setEffect (index : number, effect : ReactNode) : AlchemicPropertyBuilder {
    while (this.effects.length <= index) {
      this.effects.push(null)
    }

    this.effects.push(effect)
    return this
  }

  public setDuration (duration : ReactNode) : AlchemicPropertyBuilder {
    this.duration = duration
    return this
  }

  public setCost (cost : ReactNode) : AlchemicPropertyBuilder {
    this.cost = cost
    return this
  }

  public copy (toCopy : AlchemicProperty) : void {
    Arrays.copy(toCopy.effects, this.effects)
    this.duration = toCopy.duration
    this.cost = toCopy.cost
  }

  public clone () : AlchemicPropertyBuilder {
    const result : AlchemicPropertyBuilder = new AlchemicPropertyBuilder()
    result.copy(this)

    return result
  }

  public equals (other : any) : boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof AlchemicPropertyBuilder) {
      return AlchemicProperty.equals(this, other)
    }

    return false
  }
}

export namespace AlchemicPropertyBuilder {
  export const BUILDER : AlchemicPropertyBuilder = new AlchemicPropertyBuilder()

  export function clone (builder : AlchemicPropertyBuilder) : AlchemicPropertyBuilder {
    return builder == null ? builder : builder.clone()
  }

  export function equals (left : AlchemicPropertyBuilder, right : AlchemicPropertyBuilder) : boolean {
    return left == null ? left === right : left.equals(right)
  }

  export function builder () : AlchemicPropertyBuilder {
    BUILDER.clear()
    return BUILDER
  }
}
