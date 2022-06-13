import React from "react"
import { CorvusLocationTracker } from "../../typescript/location"

import { CorvusAcronym, CorvusEmphasize, CorvusLink, CorvusNode, CorvusNodeType, CorvusParagraph, CorvusSection } from "../../typescript/model"
import { CorvusTree, CorvusTreeIndex, CorvusTreeIndexer } from "../../typescript/tree"

import { CorvusTreeRenderingContext } from "./CorvusTreeRenderingContext"
import { renderCorvusParagraph } from "./renderCorvusParagraph"
import { renderCorvusSection } from "./renderCorvusSection"
import { renderCorvusTitle } from "./renderCorvusTitle"

/**
 * 
 */
const EMPTY_TREE: CorvusTree<null> = new CorvusTree(null)

/**
 * 
 */
export class CorvusTreeRenderer extends CorvusTreeIndexer {
  /**
   * 
   */
  private readonly _stack: Array<React.ReactNode>

  /**
   * 
   */
  private readonly _indices: Array<number>

  /**
   * 
   */
  private readonly _context: CorvusTreeRenderingContext<unknown>

  /**
   * 
   */
  public constructor() {
    super()
    this._stack = []
    this._indices = []
    this._context = new CorvusTreeRenderingContext<unknown>(EMPTY_TREE)
  }

  /**
   * 
   */
  public result(): React.ReactNode {
    const result: React.ReactNode = this._stack.pop()
    return result
  }

  /**
   * 
   */
  public enter(tree: CorvusTree<unknown>, index: CorvusTreeIndex): void {
    if (tree.isString()) {
      return
    }

    this._indices.push(this._stack.length)
  }

  /**
   * 
   */
  public exit(tree: CorvusTree<unknown>, index: CorvusTreeIndex): void {
    if (tree.isString()) {
      this._stack.push(tree.node)
      return
    }

    if (tree.isNode()) {
      this._stack.push(this.renderNode(tree, index))
      return
    }

    const stack: Array<React.ReactNode> = this._stack

    const offset: number = this._indices.pop()
    const elements: React.ReactNode = stack.slice(offset)
    stack.length = offset
    stack.push(elements)
    return
  }

  /**
   * 
   */
  public renderNode(tree: CorvusTree<CorvusNode>, index: CorvusTreeIndex): React.ReactNode {
    const context: CorvusTreeRenderingContext<unknown> = this._context
    
    const indices: Array<number> = this._indices
    const stack: Array<React.ReactNode> = this._stack

    const offset: number = indices.pop()
    
    context.setTree(tree)
    context.setIndex(index)
    context.setKey(indices.length > 0 ? offset - indices[indices.length - 1] : null)
    context.setChildren(stack.slice(offset))

    stack.length = offset

    switch (tree.node.type) {
      case CorvusNodeType.EMPTY:
        return null
      case CorvusNodeType.EMPHASIZE :
        return this.renderEmphasize(context as CorvusTreeRenderingContext<CorvusEmphasize>)
      case CorvusNodeType.ACRONYM :
        return this.renderAcronym(context as CorvusTreeRenderingContext<CorvusAcronym>)
      case CorvusNodeType.LINK :
        return this.renderLink(context as CorvusTreeRenderingContext<CorvusLink>)
      case CorvusNodeType.PARAGRAPH :
        return renderCorvusParagraph(context as CorvusTreeRenderingContext<CorvusParagraph>)
      case CorvusNodeType.SECTION :
        return renderCorvusSection(context as CorvusTreeRenderingContext<CorvusSection>)
      default:
        throw new Error(
          `Unable to render corvus node of type ${CorvusNodeType.toDebugString(tree.node.type)} as no ` +
          'rendering method was defined for that.'
        )
    }
  }

  /**
   * 
   */
  public renderEmphasize(context: CorvusTreeRenderingContext<CorvusEmphasize>): React.ReactElement {
    return React.createElement('em', CorvusTreeRenderingContext.toCorvusNodeProperties(context))
  }

  /**
   * 
   */
  public renderAcronym(context: CorvusTreeRenderingContext<CorvusAcronym>): React.ReactElement {
    const properties: React.HTMLAttributes<HTMLSpanElement> = CorvusTreeRenderingContext.toCorvusNodeProperties(context)

    if (properties.className == null) {
      properties.className = 'acronym'
    } else {
      properties.className = 'acronym ' + properties.className
    }

    return React.createElement('span', properties, context.node.stringify())
  }

  /**
   * 
   */
  public renderLink(context: CorvusTreeRenderingContext<CorvusLink>): React.ReactElement {
    const properties: React.HTMLAttributes<HTMLAnchorElement> & { href?: string } = CorvusTreeRenderingContext.toCorvusNodeProperties(context)
    properties.href = context.node.url

    return React.createElement('a', properties, context.node.hasContent() ? context.node.content : context.node.url)
  }
}
