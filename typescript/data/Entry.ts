import { Comparator } from '@cedric-demongivert/gl-tool-collection'

import { Predicate } from './Predicate'

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
  public setModel(model: Model): Entry<Model>
  /**
   * 
   */
  public setModel<NextModel>(model: NextModel): Entry<NextModel>
  public setModel(model: any): Entry<any> {
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
  export function is(value: any): value is Entry<any> {
    return value instanceof Entry
  }

  /**
   * 
   */
  export function assert(value: any, message?: string | undefined): asserts value is Entry<any> {
    if (!is(value)) {
      throw new Error(message || 'The given value is not an instance of Entry.')
    }
  }

  /**
   * 
   */
  export function isModel<Model>(value: Entry<any>, predicate: Predicate<any, Model>): value is Entry<Model> {
    return predicate(value.model)
  }

  /**
   * 
   */
  export function assertModel<Model>(value: Entry<any>, predicate: Predicate<any, Model>, message?: string | undefined): asserts value is Entry<Model> {
    if (!predicate(value.model)) {
      throw new Error(message || 'The given entry does not hold an instance of the expected model.')
    }
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

  /**
   * 
   */
  export function getIdentifier(entry: Entry<any>): number {
    return entry.identifier
  }

  /**
   * 
   */
  export function getModel<Model>(entry: Entry<Model>): Model {
    return entry.model
  }
}
