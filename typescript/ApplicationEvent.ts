/**
*
*/
export type ApplicationEvent<Payload = any> = {
  /**
  *
  */
  type: string,

  /**
  *
  */
  payload: Payload
}
