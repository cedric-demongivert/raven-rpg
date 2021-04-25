import { Empty } from '../Empty'

import { RepositoryState } from './RepositoryState'
import { RepositoryTask } from './RepositoryTask'
import { Task } from '../task'

/**
*
*/
export class Repository {
  /**
  * @see Repository.Properties.origin
  */
  public readonly origin: string

  /**
  * @see Repository.Properties.state
  */
  public readonly state: RepositoryState | Task.Void<RepositoryTask>

  /**
  *
  */
  public constructor(properties: Repository.Properties = Empty.OBJECT) {
    this.origin = properties.origin || Empty.STRING
    this.state = properties.state || RepositoryState.HOLLOW
  }

  /**
  *
  */
  public setOrigin(origin: string): Repository {
    if (this.origin === origin) {
      return this
    } else {
      return new Repository({ ...this, origin })
    }
  }

  /**
  *
  */
  public setState(state: RepositoryState | Task.Void<RepositoryTask>): Repository {
    if (this.state === state) {
      return this
    } else {
      return new Repository({ ...this, state })
    }
  }

  /**
  *
  */
  public toString(): string {
    const base: string = this.constructor.name + ' ' + this.origin + ' '

    if (typeof this.state === 'number') {
      return base + RepositoryState.toDebugString(this.state)
    } else {
      return base + this.state.toString(RepositoryTask.toDebugString)
    }
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof Repository) {
      return (
        other.origin === this.origin &&
        other.state === this.state
      )
    }

    return false
  }
}

/**
*
*/
export namespace Repository {
  /**
  *
  */
  export type Properties = {
    /**
    * Origin of the repository.
    */
    origin?: string | undefined,

    /**
    * State of the repository.
    */
    state?: RepositoryState | Task.Void<RepositoryTask>
  }

  /**
  *
  */
  export const EMPTY: Repository = new Repository()



  /**
   * 
   */
  export function isHollow(repository: Repository): boolean {
    return repository.state === RepositoryState.HOLLOW
  }

  /**
   * 
   */
  export function assertHollow(repository: Repository, message?: string | undefined): void {
    if (repository.state !== RepositoryState.HOLLOW) {
      throw new Error(message || 'The given repository is not an hollow repository.')
    }
  }

  /**
   * 
   */
  export function isReady(repository: Repository): boolean {
    return repository.state === RepositoryState.READY
  }

  /**
   * 
   */
  export function assertReady(repository: Repository, message?: string | undefined): void {
    if (repository.state !== RepositoryState.READY) {
      throw new Error(message || 'The given repository is not ready.')
    }
  }

  /**
  *
  */
  export function empty(): Repository {
    return EMPTY
  }

  /**
  *
  */
  export function create(properties: Repository.Properties = Empty.OBJECT): Repository {
    return new Repository(properties)
  }

  /**
  *
  */
  export function getOrigin(repository: Repository): string {
    return repository.origin
  }

  /**
  *
  */
  export function getState(repository: Repository): RepositoryState | Task.Void<RepositoryTask> {
    return repository.state
  }
}
