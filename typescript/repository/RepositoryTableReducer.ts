import { ApplicationEvent } from '../ApplicationEvent'
import { Utils } from '../Utils'

import { Table } from '../data/table/Table'
import { Entry } from '../data/Entry'
import { Reference } from '../data/Reference'

import { Task } from '../task/Task'

import { Repository } from './Repository'
import { RepositoryAction } from './RepositoryAction'
import { RepositoryEvent } from './RepositoryEvent'
import { RepositoryState } from './RepositoryState'
import { RepositoryTask } from './RepositoryTask'

export namespace RepositoryTableReducer {
  /**
  *
  */
  export function reduceSubscription(state: Table<Repository>, action: RepositoryEvent.Subscribe): Table<Repository> {
    return state.add(Repository.create({ origin: action.payload, state: RepositoryState.HOLLOW }))
  }

  /**
  *
  */
  export function reduceClone(state: Table<Repository>, action: RepositoryEvent.Clone): Table<Repository> {
    try {
      const repository: Entry<Repository> | undefined = state.get(action.payload.identifier)

      Utils.assertDefined(repository, 'The requested repository does not exists.')
      Repository.assertHollow(repository.model, 'The repository to clone was already cloned or is already in the process of cloning itself.')

      return state.update(
        repository.identifier,
        repository.model.setState(Task.pending(RepositoryTask.CLONING))
      )
    } catch (error) {
      throw new Error('Unable to reduce repository #' + action.payload.identifier + ' with event ' + action.type + '.')
    }
  }

  /**
  *
  */
  export function reduceExtractCommits(state: Table<Repository>, action: RepositoryEvent.ExtractCommits): Table<Repository> {
    try {
      const repository: Entry<Repository> | undefined = state.get(action.payload.identifier)

      Utils.assertDefined(repository, 'The requested repository does not exists.')
      Task.assert(repository.model.state, 'The requested repository is not in a state that allow to extract it\'s commits.')
      Task.assertOfType(repository.model.state, RepositoryTask.CLONING, 'The requested repository is not in a state that allow to extract it\'s commits.')
      Task.assertResolved(repository.model.state, 'The requested repository is not in a state that allow to extract it\'s commits.')

      return state.update(
        repository.identifier,
        repository.model.setState(Task.pending(RepositoryTask.EXTRACTING_COMMITS))
      )
    } catch (error) {
      throw new Error('Unable to reduce repository #' + action.payload.identifier + ' with event ' + action.type + '.')
    }
  }

  /**
  *
  */
  export function reduceExtractLabels(state: Table<Repository>, action: RepositoryEvent.ExtractLabels): Table<Repository> {
    try {
      const repository: Entry<Repository> | undefined = state.get(action.payload.identifier)

      Utils.assertDefined(repository, 'The requested repository does not exists.')
      Task.assert(repository.model.state, 'The requested repository is not in a state that allow to extract it\'s labels.')
      Task.assertOfType(repository.model.state, RepositoryTask.EXTRACTING_COMMITS, 'The requested repository is not in a state that allow to extract it\'s labels.')
      Task.assertResolved(repository.model.state, 'The requested repository is not in a state that allow to extract it\'s labels.')

      return state.update(
        repository.identifier,
        repository.model.setState(Task.pending(RepositoryTask.EXTRACTING_LABELS))
      )
    } catch (error) {
      throw new Error('Unable to reduce repository #' + action.payload.identifier + ' with event ' + action.type + '.')
    }
  }

  /**
  *
  */
  export function reduceUpdate(state: Table<Repository>, action: RepositoryEvent.Update): Table<Repository> {
    try {
      const repository: Entry<Repository> | undefined = state.get(action.payload.repository.identifier)

      Utils.assertDefined(repository, 'The requested repository does not exists.')

      return state.update(
        repository.identifier,
        repository.model.setState(action.payload.state)
      )
    } catch (error) {
      throw new Error('Unable to reduce repository #' + action.payload.repository + ' with event ' + action.type + '.')
    }
  }

  /**
  *
  */
  export function reduce(state: Table<Repository> | undefined, action: ApplicationEvent): Table<Repository> {
    const nonNullState: Table<Repository> = state || Table.empty()

    switch (action.type) {
      case RepositoryAction.SUBSCRIBE:
        return this.reduceSubscription(nonNullState, action)
      case RepositoryAction.CLONE:
        return this.reduceClone(nonNullState, action)
      case RepositoryAction.EXTRACT_COMMITS:
        return this.reduceExtractCommits(nonNullState, action)
      case RepositoryAction.EXTRACT_LABELS:
        return this.reduceExtractLabels(nonNullState, action)
      case RepositoryAction.UPDATE:
        return this.reduceResolve(nonNullState, action)
      default:
        return nonNullState
    }
  }
}
