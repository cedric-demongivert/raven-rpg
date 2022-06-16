import { UnidocReducer, UnidocReduction, UTF32String } from "@cedric-demongivert/unidoc"

import { CorvusSectionBuilder } from "../model"
import { reduceCorvusDocument } from "./reduceCorvusDocument"
import { reduceTagMetadata } from "./reduceTagMetadata"

/**
 *
 */
const TITLE_TAG: UTF32String = UTF32String.fromString('title')

/**
 *
 */
export function* reduceCorvusSection(): UnidocReduction<CorvusSectionBuilder> {
  yield* UnidocReducer.assertStart()
  yield UnidocReduction.NEXT

  const builder: CorvusSectionBuilder = CorvusSectionBuilder.create()

  yield* reduceTagMetadata(builder)

  yield UnidocReduction.NEXT
  yield* UnidocReducer.skipWhitespaces()

  builder.setTitle(yield* UnidocReducer.optionalTag(TITLE_TAG, UnidocReducer.reduceTextTag()))
  builder.setContent(yield* reduceCorvusDocument())

  yield* UnidocReducer.assertEndOfAnyTag()

  if (builder.content.elements.length < 1) {
    yield* UnidocReducer.fail(`empty section.`)
  }

  yield UnidocReduction.NEXT

  yield* UnidocReducer.assertSuccess()

  return builder
}