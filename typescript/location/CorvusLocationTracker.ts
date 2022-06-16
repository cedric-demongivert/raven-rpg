import { CorvusLocation } from "./CorvusLocation"

/**
 * 
 */
export class CorvusLocationTracker {
  /**
   * 
   */
  private _next: number

  /**
   * 
   */
  private readonly _section: Array<number>

  /**
   * 
   */
  private readonly _block: Array<number>

  /**
   * 
   */
  public constructor() {
    this._next = 0
    this._section = []
    this._block = []
  }

  /**
   * 
   */
  public previousSection(): this {
    const section: Array<number> = this._section

    while (section.length > 0 && section[section.length - 1] < 1) {
      section.pop()
    }

    if (section.length === 0) {
      section.push(0)
      return this
    }

    section[section.length - 1] -= 1

    return this
  }

  /**
   * 
   */
  public nextSection(): this {
    this._section[this._section.length - 1] += 1

    return this
  }

  /**
   * 
   */
  public enterSection(): this {
    this._section.push(this._next)
    this._next = 0
    this._block.push(0)

    return this
  }

  /**
   * 
   */
  public exitSection(): this {
    const section: Array<number> = this._section
    const structure: Array<number> = this._block

    if (section.length > 0) {
      this._next = section.pop() + 1
    } else {
      this._next = 0
    }

    if (structure.length > 0) {
      structure.pop()
    } else {
      // @todo
    }

    return this
  }

  /**
   * 
   */
  public enterBlock(): this {
    const structure: Array<number> = this._block
    structure[structure.length - 1] += 1
    return this
  }

  /**
   * 
   */
  public exitBlock(): this {
    return this
  }

  /**
   * 
   */
  public get(output: CorvusLocation = new CorvusLocation()): CorvusLocation {
    output.setSection(this._section)
    output.setStructure(this._block[this._block.length - 1])
    return output
  }

  /**
   * 
   */
  public clear(): this {
    this._block.length = 0
    this._section.length = 0
    this._next = 0
    return this
  }
}