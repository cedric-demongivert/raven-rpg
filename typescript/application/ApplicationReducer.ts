import { ApplicationEvent } from './ApplicationEvent'

/**
*
*/
export type ApplicationReducer<State = any> = (state: State | undefined, action: ApplicationEvent) => State

/**
 * 
 */
export namespace ApplicationReducer {
  /**
   * 
   */
  export function identity(state: any, action: ApplicationEvent): any {
    return state
  }
}