import { List } from 'immutable'

import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'

import { RPGDocument } from '../../rpg/RPGDocument'
import { RPGSection } from '../../rpg/RPGSection'

import { reduceTagWith } from './reduceTagWith'
import { reduceRPGDocument } from './reduceRPGDocument'

const EMPTY_STRING: string = ''

/**
*
*/
export function* reduceRPGSection(): UnidocReducer<RPGSection> {
  let identifier: string | undefined = undefined
  const keywords: Array<string> = []
  let title: string | undefined = EMPTY_STRING
  let children: RPGDocument = RPGDocument.empty()

  yield* UnidocReducer.skipStart()
  yield UnidocReductionRequest.NEXT
  yield* UnidocReducer.skipWhitespaces()

  while (true) {
    let current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

    if (current.isStartOfAnyTag()) {
      if (current.isStartOfTag('title')) {
        title = yield* reduceTagWith(UnidocReducer.reduceText())
      } else if (current.isStartOfTag('keyword')) {
        keywords.push(yield* reduceTagWith(UnidocReducer.reduceToken()))
      } else if (current.isStartOfTag('identifier')) {
        identifier = yield* reduceTagWith(UnidocReducer.reduceToken())
      } else if (current.isStartOfTag('summary')) {
        yield* UnidocReducer.skipTag()
      } else {
        const document: RPGDocument = yield* reduceRPGDocument()

        if (document.size > 0) {
          children = children.concat(document)
        } else {
          yield* UnidocReducer.skipTag()
        }
      }
    } else if (current.isEnd()) {
      return RPGSection.create({
        identifier,
        keywords: List(keywords),
        title,
        children
      })
    } else {
      current = yield UnidocReductionRequest.NEXT
    }
  }
}
