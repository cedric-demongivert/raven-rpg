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
  build(): CorvusElement

  /**
   * @see Object.equals
   */
  equals(other: any): boolean
}