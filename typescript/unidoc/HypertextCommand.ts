import { UnidocKissValidator } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReducer } from '@cedric-demongivert/unidoc'

import { HypertextElement } from '../state/hypertext/HypertextElement'

import { CommandList } from './validator/command/CommandList'
import { CommandListElement } from './validator/command/CommandListElement'
import { validateCommandList } from './validator/command/validateCommandList'

import { LinkCommand } from './LinkCommand'
import { AcronymCommand } from './AcronymCommand'
import { EmphasizeCommand } from './EmphasizeCommand'
import { Hypertext } from '../state/hypertext/Hypertext'
import { shyfy } from '../shyfy'

/**
 * 
 */
export namespace HypertextCommand {
  /**
   * 
   */
  const COMMANDS: CommandList = CommandList.capture(
    CommandListElement.anywhere.manyCommand('emphasize', EmphasizeCommand.validateContent),
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
  export function* reduceContent(): UnidocReducer<Hypertext> {
    const content: Array<HypertextElement | string> = []

    yield* UnidocReducer.skipStart()
    yield* UnidocReducer.skipWhitespaces()

    let wasWhitespaces: boolean = false
    let next: string | HypertextElement | undefined = undefined
    let current: UnidocReductionInput

    while (true) {
      wasWhitespaces = false
      current = yield UnidocReductionRequest.CURRENT

      while (current.isWhitespace()) {
        wasWhitespaces = true
        current = yield UnidocReductionRequest.NEXT
      }

      if (current.isAnyWord()) {
        next = current.event.text //shyfy(current.event.text, shyfy.fr) // warning, not perfect
        current = yield UnidocReductionRequest.NEXT
      } else if (current.isStartOfAnyTag()) {
        if (current.isStartOfTag('emphasize')) {
          next = yield* EmphasizeCommand.reduceTag()
        } else if (current.isStartOfTag('link')) {
          next = yield* LinkCommand.reduceTag()
        } else if (current.isStartOfTag('acronym')) {
          next = yield* AcronymCommand.reduceTag()
        } else {
          return Hypertext.create(...content)
        }
      } else {
        return Hypertext.create(...content)
      }

      if (content.length > 0) {
        const last: HypertextElement | string = content[content.length - 1]

        if (typeof last === typeof next) {
          if (typeof last === 'string') {
            if (wasWhitespaces) {
              content[content.length - 1] = last + ' ' + next
            } else {
              content[content.length - 1] = last + next
            }
          } else {
            if (wasWhitespaces) {
              content.push(' ')
            }
            content.push(next)
          }
        } else {
          if (typeof last === 'string') {
            if (wasWhitespaces) {
              content[content.length - 1] = last + ' '
            }
            content.push(next)
          } else {
            if (wasWhitespaces) {
              content.push(' ' + next)
            } else {
              content.push(next)
            }
          }
        }
      } else {
        content.push(next)
      }

      next = undefined
    }
  }

  /**
  *
  */
  export function* reduceTag(): UnidocReducer<Hypertext> {
    yield* UnidocReducer.skipStart()
    yield* UnidocReducer.skipWhitespaces()

    return yield* UnidocReducer.reduceTag.content(reduceContent())
  }
}