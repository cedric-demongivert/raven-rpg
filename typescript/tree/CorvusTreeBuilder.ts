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
  public constructor() {
    super()
    this._stack = []
    this._result = null
  }

  /**
   * 
   */
  public result(): CorvusTree<unknown> | null {
    const result: CorvusTree<unknown> | null = this._result
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
  }

  /**
   * 
   */
  public clear(): void {
    this._result = null
    this._stack.length = 0
  }
}