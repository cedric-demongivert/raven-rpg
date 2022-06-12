import { UnidocReducer, UnidocReduction } from "@cedric-demongivert/unidoc"

import { DocumentBuilder } from "../model"
import { CommandMatcher } from "./CommandMatcher"
import { reduceParagraphTag } from "./reduceParagraphTag"
import { reduceSectionTag } from "./reduceSectionTag"

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
export function* reduceDocument(): UnidocReduction<DocumentBuilder | null> {
  const builder: DocumentBuilder = DocumentBuilder.create()

  let match: CommandMatcher.Match = yield* MATCHER.next()

  while (match !== null && match !== CommandMatcher.END && match !== CommandMatcher.CONTENT) {
    if (match === PARAGRAPH) {
      builder.push(yield* UnidocReducer.reduceTag(reduceParagraphTag))
    } else if (match === SECTION) {
      builder.push(yield* UnidocReducer.reduceTag(reduceSectionTag))
    }

    match = yield* MATCHER.next()
  }

  return builder.elements.length > 0 ? builder : null
}