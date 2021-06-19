import { CorvusElement } from './CorvusElement'
import { CorvusNode } from './CorvusNode'
import { CorvusElementBuilder } from './CorvusElementBuilder'

/**
 * 
 */
export interface CorvusNodeBuilder<Child extends CorvusElement = CorvusElement> extends CorvusElementBuilder {
  /**
   * 
   */
  readonly isNode: true

  /**
   * 
   */
  readonly size: number

  /**
   * 
   */
  getChild(index: number): CorvusElementBuilder | undefined

  /**
   * 
   */
  children(): IterableIterator<CorvusElementBuilder>

  /**
   * 
   */
  deleteChild(builder: CorvusElementBuilder): this

  /**
   * 
   */
  deleteChildren(parameter: Iterable<CorvusElementBuilder> | Iterator<CorvusElementBuilder>): this

  /**
  * 
  */
  appendChild(builder: CorvusElementBuilder): this

  /**
  * 
  */
  appendChildren(parameter: Iterable<CorvusElementBuilder> | Iterator<CorvusElementBuilder>): this

  /**
   * 
   */
  build(): CorvusNode<Child>
}

/**
 * 
 */
export namespace CorvusNodeBuilder {
  /**
   * 
   */
  export function is(builder?: CorvusElementBuilder | undefined | null): builder is CorvusNodeBuilder {
    return builder && builder.isNode
  }
}