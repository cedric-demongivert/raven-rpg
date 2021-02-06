import { UnidocKissValidator } from '@cedric-demongivert/unidoc'

import { CommandList } from './command/CommandList'
import { CommandListElement } from './command/CommandListElement'
import { validateCommandList } from './command/validateCommandList'

import { requireToken } from './requireToken'
import { validateSection } from './validateSection'

const RULESET_COMMAND: CommandList = CommandList.capture(
  CommandListElement.optionalCommand('identifier', requireToken),
  CommandListElement.anywhere.manyCommand('section', validateSection)
)

export function validateRuleset(): UnidocKissValidator {
  return validateCommandList(RULESET_COMMAND)
}

/**
*
*/
export namespace validateRuleset {
  /**
  *
  */
  export const type: string = 'std:document:ruleset'
}
