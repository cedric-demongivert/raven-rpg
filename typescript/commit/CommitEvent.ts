import { ApplicationEvent } from '../ApplicationEvent'

import { Entry } from '../data/Entry'
import { Reference } from '../data/Reference'

import { Task } from '../task/Task'

import { Commit } from './Commit'
import { CommitState } from './CommitState'
import { CommitTask } from './CommitTask'
import { CommitAction } from './CommitAction'

export namespace CommitEvent {
  /**
  *
  */
  export type Extracted = ApplicationEvent<CommitAction.EXTRACTED, Commit>

  /**
  *
  */
  export type ExtractBooks = ApplicationEvent<CommitAction.EXTRACT_BOOKS, Reference<Commit>>

  /**
  *
  */
  export type Update = ApplicationEvent<CommitAction.UPDATE, { commit: Reference<Commit>, state: CommitState | Task.Void<CommitTask> }>

  /**
  *
  */
  export function extracted(commit: Commit): Extracted {
    return {
      type: CommitAction.EXTRACTED,
      payload: commit
    }
  }

  /**
  *
  */
  export function extractBooks(parameter: Entry<Commit> | number | Reference<Commit>): ExtractBooks {
    return {
      type: CommitAction.EXTRACT_BOOKS,
      payload: Reference.create(Commit, Reference.identifier(parameter))
    }
  }

  /**
  *
  */
  export function update(parameter: Entry<Commit> | number | Reference<Commit>, state: CommitState | Task.Void<CommitTask>): Update {
    return {
      type: CommitAction.UPDATE,
      payload: {
        commit: Reference.create(Commit, Reference.identifier(parameter)),
        state
      }
    }
  }

  /**
  *
  */
  export function ready(parameter: Entry<Commit> | number | Reference<Commit>): Update {
    return update(parameter, CommitState.READY)
  }
}
