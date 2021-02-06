import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'

import { RPGBook } from '../../rpg/book/RPGBook'
import { Path } from '../../git/Path'
import { Hypertext } from '../../hypertext/Hypertext'

import { reduceTagWith } from './reduceTagWith'
import { reduceHypertext } from './reduceHypertext'

/**
*
*/
export function* reduceRPGBook(): UnidocReducer<RPGBook> {
  let identifier: string | undefined = undefined
  let title: string | undefined = undefined
  let lang: string | undefined = undefined
  let content: string | undefined = undefined
  let summary: Hypertext | undefined = undefined

  yield* UnidocReducer.skipStart()
  yield* UnidocReducer.skipWhitespaces()

  while (true) {
    const current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

    if (current.isStartOfAnyTag()) {
      if (current.isStartOfTag('identifier')) {
        identifier = yield* reduceTagWith(UnidocReducer.reduceToken())
      } else if (current.isStartOfTag('lang')) {
        lang = yield* reduceTagWith(UnidocReducer.reduceToken())
      } else if (current.isStartOfTag('title')) {
        title = yield* reduceTagWith(UnidocReducer.reduceText())
      } else if (current.isStartOfTag('summary')) {
        summary = yield* reduceTagWith(reduceHypertext())
      } else if (current.isStartOfTag('content')) {
        content = Path.join(
          Path.dirname((current.event.origin.from.elements.get(1) as any).unifiedResourceIdentifier),
          yield* reduceTagWith(UnidocReducer.reduceToken())
        )
      } else {
        yield* UnidocReducer.skipTag()
      }
    } else if (current.isEnd()) {
      return new RPGBook({ identifier, title, lang, summary, path: content })
    } else {
      yield UnidocReductionRequest.NEXT
    }
  }
}
