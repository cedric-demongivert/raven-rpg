import { UnidocKissValidator } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReducer } from '@cedric-demongivert/unidoc'

import { Empty } from '../utils/Empty'

import { CommandList } from './validator/command/CommandList'
import { CommandListElement } from './validator/command/CommandListElement'
import { validateCommandList } from './validator/command/validateCommandList'

import { CorvusSectionCommand } from './CorvusSectionCommand'
import { CorvusRulesetLayout } from '../corvus/CorvusRulesetLayout'
import { CorvusCharacteristicCommand } from './CorvusCharacteristicCommand'
import { CorvusMasteryCommand } from './CorvusMasteryCommand'
import { CorvusRulesetBuilder } from '../corvus/CorvusRulesetBuilder'

function compareByTitle(left: any, right: any): number {
  const leftTitle: string | undefined = left.model.subdivision ? left.model.subdivision() : undefined
  const rightTitle: string | undefined = right.model.subdivision ? right.model.subdivision() : undefined

  if (leftTitle == null) {
    return rightTitle == null ? 0 : -1
  } else {
    return rightTitle == null ? 1 : leftTitle.localeCompare(rightTitle)
  }
}

/**
 * 
 */
export namespace CorvusRulesetCommand {
  /**
   * 
   */
  const COMMANDS: CommandList = CommandList.capture(
    CommandListElement.optionalCommand('key', UnidocKissValidator.requireToken),
    CommandListElement.anywhere.manyCommand('section', CorvusSectionCommand.validateContent),
    CommandListElement.anywhere.manyCommand('characteristic', CorvusCharacteristicCommand.validateContent),
    CommandListElement.anywhere.manyCommand('mastery', CorvusMasteryCommand.validateContent)
  )

  /**
   * 
   */
  export function validateContent(): UnidocKissValidator {
    return validateCommandList(COMMANDS)
  }

  /**
  *
  */
  export function* reduceContent(classes: Iterable<string> = Empty.ARRAY): UnidocReducer<CorvusRulesetBuilder> {
    const result: CorvusRulesetBuilder = CorvusRulesetBuilder.create()

    result.addClasses(classes)

    yield* UnidocReducer.skipStart()
    yield* UnidocReducer.skipWhitespaces()

    while (true) {
      const current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

      if (current.isStartOfAnyTag()) {
        if (current.isStartOfTag('section')) {
          result.appendChild(yield* CorvusSectionCommand.reduceTag())
        } else if (current.isStartOfTag('characteristic')) {
          result.appendChild(yield* CorvusCharacteristicCommand.reduceTag())
        } else if (current.isStartOfTag('mastery')) {
          result.appendChild(yield* CorvusMasteryCommand.reduceTag())
        } else if (current.isStartOfTag('key')) {
          result.key = yield* UnidocReducer.reduceTag.content(UnidocReducer.reduceToken())
        } else {
          yield* UnidocReducer.skipTag()
        }
      } else if (current.isEnd()) {
        if (result.classes.has('two-column')) {
          result.classes.delete('two-column')
          result.layout = CorvusRulesetLayout.TWO_COLUMN
        }

        return result
      } else {
        yield UnidocReductionRequest.NEXT
      }
    }
  }

  /**
  *
  */
  export function* reduceTag(additionalClasses: Iterable<string> = Empty.ARRAY): UnidocReducer<CorvusRulesetBuilder> {
    yield* UnidocReducer.skipStart()
    yield* UnidocReducer.skipWhitespaces()

    const current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

    if (current.isStartOfAnyTag()) {
      return yield* UnidocReducer.reduceTag.content(
        reduceContent([...current.event.classes, ...additionalClasses])
      )
    } else {
      return undefined
    }
  }
}