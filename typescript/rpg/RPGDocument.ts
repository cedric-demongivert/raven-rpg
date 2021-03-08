import { List } from 'immutable'

import { RPGElement } from './RPGElement'
import { RPGNode } from './RPGNode'

/**
*
*/
export type RPGDocument = List<RPGElement>

/**
*
*/
export namespace RPGDocument {
  /**
  *
  */
  export const EMPTY: RPGDocument = create()

  /**
  *
  */
  export function empty(): RPGDocument {
    return EMPTY
  }

  /**
  *
  */
  export function create(...content: Array<RPGElement>): RPGDocument {
    return List(content)
  }

  /**
  *
  */
  export function* walkDocument(document: RPGDocument): Generator<RPGElement> {
    const stack: RPGElement[] = []

    for (let index = 0, size = document.size; index < size; ++index) {
      stack.push(document.get(size - index - 1))
    }

    while (stack.length > 0) {
      const next: RPGElement = stack.pop()

      yield next

      if (RPGNode.is(next)) {
        for (let index = 0, size = next.children.size; index < size; ++index) {
          stack.push(next.children.get(size - index - 1))
        }
      }
    }
  }

  /**
  *
  */
  export function* walkElement(element: RPGElement): Generator<RPGElement> {
    const stack: RPGElement[] = [element]

    while (stack.length > 0) {
      const next: RPGElement = stack.pop()

      yield next

      if (RPGNode.is(next)) {
        for (let index = 0, size = next.children.size; index < size; ++index) {
          stack.push(next.children.get(size - index - 1))
        }
      }
    }
  }
}
