import { UnidocReducer, UnidocReduction, UTF32String } from "@cedric-demongivert/unidoc"

import { ParagraphBuilder } from "../model"
import { reduceText } from "./reduceText"

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

  const openingTag: UnidocReduction.Input = yield UnidocReduction.CURRENT
  openingTag.assertNext()
  openingTag.value.assertStartOfAnyTag()

  const builder: ParagraphBuilder = ParagraphBuilder.create()

  for (const token of openingTag.value.classes) {
    builder.classes.add(token.toString())
  }

  builder.setIdentifier(openingTag.value.identifier.toString())

  yield UnidocReduction.NEXT
  yield* UnidocReducer.skipWhitespaces()

  builder.setTitle(yield* UnidocReducer.optionalTag(TITLE_TAG, UnidocReducer.reduceTextTag))
  builder.setText(yield* reduceText())

  yield* UnidocReducer.skipWhitespaces()
  yield* UnidocReducer.assertEndOfAnyTag()

  if (builder.text.elements.length < 1) {
    yield* UnidocReducer.fail(`empty paragraph.`)
  }

  yield UnidocReduction.NEXT

  yield* UnidocReducer.assertSuccess()

  return builder
}