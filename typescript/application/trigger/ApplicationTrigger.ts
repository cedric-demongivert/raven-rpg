import { ApplicationTriggerListener } from './ApplicationTriggerListener'
import { ApplicationPublication } from '../ApplicationPublication'

/**
*
*/
export interface ApplicationTrigger<Result = any, State = any> {
  /**
  *
  */
  afterStart(listener: ApplicationTriggerListener<Result>, state: State): void

  /**
  *
  */
  afterReduction(listener: ApplicationTriggerListener<Result>, publication: ApplicationPublication<State>): void
}
