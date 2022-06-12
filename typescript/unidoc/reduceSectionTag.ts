import { UnidocReducer, UnidocReduction, UTF32String } from "@cedric-demongivert/unidoc"

import { SectionBuilder } from "../model"
import { reduceDocument } from "./reduceDocument"

/**
 *
 */
const TITLE_TAG: UTF32String = UTF32String.fromString('title')

/**
 *
 */
export function* reduceSectionTag(): UnidocReduction<SectionBuilder> {
  yield* UnidocReducer.assertStart()
  yield UnidocReduction.NEXT

  const openingTag: UnidocReduction.Input = yield UnidocReduction.CURRENT
  openingTag.assertNext()
  openingTag.value.assertStartOfAnyTag()

  const builder: SectionBuilder = SectionBuilder.create()

  for (const token of openingTag.value.classes) {
    builder.classes.add(token.toString())
  }

  builder.setIdentifier(openingTag.value.identifier.toString())

  yield UnidocReduction.NEXT
  yield* UnidocReducer.skipWhitespaces()

  builder.setTitle(yield* UnidocReducer.optionalTag(TITLE_TAG, UnidocReducer.reduceTextTag))
  builder.setContent(yield* reduceDocument())

  yield* UnidocReducer.assertEndOfAnyTag()

  if (builder.content.elements.length < 1) {
    yield* UnidocReducer.fail(`empty section.`)
  }

  yield UnidocReduction.NEXT

  yield* UnidocReducer.assertSuccess()

  return builder
}