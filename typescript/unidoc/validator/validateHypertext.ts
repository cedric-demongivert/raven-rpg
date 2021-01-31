import { UnidocKissValidator } from '@cedric-demongivert/unidoc'

import { CommandList } from './command/CommandList'
import { CommandListElement } from './command/CommandListElement'
import { validateCommandList } from './command/validateCommandList'

import { validateText } from './validateText'
import { validateEmphasize } from './validateEmphasize'
import { validateLink } from './validateLink'
import { validateAcronym } from './validateAcronym'

const HYPERTEXT_COMMAND: CommandList = CommandList.capture(
  CommandListElement.anywhere.manyCommand('emphasize', validateEmphasize),
  CommandListElement.anywhere.manyCommand('link', validateLink),
  CommandListElement.anywhere.manyCommand('acronym', validateAcronym),
  CommandListElement.anywhere.manyContent(validateText)
)


export function validateHypertext(): UnidocKissValidator {
  return validateCommandList(HYPERTEXT_COMMAND)
}

/**
*
*/
export namespace validateHypertext {
  /**
  *
  */
  export const type: string = 'std:hypertext'
}
