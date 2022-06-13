import { CorvusLocationTracker } from "../location"
import { CorvusNode, CorvusNodeVisitor } from "../model"
import { CorvusTree } from "./CorvusTree"

/**
 * 
 */
export class CorvusTreeBuilder extends CorvusNodeVisitor {
  /**
   * 
   */
  private readonly _stack: Array<CorvusTree<unknown>>

  /**
   * 
   */
  private _result: CorvusTree<unknown> | null

  /**
   * 
   */
  private readonly _locationTracker: CorvusLocationTracker

  /**
   * 
   */
  public constructor() {
    super()
    this._stack = []
    this._result = null
    this._locationTracker = new CorvusLocationTracker()
  }

  /**
   * 
   */
  public result(): CorvusTree<unknown> | null {
    const result: CorvusTree<unknown> | null = this._result
    this._locationTracker.clear()
    this._result = null
    return result
  }

  /**
   * 
   */
  public enterString(node: string): void {

  }

  /**
   * 
   */
  public exitString(node: string): void {
    const stack: Array<CorvusTree<unknown>> = this._stack
    const tree: CorvusTree<unknown> = new CorvusTree(node)

    if (stack.length > 0) {
      tree.setParent(stack[stack.length - 1])
    }
  }

  /**
   * 
   */
  public enterNode(node: CorvusNode): void {
    const stack: Array<CorvusTree<unknown>> = this._stack
    const tree: CorvusTree<unknown> = new CorvusTree(node)

    if (tree.isSectionLike()) {
      this._locationTracker.enterSection()
      this._locationTracker.get(tree.location)
    } else if (tree.isBlock()) {
      this._locationTracker.enterBlock()
      this._locationTracker.get(tree.location)
    } else {
      this._locationTracker.get(tree.location)
    }

    if (stack.length > 0) {
      tree.setParent(stack[stack.length - 1])
    }

    stack.push(tree)
  }

  /**
   * 
   */
  public exitNode(node: CorvusNode): void {
    this._result = this._stack.pop()

    if (this._result.isSectionLike()) {
      this._locationTracker.exitSection()
    } else if (this._result.isBlock()) {
      this._locationTracker.exitBlock()
    }
  }

  /**
   * 
   */
  public clear(): void {
    this._result = null
    this._stack.length = 0
    this._locationTracker.clear()
  }
}