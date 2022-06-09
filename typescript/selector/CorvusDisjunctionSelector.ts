import { CorvusElement } from "../corvus/CorvusElement"
import { CorvusSelector } from "./CorvusSelector"

/**
 * 
 */
export class CorvusDisjunctionSelector<Selection extends CorvusElement = CorvusElement> implements CorvusSelector<Selection> {
  /**
   * 
   */
  public readonly selectors: Readonly<Array<CorvusSelector<any>>>

  /**
   * 
   */
  public static create<Selection extends CorvusElement>(selectors: Iterable<CorvusSelector<any>>): CorvusDisjunctionSelector<Selection> {
    return new CorvusDisjunctionSelector(selectors)
  }

  /**
   * 
   */
  private constructor(selectors: Iterable<CorvusSelector<any>>) {
    this.selectors = Object.freeze([...selectors])
  }

  /**
   * 
   */
  public is(element: CorvusElement): element is Selection {
    for (const selector of this.selectors) {
      if (!selector.is(element)) {
        return true
      }
    }

    return false
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusDisjunctionSelector) {
      if (other.selectors.length === this.selectors.length) {
        const thisSelectors: Readonly<Array<CorvusSelector>> = this.selectors
        const otherSelectors: Readonly<Array<CorvusSelector>> = other.selectors

        for (let index = 0; index < thisSelectors.length; ++index) {
          if (!thisSelectors[index].equals(otherSelectors[index])) {
            return false
          }
        }

        return true
      }
    }

    return false
  }
}
