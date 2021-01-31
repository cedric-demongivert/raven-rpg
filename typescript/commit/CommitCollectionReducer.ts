import { ApplicationEvent } from '../ApplicationEvent'

import { Table } from '../data/table/Table'
import { Entry } from '../data/Entry'

import { RepositoryAction } from '../repository/RepositoryAction'
import { RepositoryEvent } from '../repository/RepositoryEvent'

import { Commit } from './Commit'
import { CommitAction } from './CommitAction'
import { CommitEvent } from './CommitEvent'

export namespace CommitCollectionReducer {
  /**
  *
  */
  export function reduceRepositoryRemove(state: Table<Commit>, action: RepositoryEvent.Remove): Table<Commit> {
    return state.filterModels((commit: Commit) => commit.getRepositoryIdentifier() === action.payload)
  }

  /**
  *
  */
  export function reduceExtractBooks(state: Table<Commit>, action: CommitEvent.ExtractBooks): Table<Commit> {
    const commit: Entry<Commit> | undefined = state.get(action.payload)

    if (commit == null) {
      throw new Error(
        'Unable to update commit #' + action.payload + ' because the ' +
        'requested commit does not exists.'
      )
    }

    return state.update(commit.setData(commit.model.extractBooks()))
  }

  /**
  *
  */
  export function reduceExtractingBooks(state: Table<Commit>, action: CommitEvent.ExtractingBooks): Table<Commit> {
    const commit: Entry<Commit> | undefined = state.get(action.payload)

    if (commit == null) {
      throw new Error(
        'Unable to update commit #' + action.payload + ' because the ' +
        'requested commit does not exists.'
      )
    }

    return state.update(commit.setData(commit.model.extractingBooks()))
  }

  /**
  *
  */
  export function reduceBooksExtracted(state: Table<Commit>, action: CommitEvent.BooksExtracted): Table<Commit> {
    const commit: Entry<Commit> | undefined = state.get(action.payload)

    if (commit == null) {
      throw new Error(
        'Unable to update commit #' + action.payload + ' because the ' +
        'requested commit does not exists.'
      )
    }

    return state.update(commit.setData(commit.model.booksExtracted()))
  }

  /**
  *
  */
  export function reduceBooksExtractionFailure(state: Table<Commit>, action: CommitEvent.BooksExtractionFailure): Table<Commit> {
    const commit: Entry<Commit> | undefined = state.get(action.payload.commit)

    if (commit == null) {
      throw new Error(
        'Unable to update commit #' + action.payload + ' because the ' +
        'requested commit does not exists.'
      )
    }

    return state.update(commit.setData(commit.model.booksExtractionFailure(action.payload.reason)))
  }

  /**
  *
  */
  export function reduceReady(state: Table<Commit>, action: CommitEvent.Ready): Table<Commit> {
    const commit: Entry<Commit> | undefined = state.get(action.payload)

    if (commit == null) {
      throw new Error(
        'Unable to update commit #' + action.payload + ' because the ' +
        'requested commit does not exists.'
      )
    }

    return state.update(commit.setData(commit.model.ready()))
  }

  /**
  *
  */
  export function reduce(state: Table<Commit> | undefined, action: ApplicationEvent): Table<Commit> {
    const nonNullState: Table<Commit> = state || Table.empty()

    switch (action.type) {
      case CommitAction.EXTRACTED:
        return nonNullState.add(new Commit(action.payload))
      case CommitAction.EXTRACT_BOOKS:
        return reduceExtractBooks(state, action)
      case CommitAction.EXTRACTING_BOOKS:
        return reduceExtractingBooks(state, action)
      case CommitAction.BOOKS_EXTRACTED:
        return reduceBooksExtracted(state, action)
      case CommitAction.BOOKS_EXTRACTION_FAILURE:
        return reduceBooksExtractionFailure(state, action)
      case CommitAction.READY:
        return reduceReady(state, action)
      case RepositoryAction.REMOVE:
        return reduceRepositoryRemove(nonNullState, action)
      default:
        return nonNullState.pristine()
    }
  }
}
