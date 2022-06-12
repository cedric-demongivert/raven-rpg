import { UnidocReducer, UnidocReduction, UTF32String } from "@cedric-demongivert/unidoc"

import { ParagraphBuilder } from "../model"
import { reduceTagMetadata } from "./reduceTagMetadata"
import { reduceTextNode } from "./reduceTextNode"

/**
 *
 */
const TITLE_TAG: UTF32String = UTF32String.fromString('title')

/**
 *
 */
export function* reduceParagraphTag(): UnidocReduction<ParagraphBuilder> {
  yield* UnidocReducer.assertStart()
  yield UnidocReduction.NEXT

  const builder: ParagraphBuilder = ParagraphBuilder.create()

  yield* reduceTagMetadata(builder)

  yield* UnidocReducer.skipWhitespaces()

  builder.setTitle(yield* UnidocReducer.optionalTag(TITLE_TAG, UnidocReducer.reduceTextTag))
  builder.setText(yield* reduceTextNode())

  yield* UnidocReducer.assertEndOfAnyTag()

  if (builder.text.elements.length < 1) {
    yield* UnidocReducer.fail(`empty paragraph.`)
  }

  yield UnidocReduction.NEXT

  yield* UnidocReducer.assertSuccess()

  return builder
}