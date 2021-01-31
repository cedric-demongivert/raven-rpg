import { UnidocKissValidator } from '@cedric-demongivert/unidoc'

export function* validateUnidoc(validator: UnidocKissValidator.Factory): UnidocKissValidator {
  yield* UnidocKissValidator.validateStartOfTag('document')
  yield* UnidocKissValidator.validateManyWhitespace()
  yield* validator()
  yield* UnidocKissValidator.validateManyWhitespace()
  yield* UnidocKissValidator.validateEndOfTag('document')
  yield* UnidocKissValidator.validateEnd()
  return UnidocKissValidator.output.match()
}

/**
*
*/
export namespace validateUnidoc {
  /**
  *
  */
  export function factory(validator: UnidocKissValidator.Factory): UnidocKissValidator.Factory {
    return validateUnidoc.bind(undefined, validator)
  }
}
