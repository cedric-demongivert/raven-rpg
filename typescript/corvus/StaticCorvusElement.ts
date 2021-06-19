import { CorvusElement } from './CorvusElement'
import { CorvusIdentifier } from './CorvusIdentifier'
import { CorvusNode } from './CorvusNode'
import { StaticCorvusElementBuilder } from './StaticCorvusElementBuilder'

/**
 * 
 */
export class StaticCorvusElement implements CorvusElement {
  /**
   * @see CorvusElement.identifier
   */
  public readonly identifier: CorvusIdentifier<this>

  /**
   * @see CorvusElement.parent
   */
  public readonly parent: CorvusIdentifier<CorvusNode> | undefined

  /**
   * @see CorvusElement.key
   */
  public readonly key: string | undefined

  /**
   * 
   */
  public readonly isNode: boolean

  /**
   * 
   */
  public constructor(properties: Readonly<StaticCorvusElementBuilder>) {
    this.identifier = properties.identifier
    this.parent = properties.parent ? properties.parent.identifier : undefined
    this.key = properties.key
    this.isNode = false
  }

  /**
   * @see Object.equals
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof StaticCorvusElement) {
      return (
        other.identifier === this.identifier &&
        other.parent === this.parent &&
        other.key === this.key
      )
    }
  }
}