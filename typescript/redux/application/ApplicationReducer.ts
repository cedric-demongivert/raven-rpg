import { ApplicationEvent } from '../../application'

import { RepositoryCollectionReducer } from '../git/RepositoryCollectionReducer'
import { CommitCollectionReducer } from '../git/CommitCollectionReducer'
import { TagCollectionReducer } from '../git/TagCollectionReducer'
import { VersionCollectionReducer } from '../git/VersionCollectionReducer'

import { Application } from '../../state/application/Application'

import { ResourceCollectionReducer } from './ResourceCollectionReducer'

import { CorvusDocumentCollectionReducer } from './CorvusDocumentCollectionReducer'

export namespace ApplicationReducer {
  /**
  *
  */
  export function reduce(state: Application | undefined, action: ApplicationEvent): Application {
    const nonNullState: Application = state || Application.EMPTY

    return Application.create({
      repositories: RepositoryCollectionReducer.reduce(nonNullState.repositories, action),
      commits: CommitCollectionReducer.reduce(nonNullState.commits, action),
      tags: TagCollectionReducer.reduce(nonNullState.tags, action),
      versions: VersionCollectionReducer.reduce(nonNullState.versions, action),
      documents: CorvusDocumentCollectionReducer.reduce(nonNullState.documents, action),
      resources: ResourceCollectionReducer.reduce(nonNullState.resources, action)
    })
  }
}
