import { UnidocKissValidator } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReducer } from '@cedric-demongivert/unidoc'

import { CorvusElementBuilder } from '../corvus/CorvusElementBuilder'
import { CommandList } from './validator/command/CommandList'
import { CommandListElement } from './validator/command/CommandListElement'
import { validateCommandList } from './validator/command/validateCommandList'
import { CorvusParagraphCommand } from './CorvusParagraphCommand'
import { CorvusImageCommand } from './CorvusImageCommand'

/**
 * 
 */
export namespace CorvusShallowDocumentCommand {
  /**
   * 
   */
  const COMMANDS: CommandList = CommandList.capture(
    CommandListElement.anywhere.manyCommand('paragraph', CorvusParagraphCommand.validateContent),
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
  export function* reduceContent(): UnidocReducer<Array<CorvusElementBuilder>> {
    const content: Array<CorvusElementBuilder> = []

    yield* UnidocReducer.skipStart()
    yield* UnidocReducer.skipWhitespaces()

    while (true) {
      const current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

      if (current.isStartOfAnyTag()) {
        if (current.isStartOfTag('paragraph')) {
          content.push(yield* CorvusParagraphCommand.reduceTag())
        } else if (current.isStartOfTag('image')) {
          content.push(yield* CorvusImageCommand.reduceTag())
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
  export function* reduceTag(): UnidocReducer<Array<CorvusElementBuilder>> {
    yield* UnidocReducer.skipStart()
    yield* UnidocReducer.skipWhitespaces()

    return yield* UnidocReducer.reduceTag.content(reduceContent())
  }
}