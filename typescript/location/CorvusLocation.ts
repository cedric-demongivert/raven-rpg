import { equals } from "@cedric-demongivert/gl-tool-utils"
import { CorvusLocationFormat } from "./CorvusLocationFormat"

/**
 * 
 */
export class CorvusLocation {
  /**
   * 
   */
  private readonly _section: Array<number>

  /**
   * 
   */
  private structure: number

  /**
   * 
   */
  public get depth(): number {
    return this._section.length
  }

  /**
   * 
   */
  public constructor() {
    this._section = [0]
    this.structure = 0
  }

  /**
   * 
   */
  public back(): this {
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
  public setSection(section: Array<number> | number | null): this {
    if (section === null) {
      this._section.length = 1
      this._section[0] = 0
    } else if (typeof section === 'number') {
      this._section.length = 1
      this._section[0] = section
    } else if (section.length > 0) {
      this._section.length = 0
      this._section.push(...section)
    } else {
      this._section.length = 1
      this._section[0] = 0
    }

    return this
  }

  /**
   * 
   */
  public setStructure(structure: number): this {
    this.structure = structure
    return this
  }

  /**
   * 
   */
  public copy(toCopy: CorvusLocation | null): this {
    if (toCopy == null) return this.clear()

    this.setSection(toCopy._section)
    this.structure = toCopy.structure

    return this
  }

  /**
   * 
   */
  public clone(): CorvusLocation {
    return new CorvusLocation().copy(this)
  }

  /**
   * 
   */
  public clear(): this {
    this._section.length = 1
    this._section[0] = 0
    this.structure = 0
    return this
  }

  /**
   * 
   */
  public stringifySection(format: CorvusLocationFormat = CorvusLocationFormat.DEFAULT): string {
    return CorvusLocationFormat.format(this._section, format)
  }

  /**
   * 
   */
  public toString(format: CorvusLocationFormat = CorvusLocationFormat.DEFAULT): string {
    return `${this.stringifySection()}$${this.structure}`
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusLocation) {
      return (
        equals.arrays(this._section, other._section) &&
        this.structure === other.structure
      )
    }

    return false
  }
}