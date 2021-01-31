import { RepositoryState } from './RepositoryState'

/**
*
*/
const EMPTY_STRING: string = ''

/**
*
*/
const EMPTY_OBJECT: object = {}

/**
*
*/
export class Repository {
  /**
  *
  */
  public readonly origin: string

  /**
  *
  */
  public readonly state: RepositoryState

  /**
  *
  */
  public readonly reason: Error | undefined

  /**
  *
  */
  public constructor(properties: Repository.Properties = EMPTY_OBJECT) {
    this.origin = properties.origin || EMPTY_STRING
    this.state = properties.state || RepositoryState.HOLLOW
    this.reason = properties.reason || undefined
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
    * Error associated to this repository.
    */
    reason?: Error | null
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
