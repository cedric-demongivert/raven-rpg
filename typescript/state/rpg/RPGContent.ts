import { Reference } from '../../data/Reference'
import { Commit } from '../git/Commit'

import { RPGElement } from './RPGElement'

/**
 * 
 */
export class RPGContent {
  /**
   * 
   */
  public readonly commit: Reference<Commit>

  /**
   * 
   */
  public readonly content: RPGElement

  /**
   * 
   */
  public static create(properties: RPGContent.Properties): RPGContent {
    return new RPGContent(properties)
  }

  /**
   * 
   */
  private constructor(properties: RPGContent.Properties) {
    this.commit = properties.commit
    this.content = properties.content
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof RPGContent) {
      return (
        Reference.equals(other.commit, this.commit) &&
        other.content.equals(this.content)
      )
    }
  }
}

/**
 * 
 */
export namespace RPGContent {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    readonly commit: Reference<Commit>,

    /**
     * 
     */
    readonly content: RPGElement
  }
}