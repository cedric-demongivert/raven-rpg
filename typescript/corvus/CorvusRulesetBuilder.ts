import { Sets } from '../data/Sets'

import { CorvusDocumentModelBuilder } from './CorvusDocumentModelBuilder'
import { CorvusRulesetLayout } from './CorvusRulesetLayout'
import { CorvusRuleset } from './CorvusRuleset'
/**
*
*/
export class CorvusRulesetBuilder implements CorvusDocumentModelBuilder<CorvusRuleset> {
  /**
  *
  */
  public layout: CorvusRulesetLayout

  /**
  *
  */
  public readonly classes: Set<string>

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
    this.layout = CorvusRulesetLayout.DEFAULT
    this.classes = new Set()
  }

  /**
   * 
   */
  public addClasses(classes: Iterable<string>): void {
    for (const token of classes) {
      this.classes.add(token)
    }
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
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusRulesetBuilder) {
      return (
        other.layout === this.layout &&
        Sets.deeplyEquals(other.classes, this.classes)
      )
    }

    return false
  }
}
