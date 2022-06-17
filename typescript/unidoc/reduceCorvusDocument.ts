import { UnidocReducer, UnidocReduction } from "@cedric-demongivert/unidoc"

import { CorvusDocumentBuilder, CorvusFeatIndexBuilder } from "../model"
import { CommandMatcher } from "./CommandMatcher"
import { reduceCorvusFeat } from "./reduceCorvusFeat"
import { reduceCorvusParagraph } from "./reduceCorvusParagraph"
import { reduceCorvusSection } from "./reduceCorvusSection"
import { reduceCorvusSectionSet } from "./reduceCorvusSectionSet"
import { reduceEntrySet } from "./reduceEntrySet"

/**
 *
 */
const MATCHER: CommandMatcher = new CommandMatcher()

/**
 *
 */
const PARAGRAPH: string = MATCHER.match('paragraph')

/**
 *
 */
const SECTION: string = MATCHER.match('section')

/**
 *
 */
const ENTRY_SET: string = MATCHER.match('entries')

/**
 *
 */
const SECTION_SET: string = MATCHER.match('section-set')

/**
 *
 */
const FEAT: string = MATCHER.match('feat')

/**
 *
 */
const FEAT_INDEX: string = MATCHER.match('feat-index')

/**
 *
 */
export function* reduceCorvusDocument(): UnidocReduction<CorvusDocumentBuilder | null> {
  const builder: CorvusDocumentBuilder = CorvusDocumentBuilder.create()

  let match: CommandMatcher.Match = yield* MATCHER.next()

  while (match !== null && match !== CommandMatcher.END && match !== CommandMatcher.CONTENT) {
    if (match === PARAGRAPH) {
      builder.push(yield* UnidocReducer.reduceTag(reduceCorvusParagraph()))
    } else if (match === SECTION) {
      builder.push(yield* UnidocReducer.reduceTag(reduceCorvusSection()))
    } else if (match === ENTRY_SET) {
      builder.push(yield* UnidocReducer.reduceTag(reduceEntrySet()))
    } else if (match === SECTION_SET) {
      builder.concat(yield* UnidocReducer.reduceTag.content(reduceCorvusSectionSet.stream()))
    } else if (match === FEAT) {
      builder.push(yield* UnidocReducer.reduceTag(reduceCorvusFeat()))
    } else if (match === FEAT_INDEX) {
      yield* UnidocReducer.skipTag()
      builder.push(CorvusFeatIndexBuilder.INSTANCE)
    }

    match = yield* MATCHER.next()
  }

  return builder.elements.length > 0 ? builder : null
}

/**
 * 
 */
export namespace reduceCorvusDocument {
  /**
   * 
   */
  export function* stream(): UnidocReduction<CorvusDocumentBuilder | null> {
    yield* UnidocReducer.assertStart()
    yield UnidocReduction.NEXT

    const result = yield* reduceCorvusDocument()

    return result
  }
}