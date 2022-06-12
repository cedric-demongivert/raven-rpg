import { UTF32StringTree, UnidocReduction, UnidocReducer } from "@cedric-demongivert/unidoc"

/**
 * 
 */
export class CommandMatcher {
  /**
   * 
   */
  private readonly _dictionnary: UTF32StringTree<string>

  /**
   * 
   */
  public get tags(): string[] {
    return [...this._dictionnary.values()]
  }

  /**
   * 
   */
  public constructor() {
    this._dictionnary = new UTF32StringTree()
  }

  /**
   * 
   */
  public match(tag: string): string {
    this._dictionnary.setString(tag, tag)
    return tag
  }

  /**
   * 
   */
  public * next(): UnidocReduction<CommandMatcher.Match> {
    yield* UnidocReducer.skipWhitespaces()

    let current: UnidocReduction.Input = yield UnidocReduction.CURRENT

    if (!current.isNext()) return CommandMatcher.END

    if (current.value.isWord()) {
      return CommandMatcher.CONTENT
    }

    if (current.value.isStartOfAnyTag()) {
      return this._dictionnary.get(current.value.symbols) || null
    }

    return CommandMatcher.END
  }
}

/**
 * 
 */
export namespace CommandMatcher {
  /**
   * 
   */
  export type Match = string | CONTENT | END | null

  /**
   * 
   */
  export type CONTENT = 0

  /**
   * 
   */
  export const CONTENT: CONTENT = 0

  /**
   * 
   */
  export type END = 1

  /**
   * 
   */
  export const END: END = 1
}