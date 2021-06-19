/**
 * 
 */
export class CorvusMinimapElement {
  /**
   * 
   */
  public readonly identifier: number

  /**
   * 
   */
  public readonly depth: number

  /**
   * 
   */
  public readonly key: string | undefined

  /**
   * 
   */
  public readonly content: string

  /**
   * 
   */
  public static create (properties: Readonly<CorvusMinimapElement.Properties>): CorvusMinimapElement {
    return new CorvusMinimapElement(properties)
  }

  /**
   * 
   */
  private constructor (properties: Readonly<CorvusMinimapElement.Properties>) {
    this.identifier = properties.identifier
    this.depth = properties.depth
    this.key = properties.key
    this.content = properties.content
  }

  /**
   * 
   */
  public equals (other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusMinimapElement) {
      return (
        other.identifier === this.identifier &&
        other.depth === this.depth &&
        other.key === this.key &&
        other.content === this.content 
      )
    }
  }
}

/**
 * 
 */
export namespace CorvusMinimapElement {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    identifier: number,

    /**
     * 
     */
    depth: number,

    /**
     * 
     */
    key?: string | undefined,

    /**
     * 
     */
    content: string
  }
}