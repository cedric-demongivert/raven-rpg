/**
*
*/
export type ApplicationEvent<Type = any, Payload = any> = {
  /**
  *
  */
  type: Type,

  /**
  *
  */
  payload: Payload
}
