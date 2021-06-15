import { UnidocKissValidator } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReducer } from '@cedric-demongivert/unidoc'

import { Empty } from '../utils/Empty'
import { CorvusParagraph } from '../corvus/CorvusParagraph'

import { CommandList } from './validator/command/CommandList'
import { CommandListElement } from './validator/command/CommandListElement'
import { validateCommandList } from './validator/command/validateCommandList'

import { HypertextCommand } from './HypertextCommand'
/**
 * 
 */
export namespace CorvusParagraphCommand {
  /**
   * 
   */
  const COMMANDS: CommandList = CommandList.capture(
    CommandListElement.optionalCommand('key', UnidocKissValidator.requireToken),
    CommandListElement.optionalCommand('title', UnidocKissValidator.requireText),
    CommandListElement.optionalContent(HypertextCommand.validateContent)
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
  export function* reduceContent(classes: Iterable<string> = Empty.ARRAY): UnidocReducer<CorvusParagraph.ElementBuilder> {
    const result: CorvusParagraph.ElementBuilder = CorvusParagraph.createElementBuilder()

    result.model.addClasses(classes)

    yield* UnidocReducer.skipStart()
    yield* UnidocReducer.skipWhitespaces()

    while (true) {
      const current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

      if (current.isStartOfAnyTag()) {
        if (current.isStartOfTag('title')) {
          result.model.title = yield* UnidocReducer.reduceTag.content(UnidocReducer.reduceText())
        } else if (current.isStartOfTag('key')) {
          result.key = yield* UnidocReducer.reduceTag.content(UnidocReducer.reduceToken())
        } else {
          result.model.content = result.model.content.concat(yield* HypertextCommand.reduceContent())
        }
      } else if (current.isAnyWord()) {
        result.model.content = result.model.content.concat(yield* HypertextCommand.reduceContent())
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
  export function* reduceTag(additionalClasses: Iterable<string> = Empty.ARRAY): UnidocReducer<CorvusParagraph.ElementBuilder> {
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