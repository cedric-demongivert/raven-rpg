import { ApplicationEvent } from '../ApplicationEvent'
import { ApplicationMiddleware } from '../ApplicationMiddleware'
import { ApplicationPublication } from '../ApplicationPublication'
import { ApplicationStore } from '../ApplicationStore'

import { ApplicationService } from './ApplicationService'

/**
 * 
 */
export class ApplicationServiceMiddleware<State> implements ApplicationMiddleware<State> {
  /**
  *
  */
  private readonly _services: Set<ApplicationService<State>>

  /**
   * 
   */
  private _store: ApplicationStore<State> | undefined

  /**
   * 
   */
  public constructor() {
    this._services = new Set()
  }

  /**
   * 
   */
  public afterSubscription(store: ApplicationStore<State>): void {
    this._store = store

    for (const service of this._services) {
      service.afterSubscription(store)
    }
  }

  /**
   * 
   */
  public beforeUnsubscription(store: ApplicationStore<State>): void {
    for (const service of this._services) {
      service.beforeUnsubscription(store)
    }

    this._store = undefined
  }

  /**
  *
  */
  public registerService<Result>(service: ApplicationService<State>): void {
    this._services.add(service)

    if (this._store) {
      service.afterSubscription(this._store)
    }
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
    for (const service of this._services) {
      service.afterReduction(publication)
    }
  }
}