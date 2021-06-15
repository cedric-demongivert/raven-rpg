import { CorvusDocumentModelType } from './CorvusDocumentModelType'

/**
 * 
 */
export interface CorvusDocumentModel {
  /**
   * A number that uniquely identify the class of this document element.
   */
  readonly type: CorvusDocumentModelType

  /**
   * 
   */
  equals(other: any): boolean
}

/**
 * 
 */
export namespace CorvusDocumentModel {
  /**
   * 
   */
  export const Type: typeof CorvusDocumentModelType = CorvusDocumentModelType
}