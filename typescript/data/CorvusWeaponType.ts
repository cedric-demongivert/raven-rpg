import { CorvusWeapon } from "./CorvusWeapon"
import { CorvusDataType } from "./CorvusDataType"
import { CorvusEntryTypeBuilder } from "./CorvusEntryTypeBuilder"
import { CorvusWeaponBuilder } from "./CorvusWeaponBuilder"

/**
 * 
 */
export type CorvusWeaponType = CorvusDataType<CorvusWeapon>

/**
 * 
 */
export namespace CorvusWeaponType {
  /**
   * 
   */
  const builder: CorvusEntryTypeBuilder<CorvusWeapon, CorvusWeaponBuilder> = new CorvusEntryTypeBuilder()

  builder.setFactory(CorvusWeaponBuilder.create)
  builder.handleString('name', CorvusWeaponBuilder.prototype.setName)
  builder.handleString('damage-types', CorvusWeaponBuilder.prototype.setDamageTypes)
  builder.handleString('damage', CorvusWeaponBuilder.prototype.setDamage)
  builder.handleString('critical-range', CorvusWeaponBuilder.prototype.setCriticalRange)
  builder.handleString('critical-multiplier', CorvusWeaponBuilder.prototype.setCriticalMultiplier)
  builder.handleInteger('charge', CorvusWeaponBuilder.prototype.setCharge)

  /**
   * 
   */
  export const INSTANCE: CorvusWeaponType = builder.build()

  /**
   * 
   */
  export function create(): CorvusWeaponType {
    return INSTANCE
  }
}
