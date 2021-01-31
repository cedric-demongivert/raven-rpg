import { UnidocKissValidator } from '@cedric-demongivert/unidoc'

import { CommandList } from './command/CommandList'
import { CommandListElement } from './command/CommandListElement'
import { validateCommandList } from './command/validateCommandList'

import { requireToken } from './requireToken'
import { requireText } from './requireText'
import { validateDocument } from './validateDocument'
import { validateHypertext } from './validateHypertext'

const SECTION_COMMAND: CommandList = CommandList.capture(
  CommandListElement.optionalCommand('identifier', requireToken),
  CommandListElement.requiredCommand('title', requireText),
  CommandListElement.manyCommand('keyword', requireToken),
  CommandListElement.optionalCommand('summary', validateHypertext),
  CommandListElement.optionalContent(validateDocument)
)

export function validateSection(): UnidocKissValidator {
  return validateCommandList(SECTION_COMMAND)
}

/**
*
*/
export namespace validateSection {
  /**
  *
  */
  export const type: string = 'std:document:section'
}
