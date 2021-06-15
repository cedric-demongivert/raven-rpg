import { UnidocKissValidator } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReducer } from '@cedric-demongivert/unidoc'

import { Empty } from '../utils/Empty'

import { CommandList } from './validator/command/CommandList'
import { CommandListElement } from './validator/command/CommandListElement'
import { validateCommandList } from './validator/command/validateCommandList'

import { HypertextCommand } from './HypertextCommand'
import { CorvusDocumentCommand } from './CorvusDocumentCommand'
import { CorvusBook } from '../corvus/CorvusBook'

/**
 * 
 */
export namespace CorvusBookCommand {
  /**
   * 
   */
  const COMMANDS: CommandList = CommandList.capture(
    CommandListElement.anywhere.optionalCommand('key', UnidocKissValidator.requireToken),
    CommandListElement.anywhere.requiredCommand('title', UnidocKissValidator.requireText),
    CommandListElement.anywhere.requiredCommand('lang', UnidocKissValidator.requireToken),
    CommandListElement.anywhere.optionalCommand('summary', HypertextCommand.validateContent),
    CommandListElement.anywhere.requiredCommand('content', CorvusDocumentCommand.validateContent)
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
  export function* reduceContent(classes: Iterable<string> = Empty.ARRAY): UnidocReducer<CorvusBook.ElementBuilder> {
    const result: CorvusBook.ElementBuilder = CorvusBook.createElementBuilder()

    result.model.addClasses(classes)

    yield* UnidocReducer.skipStart()
    yield* UnidocReducer.skipWhitespaces()

    while (true) {
      const current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

      if (current.isStartOfAnyTag()) {
        if (current.isStartOfTag('key')) {
          result.key = yield* UnidocReducer.reduceTag.content(UnidocReducer.reduceToken())
        } else if (current.isStartOfTag('lang')) {
          result.model.lang = yield* UnidocReducer.reduceTag.content(UnidocReducer.reduceToken())
        } else if (current.isStartOfTag('title')) {
          result.model.title = yield* UnidocReducer.reduceTag.content(UnidocReducer.reduceText())
        } else if (current.isStartOfTag('summary')) {
          result.model.summary = yield* HypertextCommand.reduceTag()
        } else if (current.isStartOfTag('content')) {
          result.addChildren(yield* CorvusDocumentCommand.reduceTag())
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
  export function* reduceTag(additionalClasses: Iterable<string> = Empty.ARRAY): UnidocReducer<CorvusBook.ElementBuilder> {
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