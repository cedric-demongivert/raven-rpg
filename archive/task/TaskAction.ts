export type TaskAction = string

export namespace TaskAction {
  /**
  *
  */
  export const CREATE: TaskAction = 'task:create'

  /**
  *
  */
  export const RUN: TaskAction = 'task:run'

  /**
  *
  */
  export const CANCEL: TaskAction = 'task:cancel'

  /**
  *
  */
  export const RESUME: TaskAction = 'task:resume'

  /**
  *
  */
  export const SUCCESS: TaskAction = 'task:success'

  /**
  *
  */
  export const FAILURE: TaskAction = 'task:failure'

  /**
  *
  */
  export const CANCELLATION: TaskAction = 'task:cancellation'

  /**
  *
  */
  export const REMOVE: TaskAction = 'task:remove'

  /**
  * A list of all available actions.
  */
  export const ALL: TaskAction[] = [
    CREATE,
    RUN,
    CANCEL,
    RESUME,
    SUCCESS,
    FAILURE,
    CANCELLATION,
    REMOVE
  ]
}
