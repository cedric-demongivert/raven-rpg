import { ApplicationStore } from './ApplicationStore'
import { ApplicationEvent } from './ApplicationEvent'

/**
*
*/
export class ApplicationPublication<State = any, Event extends ApplicationEvent = ApplicationEvent> {
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
  public static create<State, Event extends ApplicationEvent>(store: ApplicationStore<State>, event: Event): ApplicationPublication<State, Event> {
    return new ApplicationPublication(store, event)
  }

  /**
  *
  */
  private constructor(store: ApplicationStore<State>, event: Event) {
    this.store = store
    this.event = event
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof ApplicationPublication) {
      return (
        other.store === this.store &&
        other.event.equals(this.event)
      )
    }
  }
}
