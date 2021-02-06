import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'

import { RPGParagraph } from '../../rpg/RPGParagraph'
import { Hypertext } from '../../hypertext/Hypertext'

import { reduceHypertext } from './reduceHypertext'
import { reduceTagWith } from './reduceTagWith'

/**
*
*/
export function* reduceRPGParagraph(): UnidocReducer<RPGParagraph> {
  let title: string | undefined = undefined
  let identifier: string | undefined = undefined
  let content: Hypertext = Hypertext.empty()

  yield* UnidocReducer.skipStart()
  yield* UnidocReducer.skipWhitespaces()

  while (true) {
    const current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

    if (current.isStartOfAnyTag()) {
      if (current.isStartOfTag('title')) {
        title = yield* reduceTagWith(UnidocReducer.reduceText())
      } else if (current.isStartOfTag('identifier')) {
        identifier = yield* reduceTagWith(UnidocReducer.reduceToken())
      } else {
        content = content.concat(yield* reduceHypertext())
      }
    } else if (current.isAnyWord()) {
      content = content.concat(yield* reduceHypertext())
    } else if (current.isEnd()) {
      return RPGParagraph.create({ identifier, title, content })
    } else {
      yield UnidocReductionRequest.NEXT
    }
  }
}
