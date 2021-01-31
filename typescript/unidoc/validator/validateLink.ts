import { UnidocKissValidator } from '@cedric-demongivert/unidoc'

import { CommandList } from './command/CommandList'
import { CommandListElement } from './command/CommandListElement'
import { validateCommandList } from './command/validateCommandList'

import { requireToken } from './requireToken'
import { requireText } from './requireText'

const LINK_CONTENT: CommandList = CommandList.capture(
  CommandListElement.requiredContent(requireText),
  CommandListElement.requiredCommand('url', requireToken)
)


export function validateLink(): UnidocKissValidator {
  return validateCommandList(LINK_CONTENT)
}

/**
*
*/
export namespace validateLink {
  /**
  *
  */
  export const type: string = 'std:hypertext:link'
}
