import { notEmpty } from '../notEmpty'

import { TextStructure } from './TextStructure'
import { TextStructureType } from './TextStructureType'
import { LinkBuilder } from './LinkBuilder'

/**
 *
 */
export class Link implements TextStructure {
  /**
   *
   */
  public readonly type: TextStructureType.LINK

  /**
   *
   */
  public readonly content: string

  /**
   *
   */
  public readonly url: string

  /**
   *
   */
  public constructor(builder: LinkBuilder) {
    this.type = TextStructureType.LINK
    this.content = builder.content
    this.url = notEmpty(builder.url)
  }

  /**
   * 
   */
  public hasContent(): boolean {
    return this.content.length > 0
  }

  /**
   *
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof Link) {
      return (
        other.content === this.content &&
        other.url === this.url
      )
    }

    return false
  }
}

/**
 *
 */
export namespace Link {
  /**
   * 
   */
  export function create(builder: LinkBuilder): Link {
    return builder.build()
  }
}
