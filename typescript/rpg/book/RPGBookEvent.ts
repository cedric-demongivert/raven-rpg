import { ApplicationEvent } from '../../ApplicationEvent'

import { Entry } from '../../data/Entry'
import { Reference } from '../../data/Reference'

import { RPGDocument } from '../RPGDocument'

import { RPGBook } from './RPGBook'
import { RPGBookAction } from './RPGBookAction'

export namespace RPGBookEvent {
  /**
  *
  */
  export type ExtractContent = ApplicationEvent<Reference<RPGBook>>

  /**
  *
  */
  export type ExtractingContent = ApplicationEvent<Reference<RPGBook>>

  /**
  *
  */
  export type ContentExtracted = ApplicationEvent<{
    book: Reference<RPGBook>,
    document: RPGDocument
  }>

  /**
  *
  */
  export type ContentExtractionFailure = ApplicationEvent<{
    book: Reference<RPGBook>,
    reason: Error
  }>

  /**
  *
  */
  export type Ready = ApplicationEvent<Reference<RPGBook>>

  /**
  *
  */
  export function extractContent(parameter: Entry<RPGBook> | number): ExtractContent {
    return {
      type: RPGBookAction.EXTRACT_CONTENT,
      payload: Reference.identifier(parameter)
    }
  }

  /**
  *
  */
  export function extractingContent(parameter: Entry<RPGBook> | number): ExtractingContent {
    return {
      type: RPGBookAction.EXTRACTING_CONTENT,
      payload: Reference.identifier(parameter)
    }
  }

  /**
  *
  */
  export function contentExtracted(parameter: Entry<RPGBook> | number, document: RPGDocument): ContentExtracted {
    return {
      type: RPGBookAction.CONTENT_EXTRACTED,
      payload: {
        book: Reference.identifier(parameter),
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
        book: Reference.identifier(parameter),
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
      payload: Reference.identifier(parameter)
    }
  }
}
