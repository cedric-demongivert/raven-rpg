import { ApplicationEvent } from '../../application/ApplicationEvent'
import { CorvusDocumentCollection } from '../../state/application'

import { CommitAction } from '../git/CommitAction'
import { CommitEvent } from '../git/CommitEvent'

/**
*
*/
export namespace CorvusDocumentCollectionReducer {
  /**
   * 
   */
  export function reduceContentDiscovery(state: CorvusDocumentCollection, action: CommitEvent.Content): CorvusDocumentCollection {
    return CorvusDocumentCollection.create(state.all.add(action.payload).to)
  }

  /**
  *
  */CorvusDocumentCollection
  export function reduce(state: CorvusDocumentCollection | undefined, action: ApplicationEvent): CorvusDocumentCollection {
    const nonNullState: CorvusDocumentCollection = state || CorvusDocumentCollection.empty()

    switch (action.type) {
      case CommitAction.CONTENT:
        return reduceContentDiscovery(state, action)
      default:
        return nonNullState
    }
  }
}
