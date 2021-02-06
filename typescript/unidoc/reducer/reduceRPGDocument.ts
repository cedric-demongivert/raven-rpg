import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'

import { RPGDocument } from '../../rpg/RPGDocument'
import { RPGElement } from '../../rpg/RPGElement'
import { RPGRulesetLayout } from '../../rpg/RPGRulesetLayout'

import { reduceRPGParagraph } from './reduceRPGParagraph'
import { reduceRPGSection } from './reduceRPGSection'
import { reduceRPGImage } from './reduceRPGImage'
import { reduceRPGRuleset } from './reduceRPGRuleset'
import { reduceTagWith } from './reduceTagWith'

/**
*
*/
export function* reduceRPGDocument(): UnidocReducer<RPGDocument> {
  const content: Array<RPGElement> = []

  yield* UnidocReducer.skipStart()
  yield* UnidocReducer.skipWhitespaces()

  while (true) {
    const current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

    if (current.isStartOfAnyTag()) {
      if (current.isStartOfTag('paragraph')) {
        content.push(yield* reduceTagWith(reduceRPGParagraph()))
      } else if (current.isStartOfTag('section')) {
        content.push(yield* reduceTagWith(reduceRPGSection()))
      } else if (current.isStartOfTag('image')) {
        content.push(yield* reduceTagWith(reduceRPGImage()))
      } else if (current.isStartOfTag('ruleset')) {
        if (current.event.classes.has('two-column')) {
          content.push((yield* reduceTagWith(reduceRPGRuleset())).setLayout(RPGRulesetLayout.TWO_COLUMN))
        } else {
          content.push(yield* reduceTagWith(reduceRPGRuleset()))
        }
      } else {
        return RPGDocument.create(...content)
      }
    } else if (current.isWhitespace()) {
      yield UnidocReductionRequest.NEXT
    } else {
      return RPGDocument.create(...content)
    }
  }
}
