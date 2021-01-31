import { UnidocKissValidator } from '@cedric-demongivert/unidoc'

import { CommandList } from './command/CommandList'
import { CommandListElement } from './command/CommandListElement'
import { validateCommandList } from './command/validateCommandList'

import { requireToken } from './requireToken'
import { validateSection } from './validateSection'

const SET_COMMAND: CommandList = CommandList.capture(
  CommandListElement.optionalCommand('identifier', requireToken),
  CommandListElement.anywhere.manyCommand('section', validateSection)
)

export function validateSet(): UnidocKissValidator {
  return validateCommandList(SET_COMMAND)
}

/**
*
*/
export namespace validateSet {
  /**
  *
  */
  export const type: string = 'std:document:set'
}
