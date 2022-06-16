import { CorvusDocument } from './CorvusDocument'
import { CorvusDocumentNode } from './CorvusDocumentNode'
import { CorvusNodeType } from './CorvusNodeType'
import { CorvusNodeVisitor } from './CorvusNodeVisitor'
import { Builder } from '../Builder'
import { Empty } from '@cedric-demongivert/gl-tool-utils'
import { notNull } from '../notNull'

/**
 *
 */
export abstract class CorvusSectionLike extends CorvusDocumentNode {
  /**
   *
   */
  public readonly title: string

  /**
   *
   */
  public constructor(type: CorvusNodeType, properties: Partial<CorvusSectionLike.Properties>) {
    super(type, properties)
    this.title = properties.title == null ? Empty.STRING : properties.title
  }

  /**
   * 
   */
  public abstract accept(visitor: CorvusNodeVisitor): void

  /**
   * 
   */
  public hasTitle(): boolean {
    return this.title.length > 0
  }

  /**
   *
   */
  public equals(other: any): boolean {
    if (!super.equals(other)) return false

    if (other instanceof CorvusSectionLike) {
      return (
        other.identifier === this.identifier &&
        other.title === this.title
      )
    }

    return false
  }
}

/**
*
*/
export namespace CorvusSectionLike {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    readonly title?: string | null | undefined
  } & CorvusDocumentNode.Properties
}
