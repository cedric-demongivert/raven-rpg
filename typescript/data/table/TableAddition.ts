import { List } from 'immutable'

import { Entry } from '../Entry'

import { Table } from './Table'

/**
 * 
 */
export class TableAddition<Model> {
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
  public readonly additions: List<Entry<Model>>

  /**
   * 
   */
  public static create<Model>(properties: TableAddition.Properties<Model>): TableAddition<Model> {
    return new TableAddition(properties)
  }

  /**
   * 
   */
  private constructor(properties: TableAddition.Properties<Model>) {
    this.from = properties.from
    this.to = properties.to
    this.additions = properties.additions
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof TableAddition) {
      return (
        other.additions.equals(this.additions) &&
        other.from.equals(this.from) &&
        other.to.equals(this.to)
      )
    }
  }
}


/**
 * 
 */
export namespace TableAddition {
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
    readonly additions: List<Entry<Model>>
  }
}