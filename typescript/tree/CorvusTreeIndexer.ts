import { CorvusTree } from "./CorvusTree"
import { CorvusTreeIndex } from "./CorvusTreeIndex"

/**
 * 
 */
export abstract class CorvusTreeIndexer {
  /**
   * 
   */
  private readonly _index: CorvusTreeIndex

  /**
   * 
   */
  public constructor() {
    this._index = new CorvusTreeIndex()
  }

  /**
   * 
   */
  public visit(tree: CorvusTree<unknown>): void {
    const index: CorvusTreeIndex = this._index

    this.enter(tree, index)

    index.push(0)
    for (const child of tree.children()) {
      this.visit(child)
      index.increment()
    }
    index.pop()

    this.exit(tree, index)
  }

  /**
   * 
   */
  public dash(tree: CorvusTree<unknown>): void {
    const index: CorvusTreeIndex = this._index
    this.enter(tree, index)
    this.exit(tree, index)
  }

  /**
   * 
   */
  public abstract enter(tree: CorvusTree<unknown>, index: CorvusTreeIndex): void

  /**
   * 
   */
  public abstract exit(tree: CorvusTree<unknown>, index: CorvusTreeIndex): void
}