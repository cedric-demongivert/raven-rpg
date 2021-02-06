import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'

import { RPGBook } from '../../rpg/book/RPGBook'

import { reduceRPGBook } from './reduceRPGBook'
import { reduceTagWith } from './reduceTagWith'

/**
*
*/
export function* reduceRepository(): UnidocReducer<RPGBook[]> {
  const content: RPGBook[] = []

  yield* UnidocReducer.skipStart()
  yield* UnidocReducer.skipWhitespaces()

  while (true) {
    const current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

    if (current.isEnd()) {
      return content
    } else if (current.isStartOfAnyTag()) {
      if (current.isStartOfTag('book')) {
        content.push(yield* reduceTagWith(reduceRPGBook()))
      } else {
        yield* UnidocReducer.skipTag()
      }
    } else {
      yield UnidocReductionRequest.NEXT
    }
  }
}
