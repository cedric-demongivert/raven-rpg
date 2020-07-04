import { ReactNode } from 'react'

import { Arrays } from '../Arrays'
import { Sets } from '../Sets'

import { AlchemicMaterial } from './AlchemicMaterial'
import { AlchemicTransformation } from './AlchemicTransformation'
import { AlchemicProperty } from './AlchemicProperty'

export class AlchemicMaterialBuilder {
  public name : string
  public identifier : string
  public keywords : Set<string>
  public description : ReactNode
  public readonly transformations : [AlchemicTransformation, AlchemicMaterial][]
  public readonly properties : AlchemicProperty[]

  public constructor () {
    this.name = null
    this.description = null
    this.identifier = null
    this.keywords = new Set()
    this.transformations = []
    this.properties = []
  }

  public build () : AlchemicMaterial {
    return {
      name: this.name,
      keywords: new Set(this.keywords),
      description: this.description,
      identifier: this.identifier,
      transformations: [].concat(this.transformations),
      properties: [].concat(this.properties)
    }
  }

  public setName (name : string) : AlchemicMaterialBuilder {
    this.name = name
    return this
  }

  public setIdentifier (identifier : string) : AlchemicMaterialBuilder {
    this.identifier = identifier
    return this
  }

  public setDescription (description : ReactNode) : AlchemicMaterialBuilder {
    this.description = description
    return this
  }

  public addTransformation (transformation : AlchemicTransformation, result : AlchemicMaterial) : AlchemicMaterialBuilder {
    this.transformations.push([transformation, result])
    return this
  }

  public setTransformation (index : number, transformation : AlchemicTransformation, result : AlchemicMaterial) : AlchemicMaterialBuilder {
    this.transformations[index] = [transformation, result]
    return this
  }

  public addProperty (property : AlchemicProperty) : AlchemicMaterialBuilder {
    this.properties.push(property)
    return this
  }

  public setProperty (index : number, property : AlchemicProperty) : AlchemicMaterialBuilder {
    this.properties[index] = property
    return this
  }

  public addKeyword (keyword : string) : AlchemicMaterialBuilder {
    this.keywords.add(keyword)
    return this
  }

  public copy (toCopy : AlchemicMaterial) : AlchemicMaterialBuilder {
    this.name = toCopy.name
    this.description = toCopy.description
    this.identifier = toCopy.identifier
    Arrays.copy(toCopy.properties, this.properties)
    Arrays.copy(toCopy.transformations, this.transformations)
    Sets.copy(toCopy.keywords, this.keywords)

    return this
  }

  public clone () : AlchemicMaterialBuilder {
    const result : AlchemicMaterialBuilder = new AlchemicMaterialBuilder()
    result.copy(this)

    return result
  }

  public clear () : void {
    this.name = null
    this.identifier = null
    this.description = null
    this.transformations.length = 0
    this.properties.length = 0
    this.keywords.clear()
  }

  public equals (other : any) : boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof AlchemicMaterialBuilder) {
      return AlchemicMaterial.equals(this, other)
    }
  }
}

export namespace AlchemicMaterialBuilder {
  export const BUILDER : AlchemicMaterialBuilder = new AlchemicMaterialBuilder()

  export function clone (builder : AlchemicMaterialBuilder) : AlchemicMaterialBuilder {
    return builder == null ? builder : builder.clone()
  }

  export function equals (left : AlchemicMaterialBuilder, right : AlchemicMaterialBuilder) : boolean {
    return left == null ? left === right : left.equals(right)
  }

  export function builder () : AlchemicMaterialBuilder {
    BUILDER.clear()
    return BUILDER
  }
}
