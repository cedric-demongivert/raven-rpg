import { equals as areEquals } from '../utils/equals'

/**
 * 
 */
export namespace Sets {
  /**
   * 
   */
  export function deeplyEquals<Element>(left: Set<Element>, right: Set<Element>): boolean {
    if (left.size !== right.size) return false

    const rightCopy: Set<Element> = new Set(right)

    for (const leftElement of left) {
      const oldRightSize: number = rightCopy.size

      for (const rightElement of rightCopy) {
        if (areEquals(leftElement, rightElement)) {
          rightCopy.delete(rightElement)
          break
        }
      }

      if (oldRightSize === rightCopy.size) {
        return false
      }
    }

    return true
  }
}