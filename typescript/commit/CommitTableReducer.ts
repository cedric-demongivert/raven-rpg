import { ApplicationEvent } from '../ApplicationEvent'

import { Utils } from '../Utils'

import { Table } from '../data/table/Table'
import { Entry } from '../data/Entry'

import { Task } from '../task/Task'

import { Commit } from './Commit'
import { CommitAction } from './CommitAction'
import { CommitEvent } from './CommitEvent'
import { CommitTask } from './CommitTask'

export namespace CommitTableReducer {
  /**
  *
  */
  export function reduceExtractBooks(state: Table<Commit>, action: CommitEvent.ExtractBooks): Table<Commit> {
    const commit: Entry<Commit> | undefined = state.get(action.payload.identifier)

    Utils.assertDefined(commit, 'The commit #' + action.payload + ' does not exists.')
    Commit.assertHollow(commit.model, 'The given commit is not an hollow commit.')

    return Table.reduce(
      state,
      state.update(
        commit.identifier,
        commit.model.setState(Task.pending(CommitTask.EXTRACTING_BOOKS))
      )
    )
  }

  /**
  *
  */
  export function reduceUpdate(state: Table<Commit>, action: CommitEvent.Update): Table<Commit> {
    const commit: Entry<Commit> | undefined = state.get(action.payload.commit.identifier)

    Utils.assertDefined(commit, 'The commit #' + action.payload + ' does not exists.')

    return Table.reduce(
      state,
      state.update(
        commit.identifier,
        commit.model.setState(Task.pending(CommitTask.EXTRACTING_BOOKS))
      )
    )
  }

  /**
  *
  */
  export function reduceExtracted(state: Table<Commit>, action: CommitEvent.Extracted): Table<Commit> {
    return Table.reduce(
      state,
      state.add(new Commit(action.payload))
    )
  }

  /**
  *
  */
  export function reduce(state: Table<Commit> | undefined, action: ApplicationEvent): Table<Commit> {
    const nonNullState: Table<Commit> = state || Table.empty()

    switch (action.type) {
      case CommitAction.EXTRACTED:
        return reduceExtracted(state, action)
      case CommitAction.EXTRACT_BOOKS:
        return reduceExtractBooks(state, action)
      case CommitAction.UPDATE:
        return reduceUpdate(state, action)
      default:
        return nonNullState
    }
  }
}
