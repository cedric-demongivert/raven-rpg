import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'
import { UnidocReductionInput } from '@cedric-demongivert/unidoc'

import { Hypertext } from '../../hypertext/Hypertext'
import { HypertextElement } from '../../hypertext/HypertextElement'

import { reduceEmphasize } from './reduceEmphasize'
import { reduceLink } from './reduceLink'
import { reduceAcronym } from './reduceAcronym'

import { shyfy } from '../../shyfy'

/**
*
*/
export function* reduceHypertext(): UnidocReducer<Hypertext | undefined> {
  const content: Array<HypertextElement | string> = []

  yield* UnidocReducer.skipStart()
  yield* UnidocReducer.skipWhitespaces()

  let wasWhitespaces: boolean = false
  let next: string | HypertextElement | undefined = undefined
  let current: UnidocReductionInput

  while (true) {
    wasWhitespaces = false
    current = yield UnidocReductionRequest.CURRENT

    while (current.isWhitespace()) {
      wasWhitespaces = true
      current = yield UnidocReductionRequest.NEXT
    }

    if (current.isAnyWord()) {
      next = shyfy(current.event.text, shyfy.fr) // warning, not perfect
      current = yield UnidocReductionRequest.NEXT
    } else if (current.isStartOfAnyTag()) {
      if (current.isStartOfTag('emphasize')) {
        next = yield* reduceEmphasize()
      } else if (current.isStartOfTag('link')) {
        next = yield* reduceLink()
      } else if (current.isStartOfTag('acronym')) {
        next = yield* reduceAcronym()
      } else {
        return Hypertext.create(...content)
      }
    } else {
      return Hypertext.create(...content)
    }

    if (content.length > 0) {
      const last: HypertextElement | string = content[content.length - 1]

      if (typeof last === typeof next) {
        if (typeof last === 'string') {
          if (wasWhitespaces) {
            content[content.length - 1] = last + ' ' + next
          } else {
            content[content.length - 1] = last + next
          }
        } else {
          if (wasWhitespaces) {
            content.push(' ')
          }
          content.push(next)
        }
      } else {
        if (typeof last === 'string') {
          if (wasWhitespaces) {
            content[content.length - 1] = last + ' '
          }
          content.push(next)
        } else {
          if (wasWhitespaces) {
            content.push(' ' + next)
          } else {
            content.push(next)
          }
        }
      }
    } else {
      content.push(next)
    }

    next = undefined
  }
}
