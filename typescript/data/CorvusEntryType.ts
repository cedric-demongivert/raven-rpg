import { Empty, Factory } from "@cedric-demongivert/gl-tool-utils"
import { UnidocReducer, UnidocReduction, UTF32String, UTF32StringTree } from "@cedric-demongivert/unidoc"

import type { CorvusDataType } from "./CorvusDataType"
import { CorvusBuilderMapping } from './CorvusBuilderMapping'
import { Builder } from '../Builder'
/**
 * 
 */
const EMPTY_ENTRY_STRING: string = '{}'

/**
 * 
 */
export class CorvusEntryType<Entry, EntryBuilder extends Builder<Entry>> implements CorvusDataType<Entry> {
  /**
   * 
   */
  private readonly _fields: UTF32StringTree<CorvusBuilderMapping<EntryBuilder, unknown>>

  /**
   * 
   */
  private readonly _builderFactory: Factory<EntryBuilder>

  /**
   * 
   */
  public get size(): number {
    return this._fields.size
  }

  /**
   * 
   */
  public constructor(fields: UTF32StringTree<CorvusBuilderMapping<EntryBuilder, unknown>>, builderFactory: Factory<EntryBuilder>) {
    this._fields = fields.clone()
    this._builderFactory = builderFactory
  }

  /**
   * 
   */
  public * reduce(): UnidocReduction<Entry> {
    const fields = this._fields
    const builder: EntryBuilder = this._builderFactory()

    yield* UnidocReducer.assertStart()
    yield UnidocReduction.NEXT

    yield* UnidocReducer.skipWhitespaces()

    let current: UnidocReduction.Input = yield UnidocReduction.CURRENT

    while (current.isNext() && current.value.isStartOfAnyTag()) {
      const mapping = fields.get(current.value.symbols)

      if (mapping == null) {
        yield* UnidocReducer.fail(
          `Expected any tag of list [${this.getValidTagList().join(', ')}], but encountered ` +
          `illegal tag "${current.value.symbols.toString()}".`
        )
      }

      yield* UnidocReducer.reduceTag.content(mapping.call(builder))
      yield* UnidocReducer.skipWhitespaces()
    }

    yield* UnidocReducer.assertSuccess()

    return builder.build()
  }


  /**
   * 
   */
  public getValidTagList(): Array<string> {
    const result: Array<string> = []

    for (const key of this._fields.keys()) {
      result.push(key.toString())
    }

    result.sort()
    return result
  }

  /**
   * 
   */
  public has(key: string | UTF32String): boolean {
    if (typeof key === 'string') {
      return this._fields.hasString(key)
    }

    return this._fields.has(key)
  }

  /**
   * 
   */
  public get(key: string | UTF32String): CorvusBuilderMapping<Builder<Entry>, unknown> | undefined {
    if (typeof key === 'string') {
      return this._fields.getString(key)
    }

    return this._fields.get(key)
  }

  /**
   * 
   */
  public fields(output: UTF32String = UTF32String.allocate(32)): IterableIterator<UTF32String> {
    return this._fields.keys()
  }

  /**
   * 
   */
  public isInline(): boolean {
    return this.size < 2
  }

  /**
   * 
   */
  public toString(padding: string = Empty.STRING): string {
    const fields: UTF32StringTree<CorvusBuilderMapping<Builder<Entry>, unknown>> = this._fields
    const size: number = fields.size

    if (size === 0) {
      return EMPTY_ENTRY_STRING
    }

    if (size === 1) {
      const field: string = fields.keys().next().value.toString()
      const type: CorvusDataType<unknown> = fields.values().next().value

      if (type.isInline()) {
        return `${padding}{ ${field}: ${type.toString()} }`
      } else {
        return `${padding}{\r\n${padding}${field}: ${type.toString()}\r\n${padding}}`
      }
    }

    let result: string = padding
    result += '{'

    const iterator: IterableIterator<UTF32String> = fields.keys()
    let iteratorResult: IteratorResult<UTF32String> = iterator.next()

    result += '\r\n'
    result += padding
    result += iteratorResult.value.toString()
    result += ': '
    result += fields.get(iteratorResult.value).type.toString(padding + '  ')

    for (const field of this._fields.keys()) {
      result += ',\r\n'
      result += padding
      result += field.toString()
      result += ': '
      result += fields.get(field).type.toString(padding + '  ')
    }

    result += '\r\n'
    result += padding

    return result + '}'
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusEntryType) {
      return other._fields.equals(this._fields)
    }

    return false
  }
}

/**
 * 
 */
export namespace CorvusEntryType {
  /**
   * 
   */
  export function create<Entry, EntryBuilder extends Builder<Entry>>(
    fields: UTF32StringTree<CorvusBuilderMapping<EntryBuilder, unknown>>,
    builderFactory: Factory<EntryBuilder>
  ): CorvusEntryType<Entry, EntryBuilder> {
    return new CorvusEntryType(fields, builderFactory)
  }
}