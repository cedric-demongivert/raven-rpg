import { CorvusElement } from './CorvusElement'
import { CorvusIdentifier } from './CorvusIdentifier'
import { CorvusNode } from './CorvusNode'

/**
 * 
 */
export interface CorvusDocument<Child extends CorvusElement = CorvusElement> extends CorvusNode<Child> {
  /**
   * 
   */
  readonly size: number

  /**
   * 
   */
  readonly parent: undefined

  /**
   * 
   */
  elements(): IterableIterator<CorvusElement>

  /**
   * 
   */
  depth(identifier: number): number

  /**
   * 
   */
  get(identifier: 0): this

  /**
   * 
   */
  get(identifier: number): CorvusElement | undefined

  /**
   * 
   */
  get<Element extends CorvusElement>(identifier: CorvusIdentifier<Element>): Element | undefined

  /**
   * 
   */
  get(key: string): CorvusElement | undefined

  /**
   * 
   */
  require(identifier: 0): this

  /**
   * 
   */
  require(identifier: number): CorvusElement

  /**
   * 
   */
  require(key: string): CorvusElement

  /**
   * 
   */
  equals(other: any): boolean
}
