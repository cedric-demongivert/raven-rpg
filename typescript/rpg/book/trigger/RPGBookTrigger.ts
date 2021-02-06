import { Application } from '../../../application/Application'

import { Entry } from '../../../data/Entry'

import { ApplicationTrigger } from '../../../ApplicationTrigger'

import { RPGBook } from '../RPGBook'

import { RPGBookExtractingContentTrigger } from './RPGBookExtractingContentTrigger'

/**
*
*/
export namespace RPGBookTrigger {
  /**
  *
  */
  export function extractingContent(commit: Entry<RPGBook> | number): ApplicationTrigger<void, Application> {
    return new RPGBookExtractingContentTrigger(commit)
  }
}
