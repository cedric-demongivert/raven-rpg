import { ApplicationEvent } from './ApplicationEvent'

/**
*
*/
export type ApplicationReducer<State = any> = (state: State | undefined, action: ApplicationEvent) => State
