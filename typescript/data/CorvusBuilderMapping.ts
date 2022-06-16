import { UnidocReduction } from "@cedric-demongivert/unidoc"
import { CorvusDataType } from "./CorvusDataType"

/**
 * 
 */
export class CorvusBuilderMapping<Builder, FieldType> {
  /**
   * 
   */
  public readonly mapping: CorvusBuilderMapping.Mapping<Builder, FieldType>

  /**
   * 
   */
  public readonly type: CorvusDataType<FieldType>

  /**
   * 
   */
  public constructor(mapping: CorvusBuilderMapping.Mapping<Builder, FieldType>, type: CorvusDataType<FieldType>) {
    this.mapping = mapping
    this.type = type
  }

  /**
   * 
   */
  public * call(builder: Builder): UnidocReduction<void> {
    this.mapping.call(builder, yield* this.type.reduce())
    return
  }
}

/**
 * 
 */
export namespace CorvusBuilderMapping {
  /**
   * 
   */
  export type Mapping<Builder, FieldType> = (this: Builder, value: FieldType) => void
}