import { List } from 'immutable'

import { Entry } from '../Entry'

import { Table } from './Table'

/**
 * 
 */
export class TableDeletion<Model> {
  /**
   * 
   */
  public readonly from: Table<Model>

  /**
   * 
   */
  public readonly to: Table<Model>

  /**
   * 
   */
  public readonly deletions: List<Entry<Model>>

  /**
   * 
   */
  public static create<Model>(properties: TableDeletion.Properties<Model>): TableDeletion<Model> {
    return new TableDeletion(properties)
  }

  /**
   * 
   */
  private constructor(properties: TableDeletion.Properties<Model>) {
    this.from = properties.from
    this.to = properties.to
    this.deletions = properties.deletions
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof TableDeletion) {
      return (
        other.deletions.equals(this.deletions) &&
        other.from.equals(this.from) &&
        other.to.equals(this.to)
      )
    }
  }
}


/**
 * 
 */
export namespace TableDeletion {
  /**
   * 
   */
  export type Properties<Model> = {
    /**
     * 
     */
    readonly from: Table<Model>

    /**
     * 
     */
    readonly to: Table<Model>

    /**
     * 
     */
    readonly deletions: List<Entry<Model>>
  }
}