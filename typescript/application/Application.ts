import { Record } from 'immutable'

import { Entry } from '../data/Entry'
import { Table } from '../data/table/Table'
import { OneToOneIndex } from '../data/index/OneToOneIndex'
import { OneToManyIndex } from '../data/index/OneToManyIndex'

import { Repository } from '../repository/Repository'
import { Commit } from '../commit/Commit'
import { Commits } from '../commit/Commits'
import { Tag } from '../tag/Tag'
import { Book } from '../book/Book'

type ApplicationProperties = {
  /**
  *
  */
  repositories: Table<Repository>,

  /**
  *
  */
  repositoryByOrigin: OneToOneIndex<string, Repository>,

  /**
  *
  */
  commits: Table<Commit>,

  /**
  *
  */
  commitByObjectIdentifier: OneToOneIndex<string, Commit>,

  /**
  *
  */
  commitsByRepositoryIdentifier: OneToManyIndex<number, Commit>,

  /**
  *
  */
  tags: Table<Tag>,

  /**
  *
  */
  tagByCommitIdentifier: OneToOneIndex<number, Tag>,

  /**
  *
  */
  tagByObjectIdentifier: OneToOneIndex<string, Tag>,

  /**
  *
  */
  tagsByRepositoryIdentifier: OneToManyIndex<number, Tag>

  /**
  *
  */
  books: Table<Book>,

  /**
  *
  */
  booksByCommitIdentifier: OneToManyIndex<number, Book>
}

/**
*
*/
const DEFAULT_PROPERTIES: ApplicationProperties = {
  repositories: Table.empty(),
  repositoryByOrigin: OneToOneIndex.empty(Repository.getOrigin),
  commits: Table.empty(),
  commitByObjectIdentifier: OneToOneIndex.empty(Commit.getObjectIdentifier),
  commitsByRepositoryIdentifier: OneToManyIndex.empty(Commit.getRepositoryIdentifier),
  tags: Table.empty(),
  tagByCommitIdentifier: OneToOneIndex.empty(Tag.getCommitIdentifier),
  tagByObjectIdentifier: OneToOneIndex.empty(Tag.getObjectIdentifier),
  tagsByRepositoryIdentifier: OneToManyIndex.empty(Tag.getRepositoryIdentifier),
  books: Table.empty(),
  booksByCommitIdentifier: OneToManyIndex.empty(Book.getCommitIdentifier)
}

export class Application extends Record(DEFAULT_PROPERTIES) {
  /**
  *
  */
  public getLatestCommitOf(repository: Entry<Repository> | number): Entry<Commit> | undefined {
    return Commits.latestEntry(
      this.getCommitsByRepositoryIdentifier().get(Entry.identifier(repository)).entries
    )
  }
  /**
  *
  */
  public getRepositories(): Table<Repository> {
    return this.get(Application.Properties.REPOSITORIES)
  }

  /**
  *
  */
  public getRepositoryByOrigin(): OneToOneIndex<string, Repository> {
    return this.get(Application.Properties.REPOSITORY_BY_ORIGIN)
  }

  /**
  *
  */
  public getCommits(): Table<Commit> {
    return this.get(Application.Properties.COMMITS)
  }

  /**
  *
  */
  public getCommitByObjectIdentifier(): OneToOneIndex<string, Commit> {
    return this.get(Application.Properties.COMMIT_BY_OBJECT_IDENTIFIER)
  }

  /**
  *
  */
  public getCommitsByRepositoryIdentifier(): OneToManyIndex<number, Commit> {
    return this.get(Application.Properties.COMMITS_BY_REPOSITORY_IDENTIFIER)
  }

  /**
  *
  */
  public getTags(): Table<Tag> {
    return this.get(Application.Properties.TAGS)
  }

  /**
  *
  */
  public getTagByCommitIdentifier(): OneToOneIndex<number, Tag> {
    return this.get(Application.Properties.TAG_BY_COMMIT_IDENTIFIER)
  }

  /**
  *
  */
  public getTagByObjectIdentifier(): OneToOneIndex<string, Tag> {
    return this.get(Application.Properties.TAG_BY_OBJECT_IDENTIFIER)
  }

  /**
  *
  */
  public getTagsByRepositoryIdentifier(): OneToManyIndex<number, Tag> {
    return this.get(Application.Properties.TAGS_BY_REPOSITORY_IDENTIFIER)
  }

  /**
  *
  */
  public getBooks(): Table<Book> {
    return this.get(Application.Properties.BOOKS)
  }

  /**
  *
  */
  public getBooksByCommitIdentifier(): OneToManyIndex<number, Book> {
    return this.get(Application.Properties.BOOKS_BY_COMMIT_IDENTIFIER)
  }
}

/**
*
*/
export namespace Application {
  /**
  *
  */
  export const EMPTY: Application = new Application()

  /**
  *
  */
  export type Properties = ApplicationProperties

  /**
  *
  */
  export namespace Properties {
    /**
    *
    */
    export const REPOSITORIES: 'repositories' = 'repositories'

    /**
      *
      */
    export const REPOSITORY_BY_ORIGIN: 'repositoryByOrigin' = 'repositoryByOrigin'

    /**
    *
    */
    export const COMMITS: 'commits' = 'commits'

    /**
      *
      */
    export const COMMIT_BY_OBJECT_IDENTIFIER: 'commitByObjectIdentifier' = 'commitByObjectIdentifier'

    /**
      *
      */
    export const COMMITS_BY_REPOSITORY_IDENTIFIER: 'commitsByRepositoryIdentifier' = 'commitsByRepositoryIdentifier'

    /**
    *
    */
    export const TAGS: 'tags' = 'tags'

    /**
    *
    */
    export const TAG_BY_COMMIT_IDENTIFIER: 'tagByCommitIdentifier' = 'tagByCommitIdentifier'

    /**
    *
    */
    export const TAG_BY_OBJECT_IDENTIFIER: 'tagByObjectIdentifier' = 'tagByObjectIdentifier'

    /**
    *
    */
    export const TAGS_BY_REPOSITORY_IDENTIFIER: 'tagsByRepositoryIdentifier' = 'tagsByRepositoryIdentifier'

    /**
    *
    */
    export const BOOKS: 'books' = 'books'

    /**
    *
    */
    export const BOOKS_BY_COMMIT_IDENTIFIER: 'booksByCommitIdentifier' = 'booksByCommitIdentifier'

    /**
    *
    */
    export const ALL: string[] = [
      REPOSITORIES,
      REPOSITORY_BY_ORIGIN,
      COMMITS,
      COMMIT_BY_OBJECT_IDENTIFIER,
      COMMITS_BY_REPOSITORY_IDENTIFIER,
      TAGS,
      TAG_BY_COMMIT_IDENTIFIER,
      TAG_BY_OBJECT_IDENTIFIER,
      TAGS_BY_REPOSITORY_IDENTIFIER,
      BOOKS,
      BOOKS_BY_COMMIT_IDENTIFIER
    ]
  }
}
