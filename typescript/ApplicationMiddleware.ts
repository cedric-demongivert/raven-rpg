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
}
