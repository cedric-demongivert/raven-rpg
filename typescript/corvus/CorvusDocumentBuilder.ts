import { CorvusDocument } from "./CorvusDocument"
import { CorvusElement } from "./CorvusElement"
import { CorvusElementBuilder } from "./CorvusElementBuilder"
import { CorvusNodeBuilder } from "./CorvusNodeBuilder"

/**
 * 
 */
export interface CorvusDocumentBuilder<Child extends CorvusElement = CorvusElement> extends CorvusNodeBuilder<Child> {
  /**
   * 
   */
  elements(): Generator<CorvusElementBuilder>

  /**
   * 
   */
  build(): CorvusDocument<Child>
}