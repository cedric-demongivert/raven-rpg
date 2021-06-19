import { CorvusDocumentBuilder } from "./CorvusDocumentBuilder"
import { CorvusElement } from "./CorvusElement"
import { CorvusElementBuilder } from "./CorvusElementBuilder"
import { CorvusNode } from "./CorvusNode"
import { CorvusNodeBuilder } from "./CorvusNodeBuilder"
import { StaticCorvusDocument } from "./StaticCorvusDocument"
import { StaticCorvusNodeBuilder } from "./StaticCorvusNodeBuilder"

/**
 * 
 */
export class StaticCorvusDocumentBuilder<Child extends CorvusElement = CorvusElement>
  extends StaticCorvusNodeBuilder<Child>
  implements CorvusDocumentBuilder<Child>
{
  /**
   * 
   */
  public get parent(): undefined {
    return undefined
  }

  /**
   * 
   */
  public set parent(parent: undefined) {
    throw new Error('Trying to attach a document builder to another node builder.')
  }

  /**
   * 
   */
  public setParent(parent: undefined): this {
    throw new Error('Trying to attach a document builder to another node builder.')
  }

  /**
   * 
   */
  public * elements(): Generator<CorvusElementBuilder> {
    const stack: CorvusElementBuilder[] = []

    for (let index = 0; index < this.size; ++index) {
      stack.push(this.getChild(this.size - index - 1))
    }

    while (stack.length > 0) {
      const current: CorvusElementBuilder = stack.pop()

      yield current

      if (CorvusNodeBuilder.is(current)) {
        for (let index = 0; index < current.size; ++index) {
          stack.push(current.getChild(current.size - index - 1))
        }
      }
    }
  }

  /**
   * 
   */
  public build(): StaticCorvusDocument<Child> {
    return new StaticCorvusDocument(this)
  }
}