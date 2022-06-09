import { CorvusElement } from "../corvus/CorvusElement"
import { CorvusMastery } from "../corvus/CorvusMastery"

import { CorvusConjunctionSelector } from "./CorvusConjunctionSelector"
import { CorvusDisjunctionSelector } from "./CorvusDisjunctionSelector"
import { CorvusMasterySelector } from "./CorvusMasterySelector"
import { CorvusTagSelector } from "./CorvusTagSelector"

/**
 * 
 */
export interface CorvusSelector<Selection extends CorvusElement = CorvusElement> {
  /**
   * 
   */
  is(element: CorvusElement): element is Selection

  /**
   * 
   */
  equals(other: any): boolean
}

/**
 * 
 */
export namespace CorvusSelector {
  /**
   * 
   */
  export function mastery(): CorvusSelector<CorvusMastery> {
    return CorvusMasterySelector.INSTANCE
  }

  /**
   * 
   */
  export function tag(tag: string): CorvusSelector<CorvusElement> {
    return CorvusTagSelector.create(tag)
  }

  /**
   * 
   */
  export function and<Selection extends CorvusElement>(...selectors: CorvusSelector[]): CorvusSelector<Selection> {
    return CorvusConjunctionSelector.create(selectors)
  }

  /**
   * 
   */
  export function or<Selection extends CorvusElement>(...selectors: CorvusSelector[]): CorvusSelector<Selection> {
    return CorvusDisjunctionSelector.create(selectors)
  }
}