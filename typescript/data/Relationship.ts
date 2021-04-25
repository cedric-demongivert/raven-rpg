import { Reference } from './Reference'

export type Relationship<Model> = Reference<Model> | Model

export namespace Relationship {
  /**
   * 
   */
  export type Resolver<Model> = (relationship: Relationship<Model>) => Model
}
