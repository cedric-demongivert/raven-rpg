import { List } from 'immutable'

import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'

import { Document } from '../../hypertext/Document'
import { Section } from '../../hypertext/Section'

import { reduceTagAsText } from './reduceTagAsText'
import { reduceTagAsToken } from './reduceTagAsToken'
import { reduceDocument } from './reduceDocument'

const EMPTY_STRING: string = ''

/**
*
*/
function* reduceTagAsSection(): UnidocReducer<Section> {
  let identifier: string | undefined = undefined
  const keywords: Array<string> = []
  let title: string | undefined = EMPTY_STRING
  let content: Document = Document.empty()

  yield* UnidocReducer.skipStart()
  yield UnidocReductionRequest.NEXT
  yield* UnidocReducer.skipWhitespaces()

  while (true) {
    let current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

    if (current.isStartOfAnyTag()) {
      if (current.isStartOfTag('title')) {
        title = yield* reduceTagAsText()
      } else if (current.isStartOfTag('keyword')) {
        keywords.push(yield* reduceTagAsToken())
      } else if (current.isStartOfTag('identifier')) {
        identifier = yield* reduceTagAsToken()
      } else if (current.isStartOfTag('summary')) {
        yield* UnidocReducer.skipTag()
      } else {
        content = content.concat(yield* reduceDocument())
      }
    } else if (current.isEnd()) {
      return Section.create({
        identifier,
        keywords: List(keywords),
        title,
        content
      })
    } else {
      current = yield UnidocReductionRequest.NEXT
    }
  }
}

/**
*
*/
export function* reduceSection(): UnidocReducer<Section | undefined> {
  yield* UnidocReducer.skipStart()
  yield* UnidocReducer.skipWhitespaces()

  let current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

  if (current.isStartOfTag('section')) {
    return yield* UnidocReducer.reduceTag(reduceTagAsSection())
  } else {
    return undefined
  }
}
