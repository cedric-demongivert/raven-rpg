import { ApplicationTrigger } from '../../ApplicationTrigger'

import { Book } from '../Book'
import { Application } from '../../application/Application'
import { Entry } from '../../data/Entry'

import { BookExtractingContentTrigger } from './BookExtractingContentTrigger'

/**
*
*/
export namespace BookTrigger {
  /**
  *
  */
  export function extractingContent(commit: Entry<Book> | number): ApplicationTrigger<void, Application> {
    return new BookExtractingContentTrigger(commit)
  }
}
