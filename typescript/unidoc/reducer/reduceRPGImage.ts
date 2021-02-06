import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'

import { RPGImage } from '../../rpg/RPGImage'
import { RPGImageFormat } from '../../rpg/RPGImageFormat'

import { reduceTagWith } from './reduceTagWith'

/**
*
*/
export function* reduceRPGImage(): UnidocReducer<RPGImage> {
  let path: string | undefined = undefined
  let format: RPGImageFormat | undefined = undefined

  yield* UnidocReducer.skipStart()
  yield* UnidocReducer.skipWhitespaces()

  while (true) {
    const current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

    if (current.isStartOfAnyTag()) {
      if (current.isStartOfTag('path')) {
        path = yield* reduceTagWith(UnidocReducer.reduceToken())
      } else if (current.isStartOfTag('format')) {
        format = RPGImageFormat.fromString(yield* reduceTagWith(UnidocReducer.reduceToken()))
      } else {
        yield* UnidocReducer.skipTag()
      }
    } else if (current.isEnd()) {
      return RPGImage.create({ path, format })
    } else {
      yield UnidocReductionRequest.NEXT
    }
  }
}
