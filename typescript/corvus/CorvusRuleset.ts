import { Set } from 'immutable'

import { CorvusRulesetLayout } from './CorvusRulesetLayout'
import { CorvusRulesetBuilder } from './CorvusRulesetBuilder'
import { StaticCorvusNode } from './StaticCorvusNode'
import { CorvusElement } from './CorvusElement'

/**
*
*/
export class CorvusRuleset extends StaticCorvusNode {
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
  public static create(content: Readonly<CorvusRulesetBuilder>): CorvusRuleset {
    return new CorvusRuleset(content)
  }

  /**
  *
  */
  private constructor(properties: Readonly<CorvusRulesetBuilder>) {
    super(properties)
    this.layout = properties.layout || CorvusRulesetLayout.DEFAULT
    this.classes = Set(properties.classes)
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (super.equals(other) && other instanceof CorvusRuleset) {
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
  export function is(element: CorvusElement | null | undefined): element is CorvusRuleset {
    return element && element instanceof CorvusRuleset
  }

  /**
  *
  */
  export function assert(element: CorvusElement | null | undefined, message?: string | undefined): asserts element is CorvusRuleset {
    if (element == undefined || !(element instanceof CorvusRuleset)) {
      throw new Error(message || 'The given element is not a corvus document section.')
    }
  }
}
