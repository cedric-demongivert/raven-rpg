import React from "react"
import { CorvusLocationFormat } from "../../typescript/location"
import { CorvusFeat } from "../../typescript/model"
import { CorvusTree, CorvusTreeIndex, CorvusTreeIndexer } from "../../typescript/tree"
import { renderCorvusFeatRestrictions } from "./renderCorvusFeatRestrictions"


/**
 * 
 */
export class CorvusFeatIndexRenderer extends CorvusTreeIndexer {
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
    if (tree.isFeat()) {
      this._result.push(this.renderFeat(tree))
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
  public renderFeat(tree: CorvusTree<CorvusFeat>): React.ReactNode {
    let identifier: string
    
    if (tree.node.hasIdentifier()) {
      identifier = tree.node.identifier
    } else {
      identifier = 'section-' + tree.location.stringifySection(CorvusLocationFormat.DEFAULT_IDENTIFIER)
    }
    
    return (
      <a href={`#${identifier}`} className='corvus-feat-index-item' key={this._result.length}>
        <div className="corvus-feat-index-name">
          { tree.node.title }
        </div>
        <div className="corvus-feat-index-summary">
          { tree.node.summary }
        </div>
      </a>
    )

    /*
      <div className="corvus-feat-index-restrictions">
        { renderCorvusFeatRestrictions(tree.node.restrictions) }
      </div>
    */
  }
}
