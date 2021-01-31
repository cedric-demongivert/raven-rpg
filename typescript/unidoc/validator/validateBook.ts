import { UnidocKissValidator } from '@cedric-demongivert/unidoc'

import { CommandList } from './command/CommandList'
import { CommandListElement } from './command/CommandListElement'
import { validateCommandList } from './command/validateCommandList'

import { requireToken } from './requireToken'
import { requireText } from './requireText'
import { validateHypertext } from './validateHypertext'

const BOOK_COMMAND: CommandList = CommandList.capture(
  CommandListElement.optionalCommand('identifier', requireToken),
  CommandListElement.requiredCommand('title', requireText),
  CommandListElement.requiredCommand('lang', requireToken),
  CommandListElement.optionalCommand('summary', validateHypertext),
  CommandListElement.requiredCommand('content', requireToken)
)

/**
*
*/
export function validateBook(): UnidocKissValidator {
  return validateCommandList(BOOK_COMMAND)
}

/**
*
*/
export namespace validateBook {
  /**
  *
  */
  export const type: string = 'std:book'
}
