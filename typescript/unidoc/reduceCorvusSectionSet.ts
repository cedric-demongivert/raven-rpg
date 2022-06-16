import { UnidocReducer, UnidocReduction } from "@cedric-demongivert/unidoc"

import { CorvusSectionSetBuilder } from "../model/CorvusSectionSetBuilder"
import { CommandMatcher } from "./CommandMatcher"
import { reduceCorvusSection } from "./reduceCorvusSection"
import { reduceCorvusFeat } from "./reduceCorvusFeat"

/**
 *
 */
const MATCHER: CommandMatcher = new CommandMatcher()

/**
 *
 */
const SECTION: string = MATCHER.match('section')

/**
 *
 */
const FEAT: string = MATCHER.match('feat')

/**
 *
 */
export function* reduceCorvusSectionSet(): UnidocReduction<CorvusSectionSetBuilder | null> {
  const builder: CorvusSectionSetBuilder = CorvusSectionSetBuilder.create()

  let match: CommandMatcher.Match = yield* MATCHER.next()

  while (match !== null && match !== CommandMatcher.END && match !== CommandMatcher.CONTENT) {
    if (match === SECTION) {
      builder.push(yield* UnidocReducer.reduceTag(reduceCorvusSection()))
    } else if (match === FEAT) {
      builder.push(yield* UnidocReducer.reduceTag(reduceCorvusFeat()))
    }

    match = yield* MATCHER.next()
  }

  return builder.elements.length > 0 ? builder : null
}

/**
 * 
 */
export namespace reduceCorvusSectionSet {
  /**
   * 
   */
  export function* stream(): UnidocReduction<CorvusSectionSetBuilder | null> {
    yield* UnidocReducer.assertStart()
    yield UnidocReduction.NEXT

    const result = yield* reduceCorvusSectionSet()

    return result
  }
}