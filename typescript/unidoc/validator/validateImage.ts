import { UnidocKissValidator } from '@cedric-demongivert/unidoc'

import { CommandList } from './command/CommandList'
import { CommandListElement } from './command/CommandListElement'
import { validateCommandList } from './command/validateCommandList'

import { requireToken } from './requireToken'

const IMAGE_COMMAND: CommandList = CommandList.capture(
  CommandListElement.anywhere.optionalCommand('format', requireToken),
  CommandListElement.anywhere.requiredCommand('path', requireToken)
)


export function validateImage(): UnidocKissValidator {
  return validateCommandList(IMAGE_COMMAND)
}

/**
*
*/
export namespace validateImage {
  /**
  *
  */
  export const type: string = 'std:document:image'
}
