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
}

/**
*
*/
export namespace Reference {
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
  export function to<Model>(entry: Entry<Model>): Reference<Model> {
    return new Reference(
      Object.getPrototypeOf(entry.model),
      entry.identifier
    )
  }
}
