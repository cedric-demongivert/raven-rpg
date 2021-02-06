import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'

import { Link } from '../../hypertext/Link'

import { reduceTagWith } from './reduceTagWith'

/**
*
*/
export function* reduceLink(): UnidocReducer<Link> {
  let url: string | undefined = undefined
  let content: string | undefined = undefined

  yield* UnidocReducer.skipStart()
  yield UnidocReductionRequest.NEXT
  yield* UnidocReducer.skipWhitespaces()

  while (true) {
    const current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

    if (current.isStartOfAnyTag()) {
      if (current.isStartOfTag('url')) {
        url = yield* reduceTagWith(UnidocReducer.reduceToken())
      } else {
        yield* UnidocReducer.skipTag()
      }
    } else if (current.isAnyWord()) {
      content = yield* UnidocReducer.reduceText()
    } else if (current.isEnd()) {
      return Link.create({ content, url })
    } else {
      yield UnidocReductionRequest.NEXT
    }
  }
}
