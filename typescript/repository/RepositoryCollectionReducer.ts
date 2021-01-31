import { ApplicationEvent } from '../ApplicationEvent'

import { Table } from '../data/table/Table'
import { Entry } from '../data/Entry'

import { Repository } from './Repository'
import { RepositoryAction } from './RepositoryAction'
import { RepositoryEvent } from './RepositoryEvent'
import { RepositoryState } from './RepositoryState'

export namespace RepositoryCollectionReducer {
  /**
  *
  */
  function assertThatRepositoryExists(repository: Entry<Repository> | undefined): repository is Entry<Repository> {
    if (repository == null) {
      throw new Error(
        'Unable to update the requested repository because the requested ' +
        'repository does not exists.'
      )
    }

    return true
  }

  /**
  *
  */
  function assertThatRepositoryStateIs(repository: Entry<Repository>, from: RepositoryState): boolean {
    if (repository.model.state !== from) {
      throw new Error(
        'Trying to illegaly update a repository in state ' +
        repository.toString() + ' as if it was in state ' +
        RepositoryState.toDebugString(from) + '.'
      )
    }

    return true
  }

  /**
  *
  */
  export function reduceAdd(state: Table<Repository>, action: RepositoryEvent.Add): Table<Repository> {
    return state.add(new Repository({ origin: action.payload }))
  }

  /**
  *
  */
  export function reduceClone(state: Table<Repository>, action: RepositoryEvent.Clone): Table<Repository> {
    const repository: Entry<Repository> | undefined = state.get(action.payload)

    assertThatRepositoryExists(repository)
    assertThatRepositoryStateIs(repository, RepositoryState.HOLLOW)

    return state.update(
      repository.identifier, new Repository({
        origin: repository.model.origin,
        state: RepositoryState.CLONING_REQUESTED
      })
    )
  }

  /**
  *
  */
  export function reduceCloning(state: Table<Repository>, action: RepositoryEvent.Cloning): Table<Repository> {
    const repository: Entry<Repository> | undefined = state.get(action.payload)

    assertThatRepositoryExists(repository)
    assertThatRepositoryStateIs(repository, RepositoryState.CLONING_REQUESTED)

    return state.update(
      repository.identifier, new Repository({
        origin: repository.model.origin,
        state: RepositoryState.CLONING
      })
    )
  }

  /**
  *
  */
  export function reduceCloned(state: Table<Repository>, action: RepositoryEvent.Cloned): Table<Repository> {
    const repository: Entry<Repository> | undefined = state.get(action.payload)

    assertThatRepositoryExists(repository)
    assertThatRepositoryStateIs(repository, RepositoryState.CLONING)

    return state.update(
      repository.identifier, new Repository({
        origin: repository.model.origin,
        state: RepositoryState.CLONED
      })
    )
  }

  /**
  *
  */
  export function reduceCloningFailure(state: Table<Repository>, action: RepositoryEvent.CloningFailure): Table<Repository> {
    const repository: Entry<Repository> | undefined = state.get(action.payload.identifier)

    assertThatRepositoryExists(repository)
    assertThatRepositoryStateIs(repository, RepositoryState.CLONING)

    return state.update(
      repository.identifier, new Repository({
        origin: repository.model.origin,
        state: RepositoryState.CLONING_FAILURE,
        reason: action.payload.reason
      })
    )
  }

  /**
  *
  */
  export function reduceExtractCommits(state: Table<Repository>, action: RepositoryEvent.ExtractCommits): Table<Repository> {
    const repository: Entry<Repository> | undefined = state.get(action.payload)

    assertThatRepositoryExists(repository)
    assertThatRepositoryStateIs(repository, RepositoryState.CLONED)

    return state.update(
      repository.identifier, new Repository({
        origin: repository.model.origin,
        state: RepositoryState.COMMITS_EXTRACTION_REQUESTED
      })
    )
  }

  /**
  *
  */
  export function reduceExtractingCommits(state: Table<Repository>, action: RepositoryEvent.ExtractingCommits): Table<Repository> {
    const repository: Entry<Repository> | undefined = state.get(action.payload)

    assertThatRepositoryExists(repository)
    assertThatRepositoryStateIs(repository, RepositoryState.COMMITS_EXTRACTION_REQUESTED)

    return state.update(
      repository.identifier, new Repository({
        origin: repository.model.origin,
        state: RepositoryState.EXTRACTING_COMMITS
      })
    )
  }

  /**
  *
  */
  export function reduceCommitsExtracted(state: Table<Repository>, action: RepositoryEvent.CommitsExtracted): Table<Repository> {
    const repository: Entry<Repository> | undefined = state.get(action.payload)

    assertThatRepositoryExists(repository)
    assertThatRepositoryStateIs(repository, RepositoryState.EXTRACTING_COMMITS)

    return state.update(
      repository.identifier, new Repository({
        origin: repository.model.origin,
        state: RepositoryState.COMMITS_EXTRACTED
      })
    )
  }

  /**
  *
  */
  export function reduceCommitsExtractionFailure(state: Table<Repository>, action: RepositoryEvent.CommitsExtractionFailure): Table<Repository> {
    const repository: Entry<Repository> | undefined = state.get(action.payload.identifier)

    assertThatRepositoryExists(repository)
    assertThatRepositoryStateIs(repository, RepositoryState.EXTRACTING_COMMITS)

    return state.update(
      repository.identifier, new Repository({
        origin: repository.model.origin,
        state: RepositoryState.COMMITS_EXTRACTION_FAILURE,
        reason: action.payload.reason
      })
    )
  }

  /**
  *
  */
  export function reduceExtractLabels(state: Table<Repository>, action: RepositoryEvent.ExtractLabels): Table<Repository> {
    const repository: Entry<Repository> | undefined = state.get(action.payload)

    assertThatRepositoryExists(repository)
    assertThatRepositoryStateIs(repository, RepositoryState.COMMITS_EXTRACTED)

    return state.update(
      repository.identifier, new Repository({
        origin: repository.model.origin,
        state: RepositoryState.LABELS_EXTRACTION_REQUESTED
      })
    )
  }

  /**
  *
  */
  export function reduceExtractingLabels(state: Table<Repository>, action: RepositoryEvent.ExtractingLabels): Table<Repository> {
    const repository: Entry<Repository> | undefined = state.get(action.payload)

    assertThatRepositoryExists(repository)
    assertThatRepositoryStateIs(repository, RepositoryState.LABELS_EXTRACTION_REQUESTED)

    return state.update(
      repository.identifier, new Repository({
        origin: repository.model.origin,
        state: RepositoryState.EXTRACTING_LABELS
      })
    )
  }

  /**
  *
  */
  export function reduceLabelsExtracted(state: Table<Repository>, action: RepositoryEvent.CommitsExtracted): Table<Repository> {
    const repository: Entry<Repository> | undefined = state.get(action.payload)

    assertThatRepositoryExists(repository)
    assertThatRepositoryStateIs(repository, RepositoryState.EXTRACTING_LABELS)

    return state.update(
      repository.identifier, new Repository({
        origin: repository.model.origin,
        state: RepositoryState.LABELS_EXTRACTED
      })
    )
  }

  /**
  *
  */
  export function reduceLabelsExtractionFailure(state: Table<Repository>, action: RepositoryEvent.CommitsExtractionFailure): Table<Repository> {
    const repository: Entry<Repository> | undefined = state.get(action.payload.identifier)

    assertThatRepositoryExists(repository)
    assertThatRepositoryStateIs(repository, RepositoryState.EXTRACTING_LABELS)

    return state.update(
      repository.identifier, new Repository({
        origin: repository.model.origin,
        state: RepositoryState.LABELS_EXTRACTION_FAILURE,
        reason: action.payload.reason
      })
    )
  }

  /**
  *
  */
  export function reduceReady(state: Table<Repository>, action: RepositoryEvent.Ready): Table<Repository> {
    const repository: Entry<Repository> | undefined = state.get(action.payload)

    assertThatRepositoryExists(repository)
    assertThatRepositoryStateIs(repository, RepositoryState.LABELS_EXTRACTED)

    return state.update(
      repository.identifier, new Repository({
        origin: repository.model.origin,
        state: RepositoryState.READY
      })
    )
  }

  /**
  *
  */
  export function reduceRemove(state: Table<Repository>, action: RepositoryEvent.Remove): Table<Repository> {
    const repository: Entry<Repository> | undefined = state.get(action.payload)

    assertThatRepositoryExists(repository)
    assertThatRepositoryStateIs(repository, RepositoryState.HOLLOW)

    return state.delete(action.payload)
  }

  /**
  *
  */
  export function reduce(state: Table<Repository> | undefined, action: ApplicationEvent): Table<Repository> {
    const nonNullState: Table<Repository> = state || Table.empty()

    switch (action.type) {
      case RepositoryAction.ADD:
        return this.reduceAdd(nonNullState, action)
      case RepositoryAction.CLONE:
        return this.reduceClone(nonNullState, action)
      case RepositoryAction.CLONING:
        return this.reduceCloning(nonNullState, action)
      case RepositoryAction.CLONED:
        return this.reduceCloned(nonNullState, action)
      case RepositoryAction.CLONING_FAILURE:
        return this.reduceCloningFailure(nonNullState, action)
      case RepositoryAction.EXTRACT_COMMITS:
        return this.reduceExtractCommits(nonNullState, action)
      case RepositoryAction.EXTRACTING_COMMITS:
        return this.reduceExtractingCommits(nonNullState, action)
      case RepositoryAction.COMMITS_EXTRACTED:
        return this.reduceCommitsExtracted(nonNullState, action)
      case RepositoryAction.COMMITS_EXTRACTION_FAILURE:
        return this.reduceCommitsExtractionFailure(nonNullState, action)
      case RepositoryAction.EXTRACT_LABELS:
        return this.reduceExtractLabels(nonNullState, action)
      case RepositoryAction.EXTRACTING_LABELS:
        return this.reduceExtractingLabels(nonNullState, action)
      case RepositoryAction.LABELS_EXTRACTED:
        return this.reduceLabelsExtracted(nonNullState, action)
      case RepositoryAction.LABELS_EXTRACTION_FAILURE:
        return this.reduceLabelsExtractionFailure(nonNullState, action)
      case RepositoryAction.READY:
        return this.reduceReady(nonNullState, action)
      case RepositoryAction.REMOVE:
        return this.reduceRemove(nonNullState, action)
      default:
        return nonNullState
    }
  }
}
