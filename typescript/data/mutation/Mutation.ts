import { List } from 'immutable'

import { Entry } from '../Entry'
import { Filter } from '../Filter'

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
  public applyToList(list: List<Entry<Model>>): List<Entry<Model>> {
    switch (this.type) {
      case MutationType.ADDITION:
      case MutationType.MUTATION: {
        const index: number = Entry.bissect(list, this.next.identifier)

        if (index < 0) {
          return list.insert(-index - 1, this.next)
        } else {
          return list.set(index, this.next)
        }
      }
      case MutationType.DELETION: {
        const index: number = Entry.bissect(list, this.previous.identifier)

        if (index >= 0) {
          return list.delete(index)
        } else {
          return list
        }
      }
      default:
        throw new Error(
          'Unable to handle mutation of type ' +
          MutationType.toDebugString(this.type) + ' as no procedure ' +
          'was defined for that.'
        )
    }
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
  export function filter<Model, Filtered extends Model>(filter: Filter<Model, Filtered>, mutation: Mutation<Model> | undefined): mutation is Mutation<Filtered> {
    return mutation && (
      Entry.filter(filter, mutation.previous) ||
      Entry.filter(filter, mutation.next)
    )
  }

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
