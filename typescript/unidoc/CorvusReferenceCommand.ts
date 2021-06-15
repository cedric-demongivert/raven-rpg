import { UnidocEvent, UnidocKissValidator, UnidocReductionInput, UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReducer } from '@cedric-demongivert/unidoc'

import { CorvusReference } from '../corvus/CorvusReference'

/**
 * 
 */
export namespace CorvusReferenceCommand {
  /**
  *
  */
  export function* validateContent(): UnidocKissValidator {
    yield* UnidocKissValidator.requireToken()
    yield* UnidocKissValidator.validateManyWhitespace()

    const current: UnidocEvent | undefined = yield UnidocKissValidator.output.current()

    if (current && current.isWord()) {
      yield* UnidocKissValidator.requireToken()
      yield* UnidocKissValidator.validateManyWhitespace()
    }

    return UnidocKissValidator.output.match()
  }

  /**
  *
  */
  export function* reduceContent(): UnidocReducer<CorvusReference> {
    yield* UnidocReducer.skipStart()

    const first: string = yield* UnidocReducer.reduceToken()

    yield* UnidocReducer.reduceWhitespaces()

    const current: UnidocReductionInput | undefined = yield UnidocReductionRequest.CURRENT

    const second: string | undefined = current && current.isAnyWord() ? yield* UnidocReducer.reduceToken() : undefined

    if (second == null) {
      return CorvusReference.create(first)
    } else {
      return CorvusReference.create({
        document: first,
        element: second
      })
    }
  }

  /**
  *
  */
  export function* reduceTag(): UnidocReducer<CorvusReference> {
    yield* UnidocReducer.skipStart()
    yield* UnidocReducer.skipWhitespaces()

    return yield* UnidocReducer.reduceTag.content(reduceContent())
  }
}