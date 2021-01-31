import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'

import { Document } from '../../hypertext/Document'
import { DocumentElement } from '../../hypertext/DocumentElement'

import { reduceParagraph } from './reduceParagraph'
import { reduceSection } from './reduceSection'
import { reduceImage } from './reduceImage'
import { reduceSet } from './reduceSet'

/**
*
*/
export function* reduceDocument(): UnidocReducer<Document | undefined> {
  const content: Array<DocumentElement> = []

  yield* UnidocReducer.skipStart()
  yield* UnidocReducer.skipWhitespaces()

  while (true) {
    let current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

    if (current.isEnd()) {
      return Document.create(...content)
    } else if (current.isStartOfAnyTag()) {
      if (current.isStartOfTag('paragraph')) {
        content.push(yield* reduceParagraph())
      } else if (current.isStartOfTag('section')) {
        content.push(yield* reduceSection())
      } else if (current.isStartOfTag('image')) {
        content.push(yield* reduceImage())
      } else if (current.isStartOfTag('set')) {
        content.push(yield* reduceSet())
      } else {
        return Document.create(...content)
      }
    } else if (current.isWhitespace()) {
      yield UnidocReductionRequest.NEXT
    } else {
      return Document.create(...content)
    }
  }
}
