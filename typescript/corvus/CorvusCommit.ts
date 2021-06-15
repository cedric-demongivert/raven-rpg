import { Reference } from '../data/Reference'
import { Commit } from '../state/git/Commit'
import { CorvusDocument } from './CorvusDocument'

/**
 * 
 */
export class CorvusCommit {
  /**
   * 
   */
  public readonly commit: Reference<Commit>

  /**
   * 
   */
  public readonly document: CorvusDocument

  /**
   * 
   */
  public static create(properties: CorvusCommit.Properties): CorvusCommit {
    return new CorvusCommit(properties)
  }

  /**
   * 
   */
  private constructor(properties: CorvusCommit.Properties) {
    this.commit = properties.commit
    this.document = properties.document
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusCommit) {
      return (
        Reference.equals(other.commit, this.commit) &&
        other.document.equals(this.document)
      )
    }
  }
}

/**
 * 
 */
export namespace CorvusCommit {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    readonly commit: Reference<Commit>,

    /**
     * 
     */
    readonly document: CorvusDocument
  }
}