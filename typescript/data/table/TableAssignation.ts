import { List } from 'immutable'

import { Entry } from '../Entry'

import { Table } from './Table'

/**
 * 
 */
export class TableAssignation<Model> {
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
  public readonly mutations: List<Entry<Model>>

  /**
   * 
   */
  public static create<Model>(properties: TableAssignation.Properties<Model>): TableAssignation<Model> {
    return new TableAssignation(properties)
  }

  /**
   * 
   */
  private constructor(properties: TableAssignation.Properties<Model>) {
    this.from = properties.from
    this.to = properties.to
    this.additions = properties.additions
    this.mutations = properties.mutations
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof TableAssignation) {
      return (
        other.additions.equals(this.additions) &&
        other.mutations.equals(this.mutations) &&
        other.from.equals(this.from) &&
        other.to.equals(this.to)
      )
    }
  }
}


/**
 * 
 */
export namespace TableAssignation {
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

    /**
     * 
     */
    readonly mutations: List<Entry<Model>>
  }
}