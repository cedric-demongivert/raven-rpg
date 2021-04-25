import { ApplicationTrigger } from '../../ApplicationTrigger'

import { Application } from '../../application/Application'
import { Entry } from '../../data/Entry'

import { Repository } from '../Repository'
import { RepositoryTask } from '../RepositoryTask'

import { RepositoryTaskTrigger } from './RepositoryTaskTrigger'

/**
*
*/
export namespace RepositoryTrigger {
  /**
  *
  */
  export function cloning(repository: number | Entry<Repository>): ApplicationTrigger<void, Application> {
    return new RepositoryTaskTrigger(repository, RepositoryTask.CLONING)
  }

  /**
  *
  */
  export function extractingCommits(repository: number | Entry<Repository>): ApplicationTrigger<void, Application> {
    return new RepositoryTaskTrigger(repository, RepositoryTask.EXTRACTING_COMMITS)
  }

  /**
  *
  */
  export function extractingLabels(repository: number | Entry<Repository>): ApplicationTrigger<void, Application> {
    return new RepositoryTaskTrigger(repository, RepositoryTask.EXTRACTING_LABELS)
  }
}
