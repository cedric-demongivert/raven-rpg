import { Set } from 'immutable'

import { CorvusDocumentModel } from './CorvusDocumentModel'
import { CorvusRulesetLayout } from './CorvusRulesetLayout'
import { CorvusDocumentModelType } from './CorvusDocumentModelType'
import { CorvusRulesetBuilder } from './CorvusRulesetBuilder'
import { CorvusDocumentElementBuilder } from './CorvusDocumentElementBuilder'

/**
*
*/
export class CorvusRuleset implements CorvusDocumentModel {
  /**
  *
  */
  public readonly type: CorvusDocumentModelType.RULESET

  /**
  *
  */
  public readonly layout: CorvusRulesetLayout

  /**
   * 
   */
  public readonly classes: Set<string>

  /**
  *
  */
  public static create(content: CorvusRuleset.Properties): CorvusRuleset {
    return new CorvusRuleset(content)
  }

  /**
  *
  */
  private constructor(properties: CorvusRuleset.Properties) {
    this.type = CorvusDocumentModelType.RULESET
    this.layout = properties.layout || CorvusRulesetLayout.DEFAULT
    this.classes = Set(properties.classes)
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusRuleset) {
      return (
        other.layout === this.layout &&
        other.classes.equals(this.classes)
      )
    }

    return false
  }
}

/**
*
*/
export namespace CorvusRuleset {
  /**
  *
  */
  export type Properties = {
    /**
    *
    */
    layout?: CorvusRulesetLayout | undefined,

    /**
     * 
     */
    classes?: Iterable<string> | undefined
  }

  /**
  *
  */
  export function is(element: CorvusDocumentModel | null | undefined): element is CorvusRuleset {
    return element && element instanceof CorvusRuleset
  }

  /**
  *
  */
  export function assert(element: CorvusDocumentModel | null | undefined, message?: string | undefined): asserts element is CorvusRuleset {
    if (element == undefined || !(element instanceof CorvusRuleset)) {
      throw new Error(message || 'The given element is not a corvus document section.')
    }
  }

  /**
   * 
   */
  export type Builder = CorvusRulesetBuilder

  /**
   * 
   */
  export type ElementBuilder = CorvusDocumentElementBuilder<CorvusRuleset, Builder>

  /**
   * 
   */
  export const createBuilder: typeof CorvusRulesetBuilder.create = CorvusRulesetBuilder.create

  /**
   * 
   */
  export function createElementBuilder(): ElementBuilder {
    return CorvusDocumentElementBuilder.create(createBuilder())
  }
}
