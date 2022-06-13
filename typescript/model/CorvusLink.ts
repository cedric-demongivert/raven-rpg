import { Empty } from '@cedric-demongivert/gl-tool-utils'

import { notEmpty } from '../notEmpty'
import { notNull } from '../notNull'

import { CorvusTextNode } from './CorvusTextNode'
import { CorvusNodeType } from './CorvusNodeType'
import { CorvusNodeVisitor } from './CorvusNodeVisitor'

/**
 *
 */
export class CorvusLink extends CorvusTextNode {
  /**
   *
   */
  public readonly type: CorvusNodeType.LINK

  /**
   *
   */
  public readonly content: string

  /**
   *
   */
  public readonly url: string

  /**
   *
   */
  public constructor(properties: Partial<CorvusLink.Properties>) {
    super(CorvusNodeType.LINK, properties)

    this.url = notEmpty(notNull(properties.url))
    this.content = properties.content == null ? Empty.STRING : properties.content
  }

  /**
   * 
   */
  public hasContent(): boolean {
    return this.content.length > 0
  }

  /**
   * 
   */
  public accept(visitor: CorvusNodeVisitor): void {
    visitor.enterNode(this)
    visitor.exitNode(this)
  }

  /**
   *
   */
  public equals(other: unknown): boolean {
    if (!super.equals(other)) return false

    if (other instanceof CorvusLink) {
      return (
        this.content === other.content &&
        this.url === other.url
      )
    }

    return false
  }
}

/**
 *
 */
export namespace CorvusLink {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    readonly url: string,

    /**
     * 
     */
    readonly content?: string | null | undefined
  } & CorvusTextNode.Properties

  /**
   * 
   */
  export function create(properties: Partial<Properties>): CorvusLink {
    return new CorvusLink(properties)
  }
}
