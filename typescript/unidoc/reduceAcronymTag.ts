import { UnidocReducer, UnidocReduction } from "@cedric-demongivert/unidoc"

import { AcronymBuilder } from "../model"

/**
 *
 */
export function* reduceAcronymTag(): UnidocReduction<AcronymBuilder> {
  yield* UnidocReducer.assertStart()
  yield UnidocReduction.NEXT

  yield* UnidocReducer.assertStartOfAnyTag()
  yield UnidocReduction.NEXT

  const builder: AcronymBuilder = new AcronymBuilder()

  builder.acronym = yield* UnidocReducer.expectToken()
  builder.setExpanded(yield* UnidocReducer.reduceText())

  yield* UnidocReducer.assertEndOfAnyTag()
  yield UnidocReduction.NEXT

  yield* UnidocReducer.assertSuccess()

  return builder
}