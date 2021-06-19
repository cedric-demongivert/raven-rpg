export class Toggler {
  /**
   * 
   */
  public readonly name: string

  /**
   * 
   */
  public readonly truthy: object

  /**
   * 
   */
  public readonly falsy: object

  /**
   * 
   */
  public static create(name: string): Toggler {
    return new Toggler(name)
  }

  /**
   * 
   */
  private constructor(name: string) {
    this.name = name
    this.truthy = Object.seal({ [name]: true })
    this.falsy = Object.seal({ [name]: false })
  }

  /**
   * 
   */
  public toggle(value: boolean): object {
    return value ? this.truthy : this.falsy
  }
}