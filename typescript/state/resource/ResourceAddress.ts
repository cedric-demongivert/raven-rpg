import { Reference } from "../../data/Reference"
import { Commit } from "../git/Commit"

/**
 * 
 */
export class ResourceAddress {
  /**
   * 
   */
  public readonly commit: Reference<Commit>

  /**
   * 
   */
  public readonly path: string

  /**
   * 
   */
  public static create(commit: Reference<Commit>, path: string) {
    return new ResourceAddress(commit, path)
  }

  /**
   * 
   */
  private constructor(commit: Reference<Commit>, path: string) {
    this.commit = commit
    this.path = path
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof ResourceAddress) {
      return (
        Reference.equals(other.commit, this.commit) &&
        other.path === this.path
      )
    }

    return false
  }
}

/**
 * 
 */
export namespace ResourceAddress {
  /**
   * 
   */
  export function compare(left: ResourceAddress, right: ResourceAddress): number {
    const commitComparison: number = Reference.compare(left.commit, right.commit)

    if (commitComparison === 0) {
      return left.path.localeCompare(right.path)
    } else {
      return commitComparison
    }
  }
}