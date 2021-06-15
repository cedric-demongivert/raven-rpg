import { RPGElement } from './RPGElement'
import { RPGNode } from './RPGNode'
import { RPGDocument } from './RPGDocument'

function* singleton<T>(element: T): Generator<T> {
  return element
}

/**
*
*/
export class RPGDocumentWalker {
  /**
  *
  */
  private _next: RPGElement | undefined

  /**
  *
  */
  private _current: RPGElement | undefined

  /**
  *
  */
  private readonly _stack: Iterator<RPGElement>[]

  /**
  *
  */
  private readonly _path: RPGNode[]

  /**
  *
  */
  public constructor() {
    this._next = undefined
    this._current = undefined
    this._stack = []
    this._path = []
  }

  /**
  *
  */
  public walkElement(element: RPGElement): void {
    this._next = undefined
    this._current = undefined
    this._stack.length = 0
    this._path.length = 0

    this._stack.push(singleton(element))
  }

  /**
  *
  */
  public walkDocument(document: RPGDocument): void {
    this._next = undefined
    this._current = undefined
    this._stack.length = 0
    this._path.length = 0

    this._stack.push(document[Symbol.iterator]())
  }

  /**
  *
  */
  private computeNext(): void {
    let result: RPGElement | undefined = this._next
    const stack: Iterator<RPGElement>[] = this._stack

    while (result == null && stack.length > 0) {
      const current: Iterator<RPGElement> = stack[stack.length - 1]
      const next: IteratorResult<RPGElement> = current.next()

      if (next.value) {
        result = next.value
      } else if (next.done) {
        stack.pop()
        this._path.pop()
      }
    }

    this._next = result
  }

  /**
  *
  */
  public hasNext(): boolean {
    this.computeNext()
    return this._next != null
  }

  /**
  *
  */
  public parent(index: number = 0): RPGNode | undefined {
    const path: RPGNode[] = this._path

    if (index < path.length) {
      return path[path.length - 1 - index]
    } else {
      return undefined
    }
  }

  /**
  *
  */
  public depth(): number {
    return this._path.length
  }

  /**
  *
  */
  public current(): RPGElement | undefined {
    return this._current
  }

  /**
  *
  */
  public next(): RPGElement | undefined {
    this.computeNext()
    const result: RPGElement | undefined = this._current = this._next

    if (result) {
      this._next = undefined
      if (RPGNode.is(result)) {
        this._stack.push(result.children[Symbol.iterator]())
        this._path.push(result)
      }
    }

    return result
  }
}

/**
*
*/
export namespace RPGDocumentWalker {
  /**
  *
  */
  export function walkElement(element: RPGElement): RPGDocumentWalker {
    const result: RPGDocumentWalker = new RPGDocumentWalker()
    result.walkElement(element)
    return result
  }

  /**
  *
  */
  export function walkDocument(document: RPGDocument): RPGDocumentWalker {
    const result: RPGDocumentWalker = new RPGDocumentWalker()
    result.walkDocument(document)
    return result
  }
}
