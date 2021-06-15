import { UnidocKissValidator } from '@cedric-demongivert/unidoc'
import { UnidocReducer } from '@cedric-demongivert/unidoc'

import { Acronym } from '../state/hypertext/Acronym'

/**
 * 
 */
export namespace AcronymCommand {
  /**
  *
  */
  export function* validateContent(): UnidocKissValidator {
    yield* UnidocKissValidator.requireToken()
    yield* UnidocKissValidator.requireText()
    return UnidocKissValidator.output.match()
  }

  /**
  *
  */
  export function* reduceContent(): UnidocReducer<Acronym> {
    yield* UnidocReducer.skipStart()

    return Acronym.create({
      acronym: yield* UnidocReducer.reduceToken(),
      expanded: yield* UnidocReducer.reduceText()
    })
  }

  /**
  *
  */
  export function* reduceTag(): UnidocReducer<Acronym> {
    yield* UnidocReducer.skipStart()
    yield* UnidocReducer.skipWhitespaces()

    return yield* UnidocReducer.reduceTag.content(reduceContent())
  }
}