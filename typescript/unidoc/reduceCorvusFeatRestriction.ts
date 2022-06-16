import { UnidocReducer, UnidocReduction, UTF32String } from "@cedric-demongivert/unidoc"
import { CorvusConstraintFeatRestriction, CorvusFeatRestriction, CorvusPlainFeatRestriction } from "../data"

/**
 *
 */
const TARGET_TAG: UTF32String = UTF32String.fromString('target')

/**
 *
 */
const CONSTRAINT_TAG: UTF32String = UTF32String.fromString('constraint')

/**
 *
 */
export function* reduceCorvusFeatRestriction(): UnidocReduction<CorvusFeatRestriction> {
  yield* UnidocReducer.assertStart()
  yield UnidocReduction.NEXT

  yield* UnidocReducer.assertStartOfAnyTag()
  yield UnidocReduction.NEXT

  yield* UnidocReducer.skipWhitespaces()

  const text: string | null = yield* UnidocReducer.reduceText()

  if (text != null) {
    yield* UnidocReducer.skipWhitespaces()

    yield* UnidocReducer.assertEndOfAnyTag()
    yield UnidocReduction.NEXT

    yield* UnidocReducer.assertSuccess()

    return new CorvusPlainFeatRestriction(text)
  }

  let current: UnidocReduction.Input = yield UnidocReduction.CURRENT

  if (!current.isNext() || !current.value.isStartOfAnyTag() || !current.value.symbols.equals(TARGET_TAG)) {
    yield* UnidocReducer.fail('Expected target tag.')
  }

  const target: string = yield* UnidocReducer.reduceTag(UnidocReducer.expectTextTag())
  yield* UnidocReducer.skipWhitespaces()

  current = yield UnidocReduction.CURRENT

  if (!current.isNext() || !current.value.isStartOfAnyTag() || !current.value.symbols.equals(CONSTRAINT_TAG)) {
    yield* UnidocReducer.fail('Expected constraint tag.')
  }

  const constraint: string = yield* UnidocReducer.reduceTag(UnidocReducer.expectTextTag())
  yield* UnidocReducer.skipWhitespaces()

  yield* UnidocReducer.assertEndOfAnyTag()
  yield UnidocReduction.NEXT

  yield* UnidocReducer.assertSuccess()

  return new CorvusConstraintFeatRestriction({ target, constraint })
}