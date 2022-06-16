import { Empty } from "@cedric-demongivert/gl-tool-utils"

/**
 * 
 */
export class CorvusWeapon {
  /**
   * 
   */
  public readonly name: string

  /**
   * 
   */
  public readonly damageTypes: string

  /**
   * 
   */
  public readonly damage: string

  /**
   * 
   */
  public readonly criticalRange: string

  /**
   * 
   */
  public readonly criticalMultiplier: string

  /**
   * 
   */
  public readonly charge: number

  /**
   * 
   */
  public constructor(properties: Partial<CorvusWeapon.Properties>) {
    this.name = properties.name == null ? Empty.STRING : properties.name
    this.damageTypes = properties.damageTypes == null ? Empty.STRING : properties.damageTypes
    this.damage = properties.damageTypes == null ? Empty.STRING : properties.damage
    this.criticalRange = properties.criticalRange == null ? Empty.STRING : properties.criticalRange
    this.criticalMultiplier = properties.criticalMultiplier == null ? Empty.STRING : properties.criticalMultiplier
    this.charge = properties.charge == null ? 0 : properties.charge
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusWeapon) {
      return (
        other.name === this.name &&
        other.damageTypes === this.damageTypes &&
        other.damage === this.damage &&
        other.criticalRange === this.criticalRange &&
        other.criticalMultiplier === this.criticalMultiplier &&
        other.charge === this.charge
      )
    }

    return false
  }
}

/**
 * 
 */
export namespace CorvusWeapon {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    readonly name: string,

    /**
     * 
     */
    readonly damage: string,

    /**
     * 
     */
    readonly damageTypes: string,

    /**
     * 
     */
    readonly criticalRange: string,

    /**
     * 
     */
    readonly criticalMultiplier: string,

    /**
     * 
     */
    readonly charge: number
  }
}