import { ApplicationEvent } from '../../application/ApplicationEvent'

import { ResourceCollection } from '../../state/application/ResourceCollection'
import { Iterators } from '../../data/Iterators'

import { CommitAction } from '../git/CommitAction'
import { CommitEvent } from '../git/CommitEvent'

/**
*
*/
export namespace ResourceCollectionReducer {
  /**
   * 
   */
  export function reduceResourceDiscovery(state: ResourceCollection, action: CommitEvent.Resources): ResourceCollection {
    return ResourceCollection.create(
      state.all.addMany(
        Iterators.over(action.payload.resources)
      ).to
    )
  }

  /**
  *
  */
  export function reduce(state: ResourceCollection | undefined, action: ApplicationEvent): ResourceCollection {
    const nonNullState: ResourceCollection = state || ResourceCollection.empty()

    switch (action.type) {
      case CommitAction.RESOURCES:
        return reduceResourceDiscovery(state, action)
      default:
        return nonNullState
    }
  }
}
