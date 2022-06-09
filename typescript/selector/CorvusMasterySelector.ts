import { CorvusElement } from "../corvus/CorvusElement"
import { CorvusMastery } from "../corvus/CorvusMastery"
import { CorvusSelector } from "./CorvusSelector"

/**
 * 
 */
export class CorvusMasterySelector implements CorvusSelector<CorvusMastery> {
  /**
   * 
   */
  public static INSTANCE: CorvusMasterySelector = new CorvusMasterySelector()

  /**
   * 
   */
  public static create(): CorvusMasterySelector {
    return CorvusMasterySelector.INSTANCE
  }

  /**
   * 
   */
  private constructor() {

  }

  /**
   * 
   */
  public is(element: CorvusElement): element is CorvusMastery {
    return element instanceof CorvusMastery
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    return other === this
  }
}
