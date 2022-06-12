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
  export function is(instance: unknown): instance is Builder<unknown> {
    return (
      instance != null &&
      typeof instance === 'object' &&
      (instance as any).build != null &&
      typeof (instance as any).build === 'function'
    )
  }

  /**
   * 
   */
  export function build<Type>(builder: Builder<Type>): Type
  /**
   * 
   */
  export function build(nullptr: null): null
  /**
   * 
   */
  export function build(nothing: undefined): undefined
  /**
   * 
   */
  export function build<Type>(candidate: Builder<Type> | null | undefined): Type | null | undefined
  /**
   * 
   */
  export function build<Type>(candidate: Builder<Type> | null | undefined): any {
    return candidate == null ? candidate : candidate.build()
  }

  /**
   * 
   */
  export function flatten<Type>(builder: Builder<Type> | Type): Type
  /**
   * 
   */
  export function flatten(nullptr: null): null
  /**
   * 
   */
  export function flatten(nothing: undefined): undefined
  /**
   * 
   */
  export function flatten<Type>(candidate: Builder<Type> | Type | null | undefined): Type | null | undefined
  /**
   * 
   */
  export function flatten<Type>(candidate: Builder<Type> | Type | null | undefined): any {
    return Builder.is(candidate) ? candidate.build() : candidate
  }
}