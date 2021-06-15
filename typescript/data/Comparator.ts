/**
 * 
 */
export type Comparator<Left, Right = Left> = (left: Left, right: Right) => number

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

  /**
   * 
   */
  export function both<Left, Right>(first: Comparator<Left, Right>, second: Comparator<Left, Right>): Comparator<Left, Right> {
    return function bothComparator(left: Left, right: Right): number {
      const comparison: number = first(left, right)
      return comparison === 0 ? second(left, right) : comparison
    }
  }
}
