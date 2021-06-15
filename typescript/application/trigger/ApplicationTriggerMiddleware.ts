import { ApplicationEvent } from '../ApplicationEvent'
import { ApplicationMiddleware } from '../ApplicationMiddleware'
import { ApplicationPublication } from '../ApplicationPublication'
import { ApplicationStore } from '../ApplicationStore'

import { ApplicationTrigger } from './ApplicationTrigger'
import { ApplicationTriggerHandler } from './ApplicationTriggerHandler'

export class ApplicationTriggerMiddleware<State> implements ApplicationMiddleware<State> {
  /**
  *
  */
  private _triggers: Set<ApplicationTriggerHandler<any, State>>

  /**
  *
  */
  private _nextTriggers: Set<ApplicationTriggerHandler<any, State>>

  /**
   * 
   */
  private _store: ApplicationStore<State> | undefined

  /**
   * 
   */
  public constructor() {
    this._triggers = new Set()
    this._nextTriggers = new Set()
    this._store = undefined
  }

  /**
   * 
   */
  public afterSubscription(store: ApplicationStore<State>): void {
    this._store = store

    for (const trigger of this._triggers) {
      trigger.afterStart(store.getState())
    }
  }

  /**
   * 
   */
  public beforeUnsubscription(store: ApplicationStore<State>): void {
    this._store = undefined
  }

  /**
  *
  */
  public trigger<Result>(trigger: ApplicationTrigger<Result, State>): Promise<Result> {
    const handler: ApplicationTriggerHandler<Result, State> = new ApplicationTriggerHandler(trigger)

    if (this._store) {
      handler.afterStart(this._store.getState())
    }

    if (handler.running) {
      this._triggers.add(handler)
    }

    return handler.promise
  }

  /**
   * 
   */
  public beforeReduction(publication: ApplicationPublication<State, ApplicationEvent<any, any>>): void {

  }

  /**
   * 
   */
  public afterReduction(publication: ApplicationPublication<State, ApplicationEvent<any, any>>): void {
    const nextTriggers: Set<ApplicationTriggerHandler<any, State>> = this._nextTriggers
    const triggers: Set<ApplicationTriggerHandler<any, State>> = this._triggers

    for (const trigger of triggers) {
      trigger.afterReduction(publication)

      if (trigger.running) {
        nextTriggers.add(trigger)
      }
    }

    triggers.clear()
    this._nextTriggers = triggers
    this._triggers = nextTriggers
  }
}