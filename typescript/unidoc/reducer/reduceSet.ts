import { List } from 'immutable'

import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'

import { Section } from '../../hypertext/Section'
import { DocumentSet } from '../../hypertext/DocumentSet'
import { DocumentSetLayout } from '../../hypertext/DocumentSetLayout'

import { reduceSection } from './reduceSection'
import { reduceTagAsToken } from './reduceTagAsToken'

/**
*
*/
function* reduceTagAsSet(): UnidocReducer<DocumentSet> {
  let identifier: string | undefined = undefined
  const sections: Array<Section> = []

  yield* UnidocReducer.skipStart()
  yield UnidocReductionRequest.NEXT
  yield* UnidocReducer.skipWhitespaces()

  while (true) {
    let current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

    if (current.isStartOfAnyTag()) {
      if (current.isStartOfTag('section')) {
        sections.push(yield* reduceSection())
      } else if (current.isStartOfTag('identifier')) {
        identifier = yield* reduceTagAsToken()
      } else {
        yield* UnidocReducer.skipTag()
      }
    } else if (current.isEnd()) {
      return DocumentSet.create({ identifier, content: List(sections) })
    } else {
      current = yield UnidocReductionRequest.NEXT
    }
  }
}

/**
*
*/
export function* reduceSet(): UnidocReducer<DocumentSet | undefined> {
  yield* UnidocReducer.skipStart()
  yield* UnidocReducer.skipWhitespaces()

  let current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

  if (current.isStartOfTag('set')) {
    let layout: DocumentSetLayout = DocumentSetLayout.ONE_COLUMN

    if (current.event.classes.has('two-column')) {
      layout = DocumentSetLayout.TWO_COLUMN
    }

    return (yield* UnidocReducer.reduceTag(reduceTagAsSet())).setLayout(layout)
  } else {
    return undefined
  }
}
