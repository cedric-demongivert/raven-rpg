import { notNull } from '../notNull'
import { Builder } from './Builder'
import { CorvusDocument } from './CorvusDocument'
import { CorvusNodeType } from './CorvusNodeType'
import { CorvusNodeVisitor } from './CorvusNodeVisitor'
import { CorvusSectionLike } from './CorvusSectionLike'

/**
 *
 */
export class CorvusSection extends CorvusSectionLike {
  /**
   *
   */
  public readonly type: CorvusNodeType.SECTION

  /**
   *
   */
  public readonly content: CorvusDocument

  /**
   *
   */
  public constructor(properties: Partial<CorvusSection.Properties>) {
    super(CorvusNodeType.SECTION, properties)
    this.content = Builder.flatten(notNull(properties.content))
  }

  /**
   * 
   */
  public accept(visitor: CorvusNodeVisitor): void {
    visitor.enterNode(this)
    CorvusDocument.visit(this.content, visitor)
    visitor.exitNode(this)
  }

  /**
   *
   */
  public equals(other: any): boolean {
    if (!super.equals(other)) return false

    if (other instanceof CorvusSection) {
      return true
    }

    return false
  }
}

/**
*
*/
export namespace CorvusSection {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    readonly content: CorvusDocument | Builder<CorvusDocument>
  } & CorvusSectionLike.Properties

  /**
   * 
   */
  export function create(builder: Partial<Properties>): CorvusSection {
    return new CorvusSection(builder)
  }
}
