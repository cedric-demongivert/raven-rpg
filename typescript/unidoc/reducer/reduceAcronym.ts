import { UnidocReducer } from '@cedric-demongivert/unidoc'

import { Acronym } from '../../hypertext/Acronym'

/**
*
*/
export function* reduceAcronym(): UnidocReducer<Acronym> {
  yield* UnidocReducer.skipStart()

  return Acronym.create({
    acronym: yield* UnidocReducer.reduceToken(),
    expanded: yield* UnidocReducer.reduceText()
  })
}
