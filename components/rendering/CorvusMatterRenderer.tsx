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
  private readonly _tracker: CorvusLocationTracker


  /**
   * 
   */
  private readonly _location: CorvusLocation

  /**
   * 
   */
  public constructor() {
    super()
    this._result = []
    this._tracker = new CorvusLocationTracker()
    this._location = new CorvusLocation()
  }

  /**
   * 
   */
  public result(): React.ReactNode {
    const result: React.ReactNode = this._result.slice()
    this._result.length = 0
    this._tracker.clear()
    return result
  }

  /**
   * 
   */
  public enter(tree: CorvusTree<unknown>, index: CorvusTreeIndex): void {
    if (tree.isString()) {
      return
    }
    
    if (tree.isSectionLike()) {
      this._tracker.enterSection()
      this._result.push(this.renderSection(tree))
    }
  }

  /**
   * 
   */
  public exit(tree: CorvusTree<unknown>, index: CorvusTreeIndex): void {
    if (tree.isString()) {
      return
    }

    if (tree.isSectionLike()) {
      this._tracker.exitSection()
    }

    return
  }

  /**
   * 
   */
  public renderSection(tree: CorvusTree<CorvusSectionLike>): React.ReactNode {
    this._tracker.get(this._location)

    const identifier: string = this._location.stringifySection(CorvusLocationFormat.DEFAULT_IDENTIFIER)

    return (
      <a href={`#section-${identifier}`} key={this._result.length} className={"corvus-matter-element corvus-matter-depth-" + tree.sectionDepth}>
        {this._location.stringifySection()}. {tree.node.title}
      </a>
    )
  }
}
