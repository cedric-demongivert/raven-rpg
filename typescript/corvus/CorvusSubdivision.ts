/**
 * 
 */
export interface CorvusSubdivision {
  /**
   * 
   */
  subdivision?(): string | undefined
}

/**
 * 
 */
export namespace CorvusSubidivison {
  /**
   * 
   */
  export function get(element: any): string | undefined {
    return element.subdivision ? element.subdivision() : undefined
  }

  /**
   * 
   */
  export function is(element: any): boolean {
    return get(element) != null
  }

  /**
   * 
   */
  export function compareBySubdivision(left: any, right: any): number {
    const leftDivision: string | undefined = get(left)
    const rightDivision: string | undefined = get(right)

    if (leftDivision == null) {
      return rightDivision == null ? 0 : 1
    } else {
      return rightDivision == null ? -1 : leftDivision.localeCompare(rightDivision)
    }
  }

  /**
   * 
   */
  export function compareWithSubdivision(left: any, right: string | undefined): number {
    const leftDivision: string | undefined = get(left)

    if (leftDivision == null) {
      return right == null ? 0 : 1
    } else {
      return right == null ? -1 : leftDivision.localeCompare(right)
    }
  }

  /**
   * 
   */
  export namespace compareWithSubdivision {
    /**
     * 
     */
    export function asLeftMember(left: string | undefined, right: any): number {
      const rightDivision: string | undefined = get(right)

      if (left == null) {
        return rightDivision == null ? 0 : 1
      } else {
        return rightDivision == null ? -1 : left.localeCompare(rightDivision)
      }
    }

    /**
     * 
     */
    export const asRightMember: typeof compareWithSubdivision = compareWithSubdivision
  }
}