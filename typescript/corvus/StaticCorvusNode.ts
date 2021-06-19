import { List } from 'immutable'

import { CorvusElement } from './CorvusElement'
import { CorvusNode } from './CorvusNode'
import { CorvusIdentifier } from './CorvusIdentifier'
import { StaticCorvusElement } from './StaticCorvusElement'
import { StaticCorvusNodeBuilder } from './StaticCorvusNodeBuilder'

/**
 * 
 */
export class StaticCorvusNode<Child extends CorvusElement = CorvusElement> extends StaticCorvusElement implements CorvusNode<Child> {
  /**
   * @see CorvusElement.identifier
   */
  public readonly children: List<CorvusIdentifier<Child>>

  /**
   * 
   */
  public readonly isNode: true

  /**
   * 
   */
  public constructor(properties: Readonly<StaticCorvusNodeBuilder<Child>>) {
    super(properties)

    const children = List().asMutable()

    for (const child of properties.children()) {
      children.push(child.identifier)
    }

    this.children = children.asImmutable()
    this.isNode = true
  }

  /**
   * @see Object.equals
   */
  public equals(other: any): boolean {
    if (super.equals(other) && other instanceof StaticCorvusNode) {
      return other.children.equals(this.children)
    }

    return false
  }
}