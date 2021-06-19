import { UnidocKissValidator } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReducer } from '@cedric-demongivert/unidoc'

import { Empty } from '../utils/Empty'

import { CommandList } from './validator/command/CommandList'
import { CommandListElement } from './validator/command/CommandListElement'
import { validateCommandList } from './validator/command/validateCommandList'

import { HypertextCommand } from './HypertextCommand'
import { CorvusCharacteristic } from '../corvus/CorvusCharacteristic'
import { CorvusShallowDocumentCommand } from './CorvusShallowDocumentCommand'
import { CorvusCharacteristicBuilder } from '../corvus/CorvusCharacteristicBuilder'

/**
 * 
 */
export namespace CorvusCharacteristicCommand {
  /**
   * 
   */
  let COMMANDS: CommandList = undefined

  /**
   * 
   */
  function commands(): CommandList {
    if (COMMANDS == null) {
      COMMANDS = CommandList.capture(
        CommandListElement.optionalCommand('key', UnidocKissValidator.requireToken),
        CommandListElement.requiredCommand('title', UnidocKissValidator.requireText),
        CommandListElement.manyCommand('keyword', UnidocKissValidator.requireToken),
        CommandListElement.optionalCommand('summary', HypertextCommand.validateContent),
        CommandListElement.optionalContent(CorvusShallowDocumentCommand.validateContent)
      )
    }

    return COMMANDS
  }

  /**
   * 
   */
  export function validateContent(): UnidocKissValidator {
    return validateCommandList(commands())
  }

  /**
  *
  */
  export function* reduceContent(classes: Iterable<string> = Empty.ARRAY): UnidocReducer<CorvusCharacteristicBuilder> {
    const result: CorvusCharacteristicBuilder = CorvusCharacteristicBuilder.create()

    result.addClasses(classes)

    yield* UnidocReducer.skipStart()
    yield* UnidocReducer.skipWhitespaces()

    while (true) {
      let current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

      if (current.isStartOfAnyTag()) {
        if (current.isStartOfTag('title')) {
          result.title = yield* UnidocReducer.reduceTag.content(UnidocReducer.reduceText())
        } else if (current.isStartOfTag('keyword')) {
          result.addKeyword(yield* UnidocReducer.reduceTag.content(UnidocReducer.reduceToken()))
        } else if (current.isStartOfTag('key')) {
          result.key = yield* UnidocReducer.reduceTag.content(UnidocReducer.reduceToken())
        } else if (current.isStartOfTag('summary')) {
          yield* UnidocReducer.skipTag()
        } else {
          result.appendChildren(yield* CorvusShallowDocumentCommand.reduceContent())
        }
      } else if (current.isEnd()) {
        return result
      } else {
        current = yield UnidocReductionRequest.NEXT
      }
    }
  }

  /**
  *
  */
  export function* reduceTag(additionalClasses: Iterable<string> = Empty.ARRAY): UnidocReducer<CorvusCharacteristicBuilder> {
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