import { UnidocReducer, UnidocReduction, UTF32String } from "@cedric-demongivert/unidoc"

import { CorvusParagraphBuilder } from "../model"
import { reduceTagMetadata } from "./reduceTagMetadata"
import { reduceCorvusText } from "./reduceCorvusText"

/**
 *
 */
const TITLE_TAG: UTF32String = UTF32String.fromString('title')

/**
 *
 */
export function* reduceCorvusParagraph(): UnidocReduction<CorvusParagraphBuilder> {
  yield* UnidocReducer.assertStart()
  yield UnidocReduction.NEXT

  const builder: CorvusParagraphBuilder = CorvusParagraphBuilder.create()

  yield* reduceTagMetadata(builder)

  yield* UnidocReducer.skipWhitespaces()

  builder.setTitle(yield* UnidocReducer.optionalTag(TITLE_TAG, UnidocReducer.reduceTextTag()))
  builder.setText(yield* reduceCorvusText())

  yield* UnidocReducer.assertEndOfAnyTag()

  if (builder.text.elements.length < 1) {
    yield* UnidocReducer.fail(`empty paragraph.`)
  }

  yield UnidocReduction.NEXT

  yield* UnidocReducer.assertSuccess()

  return builder
}