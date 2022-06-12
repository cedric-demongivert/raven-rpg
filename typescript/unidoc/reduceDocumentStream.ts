import { UnidocReducer, UnidocReduction } from "@cedric-demongivert/unidoc"

import { DocumentBuilder } from "../model"
import { reduceDocument } from "./reduceDocument"

/**
 *
 */
export function* reduceDocumentStream(): UnidocReduction<DocumentBuilder | null> {
  yield* UnidocReducer.assertStart()
  yield UnidocReduction.NEXT

  const result = yield* reduceDocument()

  return result
}