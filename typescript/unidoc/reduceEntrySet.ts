import { UnidocReducer, UnidocReduction, UTF32String, UTF32StringTree } from "@cedric-demongivert/unidoc"
import { CorvusDataType, CorvusWeaponType } from "../data"

import { CorvusEntrySetBuilder } from "../model"
import { reduceTagMetadata } from "./reduceTagMetadata"

/**
 * 
 */
const AVAILABLE_TYPES: UTF32StringTree<CorvusDataType<unknown>> = new UTF32StringTree()

AVAILABLE_TYPES.setString('weapon', CorvusWeaponType.INSTANCE)

/**
 *
 */
const TITLE_TAG: UTF32String = UTF32String.fromString('title')

/**
 *
 */
const ENTRY_TAG: UTF32String = UTF32String.fromString('entry')

/**
 * 
 */
const TEMPORARY_STRING: UTF32String = UTF32String.allocate(32)

/**
 * 
 */
function getAvailableTypes(): Array<string> {
  const result: Array<string> = []

  for (const key of AVAILABLE_TYPES) {
    result.push(key.toString())
  }

  return result
}

/**
 *
 */
export function* reduceEntrySet(): UnidocReduction<CorvusEntrySetBuilder<unknown>> {
  yield* UnidocReducer.assertStart()
  yield UnidocReduction.NEXT

  const builder: CorvusEntrySetBuilder<unknown> = CorvusEntrySetBuilder.create()

  yield* reduceTagMetadata(builder)
  yield* UnidocReducer.skipWhitespaces()

  builder.setTitle(yield* UnidocReducer.optionalTag(TITLE_TAG, UnidocReducer.reduceText()))
  yield* UnidocReducer.skipWhitespaces()

  let type: CorvusDataType<unknown> | null = null
  let current: UnidocReduction.Input = yield UnidocReduction.CURRENT

  while (current.isNext() && current.value.isStartOfAnyTag()) {
    if (!current.value.symbols.equals(ENTRY_TAG)) {
      yield* UnidocReducer.fail(`Only entry tags are allowed from here.`)
    }

    if (current.value.classes.size !== 1) {
      yield* UnidocReducer.fail(`Entry tags must declare only one class that describe their type.`)
    }

    const entryType: CorvusDataType<unknown> | undefined = AVAILABLE_TYPES.get(current.value.classes.values(TEMPORARY_STRING).next().value)
    TEMPORARY_STRING.clear()

    if (entryType == null) {
      yield* UnidocReducer.fail(
        `Unrecognized entry type "${TEMPORARY_STRING.toString()}", available types are : ${getAvailableTypes().join(', ')}.`
      )
    }

    if (type != null && !entryType.equals(type)) {
      yield* UnidocReducer.fail(`Trying to create a mixed entry set.`)
    }

    if (type == null) {
      type = entryType
      builder.setEntryType(entryType)
    }

    builder.entries.push(yield* UnidocReducer.reduceTag.content(entryType.reduce()))
    yield* UnidocReducer.skipWhitespaces()

    current = yield UnidocReduction.CURRENT
  }

  yield* UnidocReducer.assertEndOfAnyTag()
  yield UnidocReduction.NEXT

  yield* UnidocReducer.assertSuccess()

  return builder
}