import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'

import { Book } from '../../book/Book'

import { reduceBook } from './reduceBook'

/**
*
*/
export function* reduceRepository(): UnidocReducer<Book[]> {
  const content: Book[] = []

  yield* UnidocReducer.skipStart()
  yield* UnidocReducer.skipWhitespaces()

  while (true) {
    let current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

    if (current.isEnd()) {
      return content
    } else if (current.isStartOfAnyTag()) {
      if (current.isStartOfTag('book')) {
        content.push(yield* UnidocReducer.reduceTag.content(reduceBook()))
      } else {
        yield* UnidocReducer.skipTag()
      }
    } else {
      yield UnidocReductionRequest.NEXT
    }
  }
}
