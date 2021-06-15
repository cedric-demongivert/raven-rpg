import { CorvusDocumentLocationElement } from "./CorvusDocumentLocationElement"
import { CorvusDocumentLocationElementType } from "./CorvusDocumentLocationElementType"

/**
 * 
 */
export class CorvusDocumentLocation {
  /**
   * 
   */
  public readonly elements: CorvusDocumentLocationElement[]

  /**
   * 
   */
  public static create(): CorvusDocumentLocation {
    return new CorvusDocumentLocation()
  }

  /**
   * 
   */
  private constructor() {
    this.elements = []
  }

  /**
   * 
   */
  public section(identifier: number): CorvusDocumentLocation {
    this.elements.push(CorvusDocumentLocationElement.section(identifier))
    return this
  }

  /**
   * 
   */
  public element(identifier: number): CorvusDocumentLocation {
    this.elements.push(CorvusDocumentLocationElement.element(identifier))
    return this
  }

  /**
   * 
   */
  public clear(): void {
    this.elements.length = 0
  }

  /**
   * 
   */
  public toString(): string {
    const elements: CorvusDocumentLocationElement[] = this.elements

    let index: number = 0
    let result: string = ''

    if (0 < elements.length && elements[0].type === CorvusDocumentLocationElementType.SECTION) {
      result = elements[0].identifier.toString()
      index = 1
    }

    for (; index < elements.length; ++index) {
      const element: CorvusDocumentLocationElement = elements[index]

      switch (element.type) {
        case CorvusDocumentLocationElementType.SECTION:
          result += '.'
          break
        case CorvusDocumentLocationElementType.ELEMENT:
          result += ':'
          break
        default:
          throw new Error(
            'Unable to represent the location element of type ' + CorvusDocumentLocationElementType.toDebugString(element.type) +
            ' as no procedure was defined for that.'
          )
      }

      result += element.identifier.toString()
    }

    return result
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusDocumentLocation) {
      if (other.elements.length !== this.elements.length) return false

      for (let index = 0; index < other.elements.length; ++index) {
        if (!other.elements[index].equals(this.elements[index])) return false
      }

      return true
    }

    return false
  }
}