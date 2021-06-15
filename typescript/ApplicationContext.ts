import { ApplicationStore } from './application/ApplicationStore'
import { ApplicationServiceMiddleware } from './application/service/ApplicationServiceMiddleware'
import { ApplicationReducer } from './redux/application/ApplicationReducer'

import { GitService } from './service/GitService'

import { Application } from './state/application'
import { ApplicationTriggerMiddleware } from './application'

/**
 * 
 */
export class ApplicationContext {
  /**
   * 
   */
  public readonly store: ApplicationStore<Application>

  /**
   * 
   */
  public readonly services: ApplicationServiceMiddleware<Application>

  /**
   * 
   */
  public readonly triggers: ApplicationTriggerMiddleware<Application>

  /**
   * 
   */
  public readonly git: GitService

  /**
   * 
   */
  public constructor() {
    this.store = new ApplicationStore(ApplicationReducer.reduce, Application.EMPTY)
    this.services = new ApplicationServiceMiddleware()
    this.triggers = new ApplicationTriggerMiddleware()

    this.store.addMiddleware(this.services)
    this.store.addMiddleware(this.triggers)

    this.git = new GitService(this.triggers)

    this.services.registerService(this.git)
  }
}
