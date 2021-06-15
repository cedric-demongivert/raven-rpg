import { ApplicationEvent } from '../../application/ApplicationEvent'
import { Iterators } from '../../data/Iterators'

import { VersionCollection } from '../../state/application/VersionCollection'

import { RepositoryAction } from './RepositoryAction'
import { RepositoryEvent } from './RepositoryEvent'

/**
*
*/
export namespace VersionCollectionReducer {
  /**
   *
   */
  function reduceVersionDiscovery(state: VersionCollection, action: RepositoryEvent.Versions): VersionCollection {
    return VersionCollection.create(state.all.addMany(Iterators.over(action.payload.versions)).to)
  }

  /**
   *
   */
  export function reduce(state: VersionCollection | undefined, action: ApplicationEvent): VersionCollection {
    const nonNullState: VersionCollection = state || VersionCollection.empty()

    switch (action.type) {
      case RepositoryAction.VERSIONS:
        return reduceVersionDiscovery(state, action)
      default:
        return nonNullState
    }
  }
}
