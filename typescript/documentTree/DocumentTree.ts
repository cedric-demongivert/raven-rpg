import { List } from 'immutable'

import { Empty } from '../Empty'

import { DocumentElement } from '../document/DocumentElement'

export class DocumentTree {
  /**
  *
  */
  public readonly children: List<number>

  /**
  *
  */
  public readonly previous: number | undefined

  /**
  *
  */
  public readonly next: number | undefined

  /**
  *
  */
  public readonly parent: number | undefined

  /**
  *
  */
  public readonly element: DocumentElement

  /**
  *
  */
  public constructor(properties: DocumentTree.Properties = Empty.OBJECT) {
    this.children = properties.children || List()
    this.previous = properties.previous || undefined
    this.next = properties.next || undefined
    this.parent = properties.parent || undefined
    this.element = properties.element || DocumentElement.EMPTY
  }

  /**
  *
  */
  public setChildren(children: List<number>): DocumentTree {
    if (this.children === children) {
      return this
    } else {
      return new DocumentTree({ ...this, children })
    }
  }

  /**
  *
  */
  public setPrevious(previous: number | undefined): DocumentTree {
    if (this.previous === previous) {
      return this
    } else {
      return new DocumentTree({ ...this, previous })
    }
  }

  /**
  *
  */
  public setNext(next: number | undefined): DocumentTree {
    if (this.next === next) {
      return this
    } else {
      return new DocumentTree({ ...this, next })
    }
  }

  /**
  *
  */
  public setParent(parent: number | undefined): DocumentTree {
    if (this.parent === parent) {
      return this
    } else {
      return new DocumentTree({ ...this, parent })
    }
  }

  /**
  *
  */
  public setElement(element: DocumentElement): DocumentTree {
    if (this.element === element) {
      return this
    } else {
      return new DocumentTree({ ...this, element })
    }
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof DocumentTree) {
      return (
        other.children.equals(this.children) &&
        other.parent === this.parent &&
        other.next === this.next &&
        other.previous === this.previous &&
        other.element.equals(this.element)
      )
    }
  }
}

/**
*
*/
export namespace DocumentTree {
  /**
  *
  */
  export type Properties = {
    /**
    *
    */
    children?: List<number>,

    /**
    *
    */
    previous?: number | undefined,

    /**
    *
    */
    next?: number | undefined,

    /**
    *
    */
    parent?: number | undefined,

    /**
    *
    */
    element?: DocumentElement
  }

  /**
  *
  */
  export const EMPTY: DocumentTree = new DocumentTree()

  /**
  *
  */
  export function empty(): DocumentTree {
    return EMPTY
  }

  /**
  *
  */
  export function create(properties: Properties): DocumentTree {
    return new DocumentTree(properties)
  }
}
