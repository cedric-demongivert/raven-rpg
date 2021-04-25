import { Empty } from '../Empty'

import { Repository } from '../repository/Repository'
import { Reference } from '../data/Reference'
import { Entry } from '../data/Entry'

import { RepositoryCollection } from './RepositoryCollection'
import { CommitCollection } from './CommitCollection'
import { TagCollection } from './TagCollection'
import { RPGElementCollection } from './RPGElementCollection'
import { RPGElementTreeCollection } from './RPGElementTreeCollection'

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
  public readonly elements: RPGElementCollection

  /**
  *
  */
  public readonly documents: RPGElementTreeCollection

  /**
  *
  */
  public constructor(properties: Application.Properties = Empty.OBJECT) {
    this.repositories = properties.repositories || RepositoryCollection.EMPTY
    this.commits = properties.commits || CommitCollection.EMPTY
    this.tags = properties.tags || TagCollection.EMPTY
    this.elements = properties.elements || RPGElementCollection.EMPTY
    this.documents = properties.documents || RPGElementTreeCollection.EMPTY
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
    repositories?: RepositoryCollection,

    /**
    *
    */
    commits?: CommitCollection,

    /**
    *
    */
    tags?: TagCollection,

    /**
    *
    */
    elements?: RPGElementCollection,

    /**
    *
    */
    documents?: RPGElementTreeCollection
  }

  /**
  *
  */
  export const EMPTY: Application = new Application()
}
