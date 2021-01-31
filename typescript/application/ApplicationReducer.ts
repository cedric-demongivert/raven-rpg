import { ApplicationEvent } from '../ApplicationEvent'

import { Table } from '../data/table/Table'

import { Repository } from '../repository/Repository'
import { RepositoryCollectionReducer } from '../repository/RepositoryCollectionReducer'

import { Commit } from '../commit/Commit'
import { CommitCollectionReducer } from '../commit/CommitCollectionReducer'

import { Tag } from '../tag/Tag'
import { TagCollectionReducer } from '../tag/TagCollectionReducer'

import { Book } from '../book/Book'
import { BookCollectionReducer } from '../book/BookCollectionReducer'

import { Application } from './Application'

export namespace ApplicationReducer {
  /**
  *
  */
  export function reduce(state: Application | undefined, action: ApplicationEvent): Application {
    const nonNullState: Application = state || Application.EMPTY

    const newRepositories: Table<Repository> = RepositoryCollectionReducer.reduce(nonNullState.getRepositories(), action)
    const newCommits: Table<Commit> = CommitCollectionReducer.reduce(nonNullState.getCommits(), action)
    const newTags: Table<Tag> = TagCollectionReducer.reduce(nonNullState.getTags(), action)
    const newBooks: Table<Book> = BookCollectionReducer.reduce(nonNullState.getBooks(), action)

    return new Application({
      repositories: newRepositories,
      repositoryByOrigin: nonNullState.getRepositoryByOrigin().update(newRepositories.mutations),
      commits: newCommits,
      commitByObjectIdentifier: nonNullState.getCommitByObjectIdentifier().update(newCommits.mutations),
      commitsByRepositoryIdentifier: nonNullState.getCommitsByRepositoryIdentifier().update(newCommits.mutations),
      tags: newTags,
      tagByCommitIdentifier: nonNullState.getTagByCommitIdentifier().update(newTags.mutations),
      tagByObjectIdentifier: nonNullState.getTagByObjectIdentifier().update(newTags.mutations),
      tagsByRepositoryIdentifier: nonNullState.getTagsByRepositoryIdentifier().update(newTags.mutations),
      books: newBooks,
      booksByCommitIdentifier: nonNullState.getBooksByCommitIdentifier().update(newBooks.mutations)
    })
  }
}
