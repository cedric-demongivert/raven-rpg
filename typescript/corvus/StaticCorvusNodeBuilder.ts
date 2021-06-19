import { CorvusElement } from './CorvusElement'
import { CorvusElementBuilder } from './CorvusElementBuilder'
import { StaticCorvusElementBuilder } from './StaticCorvusElementBuilder'
import { CorvusNodeBuilder } from './CorvusNodeBuilder'
import { StaticCorvusNode } from './StaticCorvusNode'
import { Arrays } from '../data'

/**
 * 
 */
export class StaticCorvusNodeBuilder<Child extends CorvusElement = CorvusElement> extends StaticCorvusElementBuilder implements CorvusNodeBuilder {
  /**
   * @see CorvusElement.children
   */
  protected readonly _children: CorvusElementBuilder[]

  /**
   * 
   */
  public readonly isNode: true

  /**
   * 
   */
  public get size(): number {
    return this._children.length
  }

  /**
   * 
   */
  public constructor() {
    super()
    this._children = []
    this.isNode = true
  }

  /**
   * 
   */
  public getChild(index: number): CorvusElementBuilder | undefined {
    return this._children[index]
  }

  /**
   * @see CorvusElementBuilder.assign
   */
  public assign(identifierGenerator: Generator<number>): this {
    super.assign(identifierGenerator)

    for (const child of this._children) {
      child.assign(identifierGenerator)
    }

    return this
  }

  /**
   * 
   */
  public children(): IterableIterator<CorvusElementBuilder> {
    return this._children.values()
  }

  /**
   * 
   */
  public appendChild(child: CorvusElementBuilder): this {
    const children: CorvusElementBuilder[] = this._children
    const index: number = children.indexOf(child)

    if (index < 0) {
      children.push(child)
      child.setParent(this)
    } else {
      for (let nextIndex = index + 1; nextIndex < children.length; ++nextIndex) {
        children[nextIndex - 1] = children[nextIndex]
      }

      children[children.length - 1] = child
    }

    return this
  }

  /**
   * 
   */
  public appendChildren(parameter: Iterable<CorvusElementBuilder> | Iterator<CorvusElementBuilder>): this {
    const iterator: Iterator<CorvusElementBuilder> = typeof parameter[Symbol.iterator] === 'function' ? parameter[Symbol.iterator]() : parameter
    let next: IteratorResult<CorvusElementBuilder> = iterator.next()

    while (!next.done) {
      this.appendChild(next.value)
      next = iterator.next()
    }

    return this
  }

  /**
   * 
   */
  public deleteChild(child: CorvusElementBuilder): this {
    const children: CorvusElementBuilder[] = this._children
    const index: number = children.indexOf(child)

    if (index > -1) {
      for (let nextIndex = index + 1; nextIndex < children.length; ++nextIndex) {
        children[nextIndex - 1] = children[nextIndex]
      }

      children.length -= 1
    }

    return this
  }

  /**
   * 
   */
  public deleteChildren(parameter: Iterable<CorvusElementBuilder> | Iterator<CorvusElementBuilder>): this {
    const iterator: Iterator<CorvusElementBuilder> = typeof parameter[Symbol.iterator] === 'function' ? parameter[Symbol.iterator]() : parameter
    let next: IteratorResult<CorvusElementBuilder> = iterator.next()

    while (!next.done) {
      this.deleteChild(next.value)
      next = iterator.next()
    }

    return this
  }

  /**
   * 
   */
  public build(): StaticCorvusNode<Child> {
    return new StaticCorvusNode(this)
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (super.equals(other) && other instanceof StaticCorvusNodeBuilder) {
      return Arrays.deeplyEquals(other._children, this._children)
    }

    return false
  }
}