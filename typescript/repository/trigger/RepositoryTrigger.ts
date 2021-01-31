import { ApplicationTrigger } from '../../ApplicationTrigger'

import { Application } from '../../application/Application'
import { Entry } from '../../data/Entry'

import { Repository } from '../Repository'

import { RepositoryCloningTrigger } from './RepositoryCloningTrigger'
import { RepositoryExctractingCommitsTrigger } from './RepositoryExctractingCommitsTrigger'
import { RepositoryExctractingLabelsTrigger } from './RepositoryExctractingLabelsTrigger'

/**
*
*/
export namespace RepositoryTrigger {
  /**
  *
  */
  export function cloning(repository: number | Entry<Repository>): ApplicationTrigger<void, Application> {
    return new RepositoryCloningTrigger(repository)
  }

  /**
  *
  */
  export function extractingCommits(repository: number | Entry<Repository>): ApplicationTrigger<void, Application> {
    return new RepositoryExctractingCommitsTrigger(repository)
  }

  /**
  *
  */
  export function extractingLabels(repository: number | Entry<Repository>): ApplicationTrigger<void, Application> {
    return new RepositoryExctractingLabelsTrigger(repository)
  }
}
