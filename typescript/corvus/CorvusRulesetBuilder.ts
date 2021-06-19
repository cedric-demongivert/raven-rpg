import { StaticCorvusNodeBuilder } from './StaticCorvusNodeBuilder'
import { CorvusRulesetLayout } from './CorvusRulesetLayout'
import { CorvusRuleset } from './CorvusRuleset'
import { ClassAssignableBuilder } from './ClassAssignableBuilder'
import { CorvusSubidivison } from './CorvusSubdivision'

/**
*
*/
export class CorvusRulesetBuilder extends ClassAssignableBuilder(StaticCorvusNodeBuilder) {
  /**
  *
  */
  public layout: CorvusRulesetLayout

  /**
  *
  */
  public static create(): CorvusRulesetBuilder {
    return new CorvusRulesetBuilder()
  }

  /**
  *
  */
  private constructor() {
    super()
    this.layout = CorvusRulesetLayout.DEFAULT
  }

  /**
   * 
   */
  // @WARNING -> add beforeBuild hook
  public assign(identifierGenerator: Generator<number>): this {
    this._children.sort(CorvusSubidivison.compareBySubdivision)

    super.assign(identifierGenerator)

    return this
  }

  /**
   * 
   */
  public build(): CorvusRuleset {
    return CorvusRuleset.create(this)
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (super.equals(this) && other instanceof CorvusRulesetBuilder) {
      return other.layout === this.layout
    }

    return false
  }
}
