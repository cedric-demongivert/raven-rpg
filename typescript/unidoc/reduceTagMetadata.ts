import { UnidocReduction, UTF32String } from "@cedric-demongivert/unidoc"

import { ContentNodeBuilder } from "../model"

/**
 *
 */
export function* reduceTagMetadata(builder: ContentNodeBuilder): UnidocReduction<void> {
  const current: UnidocReduction.Input = yield UnidocReduction.CURRENT

  current.assertNext()
  current.value.assertStartOfAnyTag()

  const identifier: UTF32String = current.value.identifier

  builder.setIdentifier(identifier.size > 0 ? identifier.toString() : null)

  for (const token of current.value.classes) {
    builder.classes.add(token.toString())
  }

  yield UnidocReduction.NEXT

  return
}