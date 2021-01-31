import { UnidocKissValidator } from '@cedric-demongivert/unidoc'
import { UnidocBlueprint } from '@cedric-demongivert/unidoc'
import { UnidocEvent } from '@cedric-demongivert/unidoc'

/**
*
*/
export function* requireToken(): UnidocKissValidator {
  let current: UnidocEvent | undefined = yield UnidocKissValidator.output.current()

  while (current && current.isWhitespace()) {
    yield UnidocKissValidator.output.validation(current)
    current = yield UnidocKissValidator.output.next()
  }

  if (current == null || !current.isWord()) {
    yield UnidocKissValidator.output.validation(current)
    yield UnidocKissValidator.output.message.expectedContent(UnidocBlueprint.word())
    return UnidocKissValidator.output.end()
  }

  while (current && current.isWord()) {
    yield UnidocKissValidator.output.validation(current)
    current = yield UnidocKissValidator.output.next()
  }

  while (current && current.isWhitespace()) {
    yield UnidocKissValidator.output.validation(current)
    current = yield UnidocKissValidator.output.next()
  }

  return UnidocKissValidator.output.match()
}

/**
*
*/
export namespace requireToken {
  /**
  *
  */
  export type Type = string

  /**
  *
  */
  export const type: string = 'std:token'
}
