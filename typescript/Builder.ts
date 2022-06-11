/**
 * 
 */
export interface Builder<Type> {
  /**
   * 
   */
  build(): Type
}

/**
 * 
 */
export namespace Builder {
  /**
   * 
   */
  export function build<Type>(builder: Builder<Type>): Type
  /**
   * 
   */
  export function build(builder: null): null
  /**
   * 
   */
  export function build(builder: undefined): undefined
  /**
   * 
   */
  export function build<Type>(builder: Builder<Type> | null | undefined): Type | null | undefined
  /**
   * 
   */
  export function build<Type>(builder: Builder<Type> | null | undefined): any {
    return builder == null ? builder : builder.build()
  }
}