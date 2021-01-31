import { UnidocKissValidator } from '@cedric-demongivert/unidoc'

import { CommandList } from './command/CommandList'
import { CommandListElement } from './command/CommandListElement'
import { validateCommandList } from './command/validateCommandList'

import { validateText } from './validateText'
import { validateLink } from './validateLink'
import { validateAcronym } from './validateAcronym'

const EMPHASIZE_COMMAND: CommandList = CommandList.capture(
  CommandListElement.anywhere.manyCommand('link', validateLink),
  CommandListElement.anywhere.manyCommand('acronym', validateAcronym),
  CommandListElement.anywhere.manyContent(validateText)
)


export function validateEmphasize(): UnidocKissValidator {
  return validateCommandList(EMPHASIZE_COMMAND)
}

/**
*
*/
export namespace validateEmphasize {
  /**
  *
  */
  export const type: string = 'std:hypertext:emphasize'
}
