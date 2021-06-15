import { MimeType } from './MimeType'
import { ResourceAddress } from './ResourceAddress'

/**
 * 
 */
export class Resource {
  /**
  *
  */
  public readonly address: ResourceAddress

  /**
  *
  */
  public readonly type: MimeType

  /**
  *
  */
  public readonly data: Buffer | undefined

  /**
   * 
   */
  public static create(properties: Resource.Properties): Resource {
    return new Resource(properties)
  }

  /**
  *
  */
  private constructor(properties: Resource.Properties) {
    this.type = properties.type
    this.address = properties.address
    this.data = properties.data
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof Resource) {
      return (
        other.type === this.type &&
        other.address === this.address &&
        other.data === this.data
      )
    }

    return false
  }
}

export namespace Resource {
  /**
  *
  */
  export type Properties = {
    /**
     * 
     */
    address: ResourceAddress,

    /**
    *
    */
    type: MimeType,

    /**
    *
    */
    data?: Buffer
  }
}
