import { CorvusElement } from "../corvus/CorvusElement"
import { CorvusSelector } from "./CorvusSelector"

/**
 * 
 */
export class CorvusTagSelector implements CorvusSelector<CorvusElement> {
  /**
   * 
   */
  public readonly tag: string

  /**
   * 
   */
  public static create(tag: string): CorvusTagSelector {
    return new CorvusTagSelector(tag)
  }

  /**
   * 
   */
  private constructor(tag: string) {
    this.tag = tag
  }

  /**
   * 
   */
  public is(element: CorvusElement): element is CorvusElement {
    return element.tags.has(this.tag)
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    return other === this
  }
}
