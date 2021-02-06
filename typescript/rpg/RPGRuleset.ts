import { List } from 'immutable'

import { Empty } from '../Empty'

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
  public constructor(properties: RPGRuleset.Properties = Empty.OBJECT) {
    this.type = RPGElementType.RULESET
    this.identifier = properties.identifier || undefined
    this.children = properties.children || List()
    this.layout = properties.layout || RPGRulesetLayout.DEFAULT
  }

  /**
  *
  */
  public setIdentifier(identifier: string | undefined): RPGRuleset {
    if (this.identifier === identifier) {
      return this
    } else {
      return new RPGRuleset({ ...this, identifier })
    }
  }

  /**
  *
  */
  public setContent(content: List<RPGSection>): RPGRuleset {
    if (this.children === content) {
      return this
    } else {
      return new RPGRuleset({ ...this, content })
    }
  }

  /**
  *
  */
  public setLayout(layout: RPGRulesetLayout): RPGRuleset {
    if (this.layout === layout) {
      return this
    } else {
      return new RPGRuleset({ ...this, layout })
    }
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
    layout?: RPGRulesetLayout
  }

  /**
  *
  */
  export const EMPTY: RPGRuleset = new RPGRuleset()

  /**
  *
  */
  export function empty(): RPGRuleset {
    return EMPTY
  }

  /**
  *
  */
  export function create(content: Properties = Empty.OBJECT): RPGRuleset {
    return new RPGRuleset(content)
  }
}
