import { Empty } from '../Empty'

import { CommitState } from './CommitState'

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
  public readonly repository: number

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
  public readonly state: CommitState

  /**
  *
  */
  public readonly reason: Error | undefined

  /**
  *
  */
  public constructor(properties: Commit.Properties = Empty.OBJECT) {
    this.identifier = properties.identifier || Empty.STRING
    this.repository = properties.repository || 0
    this.message = properties.message || Empty.STRING
    this.timestamp = properties.timestamp || 0
    this.state = properties.state || CommitState.DEFAULT
    this.reason = properties.reason || undefined
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
  public setRepository(repository: number): Commit {
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
  public setState(state: CommitState): Commit {
    if (this.state === state) {
      return this
    } else {
      return new Commit({ ...this, state })
    }
  }

  /**
  *
  */
  public setReason(reason: Error | undefined): Commit {
    if (this.reason === reason) {
      return this
    } else {
      return new Commit({ ...this, reason })
    }
  }

  /**
  *
  */
  public markExtractBooks(): Commit {
    switch (this.state) {
      case CommitState.HOLLOW:
        return this.setState(CommitState.BOOKS_EXTRACTION_REQUESTED)
      default:
        throw new Error(
          'Trying to illegaly move state of ' + this.toDebugString() + ' to ' +
          CommitState.toDebugString(CommitState.BOOKS_EXTRACTION_REQUESTED) +
          ' you may have a problem somewhere into your commit ' +
          'management workflow.'
        )
    }
  }

  /**
  *
  */
  public markExtractingBooks(): Commit {
    switch (this.state) {
      case CommitState.BOOKS_EXTRACTION_REQUESTED:
        return this.setState(CommitState.EXTRACTING_BOOKS)
      default:
        throw new Error(
          'Trying to illegaly move state of ' + this.toDebugString() + ' to ' +
          CommitState.toDebugString(CommitState.EXTRACTING_BOOKS) +
          ' you may have a problem somewhere into your commit ' +
          'management workflow.'
        )
    }
  }

  /**
  *
  */
  public markBooksExtracted(): Commit {
    switch (this.state) {
      case CommitState.EXTRACTING_BOOKS:
        return this.setState(CommitState.BOOKS_EXTRACTED)
      default:
        throw new Error(
          'Trying to illegaly move state of ' + this.toDebugString() + ' to ' +
          CommitState.toDebugString(CommitState.BOOKS_EXTRACTED) +
          ' you may have a problem somewhere into your commit ' +
          'management workflow.'
        )
    }
  }

  /**
  *
  */
  public markBooksExtractionFailure(reason: Error): Commit {
    switch (this.state) {
      case CommitState.EXTRACTING_BOOKS:
        return (
          new Commit({
            ...this,
            state: CommitState.BOOKS_EXTRACTION_FAILURE,
            reason
          })
        )
      default:
        throw new Error(
          'Trying to illegaly move state of ' + this.toDebugString() + ' to ' +
          CommitState.toDebugString(CommitState.BOOKS_EXTRACTION_FAILURE) +
          ' you may have a problem somewhere into your commit ' +
          'management workflow.'
        )
    }
  }

  /**
  *
  */
  public markReady(): Commit {
    switch (this.state) {
      case CommitState.BOOKS_EXTRACTED:
        return this.setState(CommitState.READY)
      default:
        throw new Error(
          'Trying to illegaly move state of ' + this.toDebugString() + ' to ' +
          CommitState.toDebugString(CommitState.READY) +
          ' you may have a problem somewhere into your commit ' +
          'management workflow.'
        )
    }
  }

  /**
  *
  */
  public toDebugString(): string {
    return (
      this.constructor.name + ' of repository #' +
      this.repository + ' ' +
      this.identifier + ' ' +
      CommitState.toDebugString(this.state)
    )
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
    repository?: number

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
    state?: CommitState,

    /**
    *
    */
    reason?: Error | undefined
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
  export function getRepository(commit: Commit): number {
    return commit.repository
  }

  /**
  *
  */
  export function getIdentifier(commit: Commit): string {
    return commit.identifier
  }
}
