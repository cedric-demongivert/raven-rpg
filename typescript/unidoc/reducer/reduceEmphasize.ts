import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'

import { Hypertext } from '../../hypertext/Hypertext'
import { Emphasize } from '../../hypertext/Emphasize'
import { HypertextElement } from '../../hypertext/HypertextElement'

import { reduceLink } from './reduceLink'
import { reduceAcronym } from './reduceAcronym'
import { reduceTagWith } from './reduceTagWith'

/**
*
*/
export function* reduceEmphasize(): UnidocReducer<Emphasize> {
  const content: Array<string | HypertextElement> = []

  yield* UnidocReducer.skipStart()
  yield* UnidocReducer.skipWhitespaces()

  while (true) {
    const current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

    if (current.isStartOfAnyTag()) {
      if (current.isStartOfTag('link')) {
        content.push(yield* reduceTagWith(reduceLink()))
      } else if (current.isStartOfTag('acronym')) {
        content.push(yield* reduceTagWith(reduceAcronym()))
      } else {
        yield* UnidocReducer.skipTag()
      }
    } else if (current.isAnyWord()) {
      content.push(yield* UnidocReducer.reduceText())
    } else if (current.isEnd()) {
      return Emphasize.create(Hypertext.create(...content))
    } else {
      yield UnidocReductionRequest.NEXT
    }
  }
}
