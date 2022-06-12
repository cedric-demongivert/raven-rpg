import { UnidocReducer, UnidocReduction } from "@cedric-demongivert/unidoc"

import { EmphasizeBuilder } from "../model"

import { CommandMatcher } from "./CommandMatcher"
import { reduceLinkTag } from "./reduceLinkTag"
import { reduceAcronymTag } from "./reduceAcronymTag"

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
export function* reduceEmphasizeTag(): UnidocReduction<EmphasizeBuilder> {
  yield* UnidocReducer.assertStart()
  yield UnidocReduction.NEXT

  yield* UnidocReducer.assertStartOfAnyTag()
  yield UnidocReduction.NEXT

  const builder: EmphasizeBuilder = EmphasizeBuilder.create()
  let match: CommandMatcher.Match = yield* MATCHER.next()

  while (match !== CommandMatcher.END) {
    if (match === CommandMatcher.CONTENT) {
      builder.pushString(yield* UnidocReducer.reduceText())
    } else if (match === ACRONYM) {
      builder.push(yield* UnidocReducer.reduceTag(reduceAcronymTag))
    } else if (match === LINK) {
      builder.push(yield* UnidocReducer.reduceTag(reduceLinkTag))
    } else if (match == null) {
      yield* UnidocReducer.fail(`expected mix of text and tags of type (${MATCHER.tags.join(' | ')}).`)
    }

    match = yield* MATCHER.next()
  }

  yield* UnidocReducer.assertEndOfAnyTag()

  if (builder.elements.length < 1) {
    return yield* UnidocReducer.fail(`expected at least on instance of text or tags of type (${MATCHER.tags.join(' | ')}).`)
  }

  yield UnidocReduction.NEXT

  yield* UnidocReducer.assertSuccess()

  return builder
}