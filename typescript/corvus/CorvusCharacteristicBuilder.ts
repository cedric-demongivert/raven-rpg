import { CorvusCharacteristic } from './CorvusCharacteristic'
import { StaticCorvusNodeBuilder } from './StaticCorvusNodeBuilder'
import { ClassAssignableBuilder } from './ClassAssignableBuilder'
import { KeywordAssignableBuilder } from './KeywordAssignableBuilder'

/**
*
*/
export class CorvusCharacteristicBuilder extends ClassAssignableBuilder(KeywordAssignableBuilder(StaticCorvusNodeBuilder)) {
  /**
  *
  */
  public title: string

  /**
  *
  */
  public static create(): CorvusCharacteristicBuilder {
    return new CorvusCharacteristicBuilder()
  }

  /**
  *
  */
  private constructor() {
    super()
    this.title = 'Untitled characteristic'
  }

  /**
   * 
   */
  public subdivision(): string {
    return this.title
  }

  /**
   * 
   */
  public build(): CorvusCharacteristic {
    return CorvusCharacteristic.create(this)
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (super.equals(other) && other instanceof CorvusCharacteristicBuilder) {
      return this.title === other.title
    }

    return false
  }
}