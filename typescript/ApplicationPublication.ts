import { ApplicationStore } from './ApplicationStore'
import { ApplicationEvent } from './ApplicationEvent'

/**
*
*/
export class ApplicationPublication<State = any, Event extends ApplicationEvent = ApplicationEvent>
{
  /**
  *
  */
  public readonly store: ApplicationStore<State>

  /**
  *
  */
  public readonly event: Event

  /**
  *
  */
  public constructor(store: ApplicationStore<State>, event: Event) {
    this.store = store
    this.event = event
  }
}
