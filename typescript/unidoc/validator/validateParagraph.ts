import { UnidocKissValidator } from '@cedric-demongivert/unidoc'

import { CommandList } from './command/CommandList'
import { CommandListElement } from './command/CommandListElement'
import { validateCommandList } from './command/validateCommandList'

import { validateHypertext } from './validateHypertext'
import { requireText } from './requireText'
import { requireToken } from './requireToken'

const PARAGRAPH_COMMAND: CommandList = CommandList.capture(
  CommandListElement.optionalCommand('identifier', requireToken),
  CommandListElement.optionalCommand('title', requireText),
  CommandListElement.optionalContent(validateHypertext)
)

export function validateParagraph(): UnidocKissValidator {
  return validateCommandList(PARAGRAPH_COMMAND)
}

/**
*
*/
export namespace validateParagraph {
  /**
  *
  */
  export const type: string = 'std:document:paragraph'
}
