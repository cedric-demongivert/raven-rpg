import { UnidocKissValidator } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReducer } from '@cedric-demongivert/unidoc'

import { Empty } from '../utils/Empty'

import { CommandList } from './validator/command/CommandList'
import { CommandListElement } from './validator/command/CommandListElement'
import { validateCommandList } from './validator/command/validateCommandList'

import { CorvusSectionCommand } from './CorvusSectionCommand'
import { CorvusRuleset } from '../corvus/CorvusRuleset'
import { CorvusDocumentElementBuilder } from '../corvus/CorvusDocumentElementBuilder'
import { CorvusRulesetLayout } from '../corvus/CorvusRulesetLayout'
import { CorvusCharacteristicCommand } from './CorvusCharacteristicCommand'
import { CorvusMasteryCommand } from './CorvusMasteryCommand'

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
  export function* reduceContent(classes: Iterable<string> = Empty.ARRAY): UnidocReducer<CorvusRuleset.ElementBuilder> {
    const result: CorvusRuleset.ElementBuilder = CorvusRuleset.createElementBuilder()

    result.model.addClasses(classes)

    yield* UnidocReducer.skipStart()
    yield* UnidocReducer.skipWhitespaces()

    while (true) {
      const current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

      if (current.isStartOfAnyTag()) {
        if (current.isStartOfTag('section')) {
          result.children.push(yield* CorvusSectionCommand.reduceTag())
        } else if (current.isStartOfTag('characteristic')) {
          result.children.push(yield* CorvusCharacteristicCommand.reduceTag())
        } else if (current.isStartOfTag('mastery')) {
          result.children.push(yield* CorvusMasteryCommand.reduceTag())
        } else if (current.isStartOfTag('key')) {
          result.key = yield* UnidocReducer.reduceTag.content(UnidocReducer.reduceToken())
        } else {
          yield* UnidocReducer.skipTag()
        }
      } else if (current.isEnd()) {
        if (result.model.classes.has('two-column')) {
          result.model.classes.delete('two-column')
          result.model.layout = CorvusRulesetLayout.TWO_COLUMN
        }

        result.children.sort(compareByTitle)

        return result
      } else {
        yield UnidocReductionRequest.NEXT
      }
    }
  }

  /**
  *
  */
  export function* reduceTag(additionalClasses: Iterable<string> = Empty.ARRAY): UnidocReducer<CorvusRuleset.ElementBuilder> {
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