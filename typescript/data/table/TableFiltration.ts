import { List } from 'immutable'

import { Entry } from '../Entry'

import { Table } from './Table'

/**
 * 
 */
export class TableFiltration<From, To> {
  /**
   * 
   */
  public readonly from: Table<From>

  /**
   * 
   */
  public readonly to: Table<To>

  /**
   * 
   */
  public readonly deletions: List<Entry<From>>

  /**
   * 
   */
  public static create<From, To>(properties: TableFiltration.Properties<From, To>): TableFiltration<From, To> {
    return new TableFiltration(properties)
  }

  /**
   * 
   */
  private constructor(properties: TableFiltration.Properties<From, To>) {
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

    if (other instanceof TableFiltration) {
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
export namespace TableFiltration {
  /**
   * 
   */
  export type Properties<From, To> = {
    /**
     * 
     */
    readonly from: Table<From>

    /**
     * 
     */
    readonly to: Table<To>

    /**
     * 
     */
    readonly deletions: List<Entry<From>>
  }
}