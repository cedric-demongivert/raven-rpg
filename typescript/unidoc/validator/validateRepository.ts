import { UnidocKissValidator } from '@cedric-demongivert/unidoc'

import { CommandList } from './command/CommandList'
import { CommandListElement } from './command/CommandListElement'
import { validateCommandList } from './command/validateCommandList'

import { validateBook } from './validateBook'

const REPOSITORY_COMMAND: CommandList = CommandList.capture(
  CommandListElement.manyCommand('book', validateBook)
)

/**
*
*/
export function validateRepository(): UnidocKissValidator {
  return validateCommandList(REPOSITORY_COMMAND)
}

/**
*
*/
export namespace validateRepository {
  /**
  *
  */
  export const type: string = 'std:repository'
}
