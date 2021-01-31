import { Entry } from '../Entry'

import { MutationType } from './MutationType'

/**
*
*/
export class Mutation<Model> {
  /**
  *
  */
  public readonly previous: Entry<Model> | undefined

  /**
  *
  */
  public readonly next: Entry<Model> | undefined

  /**
  *
  */
  public readonly type: MutationType

  /**
  *
  */
  public constructor(type: MutationType, previous: Entry<Model> | undefined, next: Entry<Model> | undefined) {
    this.type = type
    this.previous = previous
    this.next = next
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
        (this.previous ? this.previous.equals(other.previous) : this.previous === other.previous) &&
        (this.next ? this.next.equals(other.next) : this.next === other.next)
      )
    }

    return false
  }
}

export namespace Mutation {
  /**
  *
  */
  export function addition<Model>(value: Entry<Model>): Mutation<Model> {
    return new Mutation(MutationType.ADDITION, undefined, value)
  }

  /**
  *
  */
  export function deletion<Model>(value: Entry<Model>): Mutation<Model> {
    return new Mutation(MutationType.DELETION, value, undefined)
  }

  /**
  *
  */
  export function mutation<Model>(previous: Entry<Model>, next: Entry<Model>): Mutation<Model> {
    return new Mutation(MutationType.MUTATION, previous, next)
  }
}
