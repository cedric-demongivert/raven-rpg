import { List } from 'immutable'

import { CorvusDocumentModel } from './CorvusDocumentModel'

/**
 * An element of a corvus document. 
 * 
 * Anything that compose a rule book or booklet can be an element. 
 * Paragraphs, sections, lists of items, images or tables are various examples of valid elements.
 */
export class CorvusDocumentElement<Model extends CorvusDocumentModel = CorvusDocumentModel> {
  /**
   * Identifier of this element into it's parent document.
   * 
   * The identifier of an element is a positive natural number that uniquely identify the element into it's parent
   * document. Only the parent document itself can declare the reserved identifier 0.
   */
  public readonly identifier: number

  /**
   * Identifier of the parent node of this element into the document. 
   * 
   * The parent identifier is a positive natural number that must uniquely identify the parent node of this
   * element into it's document container. A document element must have one and only one parent node. By default, 
   * an element is a child of the document itself. In such a situation, an element must return the reserved 
   * identifier 0.
   */
  public readonly parent: number

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
   * A list of children of this element in their apparition order.
   */
  public readonly children: List<number>

  /**
   * The model of this document element.
   * 
   * The model is a Javascript object that hold all specific information related to this element like it's title,
   * summary, classes, or type.
   */
  public readonly model: Model

  /**
   * 
   */
  public static create<Model extends CorvusDocumentModel>(properties: Readonly<CorvusDocumentElement.Properties<Model>>): CorvusDocumentElement<Model> {
    return new CorvusDocumentElement(properties)
  }

  /**
   * 
   */
  private constructor(properties: Readonly<CorvusDocumentElement.Properties<Model>>) {
    this.identifier = properties.identifier
    this.parent = properties.parent || 0
    this.children = List(properties.children)
    this.key = properties.key || undefined
    this.model = properties.model
  }

  /**
   * @see Object.equals
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusDocumentElement) {
      return (
        other.identifier === this.identifier &&
        other.parent === this.parent &&
        other.key === this.key &&
        other.children.equals(this.children) &&
        other.model.equals(this.model)
      )
    }
  }
}

/**
 * 
 */
export namespace CorvusDocumentElement {
  /**
   * 
   */
  export type Properties<Model extends CorvusDocumentModel> = {
    /**
     * @see CorvusDocumentElement.parent
     */
    parent?: number | undefined,

    /**
     * @see CorvusDocumentElement.identifier
     */
    identifier: number,

    /**
     * @see CorvusDocumentElement.key
     */
    key: string,

    /**
     * @see CorvusDocumentElement.children
     */
    children?: Iterable<number> | undefined,

    /**
     * @see CorvusDocumentElement.model
     */
    model: Model
  }

  /**
   * 
   */
  export function compareByIdentifier(left: CorvusDocumentElement, right: CorvusDocumentElement): number {
    return left.identifier - right.identifier
  }

  /**
   * 
   */
  export function compareWithIdentifier(left: CorvusDocumentElement, right: number): number {
    return left.identifier - right
  }

  /**
   * 
   */
  export namespace compareWithIdentifier {
    /**
     * 
     */
    export function asLeftMember(left: number, right: CorvusDocumentElement): number {
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
  export function compareByKey(left: CorvusDocumentElement, right: CorvusDocumentElement): number {
    if (left.key == null) {
      return right.key == null ? 0 : 1
    } else {
      return right.key == null ? -1 : left.key.localeCompare(right.key)
    }
  }

  /**
   * 
   */
  export function compareWithKey(left: CorvusDocumentElement, right: string): number {
    return left.key == null ? 1 : left.key.localeCompare(right)
  }

  /**
   * 
   */
  export namespace compareWithKey {
    /**
     * 
     */
    export function asLeftMember(left: string, right: CorvusDocumentElement): number {
      return right.key == null ? -1 : left.localeCompare(right.key)
    }

    /**
     * 
     */
    export const asRightMember: typeof compareWithKey = compareWithKey
  }
}