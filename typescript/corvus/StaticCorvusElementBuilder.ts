import { StaticCorvusElement } from './StaticCorvusElement'
import { CorvusElementBuilder } from './CorvusElementBuilder'
import { CorvusNodeBuilder } from './CorvusNodeBuilder'

/**
 * 
 */
export class StaticCorvusElementBuilder implements CorvusElementBuilder {
  /**
   * @see CorvusElement.identifier
   */
  public identifier: number

  /**
   * @see CorvusElement.key
   */
  public key: string | undefined

  /**
   * @see CorvusElement.parent
   */
  private _parent: CorvusNodeBuilder | undefined

  /**
   * 
   */
  public get parent(): CorvusNodeBuilder | undefined {
    return this._parent
  }

  /**
   * @see CorvusElement.isNode
   */
  public readonly isNode: boolean

  /**
   * 
   */
  public set parent(value: CorvusNodeBuilder | undefined) {
    this.setParent(value)
  }

  /**
   * 
   */
  public constructor() {
    this.identifier = 0
    this.key = undefined

    this._parent = undefined
    this.isNode = false
  }

  /**
   * @see CorvusElementBuilder.assign
   */
  public assign(identifierGenerator: Generator<number>): this {
    const result: IteratorResult<number> = identifierGenerator.next()

    if (result.done) {
      throw new Error(
        'Unable to assign another identifier. The given generator reached it\'s maximum capacity, ' +
        'please provide a generator with enough capacity to assign identifier to all available node.'
      )
    }

    this.identifier = result.value

    return this
  }

  /**
   * @see CorvusElementBuilder.setIdentifier
   */
  public setIdentifier(identifier: number): this {
    this.identifier = identifier
    return this
  }

  /**
   * @see CorvusElementBuilder.setParent
   */
  public setParent(parent: CorvusNodeBuilder): this {
    if (this._parent !== undefined) {
      const oldParent: CorvusNodeBuilder = this._parent
      this._parent = undefined
      oldParent.deleteChild(this)
    }

    this._parent = parent

    if (parent != undefined) {
      parent.appendChild(this)
    }

    return this
  }

  /**
   * @see CorvusElementBuilder.setKey
   */
  public setKey(key: string | undefined): this {
    this.key = key
    return this
  }

  /**
   * @see CorvusElementBuilder.build
   */
  public build(): StaticCorvusElement {
    return new StaticCorvusElement(this)
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof StaticCorvusElementBuilder) {
      return (
        other.identifier === this.identifier &&
        other.key === this.key && (
          other.parent ? other.parent.identifier === this.parent.identifier : this.parent === undefined
        )
      )
    }

    return false
  }
}