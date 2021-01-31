import { ApplicationEvent } from '../ApplicationEvent'

import { Entry } from '../data/Entry'

import { Commit } from '../commit/Commit'
import { Internationalization } from '../Internationalization'

import { Document } from '../hypertext/Document'
import { Hypertext } from '../hypertext/Hypertext'

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
  export type ContentExtracted = ApplicationEvent<{ book: number, document: Document }>

  /**
  *
  */
  export type ContentExtractionFailure = ApplicationEvent<{ book: number, reason: Error }>

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
  export function extractContent(payload: Entry<Book>): ExtractContent
  /**
  *
  */
  export function extractContent(identifier: number): ExtractContent
  /**
  *
  */
  export function extractContent(parameter: Entry<Book> | number): ExtractContent
  export function extractContent(parameter: Entry<Book> | number): ExtractContent {
    return {
      type: BookAction.EXTRACT_CONTENT,
      payload: Entry.identifier(parameter)
    }
  }

  /**
  *
  */
  export function extractingContent(payload: Entry<Book>): ExtractingContent
  /**
  *
  */
  export function extractingContent(identifier: number): ExtractingContent
  /**
  *
  */
  export function extractingContent(parameter: Entry<Book> | number): ExtractingContent
  export function extractingContent(parameter: Entry<Book> | number): ExtractingContent {
    return {
      type: BookAction.EXTRACTING_CONTENT,
      payload: Entry.identifier(parameter)
    }
  }

  /**
  *
  */
  export function contentExtracted(payload: Entry<Book>, document: Document): ContentExtracted
  /**
  *
  */
  export function contentExtracted(identifier: number, document: Document): ContentExtracted
  /**
  *
  */
  export function contentExtracted(parameter: Entry<Book> | number, document: Document): ContentExtracted
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
  export function contentExtractionFailure(payload: Entry<Book>, reason: Error): ContentExtractionFailure
  /**
  *
  */
  export function contentExtractionFailure(identifier: number, reason: Error): ContentExtractionFailure
  /**
  *
  */
  export function contentExtractionFailure(parameter: Entry<Book> | number, reason: Error): ContentExtractionFailure
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
  export function ready(payload: Entry<Book>): Ready
  /**
  *
  */
  export function ready(identifier: number): Ready
  /**
  *
  */
  export function ready(parameter: Entry<Book> | number): Ready
  export function ready(parameter: Entry<Book> | number): Ready {
    return {
      type: BookAction.READY,
      payload: Entry.identifier(parameter)
    }
  }
}
