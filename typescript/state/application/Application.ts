import { Empty } from '../../utils'

import { RepositoryCollection } from './RepositoryCollection'
import { CommitCollection } from './CommitCollection'
import { TagCollection } from './TagCollection'
import { VersionCollection } from './VersionCollection'
import { CorvusDocumentCollection } from './CorvusDocumentCollection'
import { ResourceCollection } from './ResourceCollection'

/**
 * 
 */
export class Application {
  /**
  *
  */
  public readonly repositories: RepositoryCollection

  /**
  *
  */
  public readonly commits: CommitCollection

  /**
  *
  */
  public readonly tags: TagCollection

  /**
  *
  */
  public readonly versions: VersionCollection

  /**
   * 
   */
  public readonly documents: CorvusDocumentCollection

  /**
   * 
   */
  public readonly resources: ResourceCollection

  /**
  *
  */
  public static EMPTY: Application = new Application()

  /**
  *
  */
  public static empty(): Application {
    return Application.EMPTY
  }

  /**
   * 
   */
  public static create(properties: Application.Properties = Empty.OBJECT) {
    return properties === Empty.OBJECT ? Application.EMPTY : new Application(properties)
  }

  /**
  *
  */
  private constructor(properties: Application.Properties = Empty.OBJECT) {
    this.repositories = properties.repositories || RepositoryCollection.EMPTY
    this.commits = properties.commits || CommitCollection.EMPTY
    this.tags = properties.tags || TagCollection.EMPTY
    this.versions = properties.versions || VersionCollection.EMPTY
    this.documents = properties.documents || CorvusDocumentCollection.EMPTY
    this.resources = properties.resources || ResourceCollection.EMPTY
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof Application) {
      return (
        other.repositories.equals(this.repositories) &&
        other.commits.equals(this.commits) &&
        other.tags.equals(this.tags) &&
        other.versions.equals(this.versions) &&
        other.documents.equals(this.documents) &&
        other.resources.equals(this.resources)
      )
    }
  }
}

/**
*
*/
export namespace Application {
  /**
  *
  */
  export type Properties = {
    /**
    *
    */
    repositories?: RepositoryCollection | undefined,

    /**
    *
    */
    commits?: CommitCollection | undefined,

    /**
    *
    */
    tags?: TagCollection | undefined,

    /**
    *
    */
    versions?: VersionCollection | undefined,

    /**
    *
    */
    documents?: CorvusDocumentCollection | undefined,

    /**
    *
    */
    resources?: ResourceCollection | undefined
  }
}
