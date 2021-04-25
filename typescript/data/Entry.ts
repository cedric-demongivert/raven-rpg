import { immutable, sealed } from '../decorators'

import { Comparator } from '@cedric-demongivert/gl-tool-collection'

import { Filter } from './Filter'
import { Mapping } from './Mapping'

@immutable
@sealed
export class Entry<Model> {
  /**
   * 
   */
  public static create<Model>(identifier: number, model: Model): Entry<Model> {
    return new Entry(identifier, model)
  }

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
  private constructor(identifier: number, model: Model) {
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
    return this.constructor.name + ' #' + this.identifier + ' ' + this.model.toString()
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
  export const MINUS: Entry<any> = Entry.create(-1, undefined)

  /**
   * 
   */
  export function minus<Model>(): Entry<Model> {
    return MINUS
  }

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
  export function compareByIdentifier(left: Entry<any>, right: Entry<any>): number {
    return left.identifier - right.identifier
  }

  /**
  *
  */
  export function compareWithIdentifier(left: Entry<any>, right: number): number {
    return left.identifier - right
  }

  /**
   * 
   */
  export namespace compareWithIdentifier {
    /**
     * 
     */
    export function asLeftMember(left: number, right: Entry<any>): number {
      return left - right.identifier
    }

    /**
     * 
     */
    export const asRightMember: typeof compareWithIdentifier = compareWithIdentifier
  }

  /**
  *
  */
  export function comparator<Model>(comparator: Comparator<Model, Model>): Comparator<Entry<Model>, Entry<Model>> {
    return function compare(left: Entry<Model>, right: Entry<Model>): number {
      return comparator(left.model, right.model)
    }
  }
}
