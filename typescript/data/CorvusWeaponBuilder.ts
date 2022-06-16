import { Builder } from "../Builder"
import { CorvusWeapon } from "./CorvusWeapon"

/**
 * 
 */
export class CorvusWeaponBuilder implements Builder<CorvusWeapon> {
  /**
   * 
   */
  public name: string | null

  /**
   * 
   */
  public damageTypes: string | null

  /**
   * 
   */
  public damage: string | null

  /**
   * 
   */
  public criticalRange: string | null

  /**
   * 
   */
  public criticalMultiplier: string | null

  /**
   * 
   */
  public charge: number | null

  /**
   * 
   */
  public constructor() {
    this.name = null
    this.damageTypes = null
    this.damage = null
    this.criticalRange = null
    this.criticalMultiplier = null
    this.charge = null
  }

  /**
   * 
   */
  public build(): CorvusWeapon {
    return new CorvusWeapon(this)
  }

  /**
   * 
   */
  public clone(): CorvusWeaponBuilder {
    return new CorvusWeaponBuilder().copy(this)
  }

  /**
   * 
   */
  public clear(): this {
    this.name = null
    this.damageTypes = null
    this.damage = null
    this.criticalRange = null
    this.criticalMultiplier = null
    this.charge = null

    return this
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<CorvusWeaponBuilder> | null): this {
    if (toCopy == null) {
      return this.clear()
    }

    this.name = toCopy.name
    this.damageTypes = toCopy.damageTypes
    this.damage = toCopy.damage
    this.criticalRange = toCopy.criticalRange
    this.criticalMultiplier = toCopy.criticalMultiplier
    this.charge = toCopy.charge

    return this
  }

  /**
   * 
   */
  public setName(name: string): this {
    this.name = name
    return this
  }

  /**
   * 
   */
  public setDamageTypes(damageTypes: string): this {
    this.damageTypes = damageTypes
    return this
  }

  /**
   * 
   */
  public setDamage(damage: string): this {
    this.damage = damage
    return this
  }

  /**
   * 
   */
  public setCriticalRange(criticalRange: string): this {
    this.criticalRange = criticalRange
    return this
  }

  /**
   * 
   */
  public setCriticalMultiplier(criticalMultiplier: string): this {
    this.criticalMultiplier = criticalMultiplier
    return this
  }

  /**
   * 
   */
  public setCharge(charge: number): this {
    this.charge = charge
    return this
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusWeaponBuilder) {
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
export namespace CorvusWeaponBuilder {
  /**
   * 
   */
  export function create(): CorvusWeaponBuilder {
    return new CorvusWeaponBuilder()
  }
}