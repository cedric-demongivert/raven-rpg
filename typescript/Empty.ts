export namespace Empty {
  /**
  *
  */
  export const OBJECT: object = Object.freeze({})

  /**
  *
  */
  export const STRING: string = Object.freeze('')

  /**
  *
  */
  export const ARRAY: readonly any[] = Object.freeze([])

  /**
  *
  */
  export function callback(): void {

  }

  /**
  *
  */
  export function object(): object {
    return OBJECT
  }

  /**
  *
  */
  export function string(): string {
    return STRING
  }

  /**
  *
  */
  export function array(): readonly any[] {
    return ARRAY
  }
}
