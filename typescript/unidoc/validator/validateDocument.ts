import { UnidocKissValidator } from '@cedric-demongivert/unidoc'

import { CommandList } from './command/CommandList'
import { CommandListElement } from './command/CommandListElement'
import { validateCommandList } from './command/validateCommandList'

import { validateParagraph } from './validateParagraph'
import { validateSection } from './validateSection'
import { validateSet } from './validateSet'
import { validateImage } from './validateImage'

const DOCUMENT_COMMAND: CommandList = CommandList.capture(
  CommandListElement.anywhere.manyCommand('paragraph', validateParagraph),
  CommandListElement.anywhere.manyCommand('section', validateSection),
  CommandListElement.anywhere.manyCommand('set', validateSet),
  CommandListElement.anywhere.manyCommand('image', validateImage)
)


export function validateDocument(): UnidocKissValidator {
  return validateCommandList(DOCUMENT_COMMAND)
}

/**
*
*/
export namespace validateDocument {
  /**
  *
  */
  export const type: string = 'std:document'
}
