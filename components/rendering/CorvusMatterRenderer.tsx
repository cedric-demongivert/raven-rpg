import React from "react"
import { CorvusLocation, CorvusLocationFormat, CorvusLocationTracker } from "../../typescript/location"
import { CorvusSectionLike } from "../../typescript/model"
import { CorvusTree, CorvusTreeIndex, CorvusTreeIndexer } from "../../typescript/tree"

/**
 * 
 */
export class CorvusMatterRenderer extends CorvusTreeIndexer {
  /**
   * 
   */
  private readonly _result: Array<React.ReactNode>

  /**
   * 
   */
  public constructor() {
    super()
    this._result = []
  }

  /**
   * 
   */
  public result(): Array<React.ReactNode> {
    const result: Array<React.ReactNode> = this._result.slice()
    this._result.length = 0
    return result
  }

  /**
   * 
   */
  public enter(tree: CorvusTree<unknown>, index: CorvusTreeIndex): void {
    if (tree.isSectionLike()) {
      this._result.push(this.renderSection(tree))
    }
  }

  /**
   * 
   */
  public exit(tree: CorvusTree<unknown>, index: CorvusTreeIndex): void {
    return
  }

  /**
   * 
   */
  public renderSection(tree: CorvusTree<CorvusSectionLike>): React.ReactNode {
    let identifier: string
    
    if (tree.node.hasIdentifier()) {
      identifier = tree.node.identifier
    } else {
      identifier = 'section-' + tree.location.stringifySection(CorvusLocationFormat.DEFAULT_IDENTIFIER)
    }
    
    return (
      <a href={`#${identifier}`} key={this._result.length} className={"corvus-matter-element corvus-matter-depth-" + tree.sectionDepth}>
        {tree.location.stringifySection()}. {tree.node.title}
      </a>
    )
  }
}
