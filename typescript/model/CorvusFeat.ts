import { notNull } from '../notNull'
import { Builder } from '../Builder'
import { CorvusDocument } from './CorvusDocument'
import { CorvusNodeType } from './CorvusNodeType'
import { CorvusNodeVisitor } from './CorvusNodeVisitor'
import { CorvusSectionLike } from './CorvusSectionLike'
import { List } from 'immutable'
import { CorvusFeatRestriction } from '../data'

/**
 *
 */
export class CorvusFeat extends CorvusSectionLike {
  /**
   *
   */
  public readonly type: CorvusNodeType.FEAT

  /**
   *
   */
  public readonly content: CorvusDocument

  /**
   *
   */
  public readonly restrictions: List<CorvusFeatRestriction>

  /**
   *
   */
  public constructor(properties: Partial<CorvusFeat.Properties>) {
    super(CorvusNodeType.FEAT, properties)
    this.content = Builder.flatten(notNull(properties.content))
    this.restrictions = properties.restrictions == null ? List() : List([...properties.restrictions].map<CorvusFeatRestriction>(Builder.flatten))
  }

  /**
   * 
   */
  public hasRestrictions(): boolean {
    return this.restrictions.size > 0
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

    if (other instanceof CorvusFeat) {
      return (
        other.restrictions.equals(this.restrictions) &&
        other.content.equals(this.content)
      )
    }

    return false
  }
}

/**
*
*/
export namespace CorvusFeat {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    readonly content: CorvusDocument | Builder<CorvusDocument>,

    /**
     * 
     */
    readonly restrictions?: Iterable<CorvusFeatRestriction | Builder<CorvusFeatRestriction>> | null
  } & CorvusSectionLike.Properties

  /**
   * 
   */
  export function create(builder: Partial<Properties>): CorvusFeat {
    return new CorvusFeat(builder)
  }
}
