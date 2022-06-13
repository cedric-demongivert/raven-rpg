import { UnidocReducer, UnidocReduction } from "@cedric-demongivert/unidoc"

import { CorvusDocumentBuilder } from "../model"
import { CommandMatcher } from "./CommandMatcher"
import { reduceCorvusParagraph } from "./reduceCorvusParagraph"
import { reduceCorvusSection } from "./reduceCorvusSection"

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
export function* reduceCorvusDocument(): UnidocReduction<CorvusDocumentBuilder | null> {
  const builder: CorvusDocumentBuilder = CorvusDocumentBuilder.create()

  let match: CommandMatcher.Match = yield* MATCHER.next()

  while (match !== null && match !== CommandMatcher.END && match !== CommandMatcher.CONTENT) {
    if (match === PARAGRAPH) {
      builder.push(yield* UnidocReducer.reduceTag(reduceCorvusParagraph))
    } else if (match === SECTION) {
      builder.push(yield* UnidocReducer.reduceTag(reduceCorvusSection))
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