import { List, Set } from 'immutable'

import { Empty } from '../../utils/Empty'

import { RPGNode } from './RPGNode'
import { RPGElementType } from './RPGElementType'
import { RPGSection } from './RPGSection'
import { RPGRulesetLayout } from './RPGRulesetLayout'

/**
*
*/
export class RPGRuleset implements RPGNode {
  /**
  *
  */
  public readonly type: RPGElementType.RULESET

  /**
  *
  */
  public readonly identifier: string | undefined

  /**
  *
  */
  public readonly children: List<RPGSection>

  /**
  *
  */
  public readonly layout: RPGRulesetLayout

  /**
   * 
   */
  public readonly classes: Set<string>

  /**
   * 
   */
  public readonly isNode: true

  /**
  *
  */
  public static create(content: RPGRuleset.Properties = Empty.OBJECT): RPGRuleset {
    return new RPGRuleset(content)
  }

  /**
  *
  */
  private constructor(properties: RPGRuleset.Properties = Empty.OBJECT) {
    this.type = RPGElementType.RULESET
    this.identifier = properties.identifier || undefined
    this.children = properties.children || List()
    this.layout = properties.layout || RPGRulesetLayout.DEFAULT
    this.classes = properties.classes || Set()
    this.isNode = true
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof RPGRuleset) {
      return (
        other.identifier === this.identifier &&
        other.layout === this.layout &&
        other.children.equals(this.children)
      )
    }

    return false
  }
}

/**
*
*/
export namespace RPGRuleset {
  /**
  *
  */
  export type Properties = {
    /**
    *
    */
    identifier?: string | undefined,

    /**
    *
    */
    children?: List<RPGSection>,

    /**
    *
    */
    layout?: RPGRulesetLayout,

    /**
     * 
     */
    classes?: Set<string> | undefined
  }

  /**
  *
  */
  export const EMPTY: RPGRuleset = RPGRuleset.create()

  /**
  *
  */
  export function empty(): RPGRuleset {
    return EMPTY
  }
}
