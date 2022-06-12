import { UnidocReducer, UnidocReduction } from "@cedric-demongivert/unidoc"

import { EmphasizeBuilder } from "../model"
import { reduceTagMetadata } from "./reduceTagMetadata"

import { reduceTextNode } from "./reduceTextNode"


/**
 *
 */
export function* reduceEmphasizeTag(): UnidocReduction<EmphasizeBuilder> {
  yield* UnidocReducer.assertStart()
  yield UnidocReduction.NEXT

  const builder: EmphasizeBuilder = EmphasizeBuilder.create()

  yield* reduceTagMetadata(builder)

  builder.setText(yield* reduceTextNode())

  yield* UnidocReducer.assertEndOfAnyTag()

  if (builder.text.elements.length < 1) {
    return yield* UnidocReducer.fail(`empty emphasize.`)
  }

  yield UnidocReduction.NEXT

  yield* UnidocReducer.assertSuccess()

  return builder
}