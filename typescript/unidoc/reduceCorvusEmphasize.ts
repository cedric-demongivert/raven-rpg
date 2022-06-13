import { UnidocReducer, UnidocReduction } from "@cedric-demongivert/unidoc"

import { CorvusEmphasizeBuilder } from "../model"
import { reduceTagMetadata } from "./reduceTagMetadata"

import { reduceCorvusText } from "./reduceCorvusText"


/**
 *
 */
export function* reduceCorvusEmphasize(): UnidocReduction<CorvusEmphasizeBuilder> {
  yield* UnidocReducer.assertStart()
  yield UnidocReduction.NEXT

  const builder: CorvusEmphasizeBuilder = CorvusEmphasizeBuilder.create()

  yield* reduceTagMetadata(builder)

  builder.setText(yield* reduceCorvusText())

  yield* UnidocReducer.assertEndOfAnyTag()

  if (builder.text.elements.length < 1) {
    return yield* UnidocReducer.fail(`empty emphasize.`)
  }

  yield UnidocReduction.NEXT

  yield* UnidocReducer.assertSuccess()

  return builder
}