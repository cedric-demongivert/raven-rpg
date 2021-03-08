import type { Reference } from '../data/Reference'
import type { Commit } from '../commit/Commit'
import type { Repository } from '../repository/Repository'

import { Empty } from '../Empty'

/**
*
*/
export class Tag {
  /**
  *
  */
  public identifier: string

  /**
  *
  */
  public commit: Reference<Commit>

  /**
  *
  */
  public repository: Reference<Repository>

  /**
  *
  */
  public tag: string

  /**
  *
  */
  public timestamp: number

  /**
  *
  */
  public constructor(properties: Tag.Properties = Empty.OBJECT) {
    this.identifier = properties.identifier || Empty.STRING
    this.commit = properties.commit || 0
    this.repository = properties.commit || 0
    this.tag = properties.tag || Empty.STRING
    this.timestamp = properties.timestamp || 0
  }

  /**
  *
  */
  public setIdentifier(identifier: string): Tag {
    if (this.identifier === identifier) {
      return this
    } else {
      return new Tag({ ...this, identifier })
    }
  }

  /**
  *
  */
  public setCommit(commit: Reference<Commit>): Tag {
    if (this.commit === commit) {
      return this
    } else {
      return new Tag({ ...this, commit })
    }
  }

  /**
  *
  */
  public setRepository(repository: Reference<Repository>): Tag {
    if (this.repository === repository) {
      return this
    } else {
      return new Tag({ ...this, repository })
    }
  }

  /**
  *
  */
  public setTag(tag: string): Tag {
    if (this.tag === tag) {
      return this
    } else {
      return new Tag({ ...this, tag })
    }
  }

  /**
  *
  */
  public setTimestamp(timestamp: number): Tag {
    if (this.timestamp === timestamp) {
      return this
    } else {
      return new Tag({ ...this, timestamp })
    }
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof Tag) {
      return (
        other.identifier === this.identifier &&
        other.commit === this.commit &&
        other.repository === this.repository &&
        other.tag === this.tag &&
        other.timestamp === this.timestamp
      )
    }

    return false
  }
}

/**
*
*/
export namespace Tag {
  /**
  *
  */
  export type Properties = {
    /**
    *
    */
    identifier?: string,

    /**
    *
    */
    commit?: Reference<Commit>,

    /**
    *
    */
    repository?: Reference<Repository>,

    /**
    *
    */
    tag?: string,

    /**
    *
    */
    timestamp?: number
  }

  /**
  *
  */
  export function getCommit(tag: Tag): number {
    return tag.commit
  }

  /**
  *
  */
  export function getRepository(tag: Tag): number {
    return tag.repository
  }

  /**
  *
  */
  export function getIdentifier(tag: Tag): string {
    return tag.identifier
  }

  /**
  *
  */
  export const EMPTY: Tag = new Tag()

  /**
  *
  */
  export function empty(): Tag {
    return EMPTY
  }

  /**
  *
  */
  export function create(properties: Properties): Tag {
    return new Tag(properties)
  }
}
