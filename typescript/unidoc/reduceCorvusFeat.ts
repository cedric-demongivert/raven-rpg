import { UnidocReducer, UnidocReduction, UTF32String } from "@cedric-demongivert/unidoc"
import { CorvusFeatRestriction } from "../data"

import { CorvusFeatBuilder } from "../model"
import { reduceCorvusDocument } from "./reduceCorvusDocument"
import { reduceTagMetadata } from "./reduceTagMetadata"
import { reduceCorvusFeatRestriction } from "./reduceCorvusFeatRestriction"

/**
 *
 */
const TITLE_TAG: UTF32String = UTF32String.fromString('title')

/**
 *
 */
const RESTRICTION_TAG: UTF32String = UTF32String.fromString('restriction')

/**
 *
 */
export function* reduceCorvusFeat(): UnidocReduction<CorvusFeatBuilder> {
  yield* UnidocReducer.assertStart()
  yield UnidocReduction.NEXT

  const builder: CorvusFeatBuilder = CorvusFeatBuilder.create()

  yield* reduceTagMetadata(builder)

  yield UnidocReduction.NEXT
  yield* UnidocReducer.skipWhitespaces()

  builder.setTitle(yield* UnidocReducer.optionalTag(TITLE_TAG, UnidocReducer.reduceTextTag()))
  yield* UnidocReducer.skipWhitespaces()

  let restriction: CorvusFeatRestriction = yield* UnidocReducer.optionalTag(RESTRICTION_TAG, reduceCorvusFeatRestriction())

  while (restriction != null) {
    builder.pushRestriction(restriction)
    yield* UnidocReducer.skipWhitespaces()
    restriction = yield* UnidocReducer.optionalTag(RESTRICTION_TAG, reduceCorvusFeatRestriction())
  }

  builder.setContent(yield* reduceCorvusDocument())

  yield* UnidocReducer.assertEndOfAnyTag()

  if (builder.content.elements.length < 1) {
    yield* UnidocReducer.fail(`empty feat.`)
  }

  yield UnidocReduction.NEXT

  yield* UnidocReducer.assertSuccess()

  return builder
}