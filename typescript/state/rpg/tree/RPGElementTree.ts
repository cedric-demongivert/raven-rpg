import { List } from 'immutable'

import { Empty } from '../../../utils/Empty'

export class RPGElementTree {
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
  public readonly element: number

  /**
  *
  */
  public constructor(properties: RPGElementTree.Properties = Empty.OBJECT) {
    this.children = properties.children || List()
    this.previous = properties.previous || undefined
    this.next = properties.next || undefined
    this.parent = properties.parent || undefined
    this.element = properties.element || 0
  }

  /**
  *
  */
  public setChildren(children: List<number>): RPGElementTree {
    if (this.children === children) {
      return this
    } else {
      return new RPGElementTree({ ...this, children })
    }
  }

  /**
  *
  */
  public removeChild(child: number): RPGElementTree {
    if (this.children.has(child)) {
      return this.setChildren(this.children.remove(child))
    } else {
      return this
    }
  }

  /**
  *
  */
  public addChild(child: number): RPGElementTree {
    if (this.children.has(child)) {
      return this
    } else {
      return this.setChildren(this.children.push(child))
    }
  }

  /**
  *
  */
  public setPrevious(previous: number | undefined): RPGElementTree {
    if (this.previous === previous) {
      return this
    } else {
      return new RPGElementTree({ ...this, previous })
    }
  }

  /**
  *
  */
  public setNext(next: number | undefined): RPGElementTree {
    if (this.next === next) {
      return this
    } else {
      return new RPGElementTree({ ...this, next })
    }
  }

  /**
  *
  */
  public setParent(parent: number | undefined): RPGElementTree {
    if (this.parent === parent) {
      return this
    } else {
      return new RPGElementTree({ ...this, parent })
    }
  }

  /**
  *
  */
  public setElement(element: number): RPGElementTree {
    if (this.element === element) {
      return this
    } else {
      return new RPGElementTree({ ...this, element })
    }
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof RPGElementTree) {
      return (
        other.children.equals(this.children) &&
        other.parent === this.parent &&
        other.next === this.next &&
        other.previous === this.previous &&
        other.element === this.element
      )
    }
  }
}

/**
*
*/
export namespace RPGElementTree {
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
    element?: number
  }

  /**
  *
  */
  export function getElement(tree: RPGElementTree): number {
    return tree.element
  }

  /**
  *
  */
  export const EMPTY: RPGElementTree = new RPGElementTree()

  /**
  *
  */
  export function empty(): RPGElementTree {
    return EMPTY
  }

  /**
  *
  */
  export function create(properties: Properties): RPGElementTree {
    return new RPGElementTree(properties)
  }
}
