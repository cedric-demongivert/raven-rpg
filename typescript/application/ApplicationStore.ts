import { Store } from 'redux'
import { PreloadedState } from 'redux'
import { Observable } from 'redux'
import { createStore } from 'redux'

import { ApplicationReducer } from './ApplicationReducer'
import { ApplicationEvent } from './ApplicationEvent'
import { ApplicationMiddleware } from './ApplicationMiddleware'
import { ApplicationPublication } from './ApplicationPublication'

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
  }

  /**
  *
  */
  public addMiddleware(middleware: ApplicationMiddleware<State>): void {
    this._middlewares.add(middleware)
    middleware.afterSubscription(this)
  }

  /**
  *
  */
  public deleteMiddleware(middleware: ApplicationMiddleware<State>): void {
    middleware.beforeUnsubscription(this)
    this._middlewares.delete(middleware)
  }


  /**
  *
  */
  public dispatch<Event extends ApplicationEvent>(event: Event): Event {
    const publication: ApplicationPublication<State, Event> = ApplicationPublication.create(this, event)

    for (const middleware of this._middlewares) {
      middleware.beforeReduction(publication)
    }

    this._store.dispatch(event)

    for (const middleware of this._middlewares) {
      middleware.afterReduction(publication)
    }

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
