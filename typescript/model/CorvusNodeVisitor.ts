import type { CorvusNode } from "./CorvusNode"

/**
 * 
 */
export abstract class CorvusNodeVisitor {
  /**
   * 
   */
  public abstract enterString(node: string): void

  /**
   * 
   */
  public abstract exitString(node: string): void

  /**
   * 
   */
  public abstract enterNode(node: CorvusNode): void

  /**
   * 
   */
  public abstract exitNode(node: CorvusNode): void

  /**
   * 
   */
  public visit(node: CorvusNode): void {
    node.accept(this)
  }
}