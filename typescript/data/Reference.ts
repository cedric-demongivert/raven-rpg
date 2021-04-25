import { Entry } from './Entry'

export class Reference<Model> {
  /**
  *
  */
  public readonly type: Reference.Constructor<Model>

  /**
  *
  */
  public readonly identifier: number

  /**
  *
  */
  public constructor(type: Reference.Constructor<Model>, identifier: number) {
    this.type = type
    this.identifier = identifier
  }

  /**
  *
  */
  public toString(): string {
    return this.type.name + ' #' + this.identifier
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof Reference) {
      return (
        other.type === this.type &&
        other.identifier === this.identifier
      )
    }

    return false
  }
}

/**
*
*/
export namespace Reference {
  /**
   * 
   */
  export function is(value: any): value is Reference<any> {
    return value instanceof Reference
  }

  /**
   * 
   */
  export function assert(value: any, message?: string | undefined): asserts value is Reference<any> {
    if (!is(value)) {
      throw new Error(message || 'The given value is not a reference.')
    }
  }

  /**
  *
  */
  export type Constructor<Model> = new () => Model

  /**
  *
  */
  export function create<Model>(type: Reference.Constructor<Model>, identifier: number): Reference<Model> {
    return new Reference(type, identifier)
  }

  /**
  *
  */
  export function identifier(identifiable: number | Reference<any> | Entry<any>): number {
    return typeof identifiable === 'number' ? identifiable : identifiable.identifier
  }

  /**
  *
  */
  export function from<Model>(type: Reference.Constructor<Model>, identifiable: number | Entry<Model>): Reference<Model> {
    if (typeof identifiable == 'number') {
      return fromIdentifier(type, identifiable)
    } else {
      return fromEntry(identifiable)
    }
  }

  /**
  *
  */
  export function fromIdentifier<Model>(type: Reference.Constructor<Model>, identifier: number): Reference<Model> {
    return new Reference(type, identifier)
  }

  /**
  *
  */
  export function fromEntry<Model>(entry: Entry<Model>): Reference<Model> {
    return new Reference(
      Object.getPrototypeOf(entry.model),
      entry.identifier
    )
  }
}
