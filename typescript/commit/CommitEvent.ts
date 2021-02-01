import { ApplicationEvent } from '../ApplicationEvent'

import { Entry } from '../data/Entry'

import { Repository } from '../repository/Repository'

import { Commit } from './Commit'
import { CommitAction } from './CommitAction'

export namespace CommitEvent {
  /**
  *
  */
  export type Extracted = ApplicationEvent<{
    repositoryIdentifier: number,
    objectIdentifier: string,
    message: string,
    timestamp: number
  }>

  /**
  *
  */
  export type CommitData = {
    objectIdentifier: string,
    message: string,
    timestamp: number
  }

  /**
  *
  */
  export type ExtractBooks = ApplicationEvent<number>

  /**
  *
  */
  export type ExtractingBooks = ApplicationEvent<number>

  /**
  *
  */
  export type BooksExtracted = ApplicationEvent<number>

  /**
  *
  */
  export type BooksExtractionFailure = ApplicationEvent<{
    commit: number,
    reason: Error
  }>

  /**
  *
  */
  export type Ready = ApplicationEvent<number>

  /**
  *
  */
  export function extracted(repository: number | Entry<Repository>, commit: CommitData): Extracted {
    return {
      type: CommitAction.EXTRACTED,
      payload: {
        repositoryIdentifier: Entry.identifier(repository),
        ...commit
      }
    }
  }

  /**
  *
  */
  export function extractBooks(parameter: Entry<Commit> | number): ExtractBooks {
    return {
      type: CommitAction.EXTRACT_BOOKS,
      payload: Entry.identifier(parameter)
    }
  }

  /**
  *
  */
  export function extractingBooks(parameter: Entry<Commit> | number): ExtractBooks {
    return {
      type: CommitAction.EXTRACTING_BOOKS,
      payload: Entry.identifier(parameter)
    }
  }

  /**
  *
  */
  export function booksExtracted(parameter: Entry<Commit> | number): ExtractBooks {
    return {
      type: CommitAction.BOOKS_EXTRACTED,
      payload: Entry.identifier(parameter)
    }
  }

  /**
  *
  */
  export function booksExtractionFailure(parameter: Entry<Commit> | number, reason: Error): BooksExtractionFailure {
    return {
      type: CommitAction.BOOKS_EXTRACTION_FAILURE,
      payload: {
        commit: Entry.identifier(parameter),
        reason
      }
    }
  }

  /**
  *
  */
  export function ready(parameter: Entry<Commit> | number): Ready {
    return {
      type: CommitAction.READY,
      payload: Entry.identifier(parameter)
    }
  }
}
