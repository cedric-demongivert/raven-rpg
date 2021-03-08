import { ApplicationStore } from './ApplicationStore'

import { Entry } from './data/Entry'

import { Application } from './application/Application'

import { RPGBookEvent } from './rpg/book/RPGBookEvent'
import { RPGBookTrigger } from './rpg/book/trigger/RPGBookTrigger'

import { CommitEvent } from './commit/CommitEvent'
import { Commit } from './commit/Commit'
import { CommitTrigger } from './commit/trigger/CommitTrigger'

import { RepositoryEvent } from './repository/RepositoryEvent'
import { RepositoryTrigger } from './repository/trigger/RepositoryTrigger'

export async function initialize(store: ApplicationStore<Application>): Promise<void> {
  store.dispatch(RepositoryEvent.subscribe('http://gitea.cedric-demongivert.com/cdemongivert/corvus.git'))

  const repository: number = store.getState().repositories.getDefault().identifier

  store.dispatch(RepositoryEvent.clone(repository))

  await store.trigger(RepositoryTrigger.cloning(repository))

  store.dispatch(RepositoryEvent.extractCommits(repository))

  await store.trigger(RepositoryTrigger.extractingCommits(repository))

  store.dispatch(RepositoryEvent.extractLabels(repository))

  await store.trigger(RepositoryTrigger.extractingLabels(repository))

  store.dispatch(RepositoryEvent.ready(repository))

  const latest: Entry<Commit> | undefined = store.getState().commits.getLatestOfRepository(repository)

  if (latest == null) {
    return
  }

  store.dispatch(CommitEvent.extractBooks(latest))

  await store.trigger(CommitTrigger.extractingBooks(latest))

  store.dispatch(CommitEvent.ready(latest))

  for (const book of store.getState().elements.books.entries) {
    store.dispatch(RPGBookEvent.extractContent(book))

    await store.trigger(RPGBookTrigger.extractingContent(book))

    store.dispatch(RPGBookEvent.ready(book))
  }
}
