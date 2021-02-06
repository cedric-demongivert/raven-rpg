import { List } from 'immutable'

import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'

import { RPGSection } from '../../rpg/RPGSection'
import { RPGRuleset } from '../../rpg/RPGRuleset'
import { RPGRulesetLayout } from '../../rpg/RPGRulesetLayout'

import { reduceRPGSection } from './reduceRPGSection'
import { reduceTagWith } from './reduceTagWith'

/**
*
*/
export function* reduceRPGRuleset(): UnidocReducer<RPGRuleset> {
  let identifier: string | undefined = undefined
  const children: Array<RPGSection> = []

  yield* UnidocReducer.skipStart()
  yield* UnidocReducer.skipWhitespaces()

  while (true) {
    const current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

    if (current.isStartOfAnyTag()) {
      if (current.isStartOfTag('section')) {
        children.push(yield* reduceTagWith(reduceRPGSection()))
      } else if (current.isStartOfTag('identifier')) {
        identifier = yield* reduceTagWith(UnidocReducer.reduceToken())
      } else {
        yield* UnidocReducer.skipTag()
      }
    } else if (current.isEnd()) {
      return RPGRuleset.create({ identifier, children: List(children) })
    } else {
      yield UnidocReductionRequest.NEXT
    }
  }
}
