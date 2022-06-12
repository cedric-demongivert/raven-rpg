import { notEmpty } from '../../notEmpty'

import { TextStructure } from './TextStructure'
import { TextStructureType } from './TextStructureType'
import { Empty } from '@cedric-demongivert/gl-tool-utils'

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
  public constructor(url: string, content?: string | null | undefined) {
    this.type = TextStructureType.LINK
    this.content = content == null ? Empty.STRING : content
    this.url = notEmpty(url)
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
  export function create(url: string, content?: string | null | undefined): Link {
    return new Link(url, content)
  }
}
