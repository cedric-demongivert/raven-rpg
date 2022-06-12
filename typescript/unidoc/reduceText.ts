import { UnidocReducer, UnidocReduction } from "@cedric-demongivert/unidoc"

import { TextBuilder } from "../model"
import { CommandMatcher } from "./CommandMatcher"
import { reduceAcronymTag } from "./reduceAcronymTag"
import { reduceEmphasizeTag } from "./reduceEmphasizeTag"
import { reduceLinkTag } from "./reduceLinkTag"

/**
 *
 */
const MATCHER: CommandMatcher = new CommandMatcher()

/**
 *
 */
const ACRONYM: string = MATCHER.match('acronym')

/**
 *
 */
const LINK: string = MATCHER.match('link')

/**
 *
 */
const EMPHASIZE: string = MATCHER.match('emphasize')

/**
 *
 */
export function* reduceText(): UnidocReduction<TextBuilder | null> {
  const builder: TextBuilder = TextBuilder.create()
  let match: CommandMatcher.Match = yield* MATCHER.next()

  while (match !== null && match !== CommandMatcher.END) {
    if (match === CommandMatcher.CONTENT) {
      builder.pushString(yield* UnidocReducer.reduceText())
    } else if (match === ACRONYM) {
      builder.push(yield* UnidocReducer.reduceTag(reduceAcronymTag))
    } else if (match === LINK) {
      builder.push(yield* UnidocReducer.reduceTag(reduceLinkTag))
    } else if (match === EMPHASIZE) {
      builder.push(yield* UnidocReducer.reduceTag(reduceEmphasizeTag))
    }

    match = yield* MATCHER.next()
  }

  return builder.elements.length > 0 ? builder : null
}