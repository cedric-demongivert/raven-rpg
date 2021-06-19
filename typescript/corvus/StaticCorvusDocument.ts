import { List } from 'immutable'
import { bissect } from '../data/bissect'
import { assertDefined } from '../utils'

import { CorvusDocument } from './CorvusDocument'
import { CorvusElement } from './CorvusElement'
import { CorvusIdentifier } from './CorvusIdentifier'
import { CorvusSubidivison } from './CorvusSubdivision'
import { StaticCorvusDocumentBuilder } from './StaticCorvusDocumentBuilder'
import { StaticCorvusNode } from './StaticCorvusNode'

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
export class StaticCorvusDocument<Child extends CorvusElement = CorvusElement> extends StaticCorvusNode<Child> implements CorvusDocument<Child> {
  /**
   * 
   */
  private readonly _elements: List<CorvusElement>

  /**
   * 
   */
  private readonly _elementsByKey: List<CorvusElement>

  /**
   * 
   */
  public readonly parent: undefined

  /**
   * 
   */
  public get size(): number {
    return this._elements.size
  }

  /**
   * 
   */
  public constructor(builder: StaticCorvusDocumentBuilder<Child>) {
    builder.assign(simpleIdentifierGenerator())

    super(builder)

    const elements: CorvusElement[] = [this]

    for (const elementBuilder of builder.elements()) {
      elements.push(elementBuilder.build())
    }

    this._elements = List(elements)

    elements.sort(CorvusElement.compareByKey)
    this._elementsByKey = List(elements)
  }

  /**
   * 
   */
  public elements(): IterableIterator<CorvusElement> {
    return this._elements.values()
  }

  /**
   * 
   */
  public depth(identifier: number): number {
    let element: CorvusElement = this.require(identifier)
    let result: number = 0

    while (element.identifier > 0) {
      element = this.require(element.parent)

      if (CorvusSubidivison.is(element)) {
        result += 1
      }
    }

    return result
  }

  /**
   * 
   */
  public get(identifier: number): CorvusElement | undefined
  /**
   * 
   */
  public get<Element extends CorvusElement>(identifier: CorvusIdentifier<Element>): Element | undefined
  /**
   * 
   */
  public get(key: string): CorvusElement | undefined
  public get(parameter: any): CorvusElement | undefined {
    if (typeof parameter === 'number') {
      return this._elements.get(parameter)
    } else {
      const index: number = bissect.list(this._elementsByKey, parameter, CorvusElement.compareWithKey.asLeftMember)
      return index < 0 ? undefined : this._elementsByKey.get(index)
    }
  }

  /**
   * 
   */
  public require(identifier: number): CorvusElement
  /**
   * 
   */
  public require<Element extends CorvusElement>(identifier: CorvusIdentifier<Element>): Element
  /**
   * 
   */
  public require(key: string): CorvusElement
  public require(parameter: any): CorvusElement | undefined {
    const result: CorvusElement = this.get(parameter)

    assertDefined(result, 'Unable to require the element ' + parameter + ' as the requested element does not exists into this document.')

    return result
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (super.equals(other) && other instanceof StaticCorvusDocument) {
      return other._elements.equals(this._elements)
    }

    return false
  }
}