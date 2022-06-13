import { equals } from '@cedric-demongivert/gl-tool-utils'
import classNames from 'classnames'
import React from 'react'

import { CorvusLocation } from '../../typescript/location'
import { CorvusNode } from '../../typescript/model'
import { CorvusTree, CorvusTreeIndex } from "../../typescript/tree"

/**
 * 
 */
export class CorvusTreeRenderingContext<Node> {
  /**
   * 
   */
  public tree: CorvusTree<Node>

  /**
   * 
   */
  public get node(): Node {
    return this.tree.node
  }

  /**
   * 
   */
  public readonly index: CorvusTreeIndex

  /**
   * 
   */
  public readonly location: CorvusLocation

  /**
   * 
   */
  public children: Array<React.ReactNode>

  /**
   * 
   */
  public key: number | null

  /**
   * 
   */
  public constructor (tree: CorvusTree<Node>) {
    this.tree = tree
    this.index = new CorvusTreeIndex()
    this.location = new CorvusLocation()
    this.children = []
    this.key = null
  }

  /**
   * 
   */
  public setTree(tree: CorvusTree<Node>): this {
    this.tree = tree
    return this
  }

  /**
   * 
   */
  public setIndex(index: CorvusTreeIndex): this {
    this.index.copy(index)
    return this
  }

  /**
   * 
   */
  public setChildren(children: Array<React.ReactNode>): this {
    this.children = children
    return this
  }

  /**
   * 
   */
  public setKey(key: number | null): this {
    this.key = key
    return this
  }

  /**
   * 
   */
  public setLocation(location: CorvusLocation | null): this {
    this.location.copy(location)
    return this
  }

  /**
   * 
   */
  public hasKey(): boolean {
    return this.key != null
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusTreeRenderingContext) {
      return (
        equals(other.tree.node, this.tree.node) &&
        other.index.equals(this.index) &&
        other.location.equals(this.location)
      )
    }

    return false
  }
}

/**
 * 
 */
export namespace CorvusTreeRenderingContext {
  /**
   * 
   */
  export type CorvusNodeProperties = {
    /**
     * 
     */
    id?: string,

    /**
     * 
     */
    className?: string,

    /**
     * 
     */
    children?: Array<React.ReactNode>,

    /**
     * 
     */
    key?: number
  }

  /**
   * 
   */
  export function toCorvusNodeProperties(context: CorvusTreeRenderingContext<CorvusNode>): CorvusNodeProperties {
    const result: CorvusNodeProperties = toShallowCorvusNodeProperties(context)

    if (context.children.length > 0) {
      result.children = context.children
    }

    return result
  }

  

  /**
   * 
   */
   export function toShallowCorvusNodeProperties(context: CorvusTreeRenderingContext<CorvusNode>): CorvusNodeProperties {
    const result: CorvusNodeProperties = { }

    if (context.key != null) {
      result.key = context.key
    }

    if (context.node.hasIdentifier()) {
      result.id = context.node.identifier
    }

    if (context.node.hasClasses()) {
      result.className = classNames(context.node.classes)
    }

    return result
  }
}