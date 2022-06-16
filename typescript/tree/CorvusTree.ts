import { CorvusLocation } from "../location"
import { CorvusAcronym, CorvusNode, CorvusEmphasize, CorvusLink, CorvusParagraph, CorvusSection, CorvusDocument, CorvusEmptyNode } from "../model"
import { CorvusSectionLike } from "../model/CorvusSectionLike"
import { CorvusTreeBuilder } from "./CorvusTreeBuilder"

/**
 * 
 */
export class CorvusTree<Node> {
  /**
   * 
   */
  private _parent: CorvusTree<unknown> | null

  /**
   * 
   */
  private readonly _children: Array<CorvusTree<unknown>>

  /**
   * 
   */
  public readonly location: CorvusLocation

  /**
   * 
   */
  public node: Node

  /**
   * 
   */
  public get depth(): number {
    let result: number = 0
    let current: CorvusTree<unknown> | null = this._parent

    while (current != null) {
      result += 1
      current = current._parent
    }

    return result
  }

  /**
   * 
   */
  public get parentSection(): CorvusTree<CorvusSectionLike> | null {
    let current: CorvusTree<unknown> | null = this._parent

    while (current != null) {
      if (current.isSectionLike()) return current
      current = current._parent
    }

    return null
  }

  /**
   * 
   */
  public get parent(): CorvusTree<unknown> | null {
    return this._parent
  }

  /**
   * 
   */
  public set parent(parent: CorvusTree<unknown> | null) {
    this.setParent(parent)
  }

  /**
   * 
   */
  public get size(): number {
    return this._children.length
  }

  /**
   * 
   */
  public get sectionDepth(): number {
    let result: number = 0
    let current: CorvusTree<unknown> | null = this._parent

    while (current != null) {
      result += current.isSectionLike() ? 1 : 0
      current = current._parent
    }

    return result
  }

  /**
   * 
   */
  public constructor(node: Node) {
    this._parent = null
    this._children = []
    this.node = node
    this.location = new CorvusLocation()
  }

  /**
   * 
   */
  public isString(): this is CorvusTree<string> {
    return typeof this.node === 'string'
  }

  /**
   * 
   */
  public isParagraph(): this is CorvusTree<CorvusParagraph> {
    return this.node instanceof CorvusParagraph
  }

  /**
   * 
   */
  public isSection(): this is CorvusTree<CorvusSection> {
    return this.node instanceof CorvusSection
  }

  /**
   * 
   */
  public isEmphasize(): this is CorvusTree<CorvusEmphasize> {
    return this.node instanceof CorvusEmphasize
  }

  /**
   * 
   */
  public isLink(): this is CorvusTree<CorvusLink> {
    return this.node instanceof CorvusLink
  }

  /**
   * 
   */
  public isAcronym(): this is CorvusTree<CorvusAcronym> {
    return this.node instanceof CorvusAcronym
  }

  /**
   * 
   */
  public isEmpty(): this is CorvusTree<CorvusEmptyNode> {
    return this.node instanceof CorvusEmptyNode
  }

  /**
   * 
   */
  public isNode(): this is CorvusTree<CorvusNode> {
    return this.node instanceof CorvusNode
  }

  /**
   * 
   */
  public isSectionLike(): this is CorvusTree<CorvusSectionLike> {
    return this.node instanceof CorvusSectionLike
  }

  /**
   * 
   */
  public isBlock(): boolean {
    return false
  }

  /**
   * 
   */
  public hasParent(): boolean {
    return this._parent != null
  }

  /**
   * 
   */
  public hasChildren(): boolean {
    return this._children.length > 0
  }

  /**
   * 
   */
  public setParent(parent: CorvusTree<unknown> | null): this {
    if (parent === this._parent) return this

    if (this._parent != null) {
      const oldParent: CorvusTree<unknown> = this._parent
      this._parent = null
      oldParent.deleteChild(this)
    }

    this._parent = parent

    if (parent != null) {
      parent.addChild(this)
    }

    return this
  }

  /**
   * 
   */
  public hasChild(child: CorvusTree<unknown>): boolean {
    return this._children.indexOf(child) > -1
  }

  /**
   * 
   */
  public deleteChild(child: CorvusTree<unknown>): this {
    const children: Array<CorvusTree<unknown>> = this._children
    const childIndex: number = children.indexOf(child)

    if (childIndex < 0) return this

    children.splice(childIndex)
    child.setParent(null)

    return this
  }

  /**
   * 
   */
  public addChild(child: CorvusTree<unknown>): this {
    const children: Array<CorvusTree<unknown>> = this._children
    const childIndex: number = children.indexOf(child)

    if (childIndex < 0) {
      children.push(child)
      child.setParent(this)
    }

    return this
  }

  /**
   * 
   */
  public getChild(index: number): CorvusTree<unknown> {
    return this._children[index]
  }

  /**
   * 
   */
  public children(): IterableIterator<CorvusTree<unknown>> {
    return this._children.values()
  }
}

/**
 * 
 */
export namespace CorvusTree {
  /**
   * 
   */
  const BUILDER: CorvusTreeBuilder = new CorvusTreeBuilder()

  /**
   * 
   */
  export function fromNode<Node extends CorvusNode>(node: Node): CorvusTree<Node> {
    BUILDER.visit(node)
    return BUILDER.result() as CorvusTree<Node>
  }

  /**
   * 
   */
  export function fromDocument(node: CorvusDocument): CorvusTree<CorvusDocument> {
    BUILDER.visit(node)
    return BUILDER.result() as CorvusTree<CorvusDocument>
  }
}