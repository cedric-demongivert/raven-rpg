import { UnidocReducer, UnidocReduction } from "@cedric-demongivert/unidoc"

import { Acronym, AcronymBuilder } from "../text"

/**
  *
  */
export function* reduceAcronym(): UnidocReduction<Acronym> {
  let current: UnidocReduction.Input

  current = yield UnidocReduction.CURRENT
  current.assertStart()

  current = yield UnidocReduction.NEXT
  current.assertNext()
  current.value.assertStartOfAnyTag()

  yield UnidocReduction.NEXT

  const acronym: string | null = yield* UnidocReducer.reduceToken()

  if (acronym == null) {
    throw new Error(`Expected acronym tag at ${current.value.origin.toString} (${current.value.path.toString()}) to hold at least one token.`)
  }

  const builder: AcronymBuilder = AcronymBuilder.ALLOCATOR.allocate()
  builder.setAcronym(acronym)
  builder.setExpanded(yield* UnidocReducer.reduceText())

  const result: Acronym = builder.build()
  AcronymBuilder.ALLOCATOR.free(builder)

  return result
}