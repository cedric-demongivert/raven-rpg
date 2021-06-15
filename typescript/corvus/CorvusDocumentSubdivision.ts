import { CorvusDocumentModel } from "./CorvusDocumentModel";

/**
 * A subdivision is a set of one ore more document element that can be viewed as a whole document by themselves.
 * 
 * A subdivision must declare a title, and are taken into account during the numerotation process of the document itself.
 */
export interface CorvusDocumentSubdivision extends CorvusDocumentModel {
  /**
   * 
   */
  subdivision(): string
}

/**
 * 
 */
export namespace CorvusDocumentSubdivision {
  /**
   * 
   */
  export function is(model: CorvusDocumentModel): model is CorvusDocumentSubdivision {
    return 'subdivision' in model
  }
}