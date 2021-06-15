import { Reference } from '../../data/Reference'
import { Repository } from '../git/Repository'
import { Tag } from '../git/Tag'

import { Semver } from './Semver'

/**
 * 
 */
export class RepositorySemver {
  /**
   * 
   */
  public readonly version: Semver

  /**
   * 
   */
  public readonly tag: Reference<Tag>

  /**
   * 
   */
  public readonly repository: Reference<Repository>

  /**
   * 
   */
  public static create(properties: RepositorySemver.Properties): RepositorySemver {
    return new RepositorySemver(properties)
  }

  /**
   * 
   */
  private constructor(properties: RepositorySemver.Properties) {
    this.version = properties.version
    this.tag = properties.tag
    this.repository = properties.repository
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof RepositorySemver) {
      return (
        other.version.equals(this.version) &&
        Reference.equals(other.repository, this.repository) &&
        Reference.equals(other.tag, this.tag)
      )
    }

    return false
  }
}

/**
 * 
 */
export namespace RepositorySemver {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    readonly version: Semver,

    /**
     * 
     */
    readonly repository: Reference<Repository>,

    /**
     * 
     */
    readonly tag: Reference<Tag>
  }

  /**
   * 
   */
  export function compare(left: RepositorySemver, right: RepositorySemver): number {
    return Semver.compare(left.version, right.version)
  }
}