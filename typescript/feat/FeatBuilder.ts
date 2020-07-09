import { Arrays } from '../Arrays'
import { Sets } from '../Sets'

import { Feat } from './Feat'
import { FeatLevel } from './FeatLevel'

export class FeatBuilder {
  public name : string
  public identifier : string
  public keywords : Set<string>
  public readonly levels : FeatLevel[]

  public constructor () {
    this.name = null
    this.identifier = null
    this.keywords = new Set()
    this.levels = []
  }

  public build () : Feat {
    return {
      identifier: this.identifier,
      name: this.name,
      keywords: new Set(this.keywords),
      levels: [].concat(this.levels)
    }
  }

  public setName (name : string) : FeatBuilder {
    this.name = name
    return this
  }

  public setIdentifier (identifier : string) : FeatBuilder {
    this.identifier = identifier
    return this
  }

  public addLevel (level : FeatLevel) : FeatBuilder {
    this.levels.push(level)
    return this
  }

  public setLevel (index : number, level : FeatLevel) : FeatBuilder {
    while (this.levels.length <= index) {
      this.levels.push(null)
    }

    this.levels[index] = level
    return this
  }

  public addKeyword (keyword : string) : FeatBuilder {
    this.keywords.add(keyword)
    return this
  }

  public copy (toCopy : Feat) : FeatBuilder {
    this.name = toCopy.name
    this.identifier = toCopy.identifier
    Arrays.copy(toCopy.levels, this.levels)
    Sets.copy(toCopy.keywords, this.keywords)

    return this
  }

  public clone () : FeatBuilder {
    const result : FeatBuilder = new FeatBuilder()
    result.copy(this)

    return result
  }

  public clear () : void {
    this.name = null
    this.identifier = null
    this.levels.length = 0
    this.keywords.clear()
  }

  public equals (other : any) : boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof FeatBuilder) {
      return Feat.equals(this, other)
    }
  }
}

export namespace FeatBuilder {
  export const BUILDER : FeatBuilder = new FeatBuilder()

  export function clone (builder : FeatBuilder) : FeatBuilder {
    return builder == null ? builder : builder.clone()
  }

  export function equals (left : FeatBuilder, right : FeatBuilder) : boolean {
    return left == null ? left === right : left.equals(right)
  }

  export function builder () : FeatBuilder {
    BUILDER.clear()
    return BUILDER
  }
}
