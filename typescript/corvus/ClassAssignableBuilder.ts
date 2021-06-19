import { Sets } from "../data/Sets"
import { CorvusElementBuilder } from "./CorvusElementBuilder"

/**
 * 
 */
type Constructor<T extends CorvusElementBuilder = CorvusElementBuilder> = new (...args: any[]) => T

/**
 * 
 */
export function ClassAssignableBuilder<BaseConstructor extends Constructor>(BaseClass: BaseConstructor) {
  /**
   * 
   */
  return class ClassAssignableBuilderMixin extends BaseClass {
    /**
     * 
     */
    public readonly classes: Set<string>

    /**
     * 
     */
    public constructor(...parameters: any[]) {
      super(...parameters)

      this.classes = new Set()
    }

    /**
     * 
     */
    public deleteClass(clazz: string): this {
      this.classes.delete(clazz)
      return this
    }

    /**
     * 
     */
    public deleteClasses(parameter: Iterable<string> | Iterator<string>): this {
      const iterator: Iterator<string> = typeof parameter[Symbol.iterator] === 'function' ? parameter[Symbol.iterator]() : parameter
      let next: IteratorResult<string> = iterator.next()

      while (!next.done) {
        this.classes.delete(next.value)
        next = iterator.next()
      }

      return this
    }

    /**
     * 
     */
    public addClass(clazz: string): this {
      this.classes.add(clazz)
      return this
    }

    /**
     * 
     */
    public addClasses(parameter: Iterable<string> | Iterator<string>): this {
      const iterator: Iterator<string> = typeof parameter[Symbol.iterator] === 'function' ? parameter[Symbol.iterator]() : parameter
      let next: IteratorResult<string> = iterator.next()

      while (!next.done) {
        this.classes.add(next.value)
        next = iterator.next()
      }

      return this
    }

    /**
     * 
     */
    public toggleClass(clazz: string): this {
      if (this.classes.has(clazz)) {
        this.classes.delete(clazz)
      } else {
        this.classes.add(clazz)
      }

      return this
    }

    /**
     * 
     */
    public toggleClasses(parameter: Iterable<string> | Iterator<string>): this {
      const iterator: Iterator<string> = typeof parameter[Symbol.iterator] === 'function' ? parameter[Symbol.iterator]() : parameter
      let next: IteratorResult<string> = iterator.next()

      while (!next.done) {
        const clazz: string = next.value

        if (this.classes.has(clazz)) {
          this.classes.delete(clazz)
        } else {
          this.classes.add(clazz)
        }

        next = iterator.next()
      }

      return this
    }

    /**
     * 
     */
    public equals(other: any): boolean {
      if (super.equals(other) && other instanceof ClassAssignableBuilderMixin) {
        return Sets.deeplyEquals(other.classes, this.classes)
      }

      return false
    }
  }
}