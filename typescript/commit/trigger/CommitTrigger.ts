import { ApplicationTrigger } from '../../ApplicationTrigger'

import { Application } from '../../application/Application'
import { Entry } from '../../data/Entry'

import { Commit } from '../Commit'
import { CommitTask } from '../CommitTask'

import { CommitTaskTrigger } from './CommitTaskTrigger'

/**
*
*/
export namespace CommitTrigger {
  /**
  *
  */
  export function extractingBooks(commit: number | Entry<Commit>): ApplicationTrigger<void, Application> {
    return new CommitTaskTrigger(commit, CommitTask.EXTRACTING_BOOKS)
  }
}
