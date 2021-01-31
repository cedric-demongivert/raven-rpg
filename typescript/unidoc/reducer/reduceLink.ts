import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'

import { Link } from '../../hypertext/Link'

/**
*
*/
function* reduceTagAsLink(): UnidocReducer<Link> {
  let url: string | undefined = undefined
  let content: string | undefined = undefined

  yield* UnidocReducer.skipStart()
  yield UnidocReductionRequest.NEXT
  yield* UnidocReducer.skipWhitespaces()

  while (url == null || content == null) {
    let current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

    if (current.isStartOfTag('url')) {
      url = yield* UnidocReducer.reduceTag.content(UnidocReducer.reduceToken())
    } else if (current.isAnyWord()) {
      content = yield* UnidocReducer.reduceText()
    } else if (current.isEnd()) {
      return undefined
    } else {
      current = yield UnidocReductionRequest.NEXT
    }
  }

  return Link.create({ content, url })
}

/**
*
*/
export function* reduceLink(): UnidocReducer<Link | undefined> {
  yield* UnidocReducer.skipStart()
  yield* UnidocReducer.skipWhitespaces()

  let current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

  if (current.isStartOfTag('link')) {
    return yield* UnidocReducer.reduceTag(reduceTagAsLink())
  } else {
    return undefined
  }
}
