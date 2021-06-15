/**
 * 
 */
export class CorvusReference {
  /**
   * 
   */
  public readonly document: string | undefined

  /**
   * 
   */
  public readonly element: string

  /**
   * 
   */
  public static create(parameter: Readonly<CorvusReference.Properties> | string) {
    return new CorvusReference(parameter)
  }

  /**
   * 
   */
  private constructor(parameter: Readonly<CorvusReference.Properties> | string) {
    if (typeof parameter === 'string') {
      this.document = undefined
      this.element = parameter
    } else {
      this.document = parameter.document
      this.element = parameter.element
    }
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusReference) {
      return (
        other.document === this.document &&
        other.element === this.element
      )
    }

    return false
  }
}

/**
 * 
 */
export namespace CorvusReference {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    document?: string | undefined,

    /**
     * 
     */
    element: string
  }
}