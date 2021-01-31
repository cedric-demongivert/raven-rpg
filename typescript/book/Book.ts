import { Record } from 'immutable'

import { Document } from '../hypertext/Document'
import { Hypertext } from '../hypertext/Hypertext'

import { BookState } from './BookState'

type BookProperties = {
  /**
  *
  */
  commitIdentifier: number,

  /**
  *
  */
  rulesetIdentifier: string,

  /**
  *
  */
  content: string,

  /**
  *
  */
  state: BookState,

  /**
  *
  */
  lang: string,

  /**
  *
  */
  title: string,

  /**
  *
  */
  summary: Hypertext | undefined,

  /**
  *
  */
  document: Document | undefined
}

/**
*
*/
const EMPTY_STRING: string = ''

/**
*
*/
const DEFAULT_PROPERTIES: BookProperties = {
  commitIdentifier: 0,
  rulesetIdentifier: EMPTY_STRING,
  content: EMPTY_STRING,
  state: BookState.DEFAULT,
  lang: EMPTY_STRING,
  title: EMPTY_STRING,
  summary: undefined,
  document: undefined
}

/**
*
*/
export class Book extends Record(DEFAULT_PROPERTIES) {
  /**
  *
  */
  public getCommitIdentifier(): number {
    return this.get(Book.Properties.COMMIT_IDENTIFIER)
  }

  /**
  *
  */
  public getRulesetIdentifier(): string {
    return this.get(Book.Properties.RULESET_IDENTIFIER)
  }

  /**
  *
  */
  public getLang(): string {
    return this.get(Book.Properties.LANG)
  }

  /**
  *
  */
  public getTitle(): string {
    return this.get(Book.Properties.TITLE)
  }

  /**
  *
  */
  public getSummary(): Hypertext | undefined {
    return this.get(Book.Properties.SUMMARY)
  }

  /**
  *
  */
  public getContent(): string {
    return this.get(Book.Properties.CONTENT)
  }

  /**
  *
  */
  public getState(): BookState {
    return this.get(Book.Properties.STATE)
  }

  /**
  *
  */
  public getDocument(): Document | undefined {
    return this.get(Book.Properties.DOCUMENT)
  }

  /**
  *
  */
  public extractContent(): Book {
    switch (this.get(Book.Properties.STATE)) {
      case BookState.HOLLOW:
        return this.set(Book.Properties.STATE, BookState.CONTENT_EXTRACTION_REQUESTED)
      default:
        throw new Error(
          'Trying to illegaly move state of book ' + this.toString() + ' to ' +
          BookState.toDebugString(BookState.CONTENT_EXTRACTION_REQUESTED) +
          ' you may have a problem somewhere into your commit ' +
          'management workflow.'
        )
    }
  }

  /**
  *
  */
  public extractingContent(): Book {
    switch (this.get(Book.Properties.STATE)) {
      case BookState.CONTENT_EXTRACTION_REQUESTED:
        return this.set(Book.Properties.STATE, BookState.EXTRACTING_CONTENT)
      default:
        throw new Error(
          'Trying to illegaly move state of book ' + this.toString() + ' to ' +
          BookState.toDebugString(BookState.EXTRACTING_CONTENT) +
          ' you may have a problem somewhere into your commit ' +
          'management workflow.'
        )
    }
  }

  /**
  *
  */
  public contentExtracted(document: Document): Book {
    switch (this.get(Book.Properties.STATE)) {
      case BookState.EXTRACTING_CONTENT:
        return (
          this.asMutable()
            .set(Book.Properties.STATE, BookState.CONTENT_EXTRACTED)
            .set(Book.Properties.DOCUMENT, document)
            .asImmutable()
        )
      default:
        throw new Error(
          'Trying to illegaly move state of book ' + this.toString() + ' to ' +
          BookState.toDebugString(BookState.CONTENT_EXTRACTED) +
          ' you may have a problem somewhere into your commit ' +
          'management workflow.'
        )
    }
  }

  /**
  *
  */
  public contentExtractionFailure(reason: Error): Book {
    switch (this.get(Book.Properties.STATE)) {
      case BookState.EXTRACTING_CONTENT:
        return (
          this.asMutable()
            .set(Book.Properties.STATE, BookState.CONTENT_EXTRACTION_FAILURE)
            //.set(Book.Properties.REASON, reason)
            .asImmutable()
        )
      default:
        throw new Error(
          'Trying to illegaly move state of book ' + this.toString() + ' to ' +
          BookState.toDebugString(BookState.CONTENT_EXTRACTION_FAILURE) +
          ' you may have a problem somewhere into your commit ' +
          'management workflow.'
        )
    }
  }

  /**
  *
  */
  public ready(): Book {
    switch (this.get(Book.Properties.STATE)) {
      case BookState.CONTENT_EXTRACTED:
        return this.set(Book.Properties.STATE, BookState.READY)
      default:
        throw new Error(
          'Trying to illegaly move state of book ' + this.toString() + ' to ' +
          BookState.toDebugString(BookState.READY) +
          ' you may have a problem somewhere into your commit ' +
          'management workflow.'
        )
    }
  }
}

/**
*
*/
export namespace Book {
  /**
  *
  */
  export type Properties = BookProperties

  /**
  *
  */
  export function getCommitIdentifier(book: Book): number {
    return book.get(Properties.COMMIT_IDENTIFIER)
  }

  /**
  *
  */
  export function compareBookTitles(left: Book, right: Book): number {
    const leftTitle: string = left.getTitle()
    const rightTitle: string = right.getTitle()

    return leftTitle.localeCompare(rightTitle)
  }

  /**
  *
  */
  export namespace Properties {
    /**
    *
    */
    export const COMMIT_IDENTIFIER: 'commitIdentifier' = 'commitIdentifier'

    /**
    *
    */
    export const RULESET_IDENTIFIER: 'rulesetIdentifier' = 'rulesetIdentifier'

    /**
    *
    */
    export const CONTENT: 'content' = 'content'

    /**
    *
    */
    export const STATE: 'state' = 'state'

    /**
    *
    */
    export const DOCUMENT: 'document' = 'document'

    /**
    *
    */
    export const LANG: 'lang' = 'lang'

    /**
    *
    */
    export const TITLE: 'title' = 'title'

    /**
    *
    */
    export const SUMMARY: 'summary' = 'summary'

    /**
    *
    */
    export const ALL: string[] = [
      COMMIT_IDENTIFIER,
      RULESET_IDENTIFIER,
      CONTENT,
      STATE,
      DOCUMENT,
      LANG,
      TITLE,
      SUMMARY
    ]
  }
}
