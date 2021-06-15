import { equals as areEquals } from '../utils'

/**
*
*/
export type ApplicationEvent<Type = any, Payload = any> = {
  /**
  *
  */
  readonly type: Type

  /**
  *
  */
  readonly payload: Payload
}

/**
 * 
 */
export namespace ApplicationEvent {
  /**
   * 
   */
  export function equals(left: ApplicationEvent, right: ApplicationEvent): boolean {
    return (
      left.type === right.type &&
      areEquals(left.payload, right.payload)
    )
  }

  /**
   * 
   */
  export function create<Type, Payload = undefined>(type: Type, payload?: Payload): ApplicationEvent<Type, Payload> {
    return { type, payload }
  }
}