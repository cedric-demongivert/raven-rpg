import { Entry, Reference } from '../../data'
import { ApplicationEvent } from '../../application'

import { Repository } from '../../state/git/Repository'

import { RepositoryAction } from './RepositoryAction'
import { Commit } from '../../state/git'
import { Tag } from '../../state/git/Tag'
import { RepositorySemver } from '../../state/semver/RepositorySemver'
import { Resource } from '../../state/resource'

export namespace RepositoryEvent {
  /**
   *
   */
  export type Subscribe = ApplicationEvent<RepositoryAction.SUBSCRIBE, string>

  /**
   *
   */
  export type Load = ApplicationEvent<RepositoryAction.LOAD, number>

  /**
   *
   */
  export type Loading = ApplicationEvent<RepositoryAction.LOADING, number>

  /**
   * 
   */
  export namespace Loading {
    /**
     *
     */
    export type Success = ApplicationEvent<RepositoryAction.LOADING_SUCCESS, number>

    /**
     *
     */
    export type Failure = ApplicationEvent<RepositoryAction.LOADING_FAILURE, {
      repository: number,
      error: Error
    }>
  }

  /**
   *
   */
  export type Dump = ApplicationEvent<RepositoryAction.DUMP, number>

  /**
   *
   */
  export type Commits = ApplicationEvent<RepositoryAction.COMMITS, {
    repository: number,
    commits: Iterable<Commit>
  }>

  /**
   *
   */
  export type Versions = ApplicationEvent<RepositoryAction.VERSIONS, {
    repository: number,
    versions: Iterable<RepositorySemver>
  }>

  /**
   *
   */
  export type Tags = ApplicationEvent<RepositoryAction.TAGS, {
    repository: number,
    tags: Iterable<Tag>
  }>

  /**
   * 
   */
  export namespace isLoading {
    /**
     * 
     */
    export function success(event: ApplicationEvent): event is Loading.Success {
      return event.type === RepositoryAction.LOADING_SUCCESS
    }

    /**
     * 
     */
    export function failure(event: ApplicationEvent): event is Loading.Failure {
      return event.type === RepositoryAction.LOADING_FAILURE
    }
  }

  /**
   *
   */
  export function subscribe(payload: string): Subscribe {
    return ApplicationEvent.create(RepositoryAction.SUBSCRIBE, payload)
  }

  /**
  *
  */
  export function load(reference: Reference<Repository>): Load {
    return ApplicationEvent.create(RepositoryAction.LOAD, Reference.identifier(reference))
  }

  /**
   *
   */
  export function loading(reference: Reference<Repository>): Loading {
    return ApplicationEvent.create(RepositoryAction.LOADING, Reference.identifier(reference))
  }

  /**
   * 
   */
  export namespace loading {
    /**
     *
     */
    export function success(reference: Reference<Repository>): Loading.Success {
      return ApplicationEvent.create(RepositoryAction.LOADING_SUCCESS, Reference.identifier(reference))
    }

    /**
     *
     */
    export function failure(reference: Reference<Repository>, error: Error): Loading.Failure {
      return ApplicationEvent.create(
        RepositoryAction.LOADING_FAILURE, {
        repository: Reference.identifier(reference),
        error
      })
    }
  }

  /**
   *
   */
  export function versions(reference: Reference<Repository>, versions: Iterable<RepositorySemver>): Versions {
    return ApplicationEvent.create(
      RepositoryAction.VERSIONS, {
      repository: Reference.identifier(reference),
      versions
    })
  }

  /**
   *
   */
  export function commits(reference: Reference<Repository>, commits: Iterable<Commit>): Commits {
    return ApplicationEvent.create(
      RepositoryAction.COMMITS, {
      repository: Reference.identifier(reference),
      commits
    })
  }

  /**
   *
   */
  export function tags(reference: Reference<Repository>, tags: Iterable<Tag>): Tags {
    return ApplicationEvent.create(
      RepositoryAction.TAGS, {
      repository: Reference.identifier(reference),
      tags
    })
  }

  /**
   *
   */
  export function dump(reference: Reference<Repository>): Dump {
    return ApplicationEvent.create(RepositoryAction.DUMP, Reference.identifier(reference))
  }

  /**
   *
   */
  // export function ready(identifiable: Reference<Repository>): Update {
  // return update(identifiable, RepositoryState.READY)
  // }
}
