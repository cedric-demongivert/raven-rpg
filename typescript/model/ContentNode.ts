import { Set } from 'immutable'

import { Comparable } from '@cedric-demongivert/gl-tool-utils'

import { ContentNodeType } from './ContentNodeType'
import { ContentNodeVisitor } from './ContentNodeVisitor'

/**
 * 
 */
export interface ContentNode extends Comparable {
  /**
   * 
   */
  readonly type: ContentNodeType

  /**
   * 
   */
  readonly identifier: string

  /**
   * 
   */
  readonly classes: Set<string>

  /**
   * 
   */
  hasIdentifier(): boolean

  /**
   * 
   */
  hasClasses(): boolean

  /**
   * 
   */
  accept(visitor: ContentNodeVisitor): void
}

/**
 * 
 */
export namespace ContentNode {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    readonly identifier?: string | null | undefined,

    /**
     * 
     */
    readonly classes?: Iterable<string> | null | undefined
  }
}