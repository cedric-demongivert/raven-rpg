import { ApplicationEvent } from '../ApplicationEvent'

import { Entry } from '../data/Entry'

import { Document } from '../document/Document'

import { Book } from './Book'
import { BookAction } from './BookAction'

export namespace BookEvent {
  /**
  *
  */
  export type Extracted = ApplicationEvent<Book>

  /**
  *
  */
  export type ExtractContent = ApplicationEvent<number>

  /**
  *
  */
  export type ExtractingContent = ApplicationEvent<number>

  /**
  *
  */
  export type ContentExtracted = ApplicationEvent<{
    book: number,
    document: Document
  }>

  /**
  *
  */
  export type ContentExtractionFailure = ApplicationEvent<{
    book: number,
    reason: Error
  }>

  /**
  *
  */
  export type Ready = ApplicationEvent<number>

  /**
  *
  */
  export function extracted(book: Book): Extracted {
    return {
      type: BookAction.EXTRACTED,
      payload: book
    }
  }

  /**
  *
  */
  export function extractContent(parameter: Entry<Book> | number): ExtractContent {
    return {
      type: BookAction.EXTRACT_CONTENT,
      payload: Entry.identifier(parameter)
    }
  }

  /**
  *
  */
  export function extractingContent(parameter: Entry<Book> | number): ExtractingContent {
    return {
      type: BookAction.EXTRACTING_CONTENT,
      payload: Entry.identifier(parameter)
    }
  }

  /**
  *
  */
  export function contentExtracted(parameter: Entry<Book> | number, document: Document): ContentExtracted {
    return {
      type: BookAction.CONTENT_EXTRACTED,
      payload: {
        book: Entry.identifier(parameter),
        document
      }
    }
  }

  /**
  *
  */
  export function contentExtractionFailure(parameter: Entry<Book> | number, reason: Error): ContentExtractionFailure {
    return {
      type: BookAction.CONTENT_EXTRACTION_FAILURE,
      payload: {
        book: Entry.identifier(parameter),
        reason
      }
    }
  }

  /**
  *
  */
  export function ready(parameter: Entry<Book> | number): Ready {
    return {
      type: BookAction.READY,
      payload: Entry.identifier(parameter)
    }
  }
}
