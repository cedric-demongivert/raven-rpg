import { ApplicationStore } from './ApplicationStore'

import { Application } from './application/Application'
import { ApplicationReducer } from './application/ApplicationReducer'

import { initialize } from './initialize'

import { RepositoryMiddleware } from './repository/RepositoryMiddleware'

import { BookMiddleware } from './book/BookMiddleware'
import { CommitMiddleware } from './commit/CommitMiddleware'

export function bootstrap(): ApplicationStore<Application> {
  const store: ApplicationStore<Application> = new ApplicationStore(ApplicationReducer.reduce, Application.EMPTY)

  store.addMiddleware(new RepositoryMiddleware())
  store.addMiddleware(new CommitMiddleware())
  store.addMiddleware(new BookMiddleware())

  initialize(store)

  return store
}
