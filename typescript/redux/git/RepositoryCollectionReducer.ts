import { ApplicationEvent } from '../../application/ApplicationEvent'

import { assertDefined } from '../../utils/assertDefined'

import { TableReducer } from '../../data/table'
import { Entry } from '../../data/Entry'

import { Repository } from '../../state/git/Repository'
import { RepositoryState } from '../../state/git/RepositoryState'
import { RepositoryTask } from '../../state/git/RepositoryTask'
import { RepositoryCollection } from '../../state/application/RepositoryCollection'
import { Task } from '../../state/task/Task'

import { RepositoryEvent } from './RepositoryEvent'
import { RepositoryAction } from './RepositoryAction'
import { AbstractError } from '../../utils'

/**
*
*/
export namespace RepositoryCollectionReducer {
  /**
   *
   */
  export function reduceSubscribe(state: RepositoryCollection, action: RepositoryEvent.Subscribe): RepositoryCollection {
    if (state.byOrigin.has(action.payload)) {
      return state
    } else {
      return RepositoryCollection.create(
        TableReducer.reduceAddition(
          state.all,
          Repository.create({ origin: action.payload, state: RepositoryState.HOLLOW })
        ).to
      )
    }
  }

  /**
   *
   */
  export function reduceLoad(state: RepositoryCollection, action: RepositoryEvent.Load): RepositoryCollection {
    try {
      const repository: Entry<Repository> | undefined = state.all.get(action.payload)

      assertDefined(repository, 'The requested repository does not exists.')
      Repository.assertHollow(repository.model, 'The repository to load was already loaded or is already loading.')

      return RepositoryCollection.create(
        TableReducer.reduceAssignation(
          state.all, Entry.create(
            repository.identifier,
            repository.model.setState(Task.pending(RepositoryTask.LOADING))
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
  export function reduceLoading(state: RepositoryCollection, action: RepositoryEvent.Loading): RepositoryCollection {
    try {
      const repository: Entry<Repository> | undefined = state.all.get(action.payload)

      assertDefined(repository, 'The requested repository does not exists.')

      const repositoryState: RepositoryState | Task.Void<RepositoryTask> = repository.model.state

      Task.assert(repositoryState, 'The repository does not declare any pending operation.')
      Task.assertOfType(repositoryState, RepositoryTask.LOADING, 'The repository does not request a loading operation.')
      Task.assertRunnable(repositoryState, 'The loading operation was already started.')

      return RepositoryCollection.create(
        TableReducer.reduceAssignation(
          state.all, Entry.create(
            repository.identifier,
            repository.model.setState(Task.run(repositoryState))
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
    export function success(state: RepositoryCollection, action: RepositoryEvent.Loading.Success): RepositoryCollection {
      try {
        const repository: Entry<Repository> | undefined = state.all.get(action.payload)

        assertDefined(repository, 'The requested repository does not exists.')

        const repositoryState: RepositoryState | Task.Void<RepositoryTask> = repository.model.state

        Task.assert(repositoryState, 'The repository does not declare any pending operation.')
        Task.assertOfType(repositoryState, RepositoryTask.LOADING, 'The repository does not request a loading operation.')
        Task.assertResolvable(repositoryState, 'The loading operation is not resolvable.')

        return RepositoryCollection.create(
          TableReducer.reduceAssignation(
            state.all, Entry.create(
              repository.identifier,
              repository.model.setState(Task.resolve(repositoryState, undefined))
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
    export function failure(state: RepositoryCollection, action: RepositoryEvent.Loading.Failure): RepositoryCollection {
      try {
        const repository: Entry<Repository> | undefined = state.all.get(action.payload.repository)

        assertDefined(repository, 'The requested repository does not exists.')

        const repositoryState: RepositoryState | Task.Void<RepositoryTask> = repository.model.state

        Task.assert(repositoryState, 'The repository does not declare any pending operation.')
        Task.assertOfType(repositoryState, RepositoryTask.LOADING, 'The repository does not request a loading operation.')
        Task.assertRejectable(repositoryState, 'The loading operation is not rejectable.')

        return RepositoryCollection.create(
          TableReducer.reduceAssignation(
            state.all, Entry.create(
              repository.identifier,
              repository.model.setState(Task.reject(repositoryState, action.payload.error))
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
  export function reduce(state: RepositoryCollection | undefined, action: ApplicationEvent): RepositoryCollection {
    const nonNullState: RepositoryCollection = state || RepositoryCollection.empty()

    switch (action.type) {
      case RepositoryAction.SUBSCRIBE:
        return reduceSubscribe(nonNullState, action)
      case RepositoryAction.LOAD:
        return reduceLoad(nonNullState, action)
      case RepositoryAction.LOADING:
        return reduceLoading(nonNullState, action)
      case RepositoryAction.LOADING_SUCCESS:
        return reduceLoading.success(nonNullState, action)
      case RepositoryAction.LOADING_FAILURE:
        return reduceLoading.failure(nonNullState, action)
      default:
        return nonNullState
    }
  }
}
