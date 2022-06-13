import { UnidocReducer, UnidocReduction } from "@cedric-demongivert/unidoc"

import { CorvusAcronymBuilder } from "../model"
import { reduceTagMetadata } from "./reduceTagMetadata"

/**
 *
 */
export function* reduceCorvusAcronym(): UnidocReduction<CorvusAcronymBuilder> {
  yield* UnidocReducer.assertStart()
  yield UnidocReduction.NEXT

  const builder: CorvusAcronymBuilder = new CorvusAcronymBuilder()

  yield* reduceTagMetadata(builder)

  builder.acronym = yield* UnidocReducer.expectToken()
  builder.setExpanded(yield* UnidocReducer.reduceText())

  yield* UnidocReducer.assertEndOfAnyTag()
  yield UnidocReduction.NEXT

  yield* UnidocReducer.assertSuccess()

  return builder
}