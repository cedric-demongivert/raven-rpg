import { Sets } from "../data/Sets"
import { CorvusElementBuilder } from "./CorvusElementBuilder"

/**
 * 
 */
type Constructor<T extends CorvusElementBuilder = CorvusElementBuilder> = new (...args: any[]) => T

/**
 * 
 */
export function KeywordAssignableBuilder<BaseConstructor extends Constructor>(BaseClass: BaseConstructor) {
  /**
   * 
   */
  return class KeywordAssignableBuilderMixin extends BaseClass {
    /**
     * 
     */
    public readonly keywords: Set<string>

    /**
     * 
     */
    public constructor(...parameters: any[]) {
      super(...parameters)

      this.keywords = new Set()
    }

    /**
     * 
     */
    public deleteKeyword(keyword: string): this {
      this.keywords.delete(keyword)
      return this
    }

    /**
     * 
     */
    public deleteKeywords(parameter: Iterable<string> | Iterator<string>): this {
      const iterator: Iterator<string> = typeof parameter[Symbol.iterator] === 'function' ? parameter[Symbol.iterator]() : parameter
      let next: IteratorResult<string> = iterator.next()

      while (!next.done) {
        this.keywords.delete(next.value)
        next = iterator.next()
      }

      return this
    }

    /**
     * 
     */
    public addKeyword(keyword: string): this {
      this.keywords.add(keyword)
      return this
    }

    /**
     * 
     */
    public addKeywords(parameter: Iterable<string> | Iterator<string>): this {
      const iterator: Iterator<string> = typeof parameter[Symbol.iterator] === 'function' ? parameter[Symbol.iterator]() : parameter
      let next: IteratorResult<string> = iterator.next()

      while (!next.done) {
        this.keywords.add(next.value)
        next = iterator.next()
      }

      return this
    }

    /**
     * 
     */
    public toggleKeyword(keyword: string): this {
      if (this.keywords.has(keyword)) {
        this.keywords.delete(keyword)
      } else {
        this.keywords.add(keyword)
      }

      return this
    }

    /**
     * 
     */
    public toggleKeywords(parameter: Iterable<string> | Iterator<string>): this {
      const iterator: Iterator<string> = typeof parameter[Symbol.iterator] === 'function' ? parameter[Symbol.iterator]() : parameter
      let next: IteratorResult<string> = iterator.next()

      while (!next.done) {
        const keyword: string = next.value

        if (this.keywords.has(keyword)) {
          this.keywords.delete(keyword)
        } else {
          this.keywords.add(keyword)
        }

        next = iterator.next()
      }

      return this
    }

    /**
     * 
     */
    public equals(other: any): boolean {
      if (super.equals(other) && other instanceof KeywordAssignableBuilderMixin) {
        return Sets.deeplyEquals(other.keywords, this.keywords)
      }

      return false
    }
  }
}