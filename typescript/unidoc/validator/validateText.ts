import { UnidocKissValidator } from '@cedric-demongivert/unidoc'
import { UnidocEvent } from '@cedric-demongivert/unidoc'

/**
*
*/
export function* validateText(): UnidocKissValidator {
  let current: UnidocEvent | undefined = yield UnidocKissValidator.output.current()

  while (current && current.isWhitespace()) {
    yield UnidocKissValidator.output.validation(current)
    current = yield UnidocKissValidator.output.next()
  }

  while (current && (current.isWhitespace() || current.isWord())) {
    yield UnidocKissValidator.output.validation(current)
    current = yield UnidocKissValidator.output.next()
  }

  return UnidocKissValidator.output.match()
}


/**
*
*/
export namespace validateText {
  /**
  *
  */
  export type Type = string

  /**
  *
  */
  export const type: string = 'std:text'
}
