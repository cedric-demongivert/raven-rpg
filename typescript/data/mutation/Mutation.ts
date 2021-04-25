import { immutable, sealed } from '../../decorators'
import { equals } from '../../utils'

import { Entry } from '../Entry'

import { MutationType } from './MutationType'

import { Addition } from './Addition'
import { Deletion } from './Deletion'
import { Update } from './Update'
import { Identity } from './Identity'

/**
*
*/
@immutable
@sealed
export class Mutation<Model, Properties extends Mutation.Properties<Model> = Mutation.Properties<Model>> {
  /**
   * 
   */
  public static create<Model>(properties: Addition.Properties<Model>): Addition<Model>
  /**
   * 
   */
  public static create<Model>(properties: Deletion.Properties<Model>): Deletion<Model>
  /**
   * 
   */
  public static create<Model>(properties: Update.Properties<Model>): Update<Model>
  /**
   * 
   */
  public static create<Model>(properties: Identity.Properties<Model>): Identity<Model>
  /**
   * 
   */
  public static create<Model, Properties extends Mutation.Properties<Model>>(properties: Properties): Mutation<Model, Properties>
  public static create<Model, Properties extends Mutation.Properties<Model>>(properties: Properties): Mutation<Model, Properties> {
    return new Mutation(properties)
  }

  /**
   *
   */
  public readonly type: Properties['type']

  /**
   *
   */
  public readonly previous: Properties['previous']

  /**
   *
   */
  public readonly next: Properties['next']

  /**
   *
   */
  private constructor(properties: Properties) {
    this.type = properties.type
    this.previous = properties.previous
    this.next = properties.next
  }

  /**
   * 
   */
  public toString(): string {
    return (
      this.constructor.name + ' ' +
      MutationType.toDebugString(this.type) + ' ' +
      new String(this.previous) + ' ' +
      new String(this.next)
    )
  }

  /**
   *
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof Mutation) {
      return (
        this.type === other.type &&
        equals(this.previous, other.previous) &&
        equals(this.next, other.next)
      )
    }

    return false
  }
}

export namespace Mutation {
  /**
   * 
   */
  export type Properties<Model> = (
    Addition.Properties<Model> |
    Update.Properties<Model> |
    Deletion.Properties<Model> |
    Identity.Properties<Model>
  )

  /**
   * 
   */
  export function is(value: any): value is Mutation<any> {
    return value instanceof Mutation
  }

  /**
   * 
   */
  export function assert(value: any, message?: string | undefined): asserts value is Mutation<any> {
    if (!is(value)) {
      throw new Error(message || 'The given value is not a mutation instance.')
    }
  }

  /**
   * 
   */
  export const isAddition: typeof Addition.is = Addition.is

  /**
   * 
   */
  export const assertAddition: typeof Addition.assert = Addition.assert

  /**
   * 
   */
  export const isDeletion: typeof Deletion.is = Deletion.is

  /**
   * 
   */
  export const assertDeletion: typeof Deletion.assert = Deletion.assert

  /**
   * 
   */
  export const isUpdate: typeof Update.is = Update.is

  /**
   * 
   */
  export const assertUpdate: typeof Update.assert = Update.assert

  /**
   * 
   */
  export function isModel<Model>(value: Mutation<any>, validator: (value: any) => value is Model): value is Mutation<Model> {
    return isDeletion(value) ? validator(value.previous) : validator(value.next)
  }

  /**
   * 
   */
  export function assertModel<Model>(value: Mutation<any>, asserter: (value: any) => asserts value is Model, message?: string | undefined): asserts value is Mutation<Model> {
    try {
      asserter(isDeletion(value) ? value.previous : value.next)
    } catch (error) {
      throw new Error(message || 'The given mutation is not a mutation of the expected model.')
    }
  }

  /**
   *
   */
  export function createIdentity<Model>(model: Model): Identity<Model> {
    return Mutation.create({
      type: MutationType.IDENTITY,
      previous: model,
      next: model
    })
  }

  /**
   *
   */
  export function createAddition<Model>(model: Model): Addition<Model> {
    return Mutation.create({
      type: MutationType.ADDITION,
      previous: undefined,
      next: model
    })
  }

  /**
   *
   */
  export function createDeletion<Model>(model: Model): Deletion<Model> {
    return Mutation.create({
      type: MutationType.DELETION,
      previous: model,
      next: undefined
    })
  }

  /**
   *
   */
  export function createUpdate<Model>(previous: Model, next: Model): Update<Model> {
    return Mutation.create({
      type: MutationType.UPDATE,
      previous,
      next
    })
  }
}
