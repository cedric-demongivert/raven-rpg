import { Entry } from '../data/Entry'
import { Reference } from '../data/Reference'

import { Task } from '../task/Task'

import { RepositoryAction } from './RepositoryAction'
import { Repository } from './Repository'
import { RepositoryState } from './RepositoryState'
import { RepositoryTask } from './RepositoryTask'

export namespace RepositoryEvent {
  /**
  *
  */
  export type Subscribe = {
    type: RepositoryAction.SUBSCRIBE,
    payload: string
  }

  /**
  *
  */
  export type Clone = {
    type: RepositoryAction.CLONE,
    payload: Reference<Repository>
  }

  /**
  *
  */
  export type ExtractCommits = {
    type: RepositoryAction.EXTRACT_COMMITS,
    payload: Reference<Repository>
  }

  /**
  *
  */
  export type ExtractLabels = {
    type: RepositoryAction.EXTRACT_LABELS,
    payload: Reference<Repository>
  }

  /**
  *
  */
  export type Update = {
    type: RepositoryAction.UPDATE,
    payload: {
      repository: Reference<Repository>,
      state: RepositoryState | Task.Void<RepositoryTask>
    }
  }

  /**
  *
  */
  export function subscribe(payload: string): Subscribe {
    return {
      type: RepositoryAction.SUBSCRIBE,
      payload
    }
  }

  /**
  *
  */
  export function clone(identifiable: Entry<Repository> | number): Clone {
    return {
      type: RepositoryAction.CLONE,
      payload: Reference.fromIdentifiable(Repository, identifiable)
    }
  }

  /**
  *
  */
  export function extractCommits(identifiable: Entry<Repository> | number): ExtractCommits {
    return {
      type: RepositoryAction.EXTRACT_COMMITS,
      payload: Reference.fromIdentifiable(Repository, identifiable)
    }
  }

  /**
  *
  */
  export function extractLabels(identifiable: Entry<Repository> | number): ExtractLabels {
    return {
      type: RepositoryAction.EXTRACT_LABELS,
      payload: Reference.fromIdentifiable(Repository, identifiable)
    }
  }

  /**
  *
  */
  export function update(identifiable: Entry<Repository> | number, state: RepositoryState | Task.Void<RepositoryTask>): Update {
    return {
      type: RepositoryAction.UPDATE,
      payload: {
        repository: Reference.fromIdentifiable(Repository, identifiable),
        state
      }
    }
  }

  /**
  *
  */
  export function ready(identifiable: Entry<Repository> | number): Update {
    return update(identifiable, RepositoryState.READY)
  }
}
