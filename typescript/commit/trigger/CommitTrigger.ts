import { ApplicationTrigger } from '../../ApplicationTrigger'

import { Application } from '../../application/Application'
import { Entry } from '../../data/Entry'

import { Commit } from '../Commit'

import { CommitExtractingBooksTrigger } from './CommitExtractingBooksTrigger'

/**
*
*/
export namespace CommitTrigger {
  /**
  *
  */
  export function extractingBooks(commit: number | Entry<Commit>): ApplicationTrigger<void, Application> {
    return new CommitExtractingBooksTrigger(commit)
  }
}
