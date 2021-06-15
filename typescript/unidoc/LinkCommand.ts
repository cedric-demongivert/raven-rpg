import { UnidocKissValidator } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReducer } from '@cedric-demongivert/unidoc'

import { Link } from '../state/hypertext/Link'

import { CommandList } from './validator/command/CommandList'
import { CommandListElement } from './validator/command/CommandListElement'
import { validateCommandList } from './validator/command/validateCommandList'

/**
 * 
 */
export namespace LinkCommand {
  const COMMANDS: CommandList = CommandList.capture(
    CommandListElement.requiredContent(UnidocKissValidator.requireText),
    CommandListElement.requiredCommand('url', UnidocKissValidator.requireToken)
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
  export function* reduceContent(): UnidocReducer<Link> {
    let url: string | undefined = undefined
    let content: string | undefined = undefined

    yield* UnidocReducer.skipStart()
    yield* UnidocReducer.skipWhitespaces()

    while (true) {
      const current: UnidocReductionInput = yield UnidocReductionRequest.CURRENT

      if (current.isStartOfAnyTag()) {
        if (current.isStartOfTag('url')) {
          url = yield* UnidocReducer.reduceTag.content(UnidocReducer.reduceToken())
        } else {
          yield* UnidocReducer.skipTag()
        }
      } else if (current.isAnyWord()) {
        content = yield* UnidocReducer.reduceText()
      } else if (current.isEnd()) {
        return Link.create({ content, url })
      } else {
        yield UnidocReductionRequest.NEXT
      }
    }
  }

  /**
  *
  */
  export function* reduceTag(): UnidocReducer<Link> {
    yield* UnidocReducer.skipStart()
    yield* UnidocReducer.skipWhitespaces()

    return yield* UnidocReducer.reduceTag.content(reduceContent())
  }
}