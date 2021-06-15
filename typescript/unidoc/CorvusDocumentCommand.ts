import { UnidocKissValidator } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReducer } from '@cedric-demongivert/unidoc'

import { CommandList } from './validator/command/CommandList'
import { CommandListElement } from './validator/command/CommandListElement'
import { validateCommandList } from './validator/command/validateCommandList'
import { CorvusParagraphCommand } from './CorvusParagraphCommand'
import { CorvusSectionCommand } from './CorvusSectionCommand'
import { CorvusRulesetCommand } from './CorvusRulesetCommand'
import { CorvusImageCommand } from './CorvusImageCommand'
import { CorvusDocumentElementBuilder } from '../corvus'
import { CorvusCharacteristicCommand } from './CorvusCharacteristicCommand'
import { CorvusMasteryCommand } from './CorvusMasteryCommand'

/**
 * 
 */
export namespace CorvusDocumentCommand {
  /**
   * 
   */
  const COMMANDS: CommandList = CommandList.capture(
    CommandListElement.anywhere.manyCommand('paragraph', CorvusParagraphCommand.validateContent),
    CommandListElement.anywhere.manyCommand('section', CorvusSectionCommand.validateContent),
    CommandListElement.anywhere.manyCommand('characteristic', CorvusCharacteristicCommand.validateContent),
    CommandListElement.anywhere.manyCommand('mastery', CorvusMasteryCommand.validateContent),
    CommandListElement.anywhere.manyCommand('ruleset', CorvusRulesetCommand.validateContent),
    CommandListElement.anywhere.manyCommand('image', CorvusImageCommand.validateContent)
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
  export function* reduceContent(): UnidocReducer<Array<CorvusDocumentElementBuilder>> {
    const content: Array<CorvusDocumentElementBuilder> = []

    yield* UnidocReducer.skipStart()
    yield* UnidocReducer.skipWhitespaces()

    while (true) {
      const current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

      if (current.isStartOfAnyTag()) {
        if (current.isStartOfTag('paragraph')) {
          content.push(yield* CorvusParagraphCommand.reduceTag())
        } else if (current.isStartOfTag('section')) {
          content.push(yield* CorvusSectionCommand.reduceTag())
        } else if (current.isStartOfTag('mastery')) {
          content.push(yield* CorvusMasteryCommand.reduceTag())
        } else if (current.isStartOfTag('characteristic')) {
          content.push(yield* CorvusCharacteristicCommand.reduceTag())
        } else if (current.isStartOfTag('image')) {
          content.push(yield* CorvusImageCommand.reduceTag())
        } else if (current.isStartOfTag('ruleset')) {
          content.push(yield* CorvusRulesetCommand.reduceTag())
        } else {
          return content
        }
      } else if (current.isWhitespace()) {
        yield UnidocReductionRequest.NEXT
      } else {
        return content
      }
    }
  }

  /**
  *
  */
  export function* reduceTag(): UnidocReducer<Array<CorvusDocumentElementBuilder>> {
    yield* UnidocReducer.skipStart()
    yield* UnidocReducer.skipWhitespaces()

    return yield* UnidocReducer.reduceTag.content(reduceContent())
  }
}