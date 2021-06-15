import { CorvusDocumentLocationElementType } from "./CorvusDocumentLocationElementType"

/**
 * 
 */
export class CorvusDocumentLocationElement {
  /**
   * 
   */
  public identifier: number

  /**
   * 
   */
  public type: CorvusDocumentLocationElementType

  /**
   * 
   */
  public static create(): CorvusDocumentLocationElement {
    return new CorvusDocumentLocationElement()
  }

  /**
   * 
   */
  public static copy(toCopy: CorvusDocumentLocationElement): CorvusDocumentLocationElement {
    return CorvusDocumentLocationElement.create().copy(toCopy)
  }

  /**
   * 
   */
  public static section(identifier: number): CorvusDocumentLocationElement {
    return CorvusDocumentLocationElement.create().section(identifier)
  }

  /**
   * 
   */
  public static element(identifier: number): CorvusDocumentLocationElement {
    return CorvusDocumentLocationElement.create().element(identifier)
  }

  /**
   * 
   */
  private constructor() {
    this.identifier = 0
    this.type = CorvusDocumentLocationElementType.DEFAULT
  }

  /**
   * 
   */
  public copy(toCopy: CorvusDocumentLocationElement): CorvusDocumentLocationElement {
    this.identifier = toCopy.identifier
    this.type = toCopy.type
    return this
  }

  /**
   * 
   */
  public section(identifier: number): CorvusDocumentLocationElement {
    this.identifier = identifier
    this.type = CorvusDocumentLocationElementType.SECTION
    return this
  }

  /**
   * 
   */
  public element(identifier: number): CorvusDocumentLocationElement {
    this.identifier = identifier
    this.type = CorvusDocumentLocationElementType.ELEMENT
    return this
  }

  /**
   * 
   */
  public clear(): void {
    this.identifier = 0
    this.type = CorvusDocumentLocationElementType.DEFAULT
  }

  /**
   * 
   */
  public toString(): string {
    return (
      this.constructor.name + ' ' +
      CorvusDocumentLocationElementType.toDebugString(this.type) + ' #' +
      this.identifier
    )
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusDocumentLocationElement) {
      return (
        other.identifier === this.identifier &&
        other.type === this.type
      )
    }
  }
}

/**
 * 
 */
export namespace CorvusDocumentLocationElement {
  /**
   * 
   */
  export const Type: typeof CorvusDocumentLocationElementType = CorvusDocumentLocationElementType
}