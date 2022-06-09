import { CorvusElement } from './CorvusElement'
import { CorvusNodeBuilder } from './CorvusNodeBuilder'

/**
 * 
 */
export interface CorvusElementBuilder {
  /**
   * @see CorvusElement.identifier
   */
  identifier: number

  /**
   * @see CorvusElement.parent
   */
  parent: CorvusNodeBuilder | undefined

  /**
   * @see CorvusElement.key
   */
  key: string | undefined

  /**
  *
  */
  readonly tags: Set<string>

  /**
   * 
   */
  readonly isNode: boolean

  /**
   * 
   */
  assign(identifierGenerator: Generator<number>): this

  /**
   * 
   */
  setIdentifier(identifier: number): this

  /**
   * 
   */
  setParent(parent: CorvusNodeBuilder | undefined): this

  /**
   * 
   */
  setKey(key: string | undefined): this

  /**
   * 
   */
  deleteTag(tag: string): this

  /**
   * 
   */
  deleteTags(parameter: Iterable<string> | Iterator<string>): this

  /**
   * 
   */
  addTag(tag: string): this

  /**
   * 
   */
  addTags(parameter: Iterable<string> | Iterator<string>): this

  /**
   * 
   */
  toggleTag(tag: string): this

  /**
   * 
   */
  toggleTags(parameter: Iterable<string> | Iterator<string>): this

  /**
   * 
   */
  build(): CorvusElement

  /**
   * @see Object.equals
   */
  equals(other: any): boolean
}