import { ApplicationEvent } from '../ApplicationEvent'

import { RepositoryCollectionReducer } from './RepositoryCollectionReducer'
import { CommitCollectionReducer } from './CommitCollectionReducer'
import { TagCollectionReducer } from './TagCollectionReducer'
import { RPGElementCollectionReducer } from './RPGElementCollectionReducer'
import { RPGElementTreeCollectionReducer } from './RPGElementTreeCollectionReducer'

import { Application } from './Application'

export namespace ApplicationReducer {
  /**
  *
  */
  export function reduce(state: Application | undefined, action: ApplicationEvent): Application {
    const nonNullState: Application = state || Application.EMPTY

    return new Application({
      repositories: RepositoryCollectionReducer.reduce(nonNullState.repositories, action),
      commits: CommitCollectionReducer.reduce(nonNullState.commits, action),
      tags: TagCollectionReducer.reduce(nonNullState.tags, action),
      elements: RPGElementCollectionReducer.reduce(nonNullState.elements, action),
      documents: RPGElementTreeCollectionReducer.reduce(nonNullState.documents, action)
    })
  }
}
