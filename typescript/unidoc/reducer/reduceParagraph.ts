import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'

import { Paragraph } from '../../hypertext/Paragraph'
import { Hypertext } from '../../hypertext/Hypertext'

import { reduceHypertext } from './reduceHypertext'
import { reduceTagAsText } from './reduceTagAsText'
import { reduceTagAsToken } from './reduceTagAsToken'

/**
*
*/
function* reduceTagAsParagraph(): UnidocReducer<Paragraph> {
  let title: string | undefined = undefined
  let identifier: string | undefined = undefined
  let content: Hypertext = Hypertext.empty()

  yield* UnidocReducer.skipStart()
  yield UnidocReductionRequest.NEXT
  yield* UnidocReducer.skipWhitespaces()

  while (true) {
    let current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

    if (current.isStartOfAnyTag()) {
      if (current.isStartOfTag('title')) {
        title = yield* reduceTagAsText()
      } else if (current.isStartOfTag('identifier')) {
        identifier = yield* reduceTagAsToken()
      } else {
        content = content.concat(yield* reduceHypertext())
      }
    } else if (current.isAnyWord()) {
      content = content.concat(yield* reduceHypertext())
    } else if (current.isEnd()) {
      return Paragraph.create({ identifier, title, content })
    } else {
      current = yield UnidocReductionRequest.NEXT
    }
  }
}

/**
*
*/
export function* reduceParagraph(): UnidocReducer<Paragraph | undefined> {
  yield* UnidocReducer.skipStart()
  yield* UnidocReducer.skipWhitespaces()

  let current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

  if (current.isStartOfTag('paragraph')) {
    return yield* UnidocReducer.reduceTag(reduceTagAsParagraph())
  } else {
    return undefined
  }
}
