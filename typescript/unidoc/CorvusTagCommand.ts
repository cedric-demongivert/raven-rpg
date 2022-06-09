import { UnidocKissValidator } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReducer } from '@cedric-demongivert/unidoc'

import { CommandList } from './validator/command/CommandList'
import { CommandListElement } from './validator/command/CommandListElement'
import { validateCommandList } from './validator/command/validateCommandList'
import { CorvusTagBuilder } from '../corvus/CorvusTagBuilder'

import { Empty } from '../utils/Empty'
import { HypertextCommand } from './HypertextCommand'

/**
 * 
 */
export namespace CorvusTagCommand {
  /**
   * 
   */
  const COMMANDS: CommandList = CommandList.capture(
    CommandListElement.anywhere.optionalCommand('identifier', UnidocKissValidator.requireToken),
    CommandListElement.anywhere.optionalCommand('name', UnidocKissValidator.requireText),
    CommandListElement.anywhere.requiredCommand('description', HypertextCommand.validateContent)
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
  export function* reduceContent(classes: Iterable<string> = Empty.ARRAY): UnidocReducer<CorvusTagBuilder> {
    const builder: CorvusTagBuilder = CorvusTagBuilder.create()

    yield* UnidocReducer.skipStart()
    yield* UnidocReducer.skipWhitespaces()

    while (true) {
      const current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

      if (current.isStartOfAnyTag()) {
        if (current.isStartOfTag('identifier')) {
          builder.identifier = yield* UnidocReducer.reduceTag.content(UnidocReducer.reduceToken())
        } else if (current.isStartOfTag('name')) {
          builder.name = yield* UnidocReducer.reduceTag.content(UnidocReducer.reduceText())
        } else if (current.isStartOfTag('description')) {
          builder.description = yield* UnidocReducer.reduceTag.content(HypertextCommand.reduceContent())
        } else {
          yield* UnidocReducer.skipTag()
        }
      } else if (current.isEnd()) {
        return builder
      } else {
        yield UnidocReductionRequest.NEXT
      }
    }
  }

  /**
  *
  */
  export function* reduceTag(): UnidocReducer<CorvusTagBuilder> {
    yield* UnidocReducer.skipStart()
    yield* UnidocReducer.skipWhitespaces()

    const current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

    if (current.isStartOfAnyTag()) {
      return yield* UnidocReducer.reduceTag.content(reduceContent())
    } else {
      return undefined
    }
  }
}