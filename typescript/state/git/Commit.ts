import { Empty } from '../../utils/Empty'
import { Reference } from '../../data/Reference'

import { Task } from '../task/Task'

import { Repository } from './Repository'
import { CommitState } from './CommitState'
import { CommitTask } from './CommitTask'

/**
*
*/
export class Commit {
  /**
  *
  */
  public readonly identifier: string

  /**
  *
  */
  public readonly repository: Reference<Repository>

  /**
  *
  */
  public readonly message: string

  /**
  *
  */
  public readonly timestamp: number

  /**
  *
  */
  public readonly state: CommitState | Task.Void<CommitTask>

  /**
  *
  */
  public constructor(properties: Commit.Properties = Empty.OBJECT) {
    this.identifier = properties.identifier || Empty.STRING
    this.repository = properties.repository || 0
    this.message = properties.message || Empty.STRING
    this.timestamp = properties.timestamp || 0
    this.state = properties.state || CommitState.DEFAULT
  }

  /**
  *
  */
  public setIdentifier(identifier: string): Commit {
    if (this.identifier === identifier) {
      return this
    } else {
      return new Commit({ ...this, identifier })
    }
  }

  /**
  *
  */
  public setRepository(repository: Reference<Repository>): Commit {
    if (this.repository === repository) {
      return this
    } else {
      return new Commit({ ...this, repository })
    }
  }

  /**
  *
  */
  public setMessage(message: string): Commit {
    if (this.message === message) {
      return this
    } else {
      return new Commit({ ...this, message })
    }
  }

  /**
  *
  */
  public setTimestamp(timestamp: number): Commit {
    if (this.timestamp === timestamp) {
      return this
    } else {
      return new Commit({ ...this, timestamp })
    }
  }

  /**
  *
  */
  public setState(state: CommitState | Task.Void<CommitTask>): Commit {
    if (this.state === state) {
      return this
    } else {
      return new Commit({ ...this, state })
    }
  }

  /**
  *
  */
  public toString(): string {
    const base: string = (
      this.constructor.name + ' of repository #' +
      this.repository + ' ' +
      this.identifier + ' '
    )

    if (typeof this.state === 'number') {
      return base + CommitState.toDebugString(this.state)
    } else {
      return base + this.state.toString(CommitTask.toDebugString)
    }
  }
}

/**
*
*/
export namespace Commit {
  /**
  *
  */
  export type Properties = {
    /**
    *
    */
    identifier?: string,

    /**
    *
    */
    repository?: Reference<Repository>

    /**
    *
    */
    message?: string,

    /**
    *
    */
    timestamp?: number,

    /**
    *
    */
    state?: CommitState | Task.Void<CommitTask>
  }

  /**
   * 
   */
  export function isHollow(commit: Commit): boolean {
    return commit.state === CommitState.HOLLOW
  }

  /**
   * 
   */
  export function assertHollow(commit: Commit, message?: string | undefined): void {
    if (commit.state !== CommitState.HOLLOW) {
      throw new Error(message || 'The given commit is not an hollow commit.')
    }
  }

  /**
   * 
   */
  export function isReady(commit: Commit): boolean {
    return commit.state === CommitState.READY
  }

  /**
   * 
   */
  export function assertReady(commit: Commit, message?: string | undefined): void {
    if (commit.state !== CommitState.READY) {
      throw new Error(message || 'The given commit is not ready.')
    }
  }

  /**
  *
  */
  export const EMPTY: Commit = new Commit()

  /**
  *
  */
  export function create(properties: Commit.Properties = Empty.OBJECT): Commit {
    return new Commit(properties)
  }

  /**
  *
  */
  export function getRepository(commit: Commit): Reference<Repository> {
    return commit.repository
  }

  /**
  *
  */
  export function getIdentifier(commit: Commit): string {
    return commit.identifier
  }
}
