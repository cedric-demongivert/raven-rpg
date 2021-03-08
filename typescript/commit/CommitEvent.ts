import { ApplicationEvent } from '../ApplicationEvent'

import { Entry } from '../data/Entry'
import { Reference } from '../data/Reference'

import { Commit } from './Commit'
import { CommitAction } from './CommitAction'

export namespace CommitEvent {
  /**
  *
  */
  export type Extracted = ApplicationEvent<Commit>

  /**
  *
  */
  export type ExtractBooks = ApplicationEvent<Reference<Commit>>

  /**
  *
  */
  export type ExtractingBooks = ApplicationEvent<Reference<Commit>>

  /**
  *
  */
  export type BooksExtracted = ApplicationEvent<Reference<Commit>>

  /**
  *
  */
  export type BooksExtractionFailure = ApplicationEvent<{
    commit: Reference<Commit>,
    reason: Error
  }>

  /**
  *
  */
  export type Ready = ApplicationEvent<Reference<Commit>>

  /**
  *
  */
  export function extracted(commit: Commit): Extracted {
    return {
      type: CommitAction.EXTRACTED,
      payload: commit
    }
  }

  /**
  *
  */
  export function extractBooks(parameter: Entry<Commit> | number): ExtractBooks {
    return {
      type: CommitAction.EXTRACT_BOOKS,
      payload: Reference.get(parameter)
    }
  }

  /**
  *
  */
  export function extractingBooks(parameter: Entry<Commit> | number): ExtractBooks {
    return {
      type: CommitAction.EXTRACTING_BOOKS,
      payload: Reference.get(parameter)
    }
  }

  /**
  *
  */
  export function booksExtracted(parameter: Entry<Commit> | number): ExtractBooks {
    return {
      type: CommitAction.BOOKS_EXTRACTED,
      payload: Reference.get(parameter)
    }
  }

  /**
  *
  */
  export function booksExtractionFailure(parameter: Entry<Commit> | number, reason: Error): BooksExtractionFailure {
    return {
      type: CommitAction.BOOKS_EXTRACTION_FAILURE,
      payload: {
        commit: Reference.get(parameter),
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
      payload: Reference.get(parameter)
    }
  }
}
