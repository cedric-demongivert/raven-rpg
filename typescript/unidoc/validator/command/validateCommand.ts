import { UnidocKissValidator } from '@cedric-demongivert/unidoc'
import { UnidocKissValidatorOutput } from '@cedric-demongivert/unidoc'

import { Outputs } from '../Outputs'
import { throwWithFailure } from '../throwWithFailure'

/**
*
*/
export function* validateCommand(name: string, validator: UnidocKissValidator.Factory): UnidocKissValidator {
  yield* UnidocKissValidator.validateManyWhitespace()
  yield* UnidocKissValidator.validateStartOfTag(name)
  yield* UnidocKissValidator.validateManyWhitespace()

  try {
    yield* throwWithFailure(validator)
  } catch (output) {
    if (output instanceof UnidocKissValidatorOutput && output.isEmit()) {
      output.event.message.asError()
      yield output
    }

    yield Outputs.illFormedCommand(name, validator.name)
    return UnidocKissValidator.output.end()
  }

  yield* UnidocKissValidator.validateManyWhitespace()
  yield* UnidocKissValidator.validateEndOfTag(name)
  return UnidocKissValidator.output.match()
}

/**
*
*/
export namespace validateCommand {
  /**
  *
  */
  export function factory(name: string, validator: UnidocKissValidator.Factory): UnidocKissValidator.Factory {
    return validateCommand.bind(undefined, name, validator)
  }
}
