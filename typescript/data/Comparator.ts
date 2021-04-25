/**
 * 
 */
export type Comparator<Left, Right> = (left: Left, right: Right) => number

/**
 * 
 */
export namespace Comparator {
  /**
   * 
   */
  export function invert<Left, Right>(baseComparator: Comparator<Left, Right>): Comparator<Left, Right> {
    return function invertedComparator(left: Left, right: Right): number {
      return -baseComparator(left, right)
    }
  }

  /**
   * 
   */
  export function swap<Left, Right>(baseComparator: Comparator<Left, Right>): Comparator<Right, Left> {
    return function invertedComparator(left: Right, right: Left): number {
      return -baseComparator(right, left)
    }
  }
}
