import { UnidocKissValidator } from '@cedric-demongivert/unidoc'

import { requireToken } from './requireToken'
import { requireText } from './requireText'

/**
*
*/
export function* validateAcronym(): UnidocKissValidator {
  yield* requireToken()
  yield* requireText()
  return UnidocKissValidator.output.match()
}


/**
*
*/
export namespace validateAcronym {
  /**
  *
  */
  export const type: string = 'std:hypertext:acronym'
}
