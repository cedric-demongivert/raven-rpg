import { UnidocKissValidator } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReducer } from '@cedric-demongivert/unidoc'

import { CommandList } from './validator/command/CommandList'
import { CommandListElement } from './validator/command/CommandListElement'
import { validateCommandList } from './validator/command/validateCommandList'

import { CorvusImageFormat } from '../corvus/CorvusImageFormat'
import { Empty } from '../utils/Empty'
import { CorvusImageBuilder } from '../corvus'

/**
 * 
 */
export namespace CorvusImageCommand {
  /**
   * 
   */
  const COMMANDS: CommandList = CommandList.capture(
    CommandListElement.anywhere.optionalCommand('key', UnidocKissValidator.requireToken),
    CommandListElement.anywhere.optionalCommand('format', UnidocKissValidator.requireToken),
    CommandListElement.anywhere.requiredCommand('path', UnidocKissValidator.requireToken),
    CommandListElement.anywhere.optionalCommand('width', UnidocKissValidator.requireText),
    CommandListElement.anywhere.optionalCommand('height', UnidocKissValidator.requireText)
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
  export function* reduceContent(classes: Iterable<string> = Empty.ARRAY): UnidocReducer<CorvusImageBuilder.ElementBuilder> {
    const result: CorvusImageBuilder.ElementBuilder = CorvusImageBuilder.createElementBuilder()

    result.model.addClasses(classes)

    yield* UnidocReducer.skipStart()
    yield* UnidocReducer.skipWhitespaces()

    while (true) {
      const current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

      if (current.isStartOfAnyTag()) {
        if (current.isStartOfTag('path')) {
          result.model.path = yield* UnidocReducer.reduceTag.content(UnidocReducer.reduceToken())
        } else if (current.isStartOfTag('format')) {
          result.model.format = CorvusImageFormat.fromString(yield* UnidocReducer.reduceTag.content(UnidocReducer.reduceToken()))
        } else if (current.isStartOfTag('width')) {
          result.model.width = yield* UnidocReducer.reduceTag.content(UnidocReducer.reduceText())
        } else if (current.isStartOfTag('height')) {
          result.model.height = yield* UnidocReducer.reduceTag.content(UnidocReducer.reduceText())
        } else if (current.isStartOfTag('key')) {
          result.key = yield* UnidocReducer.reduceTag.content(UnidocReducer.reduceToken())
        } else {
          yield* UnidocReducer.skipTag()
        }
      } else if (current.isEnd()) {
        return result
      } else {
        yield UnidocReductionRequest.NEXT
      }
    }
  }

  /**
  *
  */
  export function* reduceTag(additionalClasses: Iterable<string> = Empty.ARRAY): UnidocReducer<CorvusImageBuilder.ElementBuilder> {
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