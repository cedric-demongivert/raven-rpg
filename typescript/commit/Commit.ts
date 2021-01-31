import { Record } from 'immutable'

import { CommitState } from './CommitState'

type CommitProperties = {
  /**
  *
  */
  objectIdentifier: string,

  /**
  *
  */
  repositoryIdentifier: number

  /**
  *
  */
  message: string,

  /**
  *
  */
  timestamp: number,

  /**
  *
  */
  state: CommitState,

  /**
  *
  */
  reason: Error | undefined
}

/**
*
*/
const EMPTY_STRING: string = ''

/**
*
*/
const DEFAULT_PROPERTIES: CommitProperties = {
  objectIdentifier: EMPTY_STRING,
  repositoryIdentifier: 0,
  message: EMPTY_STRING,
  timestamp: 0,
  state: CommitState.DEFAULT,
  reason: undefined
}

/**
*
*/
export class Commit extends Record(DEFAULT_PROPERTIES) {
  /**
  *
  */
  public getObjectIdentifier(): string {
    return this.get(Commit.Properties.OBJECT_IDENTIFIER)
  }

  /**
  *
  */
  public getRepositoryIdentifier(): number {
    return this.get(Commit.Properties.REPOSITORY_IDENTIFIER)
  }

  /**
  *
  */
  public getMessage(): string {
    return this.get(Commit.Properties.MESSAGE)
  }

  /**
  *
  */
  public getTimestamp(): number {
    return this.get(Commit.Properties.TIMESTAMP)
  }

  /**
  *
  */
  public getState(): CommitState {
    return this.get(Commit.Properties.STATE)
  }

  /**
  *
  */
  public getReason(): Error | undefined {
    return this.get(Commit.Properties.REASON)
  }

  /**
  *
  */
  public extractBooks(): Commit {
    switch (this.get(Commit.Properties.STATE)) {
      case CommitState.HOLLOW:
        return this.set(Commit.Properties.STATE, CommitState.BOOKS_EXTRACTION_REQUESTED)
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
  public extractingBooks(): Commit {
    switch (this.get(Commit.Properties.STATE)) {
      case CommitState.BOOKS_EXTRACTION_REQUESTED:
        return this.set(Commit.Properties.STATE, CommitState.EXTRACTING_BOOKS)
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
  public booksExtracted(): Commit {
    switch (this.get(Commit.Properties.STATE)) {
      case CommitState.EXTRACTING_BOOKS:
        return this.set(Commit.Properties.STATE, CommitState.BOOKS_EXTRACTED)
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
  public booksExtractionFailure(reason: Error): Commit {
    switch (this.get(Commit.Properties.STATE)) {
      case CommitState.EXTRACTING_BOOKS:
        return (
          this.asMutable()
            .set(Commit.Properties.STATE, CommitState.BOOKS_EXTRACTION_FAILURE)
            .set(Commit.Properties.REASON, reason)
            .asImmutable()
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
  public ready(): Commit {
    switch (this.get(Commit.Properties.STATE)) {
      case CommitState.BOOKS_EXTRACTED:
        return this.set(Commit.Properties.STATE, CommitState.READY)
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
      this.get(Commit.Properties.REPOSITORY_IDENTIFIER) + ' ' +
      this.get(Commit.Properties.OBJECT_IDENTIFIER) + ' ' +
      CommitState.toDebugString(this.get(Commit.Properties.STATE))
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
  export type Properties = CommitProperties

  /**
  *
  */
  export function getRepositoryIdentifier(commit: Commit): number {
    return commit.getRepositoryIdentifier()
  }

  /**
  *
  */
  export function getObjectIdentifier(commit: Commit): string {
    return commit.getObjectIdentifier()
  }

  /**
  *
  */
  export namespace Properties {
    /**
    *
    */
    export const OBJECT_IDENTIFIER: 'objectIdentifier' = 'objectIdentifier'

    /**
    *
    */
    export const REPOSITORY_IDENTIFIER: 'repositoryIdentifier' = 'repositoryIdentifier'

    /**
    *
    */
    export const MESSAGE: 'message' = 'message'

    /**
    *
    */
    export const TIMESTAMP: 'timestamp' = 'timestamp'

    /**
    *
    */
    export const STATE: 'state' = 'state'

    /**
    *
    */
    export const REASON: 'reason' = 'reason'

    /**
    *
    */
    export const ALL: string[] = [
      OBJECT_IDENTIFIER,
      REPOSITORY_IDENTIFIER,
      MESSAGE,
      TIMESTAMP,
      STATE,
      REASON
    ]
  }
}
