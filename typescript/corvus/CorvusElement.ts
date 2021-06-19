import { CorvusIdentifier } from './CorvusIdentifier'
import { CorvusNode } from './CorvusNode'

/**
 * An element of a corvus document. 
 * 
 * Anything that compose a rule book or booklet can be an element. 
 * Paragraphs, sections, lists of items, images or tables are various examples of valid elements.
 */
export interface CorvusElement {
  /**
   * Identifier of this element into it's parent document.
   * 
   * The identifier of an element is a positive natural number that uniquely identify the element into it's parent
   * document. Only the parent document itself can declare the reserved identifier 0.
   */
  readonly identifier: CorvusIdentifier<this>

  /**
   * Identifier of the node that contains this element into it's parent document. 
   * 
   * The parent identifier is a positive natural number that must uniquely identify the parent node of this
   * element into it's document container. A document element must have one and only one parent node.
   */
  readonly parent: CorvusIdentifier<CorvusNode> | undefined

  /**
   * A token that uniquely identify this element into it's parent document.
   * 
   * A document element may declare a key. This key is a token that allows to refer to the element in a more 
   * human-readable way. The key of an element must be unique in it's entire parent document, however,
   * two different documents can have elements that declare the same key.
   * 
   * In the case of a non-keyed element, the element can always be identified by its numeric identifier or by
   * it's location into it's parent document.
   */
  readonly key: string | undefined

  /**
   * 
   */
  readonly isNode: boolean

  /**
   * @see Object.equals
   */
  equals(other: any): boolean
}

/**
 * 
 */
export namespace CorvusElement {
  /**
   * 
   */
  export function compareByIdentifier(left: CorvusElement, right: CorvusElement): number {
    return left.identifier - right.identifier
  }

  /**
   * 
   */
  export function compareWithIdentifier(left: CorvusElement, right: number): number {
    return left.identifier - right
  }

  /**
   * 
   */
  export namespace compareWithIdentifier {
    /**
     * 
     */
    export function asLeftMember(left: number, right: CorvusElement): number {
      return left - right.identifier
    }

    /**
     * 
     */
    export const asRightMember: typeof compareWithIdentifier = compareWithIdentifier
  }

  /**
   * 
   */
  export function compareByKey(left: CorvusElement, right: CorvusElement): number {
    if (left.key == null) {
      return right.key == null ? 0 : 1
    } else {
      return right.key == null ? -1 : left.key.localeCompare(right.key)
    }
  }

  /**
   * 
   */
  export function compareWithKey(left: CorvusElement, right: string): number {
    return left.key == null ? 1 : left.key.localeCompare(right)
  }

  /**
   * 
   */
  export namespace compareWithKey {
    /**
     * 
     */
    export function asLeftMember(left: string, right: CorvusElement): number {
      return right.key == null ? -1 : left.localeCompare(right.key)
    }

    /**
     * 
     */
    export const asRightMember: typeof compareWithKey = compareWithKey
  }
}