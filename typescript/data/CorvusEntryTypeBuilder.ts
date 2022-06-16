import { Empty, Factory } from "@cedric-demongivert/gl-tool-utils";
import { UTF32StringTree } from "@cedric-demongivert/unidoc";
import { Builder } from "../Builder";
import { notNull } from "../notNull";
import { CorvusBuilderMapping } from "./CorvusBuilderMapping";
import { CorvusDataType } from "./CorvusDataType";
import { CorvusEntryType } from "./CorvusEntryType";

/**
 * 
 */
export class CorvusEntryTypeBuilder<Entry, EntryBuilder extends Builder<Entry>> implements Builder<CorvusEntryType<Entry, EntryBuilder>> {
  /**
   * 
   */
  public factory: Factory<EntryBuilder> | null

  /**
   * 
   */
  public readonly fields: UTF32StringTree<CorvusBuilderMapping<EntryBuilder, unknown>>

  /**
   * 
   */
  public constructor() {
    this.factory = null
    this.fields = new UTF32StringTree()
  }

  /**
   * 
   */
  public build(): CorvusEntryType<Entry, EntryBuilder> {
    return new CorvusEntryType(this.fields, notNull(this.factory))
  }

  /**
   * 
   */
  public setFactory(factory: Factory<EntryBuilder> | null): this {
    this.factory = factory
    return this
  }

  /**
   * 
   */
  public handle<Type>(name: string, handler: CorvusBuilderMapping.Mapping<EntryBuilder, Type>, type: CorvusDataType<Type>): this {
    this.fields.setString(name, new CorvusBuilderMapping(handler, type))

    return this
  }

  /**
   * 
   */
  public handleOptionalInteger(name: string, handler: CorvusBuilderMapping.Mapping<EntryBuilder, number>, optionalValue: number = 0): this {
    return this.handle(name, handler, CorvusDataType.optional(CorvusDataType.integer(), optionalValue))
  }

  /**
   * 
   */
  public handleInteger(name: string, handler: CorvusBuilderMapping.Mapping<EntryBuilder, number>): this {
    return this.handle(name, handler, CorvusDataType.required(CorvusDataType.integer()))
  }

  /**
   * 
   */
  public handleOptionalFloat(name: string, handler: CorvusBuilderMapping.Mapping<EntryBuilder, number>, optionalValue: number = 0): this {
    return this.handle(name, handler, CorvusDataType.optional(CorvusDataType.float(), optionalValue))
  }

  /**
   * 
   */
  public handleFloat(name: string, handler: CorvusBuilderMapping.Mapping<EntryBuilder, number>): this {
    return this.handle(name, handler, CorvusDataType.required(CorvusDataType.float()))
  }

  /**
   * 
   */
  public handleOptionalString(name: string, handler: CorvusBuilderMapping.Mapping<EntryBuilder, string>, optionalValue: string = Empty.STRING): this {
    return this.handle(name, handler, CorvusDataType.optional(CorvusDataType.string(), optionalValue))
  }

  /**
   * 
   */
  public handleString(name: string, handler: CorvusBuilderMapping.Mapping<EntryBuilder, string>): this {
    return this.handle(name, handler, CorvusDataType.required(CorvusDataType.string()))
  }

  /**
   * 
   */
  public handleOptionalToken(name: string, handler: CorvusBuilderMapping.Mapping<EntryBuilder, string>, optionalValue: string = Empty.STRING): this {
    return this.handle(name, handler, CorvusDataType.optional(CorvusDataType.token(), optionalValue))
  }

  /**
   * 
   */
  public handleToken(name: string, handler: CorvusBuilderMapping.Mapping<EntryBuilder, string>): this {
    return this.handle(name, handler, CorvusDataType.required(CorvusDataType.token()))
  }

  /**
   * 
   */
  public setFields(fields: UTF32StringTree<CorvusBuilderMapping<EntryBuilder, unknown>> | null): this {
    this.fields.clear()

    if (fields != null) {
      this.fields.copy(fields)
    }

    return this
  }

  /**
   * 
   */
  public clear(): this {
    this.factory = null
    this.fields.clear()
    return this
  }

  /**
   * 
   */
  public copy(other: CorvusEntryTypeBuilder<Entry, EntryBuilder> | null): this {
    if (other == null) {
      return this.clear()
    }

    this.factory = other.factory
    this.fields.copy(other.fields)
    return this
  }

  /**
   * 
   */
  public clone(): CorvusEntryTypeBuilder<Entry, EntryBuilder> {
    return new CorvusEntryTypeBuilder<Entry, EntryBuilder>().copy(this)
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusEntryTypeBuilder) {
      return (
        other.factory === this.factory &&
        other.fields.equals(this.fields)
      )
    }

    return false
  }
}

/**
 * 
 */
export namespace CorvusEntryTypeBuilder {
  /**
   * 
   */
  export function create<Entry, EntryBuilder extends Builder<Entry>>(): CorvusEntryTypeBuilder<Entry, EntryBuilder> {
    return new CorvusEntryTypeBuilder()
  }
}