import { Store } from 'redux'
import { PreloadedState } from 'redux'
import { Observable } from 'redux'
import { createStore } from 'redux'

import { ApplicationReducer } from './ApplicationReducer'
import { ApplicationEvent } from './ApplicationEvent'
import { ApplicationMiddleware } from './ApplicationMiddleware'
import { ApplicationPublication } from './ApplicationPublication'
import { ApplicationTrigger } from './ApplicationTrigger'
import { ApplicationTriggerHandler } from './ApplicationTriggerHandler'

/**
*
*/
export class ApplicationStore<State = any> {
  /**
  *
  */
  private _store: Store<State, ApplicationEvent>

  /**
  *
  */
  private readonly _middlewares: Set<ApplicationMiddleware<State>>

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
  private _reducer: ApplicationReducer<State>

  /**
  *
  */
  public readonly preloadedState: PreloadedState<State>

  /**
  *
  */
  public constructor(reducer: ApplicationReducer<State>, preloadedState: PreloadedState<State> = undefined) {
    this._reducer = reducer
    this.preloadedState = preloadedState
    this._store = createStore(reducer, preloadedState)
    this._middlewares = new Set()
    this._triggers = new Set()
    this._nextTriggers = new Set()
  }

  /**
  *
  */
  public trigger<Result>(trigger: ApplicationTrigger<Result, State>): Promise<Result> {
    const handler: ApplicationTriggerHandler<Result, State> = new ApplicationTriggerHandler(trigger)

    handler.afterStart(this.getState())

    if (handler.running) {
      this._triggers.add(handler)
    }

    return handler.promise
  }

  /**
  *
  */
  public addMiddleware(middleware: ApplicationMiddleware<State>): void {
    this._middlewares.add(middleware)
  }

  /**
  *
  */
  public deleteMiddleware(middleware: ApplicationMiddleware<State>): void {
    this._middlewares.delete(middleware)
  }


  /**
  *
  */
  public dispatch<Event extends ApplicationEvent>(event: Event): Event {
    const publication: ApplicationPublication<State> = new ApplicationPublication(this, event)

    for (const middleware of this._middlewares) {
      middleware.beforeReduction(publication)
    }

    this._store.dispatch(event)

    for (const middleware of this._middlewares) {
      middleware.afterReduction(publication)
    }

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

    return event
  }

  /**
  *
  */
  public getState(): State {
    return this._store.getState()
  }

  /**
  *
  */
  public subscribe(listener: () => void): () => void {
    return this._store.subscribe(listener)
  }

  /**
  *
  */
  public replaceReducer(reducer: ApplicationReducer<State>): void {
    this._reducer = reducer
    this._store.replaceReducer(reducer)
  }

  /**
  * @see redux.Store[Symbol.observable]
  */
  public [Symbol.observable](): Observable<State> {
    return this._store[Symbol.observable]()
  }
}

export namespace ApplicationStore {
  /**
  *
  */
  export function create<State>(reducer: ApplicationReducer<State>, preloadedState: PreloadedState<State> = undefined): ApplicationStore<State> {
    return new ApplicationStore(reducer, preloadedState)
  }
}
