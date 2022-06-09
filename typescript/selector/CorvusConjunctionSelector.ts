import { CorvusElement } from "../corvus/CorvusElement"
import { CorvusSelector } from "./CorvusSelector"

/**
 * 
 */
export class CorvusConjunctionSelector<Selection extends CorvusElement = CorvusElement> implements CorvusSelector<Selection> {
  /**
   * 
   */
  public readonly selectors: Readonly<Array<CorvusSelector>>

  /**
   * 
   */
  public static create<Selection extends CorvusElement>(selectors: Iterable<CorvusSelector>): CorvusConjunctionSelector<Selection> {
    return new CorvusConjunctionSelector(selectors)
  }

  /**
   * 
   */
  private constructor(selectors: Iterable<CorvusSelector>) {
    this.selectors = Object.freeze([...selectors])
  }

  /**
   * 
   */
  public is(element: CorvusElement): element is Selection {
    for (const selector of this.selectors) {
      if (!selector.is(element)) {
        return false
      }
    }

    return true
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusConjunctionSelector) {
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
