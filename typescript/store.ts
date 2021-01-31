import { Application } from './application/Application'
import { ApplicationStore } from './ApplicationStore'
import { bootstrap } from './bootstrap'

export const store: ApplicationStore<Application> = bootstrap()
