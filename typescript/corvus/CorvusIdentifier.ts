import { CorvusElement } from "./CorvusElement"

/**
 * 
 */
export type CorvusIdentifier<Element extends CorvusElement = CorvusElement> = number

/**
 * 
 */
export namespace CorvusIdentifier {
  /**
   * 
   */
  export function get<Element extends CorvusElement>(element: Element): CorvusIdentifier<Element> {
    return element.identifier
  }
}