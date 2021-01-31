import { Entry } from './Entry'

export type Identifiable<Model> = Entry<Model> | number

export namespace Identifiable {
  /**
  *
  */
  export function identify<Model>(identifiable: Identifiable<Model>): number {
    return typeof identifiable === 'number' ? identifiable : identifiable.identifier
  }
}
