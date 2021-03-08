import { Empty } from '../Empty'

import { MimeType } from './MimeType'

export class Resource {
  /**
  *
  */
  public readonly type: MimeType

  /**
  *
  */
  public readonly url: string

  /**
  *
  */
  public readonly data: Buffer

  /**
  *
  */
  public constructor(properties: Resource.Properties = Empty.OBJECT) {
    this.type = properties.type || MimeType.DEFAULT
    this.url = properties.url || 'memory://none'
    this.data = properties.data || Empty.BUFFER
  }

  /**
  *
  */
  public setType(type: MimeType): Resource {
    if (this.type === type) {
      return this
    } else {
      return new Resource({ ...this, type })
    }
  }

  /**
  *
  */
  public setURL(url: string): Resource {
    if (this.url === url) {
      return this
    } else {
      return new Resource({ ...this, url })
    }
  }

  /**
  *
  */
  public setData(data: Buffer): Resource {
    if (this.data === data) {
      return this
    } else {
      return new Resource({ ...this, data })
    }
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
        other.url === this.url &&
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
    type?: MimeType,

    /**
    *
    */
    url?: string,

    /**
    *
    */
    data?: Buffer
  }

  /**
  *
  */
  export const EMPTY: Resource = new Resource()

  /**
  *
  */
  export function empty(): Resource {
    return EMPTY
  }

  /**
  *
  */
  export function create(properties: Properties = Empty.OBJECT): Resource {
    return new Resource(properties)
  }
}
