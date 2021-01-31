import { UnidocKissValidator } from '@cedric-demongivert/unidoc'

/**
*
*/
export function* throwWithFailure(validator: UnidocKissValidator.Factory): UnidocKissValidator {
  const instance: UnidocKissValidator = validator()

  let current: UnidocKissValidator.Result = instance.next()

  while (!current.done) {
    if (current.value.isEnd()) {
      throw current.value
    } else if (current.value.isEmit() && current.value.event.isMessage() && current.value.event.message.isFailure()) {
      throw current.value
    } else {
      current = instance.next(yield current.value)
    }
  }

  if (current.value.isEnd()) {
    throw current.value
  } else if (current.value.isMatch()) {
    return current.value
  } else {
    throw new Error(
      'The underlying validator finished without returning a match nor an ' +
      'end signal.'
    )
  }
}


/**
*
*/
export namespace throwWithFailure {
  /**
  *
  */
  export function factory(validator: UnidocKissValidator.Factory): UnidocKissValidator.Factory {
    return throwWithFailure.bind(undefined, validator)
  }
}
