import { ApplicationEvent } from '../../ApplicationEvent'

import { Entry } from '../../data/Entry'

import { RPGDocument } from '../RPGDocument'

import { RPGBook } from './RPGBook'
import { RPGBookAction } from './RPGBookAction'

export namespace RPGBookEvent {
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
    document: RPGDocument
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
  export function extractContent(parameter: Entry<RPGBook> | number): ExtractContent {
    return {
      type: RPGBookAction.EXTRACT_CONTENT,
      payload: Entry.identifier(parameter)
    }
  }

  /**
  *
  */
  export function extractingContent(parameter: Entry<RPGBook> | number): ExtractingContent {
    return {
      type: RPGBookAction.EXTRACTING_CONTENT,
      payload: Entry.identifier(parameter)
    }
  }

  /**
  *
  */
  export function contentExtracted(parameter: Entry<RPGBook> | number, document: RPGDocument): ContentExtracted {
    return {
      type: RPGBookAction.CONTENT_EXTRACTED,
      payload: {
        book: Entry.identifier(parameter),
        document
      }
    }
  }

  /**
  *
  */
  export function contentExtractionFailure(parameter: Entry<RPGBook> | number, reason: Error): ContentExtractionFailure {
    return {
      type: RPGBookAction.CONTENT_EXTRACTION_FAILURE,
      payload: {
        book: Entry.identifier(parameter),
        reason
      }
    }
  }

  /**
  *
  */
  export function ready(parameter: Entry<RPGBook> | number): Ready {
    return {
      type: RPGBookAction.READY,
      payload: Entry.identifier(parameter)
    }
  }
}
