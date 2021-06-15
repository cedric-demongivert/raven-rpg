import { Arrays } from '../data'
import { CorvusDocumentElement } from './CorvusDocumentElement'
import { CorvusDocumentModel } from './CorvusDocumentModel'
import { CorvusDocumentModelBuilder } from './CorvusDocumentModelBuilder'

/**
 * 
 */
function requireNextIdentifer(identifierGenerator: Generator<number>): number {
  const result: IteratorResult<number> = identifierGenerator.next()

  if (result.done) {
    throw new Error(
      'Unable to allocate another identifier as expected. The given generator reached it\'s maximum capacity, ' +
      'please provide a generator with enough capacity.'
    )
  }

  return result.value
}

/**
 * 
 */
export class CorvusDocumentElementBuilder<
  Model extends CorvusDocumentModel = CorvusDocumentModel,
  ModelBuilder extends CorvusDocumentModelBuilder<Model> = CorvusDocumentModelBuilder<Model>
  > {
  /**
   * @see CorvusDocumentElement.children
   */
  public readonly children: CorvusDocumentElementBuilder[]

  /**
   * @see CorvusDocumentElement.model
   */
  public readonly model: ModelBuilder

  /**
   * @see CorvusDocumentElement.key
   */
  public key: string | undefined

  /**
   * 
   */
  public static create<
    Model extends CorvusDocumentModel,
    ModelBuilder extends CorvusDocumentModelBuilder<Model>
  >(builder: ModelBuilder): CorvusDocumentElementBuilder<Model, ModelBuilder> {
    return new CorvusDocumentElementBuilder(builder)
  }

  /**
   * 
   */
  private constructor(builder: ModelBuilder) {
    this.model = builder
    this.children = []
    this.key = undefined
  }

  /**
   * 
   */
  public addChildren(children: Iterable<CorvusDocumentElementBuilder>): void {
    for (const child of children) {
      this.children.push(child)
    }
  }

  /**
   * 
   */
  public * build(identifierGenerator: Generator<number>, parent: number = 0): Generator<CorvusDocumentElement, CorvusDocumentElement<Model>, undefined> {
    const identifier: number = requireNextIdentifer(identifierGenerator)
    const children: number[] = []

    for (const child of this.children) {
      const result: CorvusDocumentElement = yield* child.build(identifierGenerator, identifier)
      yield result
      children.push(result.identifier)
    }

    return CorvusDocumentElement.create({
      identifier,
      parent,
      key: this.key,
      children,
      model: this.model.build()
    })
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusDocumentElementBuilder) {
      return (
        other.key === this.key &&
        other.model.equals(this.model) &&
        Arrays.deeplyEquals(other.children, this.children)
      )
    }
  }
}