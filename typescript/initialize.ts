import { ApplicationStore } from './ApplicationStore'

import { Entry } from './data/Entry'

import { Application } from './application/Application'

import { Book } from './book/Book'
import { BookEvent } from './book/BookEvent'
import { BookTrigger } from './book/trigger/BookTrigger'

import { CommitEvent } from './commit/CommitEvent'
import { Commit } from './commit/Commit'
import { CommitTrigger } from './commit/trigger/CommitTrigger'

import { RepositoryEvent } from './repository/RepositoryEvent'
import { RepositoryTrigger } from './repository/trigger/RepositoryTrigger'

export async function initialize(store: ApplicationStore<Application>): Promise<void> {
  store.dispatch(RepositoryEvent.add('http://gitea.cedric-demongivert.com/cdemongivert/corvus.git'))

  const repository: number = store.getState().getRepositories().getFirstInserted().identifier

  store.dispatch(RepositoryEvent.clone(repository))

  await store.trigger(RepositoryTrigger.cloning(repository))

  store.dispatch(RepositoryEvent.extractCommits(repository))

  await store.trigger(RepositoryTrigger.extractingCommits(repository))

  store.dispatch(RepositoryEvent.extractLabels(repository))

  await store.trigger(RepositoryTrigger.extractingLabels(repository))

  store.dispatch(RepositoryEvent.ready(repository))

  const latest: Entry<Commit> | undefined = store.getState().getLatestCommitOf(repository)

  if (latest == null) {
    return
  }

  store.dispatch(CommitEvent.extractBooks(latest))

  await store.trigger(CommitTrigger.extractingBooks(latest))

  store.dispatch(CommitEvent.ready(latest))

  const book: Entry<Book> | undefined = store.getState().getBooks().entries.first()

  if (book == null) {
    return
  }

  store.dispatch(BookEvent.extractContent(book))

  await store.trigger(BookTrigger.extractingContent(book))

  store.dispatch(BookEvent.ready(book))
}
