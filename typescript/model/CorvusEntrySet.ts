import { CorvusDocumentNode } from './CorvusDocumentNode'
import { CorvusNodeType } from './CorvusNodeType'
import { CorvusNodeVisitor } from './CorvusNodeVisitor'
import { Empty } from '@cedric-demongivert/gl-tool-utils'
import { CorvusDataType } from '../data/CorvusDataType'
import { List } from 'immutable'
import { notNull } from '../notNull'
import { Builder } from '../Builder'

/**
 *
 */
export class CorvusEntrySet<Entry> extends CorvusDocumentNode {
  /**
   * 
   */
  public readonly type: CorvusNodeType.ENTRY_SET

  /**
   *
   */
  public readonly title: string

  /**
   * 
   */
  public readonly entryType: CorvusDataType<Entry>

  /**
   * 
   */
  public readonly entries: List<Entry>

  /**
   *
   */
  public constructor(properties: Partial<CorvusEntrySet.Properties<Entry>>) {
    super(CorvusNodeType.ENTRY_SET, properties)
    this.title = properties.title == null ? Empty.STRING : properties.title
    this.entryType = notNull(properties.entryType)
    this.entries = List<Entry | Builder<Entry>>(notNull(properties.entries)).map<Entry>(Builder.flatten)
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
  public hasTitle(): boolean {
    return this.title.length > 0
  }

  /**
   * 
   */
  public hasEntries(): boolean {
    return this.entries.size > 0
  }

  /**
   *
   */
  public equals(other: any): boolean {
    if (!super.equals(other)) return false

    if (other instanceof CorvusEntrySet) {
      return (
        other.identifier === this.identifier &&
        other.title === this.title &&
        other.entryType.equals(this.entryType) &&
        other.entries.equals(this.entries)
      )
    }

    return false
  }
}

/**
*
*/
export namespace CorvusEntrySet {
  /**
   * 
   */
  export type Properties<Entry> = {
    /**
     * 
     */
    readonly title?: string | null | undefined,

    /**
     * 
     */
    readonly entryType: CorvusDataType<Entry>,

    /**
     * 
     */
    readonly entries: Iterable<Entry | Builder<Entry>>
  } & CorvusDocumentNode.Properties
}
