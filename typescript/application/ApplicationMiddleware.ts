import { ApplicationStore } from './ApplicationStore'
import { ApplicationPublication } from './ApplicationPublication'

/**
*
*/
export interface ApplicationMiddleware<State = any> {
  /**
  *
  */
  beforeReduction(publication: ApplicationPublication<State>): void

  /**
  *
  */
  afterReduction(publication: ApplicationPublication<State>): void

  /**
  *
  */
  afterSubscription(store: ApplicationStore<State>): void

  /**
  *
  */
  beforeUnsubscription(store: ApplicationStore<State>): void
}
