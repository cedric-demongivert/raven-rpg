import { UnidocKissValidator } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReducer } from '@cedric-demongivert/unidoc'

import { Emphasize } from '../state/hypertext/Emphasize'
import { HypertextElement } from '../state/hypertext/HypertextElement'
import { Hypertext } from '../state/hypertext/Hypertext'

import { CommandList } from './validator/command/CommandList'
import { CommandListElement } from './validator/command/CommandListElement'
import { validateCommandList } from './validator/command/validateCommandList'

import { LinkCommand } from './LinkCommand'
import { AcronymCommand } from './AcronymCommand'
/**
 * 
 */
export namespace EmphasizeCommand {
  /**
   * 
   */
  const COMMANDS: CommandList = CommandList.capture(
    CommandListElement.anywhere.manyCommand('link', LinkCommand.validateContent),
    CommandListElement.anywhere.manyCommand('acronym', AcronymCommand.validateContent),
    CommandListElement.anywhere.manyContent(UnidocKissValidator.validateText)
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
  export function* reduceContent(): UnidocReducer<Emphasize> {
    const content: Array<string | HypertextElement> = []

    yield* UnidocReducer.skipStart()
    yield* UnidocReducer.skipWhitespaces()

    while (true) {
      const current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

      if (current.isStartOfAnyTag()) {
        if (current.isStartOfTag('link')) {
          content.push(yield* LinkCommand.reduceTag())
        } else if (current.isStartOfTag('acronym')) {
          content.push(yield* AcronymCommand.reduceTag())
        } else {
          yield* UnidocReducer.skipTag()
        }
      } else if (current.isAnyWord()) {
        content.push(yield* UnidocReducer.reduceText())
      } else if (current.isEnd()) {
        return Emphasize.create(Hypertext.create(...content))
      } else {
        yield UnidocReductionRequest.NEXT
      }
    }
  }

  /**
  *
  */
  export function* reduceTag(): UnidocReducer<Emphasize> {
    yield* UnidocReducer.skipStart()
    yield* UnidocReducer.skipWhitespaces()

    return yield* UnidocReducer.reduceTag.content(reduceContent())
  }
}