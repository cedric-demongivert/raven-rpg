import { Reference } from '../../data/Reference'
import { ApplicationEvent } from '../../application'

import { Commit } from '../../state/git/Commit'
import { Resource } from '../../state/resource/Resource'

import { CommitAction } from './CommitAction'
import { CorvusCommit } from '../../corvus/CorvusCommit'

export namespace CommitEvent {
  /**
   *
   */
  export type Load = ApplicationEvent<CommitAction.LOAD, number>

  /**
   *
   */
  export type Loading = ApplicationEvent<CommitAction.LOADING, number>

  /**
   * 
   */
  export namespace Loading {
    /**
     *
     */
    export type Success = ApplicationEvent<CommitAction.LOADING_SUCCESS, number>

    /**
     *
     */
    export type Failure = ApplicationEvent<CommitAction.LOADING_FAILURE, {
      commit: number,
      error: Error
    }>
  }

  /**
   *
   */
  export type Resources = ApplicationEvent<CommitAction.RESOURCES, {
    commit: number,
    resources: Iterable<Resource>
  }>


  /**
   *
   */
  export type Content = ApplicationEvent<CommitAction.CONTENT, CorvusCommit>

  /**
   *
   */
  export type Dump = ApplicationEvent<CommitAction.DUMP, number>

  /**
   *
   */
  export type Commits = ApplicationEvent<CommitAction.CONTENT, CorvusCommit>

  /**
   * 
   */
  export namespace isLoading {
    /**
     * 
     */
    export function success(event: ApplicationEvent): event is Loading.Success {
      return event.type === CommitAction.LOADING_SUCCESS
    }

    /**
     * 
     */
    export function failure(event: ApplicationEvent): event is Loading.Failure {
      return event.type === CommitAction.LOADING_FAILURE
    }
  }

  /**
   *
   */
  export function resources(reference: Reference<Commit>, resources: Iterable<Resource>): Resources {
    return ApplicationEvent.create(
      CommitAction.RESOURCES, {
      commit: Reference.identifier(reference),
      resources
    })
  }

  /**
  *
  */
  export function load(reference: Reference<Commit>): Load {
    return ApplicationEvent.create(CommitAction.LOAD, Reference.identifier(reference))
  }

  /**
  *
  */
  export function content(content: CorvusCommit): Content {
    return ApplicationEvent.create(CommitAction.CONTENT, content)
  }


  /**
   *
   */
  export function loading(reference: Reference<Commit>): Loading {
    return ApplicationEvent.create(CommitAction.LOADING, Reference.identifier(reference))
  }

  /**
   * 
   */
  export namespace loading {
    /**
     *
     */
    export function success(reference: Reference<Commit>): Loading.Success {
      return ApplicationEvent.create(CommitAction.LOADING_SUCCESS, Reference.identifier(reference))
    }

    /**
     *
     */
    export function failure(reference: Reference<Commit>, error: Error): Loading.Failure {
      return ApplicationEvent.create(
        CommitAction.LOADING_FAILURE, {
        commit: Reference.identifier(reference),
        error
      })
    }
  }

  /**
   *
   */
  export function dump(reference: Reference<Commit>): Dump {
    return ApplicationEvent.create(CommitAction.DUMP, Reference.identifier(reference))
  }
}
