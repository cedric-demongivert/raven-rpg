import { UnidocEventType, UnidocReducer, UnidocReduction, UTF32StringTree } from "@cedric-demongivert/unidoc"

import { StringBuilder, CorvusTextBuilder } from "../model"
import { reduceCorvusAcronym } from "./reduceCorvusAcronym"
import { reduceCorvusEmphasize } from "./reduceCorvusEmphasize"
import { reduceCorvusLink } from "./reduceCorvusLink"
import { ReduceCorvusTextState } from "./ReduceCorvusTextState"

/**
 *
 */
const TAGS: UTF32StringTree<number> = new UTF32StringTree<number>()

/**
 * 
 */
const SPACE: string = ' '

/**
 *
 */
const ACRONYM: number = 0

/**
 *
 */
const LINK: number = 1

/**
 *
 */
const EMPHASIZE: number = 2

//
TAGS.setString('acronym', ACRONYM)
TAGS.setString('link', LINK)
TAGS.setString('emphasize', EMPHASIZE)

/**
 *
 */
export function* reduceCorvusText(): UnidocReduction<CorvusTextBuilder | null> {
  const builder: CorvusTextBuilder = CorvusTextBuilder.create()
  const stringBuilder: StringBuilder = new StringBuilder()

  let current: UnidocReduction.Input = yield UnidocReduction.CURRENT
  let state: ReduceCorvusTextState = ReduceCorvusTextState.DEFAULT
  let tag: number | null = null

  while (current.isNext() && state !== ReduceCorvusTextState.END) {
    //console.log('HANDLING', current.toString())
    //console.log('   STATE', ReduceCorvusTextState.toDebugString(state))
    //console.log('     TAG', tag)
    switch (state) {
      case ReduceCorvusTextState.START:
        switch (current.value.type) {
          case UnidocEventType.WHITESPACE:
            state = ReduceCorvusTextState.AFTER_LEADING_SPACE
            break
          case UnidocEventType.WORD:
            state = ReduceCorvusTextState.AFTER_TEXT_WORD
            stringBuilder.clear()
            break
          case UnidocEventType.START_TAG:
            state = ReduceCorvusTextState.AT_TAG
            tag = TAGS.get(current.value.symbols)
            break
          case UnidocEventType.END_TAG:
            state = ReduceCorvusTextState.END
            break
          default:
            throw new Error(
              `Unable to reduce event ${current.value.toString()} as text node in state ${ReduceCorvusTextState.toDebugString(state)} ` +
              `because no procedure was defined for handling events of type ${UnidocEventType.toDebugString(current.value.type)}.`
            )
        }
        break
      case ReduceCorvusTextState.AFTER_LEADING_SPACE:
        switch (current.value.type) {
          case UnidocEventType.WHITESPACE:
            current = yield UnidocReduction.NEXT
            break
          case UnidocEventType.WORD:
            state = ReduceCorvusTextState.AFTER_TEXT_WORD
            stringBuilder.clear()
            break
          case UnidocEventType.START_TAG:
            state = ReduceCorvusTextState.AT_TAG
            tag = TAGS.get(current.value.symbols)
            break
          case UnidocEventType.END_TAG:
            state = ReduceCorvusTextState.END
            break
          default:
            throw new Error(
              `Unable to reduce event ${current.value.toString()} as text node in state ${ReduceCorvusTextState.toDebugString(state)} ` +
              `because no procedure was defined for handling events of type ${UnidocEventType.toDebugString(current.value.type)}.`
            )
        }
        break
      case ReduceCorvusTextState.AFTER_TEXT_WORD:
        switch (current.value.type) {
          case UnidocEventType.WHITESPACE:
            state = ReduceCorvusTextState.AFTER_TEXT_SPACE
            break
          case UnidocEventType.WORD:
            stringBuilder.concat(current.value.symbols)
            current = yield UnidocReduction.NEXT
            break
          case UnidocEventType.START_TAG:
            state = ReduceCorvusTextState.AT_TAG
            builder.push(stringBuilder.clone())
            tag = TAGS.get(current.value.symbols)
            break
          case UnidocEventType.END_TAG:
            builder.push(stringBuilder)
            state = ReduceCorvusTextState.END
            break
          default:
            throw new Error(
              `Unable to reduce event ${current.value.toString()} as text node in state ${ReduceCorvusTextState.toDebugString(state)} ` +
              `because no procedure was defined for handling events of type ${UnidocEventType.toDebugString(current.value.type)}.`
            )
        }
        break
      case ReduceCorvusTextState.AFTER_TEXT_SPACE:
        switch (current.value.type) {
          case UnidocEventType.WHITESPACE:
            current = yield UnidocReduction.NEXT
            break
          case UnidocEventType.WORD:
            state = ReduceCorvusTextState.AFTER_TEXT_WORD
            stringBuilder.pushSpace()
            break
          case UnidocEventType.START_TAG:
            state = ReduceCorvusTextState.AT_TAG
            tag = TAGS.get(current.value.symbols)
            if (tag != null) stringBuilder.pushSpace()
            builder.push(stringBuilder.clone())
            break
          case UnidocEventType.END_TAG:
            builder.push(stringBuilder)
            state = ReduceCorvusTextState.END
            break
          default:
            throw new Error(
              `Unable to reduce event ${current.value.toString()} as text node in state ${ReduceCorvusTextState.toDebugString(state)} ` +
              `because no procedure was defined for handling events of type ${UnidocEventType.toDebugString(current.value.type)}.`
            )
        }
        break
      case ReduceCorvusTextState.AFTER_TAG_WHITESPACE:
        switch (current.value.type) {
          case UnidocEventType.WHITESPACE:
            current = yield UnidocReduction.NEXT
            break
          case UnidocEventType.WORD:
            state = ReduceCorvusTextState.AFTER_TEXT_WORD
            stringBuilder.clear()
            stringBuilder.pushSpace()
            break
          case UnidocEventType.START_TAG:
            state = ReduceCorvusTextState.AT_TAG
            tag = TAGS.get(current.value.symbols)
            if (tag != null) builder.push(SPACE)
            break
          case UnidocEventType.END_TAG:
            state = ReduceCorvusTextState.END
            break
          default:
            throw new Error(
              `Unable to reduce event ${current.value.toString()} as text node in state ${ReduceCorvusTextState.toDebugString(state)} ` +
              `because no procedure was defined for handling events of type ${UnidocEventType.toDebugString(current.value.type)}.`
            )
        }
        break
      case ReduceCorvusTextState.AT_TAG:
        if (tag == null) {
          state = ReduceCorvusTextState.END
          break
        }

        switch (tag) {
          case ACRONYM:
            builder.push(yield* UnidocReducer.reduceTag(reduceCorvusAcronym))
            break
          case LINK:
            builder.push(yield* UnidocReducer.reduceTag(reduceCorvusLink))
            break
          case EMPHASIZE:
            builder.push(yield* UnidocReducer.reduceTag(reduceCorvusEmphasize))
            break
          default:
            throw new Error(`Unable to reduce tag code ${tag} because no procedure was defined for that.`)
        }

        current = yield UnidocReduction.CURRENT

        if (!current.isNext()) {
          state = ReduceCorvusTextState.END
          break
        }

        switch (current.value.type) {
          case UnidocEventType.WHITESPACE:
            state = ReduceCorvusTextState.AFTER_TAG_WHITESPACE
            break
          case UnidocEventType.WORD:
            state = ReduceCorvusTextState.AFTER_TEXT_WORD
            stringBuilder.clear()
            break
          case UnidocEventType.START_TAG:
            tag = TAGS.get(current.value.symbols) || null
            break
          case UnidocEventType.END_TAG:
            state = ReduceCorvusTextState.END
            break
          default:
            throw new Error(
              `Unable to reduce event ${current.value.toString()} as text node in state ${ReduceCorvusTextState.toDebugString(state)} ` +
              `because no procedure was defined for handling events of type ${UnidocEventType.toDebugString(current.value.type)}.`
            )
        }

        break
      default:
        throw new Error(
          `Unable to reduce event ${current.value.toString()} as text node in state ${ReduceCorvusTextState.toDebugString(state)} ` +
          'because no procedure was defined for that.'
        )
    }
  }

  switch (state) {
    case ReduceCorvusTextState.START:
    case ReduceCorvusTextState.AFTER_LEADING_SPACE:
      return null
    case ReduceCorvusTextState.AFTER_TEXT_WORD:
    case ReduceCorvusTextState.AFTER_TEXT_SPACE:
      return builder.push(stringBuilder)
    case ReduceCorvusTextState.AFTER_TAG_WHITESPACE:
      return builder
    case ReduceCorvusTextState.AT_TAG:
    case ReduceCorvusTextState.END:
      return builder.elements.length > 0 ? builder : null
    default:
      throw new Error(
        `Unable to reduce event ${current.value.toString()} as text node in state ${ReduceCorvusTextState.toDebugString(state)} ` +
        'because no procedure was defined for that.'
      )
  }
}