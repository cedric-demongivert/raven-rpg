import { CorvusDocumentModel } from './CorvusDocumentModel'
import { CorvusImageBuilder } from './CorvusImageBuilder'

import { CorvusParagraphBuilder } from './CorvusParagraphBuilder'
import { CorvusRulesetBuilder } from './CorvusRulesetBuilder'
import { CorvusSectionBuilder } from './CorvusSectionBuilder'

/**
 * 
 */
export interface CorvusDocumentModelBuilder<Element extends CorvusDocumentModel = CorvusDocumentModel> {
  /**
   * 
   */
  build(): Element

  /**
   * 
   */
  equals(other: any): boolean
}

/**
 * 
 */
export namespace CorvusDocumentModelBuilder {
  /**
   * 
   */
  export const paragraph: typeof CorvusParagraphBuilder.create = CorvusParagraphBuilder.create

  /**
   * 
   */
  export const section: typeof CorvusSectionBuilder.create = CorvusSectionBuilder.create

  /**
   * 
   */
  export const image: typeof CorvusImageBuilder.create = CorvusImageBuilder.create

  /**
   * 
   */
  export const ruleset: typeof CorvusRulesetBuilder.create = CorvusRulesetBuilder.create
}