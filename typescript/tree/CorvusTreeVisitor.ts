import { CorvusTree } from "./CorvusTree"

/**
 * 
 */
export abstract class CorvusTreeVisitor {
  /**
   * 
   */
  public visit(tree: CorvusTree<unknown>): void {
    this.enter(tree)

    for (const child of tree.children()) {
      this.visit(child)
    }

    this.exit(tree)
  }

  /**
   * 
   */
  public dash(tree: CorvusTree<unknown>): void {
    this.enter(tree)
    this.exit(tree)
  }

  /**
   * 
   */
  public abstract enter(tree: CorvusTree<unknown>): void

  /**
   * 
   */
  public abstract exit(tree: CorvusTree<unknown>): void
}