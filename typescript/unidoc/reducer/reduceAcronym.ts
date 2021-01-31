import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'

import { Acronym } from '../../hypertext/Acronym'

function* reduceTagAsAcronym(): UnidocReducer<Acronym> {
  yield* UnidocReducer.skipStart()
  yield UnidocReductionRequest.NEXT

  return Acronym.create({
    acronym: yield* UnidocReducer.reduceToken(),
    expanded: yield* UnidocReducer.reduceText()
  })
}

/**
*
*/
export function* reduceAcronym(): UnidocReducer<Acronym | undefined> {
  yield* UnidocReducer.skipStart()
  yield* UnidocReducer.skipWhitespaces()

  let current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

  if (current.isStartOfTag('acronym')) {
    return yield* UnidocReducer.reduceTag(reduceTagAsAcronym())
  } else {
    return undefined
  }
}
