import { ApplicationEvent } from '../../application/ApplicationEvent'
import { Iterators } from '../../data/Iterators'

import { TagCollection } from '../../state/application/TagCollection'

import { RepositoryAction } from './RepositoryAction'
import { RepositoryEvent } from './RepositoryEvent'

/**
*
*/
export namespace TagCollectionReducer {
  /**
   * 
   */
  export function reduceTagDiscovery(state: TagCollection, action: RepositoryEvent.Tags): TagCollection {
    return TagCollection.create(state.all.addMany(Iterators.over(action.payload.tags)).to)
  }

  /**
  *
  */
  export function reduce(state: TagCollection | undefined, action: ApplicationEvent): TagCollection {
    const nonNullState: TagCollection = state || TagCollection.empty()

    switch (action.type) {
      case RepositoryAction.TAGS:
        return reduceTagDiscovery(state, action)
      default:
        return nonNullState
    }
  }
}
