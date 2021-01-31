import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'

import { Book } from '../../book/Book'
import { Path } from '../../git/Path'
import { Hypertext } from '../../hypertext/Hypertext'

import { reduceTagAsToken } from './reduceTagAsToken'
import { reduceTagAsText } from './reduceTagAsText'
import { reduceTagAsHypertext } from './reduceTagAsHypertext'


/**
*
*/
export function* reduceBook(): UnidocReducer<Book> {
  let rulesetIdentifier: string | undefined = undefined
  let title: string | undefined = undefined
  let lang: string | undefined = undefined
  let content: string | undefined = undefined
  let summary: Hypertext | undefined = undefined

  yield* UnidocReducer.skipStart()
  yield* UnidocReducer.skipWhitespaces()

  while (true) {
    let current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

    if (current.isEnd()) {
      return new Book({ rulesetIdentifier, title, lang, summary, content })
    } else if (current.isStartOfAnyTag()) {
      if (current.isStartOfTag('identifier')) {
        rulesetIdentifier = yield* reduceTagAsToken()
      } else if (current.isStartOfTag('lang')) {
        lang = yield* reduceTagAsToken()
      } else if (current.isStartOfTag('title')) {
        title = yield* reduceTagAsText()
      } else if (current.isStartOfTag('summary')) {
        summary = yield* reduceTagAsHypertext()
      } else if (current.isStartOfTag('content')) {
        content = Path.join(
          Path.dirname((current.event.origin.from.elements.get(1) as any).unifiedResourceIdentifier),
          yield* reduceTagAsToken()
        )
      } else {
        yield* UnidocReducer.skipTag()
      }
    } else {
      yield UnidocReductionRequest.NEXT
    }
  }
}
