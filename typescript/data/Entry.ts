import { List } from 'immutable'

import { Comparator } from '@cedric-demongivert/gl-tool-collection'

import { Filter } from './Filter'
import { Mapping } from './Mapping'

export class Entry<Model> {
  /**
  *
  */
  public readonly identifier: number

  /**
  *
  */
  public readonly model: Model

  /**
  *
  */
  public constructor(identifier: number, model: Model) {
    this.identifier = identifier
    this.model = model
  }

  /**
  *
  */
  public setIdentifier(identifier: number): Entry<Model> {
    if (identifier !== this.identifier) {
      return new Entry(identifier, this.model)
    } else {
      return this
    }
  }

  /**
  *
  */
  public setModel(model: Model): Entry<Model> {
    if (model !== this.model) {
      return new Entry(this.identifier, model)
    } else {
      return this
    }
  }

  /**
  *
  */
  public toJS(): any {
    return {
      identifier: this.identifier,
      model: this.model
    }
  }

  /**
  *
  */
  public toString(): string {
    return 'Entry #' + this.identifier + ' ' + this.model.toString()
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof Entry) {
      const model: any = this.model

      return (
        other.identifier === this.identifier &&
        (model.equals ? model.equals(other.model) : model === other.model)
      )
    }
  }
}

/**
*
*/
export namespace Entry {
  /**
  *
  */
  export function filter<Model, Filtered extends Model>(filter: Filter<Model, Filtered>, entry: Entry<Model> | undefined): entry is Entry<Filtered> {
    return entry && filter(entry.model)
  }

  /**
  *
  */
  export function map<Model, Value>(mapping: Mapping<Model, Value>, entry: Entry<Model>): Value {
    return mapping(entry.model)
  }

  /**
  *
  */
  export function bissect<Model>(entries: List<Entry<Model>>, identifier: number): number {
    if (entries.size > 0) {
      let left: number = 0
      let right: number = 0 + entries.size

      while (left !== right) {
        const cursor: number = left + ((right - left) >>> 1)
        const entry: Entry<Model> = entries.get(cursor)
        const comparison: number = identifier - entry.identifier

        if (comparison === 0) {
          return cursor
        } else if (comparison > 0) {
          left = cursor + 1
        } else {
          right = cursor
        }
      }

      return - (left + 1)
    } else {
      return -1
    }
  }

  /**
  *
  */
  export function identifier<T>(entryOrIdentifier: Entry<T> | number): number
  /**
  *
  */
  export function identifier(undefinedValue: undefined): undefined
  /**
  *
  */
  export function identifier(nullValue: null): null
  /**
  *
  */
  export function identifier<T>(parameter: Entry<T> | number | null | undefined): number | undefined | null
  export function identifier<T>(parameter: Entry<T> | number | null | undefined): number | undefined | null {
    if (parameter == null) {
      return parameter as (null | undefined)
    } else {
      return typeof parameter === 'number' ? parameter : parameter.identifier
    }
  }

  /**
  *
  */
  export function comparator<T>(comparator: Comparator<T, T>): Comparator<Entry<T>, Entry<T>> {
    return function compare(left: Entry<T>, right: Entry<T>): number {
      return comparator(left.model, right.model)
    }
  }
}
