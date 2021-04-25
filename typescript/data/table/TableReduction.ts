import { defaultConstructible, immutable, sealed } from '../../decorators'
import { Empty } from '../../utils'

import { Mutations } from '../mutation/Mutations'

import { Table } from './Table'

/**
 * 
 */
@immutable
@sealed
@defaultConstructible
export class TableReduction<Model> {
  /**
   * 
   */
  public readonly table: Table<Model>

  /**
   * 
   */
  public readonly mutations: Mutations<Model>

  /**
   * 
   */
  private constructor(properties: TableReduction.Properties<Model> = Empty.OBJECT) {
    this.table = properties.table || Table.EMPTY
    this.mutations = properties.mutations || Mutations.EMPTY
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof TableReduction) {
      return (
        other.table.equals(this.table) &&
        other.mutations.equals(this.mutations)
      )
    }

    return false
  }
}

/**
 * 
 */
export namespace TableReduction {
  /**
   * 
   */
  export type Properties<Model> = {
    /**
     * 
     */
    readonly table?: Table<Model> | undefined,

    /**
     * 
     */
    readonly mutations?: Mutations<Model> | undefined
  }
}