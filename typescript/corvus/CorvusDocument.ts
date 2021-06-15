import { List } from 'immutable'
import { bissect } from '../data/bissect'
import { assertDefined } from '../utils'

import { CorvusDocumentElement } from './CorvusDocumentElement'
import { CorvusDocumentElementBuilder } from './CorvusDocumentElementBuilder'
import { CorvusDocumentModel } from './CorvusDocumentModel'
import { CorvusDocumentSubdivision } from './CorvusDocumentSubdivision'

/**
 * 
 */
function* simpleIdentifierGenerator(): Generator<number> {
  for (let index = 0; true; ++index) {
    yield index
  }
}

/**
 * 
 */
export class CorvusDocument<Model extends CorvusDocumentModel = CorvusDocumentModel> {
  /**
   * 
   */
  public readonly model: Model

  /**
   * 
   */
  public readonly elements: List<CorvusDocumentElement>

  /**
   * 
   */
  public readonly elementsByKey: List<CorvusDocumentElement>

  /**
   * 
   */
  public get size(): number {
    return this.elements.size
  }

  /**
   * 
   */
  public static create<Model extends CorvusDocumentModel>(builder: CorvusDocumentElementBuilder<Model>) {
    return new CorvusDocument(builder)
  }

  /**
   * 
   */
  private constructor(builder: CorvusDocumentElementBuilder<Model>) {
    const elements: CorvusDocumentElement[] = []
    const buildStream: Generator<CorvusDocumentElement, CorvusDocumentElement> = builder.build(simpleIdentifierGenerator())

    let iteration: IteratorResult<CorvusDocumentElement, CorvusDocumentElement> = buildStream.next()

    while (!iteration.done) {
      elements.push(iteration.value)
      iteration = buildStream.next()
    }

    elements.push(iteration.value)

    elements.sort(CorvusDocumentElement.compareByIdentifier)
    this.model = elements[0].model as Model
    this.elements = List(elements)

    elements.sort(CorvusDocumentElement.compareByKey)
    this.elementsByKey = List(elements)
  }

  /**
   * 
   */
  public values(): IterableIterator<CorvusDocumentElement> {
    return this.elements.values()
  }

  /**
   * 
   */
  public depth(identifier: number): number {
    let element: CorvusDocumentElement = this.requireByIdentifier(identifier)
    let result: number = 0

    while (element.identifier !== 0) {
      element = this.requireByIdentifier(element.parent)

      if (CorvusDocumentSubdivision.is(element.model)) {
        result += 1
      }
    }

    return result
  }

  /**
   * 
   */
  public get(index: number): CorvusDocumentElement | undefined {
    return this.elements.get(index)
  }

  /**
   * 
   */
  public getByIdentifier(identifier: number): CorvusDocumentElement | undefined {
    const index: number = bissect.list(this.elements, identifier, CorvusDocumentElement.compareWithIdentifier.asLeftMember)

    if (index < 0) {
      return undefined
    } else {
      return this.elements.get(index)
    }
  }

  /**
   * 
   */
  public requireByIdentifier<ElementModel extends CorvusDocumentModel = CorvusDocumentModel>(
    identifier: number,
    assertType?: CorvusDocument.TypeAssert<ElementModel> | undefined
  ): CorvusDocumentElement<ElementModel> {
    const result: CorvusDocumentElement | undefined = this.getByIdentifier(identifier)

    assertDefined(result, 'Unable to require the element #' + identifier + ' as the requested element does not exists into this document.')
    if (assertType) assertType(result.model)

    return result as CorvusDocumentElement<ElementModel>
  }

  /**
   * 
   */
  public getByKey(key: string): CorvusDocumentElement | undefined {
    const index: number = bissect.list(this.elementsByKey, key, CorvusDocumentElement.compareWithKey.asLeftMember)

    if (index < 0) {
      return undefined
    } else {
      return this.elementsByKey.get(index)
    }
  }

  /**
   * 
   */
  public requireByKey<ElementModel extends CorvusDocumentModel = CorvusDocumentModel>(
    key: string,
    assertType?: CorvusDocument.TypeAssert<ElementModel> | undefined
  ): CorvusDocumentElement<ElementModel> {
    const result: CorvusDocumentElement | undefined = this.getByKey(key)

    assertDefined(result, 'Unable to require the element with key ' + key + ' as the requested element does not exists into this document.')
    if (assertType) assertType(result.model)

    return result as CorvusDocumentElement<ElementModel>
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusDocument) {
      return other.elements.equals(this.elements)
    }
  }
}

/**
 * 
 */
export namespace CorvusDocument {
  /**
   * 
   */
  export type TypeAssert<Model extends CorvusDocumentModel> = (value: CorvusDocumentModel) => asserts value is Model
}