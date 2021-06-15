import { ApplicationEvent } from '../../application/ApplicationEvent'

import { Iterators } from '../../data/Iterators'
import { Entry } from '../../data/Entry'

import { assertDefined } from '../../utils/assertDefined'

import { CommitCollection } from '../../state/application/CommitCollection'
import { Commit } from '../../state/git/Commit'

import { RepositoryAction } from './RepositoryAction'
import { RepositoryEvent } from './RepositoryEvent'

import { CommitAction } from './CommitAction'
import { CommitEvent } from './CommitEvent'
import { TableReducer } from '../../data/table/TableReducer'
import { Task } from '../../state/task/Task'
import { CommitState, CommitTask } from '../../state/git'
import { AbstractError } from '../../utils/AbstractError'

/**
*
*/
export namespace CommitCollectionReducer {
  /**
   *
   */
  function reduceCommitDiscovery(state: CommitCollection, action: RepositoryEvent.Commits): CommitCollection {
    return CommitCollection.create(state.all.addMany(Iterators.over(action.payload.commits)).to)
  }

  /**
   *
   */
  export function reduceLoad(state: CommitCollection, action: CommitEvent.Load): CommitCollection {
    try {
      const repository: Entry<Commit> | undefined = state.all.get(action.payload)

      assertDefined(repository, 'The requested commit does not exists.')
      Commit.assertHollow(repository.model, 'The commit to load was already loaded or is already loading.')

      return CommitCollection.create(
        TableReducer.reduceAssignation(
          state.all, Entry.create(
            repository.identifier,
            repository.model.setState(Task.pending(CommitTask.LOADING))
          )
        ).to
      )
    } catch (error) {
      throw new AbstractError('Unable to reduce event ' + action.toString() + '.', error)
    }
  }

  /**
   *
   */
  export function reduceLoading(state: CommitCollection, action: CommitEvent.Loading): CommitCollection {
    try {
      const repository: Entry<Commit> | undefined = state.all.get(action.payload)

      assertDefined(repository, 'The requested commit does not exists.')

      const commitState: CommitState | Task.Void<CommitTask> = repository.model.state

      Task.assert(commitState, 'The commit does not declare any pending operation.')
      Task.assertOfType(commitState, CommitTask.LOADING, 'The commit does not request a loading operation.')
      Task.assertRunnable(commitState, 'The loading operation was already started.')

      return CommitCollection.create(
        TableReducer.reduceAssignation(
          state.all, Entry.create(
            repository.identifier,
            repository.model.setState(Task.run(commitState))
          )
        ).to
      )
    } catch (error) {
      throw new AbstractError('Unable to reduce event ' + action.toString() + '.', error)
    }
  }

  /**
   * 
   */
  export namespace reduceLoading {
    /**
     *
     */
    export function success(state: CommitCollection, action: CommitEvent.Loading.Success): CommitCollection {
      try {
        const repository: Entry<Commit> | undefined = state.all.get(action.payload)

        assertDefined(repository, 'The requested commit does not exists.')

        const commitState: CommitState | Task.Void<CommitTask> = repository.model.state

        Task.assert(commitState, 'The commit does not declare any pending operation.')
        Task.assertOfType(commitState, CommitTask.LOADING, 'The commit does not request a loading operation.')
        Task.assertResolvable(commitState, 'The loading operation is not resolvable.')

        return CommitCollection.create(
          TableReducer.reduceAssignation(
            state.all, Entry.create(
              repository.identifier,
              repository.model.setState(Task.resolve(commitState, undefined))
            )
          ).to
        )
      } catch (error) {
        throw new AbstractError('Unable to reduce event ' + action.toString() + '.', error)
      }
    }

    /**
     *
     */
    export function failure(state: CommitCollection, action: CommitEvent.Loading.Failure): CommitCollection {
      try {
        const repository: Entry<Commit> | undefined = state.all.get(action.payload.commit)

        assertDefined(repository, 'The requested commit does not exists.')

        const commitState: CommitState | Task.Void<CommitTask> = repository.model.state

        Task.assert(commitState, 'The commit does not declare any pending operation.')
        Task.assertOfType(commitState, CommitTask.LOADING, 'The commit does not request a loading operation.')
        Task.assertRejectable(commitState, 'The loading operation is not rejectable.')

        return CommitCollection.create(
          TableReducer.reduceAssignation(
            state.all, Entry.create(
              repository.identifier,
              repository.model.setState(Task.reject(commitState, action.payload.error))
            )
          ).to
        )
      } catch (error) {
        throw new AbstractError('Unable to reduce event ' + action.toString() + '.', error)
      }
    }
  }

  /**
   *
   */
  export function reduce(state: CommitCollection | undefined, action: ApplicationEvent): CommitCollection {
    const nonNullState: CommitCollection = state || CommitCollection.empty()

    switch (action.type) {
      case RepositoryAction.COMMITS:
        return reduceCommitDiscovery(state, action)
      case CommitAction.LOAD:
        return reduceLoad(nonNullState, action)
      case CommitAction.LOADING:
        return reduceLoading(nonNullState, action)
      case CommitAction.LOADING_SUCCESS:
        return reduceLoading.success(nonNullState, action)
      case CommitAction.LOADING_FAILURE:
        return reduceLoading.failure(nonNullState, action)
      default:
        return nonNullState
    }
  }
}
