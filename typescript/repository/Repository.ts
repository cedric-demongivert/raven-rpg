import { Empty } from '../Empty'

import { RepositoryState } from './RepositoryState'

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
  public readonly state: RepositoryState

  /**
  * @see Repository.Properties.reason
  */
  public readonly reason: Error | undefined

  /**
  *
  */
  public constructor(properties: Repository.Properties = Empty.OBJECT) {
    this.origin = properties.origin || Empty.STRING
    this.state = properties.state || RepositoryState.HOLLOW
    this.reason = properties.reason || undefined
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
  public setState(state: RepositoryState): Repository {
    if (this.state === state) {
      return this
    } else {
      return new Repository({ ...this, state })
    }
  }

  /**
  *
  */
  public setReason(reason: Error | undefined): Repository {
    if (this.reason === reason) {
      return this
    } else {
      return new Repository({ ...this, reason })
    }
  }

  /**
  *
  */
  public toString(): string {
    return (
      this.constructor.name + ' ' + this.origin + ' ' +
      RepositoryState.toDebugString(this.state)
    )
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
        other.state === this.state &&
        other.reason === this.reason
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
    origin?: string,

    /**
    * State of the repository.
    */
    state?: RepositoryState,

    /**
    * Error associated to the state of this repository.
    */
    reason?: Error | undefined
  }

  /**
  *
  */
  export const EMPTY: Repository = new Repository()

  /**
  *
  */
  export function empty(): Repository {
    return EMPTY
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
  export function getState(repository: Repository): RepositoryState {
    return repository.state
  }

  /**
  *
  */
  export function getReason(repository: Repository): Error | undefined {
    return repository.reason
  }
}
