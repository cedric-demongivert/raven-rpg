import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'

import { Image } from '../../hypertext/Image'
import { ImageFormat } from '../../hypertext/ImageFormat'

import { reduceTagAsToken } from './reduceTagAsToken'

/**
*
*/
function* reduceTagAsImage(): UnidocReducer<Image> {
  let path: string | undefined = undefined
  let format: ImageFormat | undefined = undefined

  yield* UnidocReducer.skipStart()
  yield UnidocReductionRequest.NEXT
  yield* UnidocReducer.skipWhitespaces()

  while (true) {
    let current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

    if (current.isStartOfAnyTag()) {
      if (current.isStartOfTag('path')) {
        path = yield* reduceTagAsToken()
      } else if (current.isStartOfTag('format')) {
        format = ImageFormat.fromString(yield* reduceTagAsToken())
      } else {
        yield* UnidocReducer.skipTag()
      }
    } else if (current.isEnd()) {
      return Image.create({ path, format })
    } else {
      current = yield UnidocReductionRequest.NEXT
    }
  }
}

/**
*
*/
export function* reduceImage(): UnidocReducer<Image | undefined> {
  yield* UnidocReducer.skipStart()
  yield* UnidocReducer.skipWhitespaces()

  let current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

  if (current.isStartOfTag('image')) {
    return yield* UnidocReducer.reduceTag(reduceTagAsImage())
  } else {
    return undefined
  }
}
