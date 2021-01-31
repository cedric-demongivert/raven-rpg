import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'

import { Hypertext } from '../../hypertext/Hypertext'
import { Emphasize } from '../../hypertext/Emphasize'
import { HypertextElement } from '../../hypertext/HypertextElement'

import { reduceLink } from './reduceLink'
import { reduceAcronym } from './reduceAcronym'

/**
*
*/
function* reduceTagAsEmphasize(): UnidocReducer<Emphasize> {
  let content: Array<string | HypertextElement> = []

  yield* UnidocReducer.skipStart()
  yield UnidocReductionRequest.NEXT
  yield* UnidocReducer.skipWhitespaces()

  while (true) {
    let current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

    if (current.isStartOfAnyTag()) {
      if (current.isStartOfTag('link')) {
        content.push(yield* reduceLink())
      } else if (current.isStartOfTag('acronym')) {
        content.push(yield* reduceAcronym())
      } else {
        yield* UnidocReducer.skipTag()
      }
    } else if (current.isAnyWord()) {
      content.push(yield* UnidocReducer.reduceText())
    } else if (current.isEnd()) {
      return Emphasize.create(Hypertext.create(...content))
    } else {
      current = yield UnidocReductionRequest.NEXT
    }
  }
}

/**
*
*/
export function* reduceEmphasize(): UnidocReducer<Emphasize | undefined> {
  yield* UnidocReducer.skipStart()
  yield* UnidocReducer.skipWhitespaces()

  let current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

  if (current.isStartOfTag('emphasize')) {
    return yield* UnidocReducer.reduceTag(reduceTagAsEmphasize())
  } else {
    return undefined
  }
}
