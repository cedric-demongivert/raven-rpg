import { Empty } from '@cedric-demongivert/gl-tool-utils'

import { notEmpty } from '../notEmpty'
import { notNull } from '../notNull'

import { CorvusNodeType } from './CorvusNodeType'
import { CorvusNodeVisitor } from './CorvusNodeVisitor'
import { CorvusTextNode } from './CorvusTextNode'

/**
 *
 */
export class CorvusAcronym extends CorvusTextNode {
  /**
   *
   */
  public readonly type: CorvusNodeType.ACRONYM

  /**
   *
   */
  public readonly acronym: string

  /**
   *
   */
  public readonly expanded: string

  /**
   *
   */
  public constructor(properties: Partial<CorvusAcronym.Properties>) {
    super(CorvusNodeType.ACRONYM, properties)

    this.acronym = notEmpty(notNull(properties.acronym))
    this.expanded = properties.expanded == null ? Empty.STRING : properties.expanded
  }

  /**
   * 
   */
  public hasExpanded(): boolean {
    return this.expanded.length > 0
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
  public stringify(): string {
    return this.hasExpanded() ? `${this.expanded} (${this.acronym})` : this.acronym
  }

  /**
   *
   */
  public equals(other: unknown): boolean {
    if (!super.equals(other)) return false

    if (other instanceof CorvusAcronym) {
      return (
        other.acronym === this.acronym &&
        other.expanded === this.expanded
      )
    }

    return false
  }
}

/**
 *
 */
export namespace CorvusAcronym {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    readonly acronym: string,

    /**
     * 
     */
    readonly expanded?: string | null | undefined
  } & CorvusTextNode.Properties

  /**
   * 
   */
  export function create(properties: Partial<Properties>): CorvusAcronym {
    return new CorvusAcronym(properties)
  }
}
