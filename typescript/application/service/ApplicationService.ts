import { ApplicationPublication } from '../ApplicationPublication'
import { ApplicationStore } from '../ApplicationStore'

export interface ApplicationService<State> {
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