import { Record } from 'immutable'

import { TaskState } from './TaskState'

/**
*
*/
type TaskProperties<T> = {
  /**
  * The local identifier associated to this task.
  */
  identifier: number,

  /**
  * The human readable name associated to this stask.
  */
  name: string,

  /**
  * The definition of this task.
  */
  definition: Task.Definition<T>,

  /**
  * The current state of this task.
  */
  state: TaskState,

  /**
  * Reason of a failure or a cancellation, if any.
  */
  reason: Error | null,

  /**
  * Result of the task, if any.
  */
  result: T | null
}

/**
*
*/
const DEFAULT_NAME: string = 'task:anonymous'

/**
*
*/
function emptyDefinition<T>(success: Task.SuccessCallback<T>): void {
  success(null)
}

/**
*
*/
const DEFAULT_PROPERTIES: TaskProperties<any> = {
  identifier: 0,
  name: DEFAULT_NAME,
  definition: emptyDefinition,
  state: TaskState.RUNNING,
  reason: null,
  result: null
}

/**
*
*/
export class Task<T = any> extends Record(DEFAULT_PROPERTIES) {
  /**
  *
  */
  public getIdentifier(): number {
    return this.get(Task.Properties.IDENTIFIER)
  }

  /**
  *
  */
  public getName(): string {
    return this.get(Task.Properties.NAME)
  }

  /**
  *
  */
  public getDefinition(): Task.Definition<T> {
    return this.get(Task.Properties.DEFINITION)
  }

  /**
  *
  */
  public getState(): TaskState {
    return this.get(Task.Properties.STATE)
  }

  /**
  *
  */
  public getReason(): Error | null {
    return this.get(Task.Properties.REASON)
  }

  /**
  *
  */
  public getResult(): T | null {
    return this.get(Task.Properties.RESULT)
  }

  /**
  *
  */
  public run(): Task<T> {
    switch (this.get(Task.Properties.STATE)) {
      case TaskState.CREATED:
        return this.set(Task.Properties.STATE, TaskState.RUNNING)
      case TaskState.RUNNING:
      case TaskState.CANCELING:
        throw new Error(
          'Unable to start task ' + this.toDebugString() + ' because this ' +
          'task was alreay started. You may have a problem somewhere into ' +
          'your workflow.'
        )
      case TaskState.SUCCESS:
      case TaskState.FAILURE:
      case TaskState.CANCELED:
        throw new Error(
          'Unable to start task ' + this.toDebugString() + ' because this ' +
          'task was alreay resolved. You may have a problem somewhere into ' +
          'your workflow.'
        )
      default:
        throw new Error(
          'Unable to start task ' + this.toDebugString() + ' because no ' +
          'procedure exists for handling tasks in state ' +
          TaskState.toDebugString(this.get(Task.Properties.STATE)) + '.'
        )
    }
  }

  /**
  *
  */
  public cancel(reason: Error | null = null): Task<T> {
    switch (this.get(Task.Properties.STATE)) {
      case TaskState.CREATED:
        throw new Error(
          'Unable to cancel task ' + this.toDebugString() + ' because this ' +
          'task was not started. You may have a problem somewhere into ' +
          'your workflow.'
        )
      case TaskState.RUNNING:
        return (
          this.asMutable()
            .set(Task.Properties.STATE, TaskState.CANCELING)
            .set(Task.Properties.REASON, reason)
            .asImmutable()
        )
      case TaskState.CANCELING:
        throw new Error(
          'Unable to cancel task ' + this.toDebugString() + ' because this ' +
          'task was alreay canceled. You may have a problem somewhere into ' +
          'your workflow.'
        )
      case TaskState.SUCCESS:
      case TaskState.FAILURE:
      case TaskState.CANCELED:
        throw new Error(
          'Unable to cancel task ' + this.toDebugString() + ' because this ' +
          'task was alreay resolved. You may have a problem somewhere into ' +
          'your workflow.'
        )
      default:
        throw new Error(
          'Unable to cancel task ' + this.toDebugString() + ' because no ' +
          'procedure exists for handling tasks in state ' +
          TaskState.toDebugString(this.get(Task.Properties.STATE)) + '.'
        )
    }
  }

  /**
  *
  */
  public resume(): Task<T> {
    switch (this.get(Task.Properties.STATE)) {
      case TaskState.CREATED:
        throw new Error(
          'Unable to resume task ' + this.toDebugString() + ' because this ' +
          'task was not started. You may have a problem somewhere into ' +
          'your workflow.'
        )
      case TaskState.RUNNING:
        throw new Error(
          'Unable to resume task ' + this.toDebugString() + ' because this ' +
          'task was not canceled. You may have a problem somewhere into ' +
          'your workflow.'
        )
      case TaskState.CANCELING:
        return (
          this.asMutable()
            .set(Task.Properties.STATE, TaskState.RUNNING)
            .set(Task.Properties.REASON, null)
            .asImmutable()
        )
      case TaskState.SUCCESS:
      case TaskState.FAILURE:
      case TaskState.CANCELED:
        throw new Error(
          'Unable to resume task ' + this.toDebugString() + ' because this ' +
          'task was alreay resolved. You may have a problem somewhere into ' +
          'your workflow.'
        )
      default:
        throw new Error(
          'Unable to resume task ' + this.toDebugString() + ' because no ' +
          'procedure exists for handling tasks in state ' +
          TaskState.toDebugString(this.get(Task.Properties.STATE)) + '.'
        )
    }
  }

  /**
  *
  */
  public success(result: T | null = null): Task<T> {
    switch (this.state) {
      case TaskState.CREATED:
        throw new Error(
          'Unable to resolve task ' + this.toDebugString() + ' as a success ' +
          'because this task was not started. You may have a problem ' +
          'somewhere into your workflow.'
        )
      case TaskState.RUNNING:
        return (
          this.asMutable()
            .set(Task.Properties.STATE, TaskState.SUCCESS)
            .set(Task.Properties.RESULT, result)
            .asImmutable()
        )
      case TaskState.CANCELING:
        throw new Error(
          'Unable to resolve task ' + this.toDebugString() + ' as a success ' +
          'because this task was canceled. You may have a problem ' +
          'somewhere into your workflow.'
        )
      case TaskState.SUCCESS:
      case TaskState.FAILURE:
      case TaskState.CANCELED:
        throw new Error(
          'Unable to resolve task ' + this.toDebugString() + ' as a success ' +
          'because this task was already resolved. You may have a problem ' +
          'somewhere into your workflow.'
        )
      default:
        throw new Error(
          'Unable to resolve task ' + this.toDebugString() + ' as a success ' +
          'because no procedure exists for handling tasks in state ' +
          TaskState.toDebugString(this.get(Task.Properties.STATE)) + '.'
        )
    }
  }

  /**
  *
  */
  public fail(reason: Error | null): Task<T> {
    switch (this.state) {
      case TaskState.CREATED:
        throw new Error(
          'Unable to resolve task ' + this.toDebugString() + ' as a failure ' +
          'because this task was not started. You may have a problem ' +
          'somewhere into your workflow.'
        )
      case TaskState.RUNNING:
        return (
          this.asMutable()
            .set(Task.Properties.STATE, TaskState.FAILURE)
            .set(Task.Properties.REASON, reason)
            .asImmutable()
        )
      case TaskState.CANCELING:
        throw new Error(
          'Unable to resolve task ' + this.toDebugString() + ' as a failure ' +
          'because this task was canceled. You may have a problem ' +
          'somewhere into your workflow.'
        )
      case TaskState.SUCCESS:
      case TaskState.FAILURE:
      case TaskState.CANCELED:
        throw new Error(
          'Unable to resolve task ' + this.toDebugString() + ' as a failure ' +
          'because this task was already resolved. You may have a problem ' +
          'somewhere into your workflow.'
        )
      default:
        throw new Error(
          'Unable to resolve task ' + this.toDebugString() + ' as a failure ' +
          'because no procedure exists for handling tasks in state ' +
          TaskState.toDebugString(this.get(Task.Properties.STATE)) + '.'
        )
    }
  }

  /**
  *
  */
  public canceled(): Task<T> {
    switch (this.state) {
      case TaskState.CREATED:
        throw new Error(
          'Unable to resolve task ' + this.toDebugString() + ' as canceled ' +
          'because this task was not started. You may have a problem ' +
          'somewhere into your workflow.'
        )
      case TaskState.CANCELING:
        return this.set(Task.Properties.STATE, TaskState.CANCELED)
      case TaskState.RUNNING:
        throw new Error(
          'Unable to resolve task ' + this.toDebugString() + ' as canceled ' +
          'because this task does not intend to be canceled. You may have ' +
          'a problem somewhere into your workflow.'
        )
      case TaskState.SUCCESS:
      case TaskState.FAILURE:
      case TaskState.CANCELED:
        throw new Error(
          'Unable to resolve task ' + this.toDebugString() + ' as canceled ' +
          'because this task was already resolved. You may have a problem ' +
          'somewhere into your workflow.'
        )
      default:
        throw new Error(
          'Unable to resolve task ' + this.toDebugString() + ' as canceled ' +
          'because no procedure exists for handling tasks in state ' +
          TaskState.toDebugString(this.get(Task.Properties.STATE)) + '.'
        )
    }
  }

  /**
  *
  */
  public toPromise(): Promise<T> {
    return new Promise<T>(this.get(Task.Properties.DEFINITION))
  }

  /**
  *
  */
  public toDebugString(): string {
    return (
      this.constructor.toString() + ' #' +
      this.get(Task.Properties.IDENTIFIER) + ' ' +
      this.get(Task.Properties.NAME) + ' ' +
      TaskState.toDebugString(this.get(Task.Properties.STATE))
    )
  }
}

export namespace Task {
  /**
  * The definition of a task.
  */
  export type Definition<T> = (success: SuccessCallback<T>, failure: FailureCallback) => void

  /**
  * A function to call after the completion of a task.
  */
  export type SuccessCallback<T> = (value: T) => void

  /**
  * A function to call when a task does not complete.
  */
  export type FailureCallback = (error: Error) => void

  /**
  *
  */
  export type Properties<T> = TaskProperties<T>

  /**
  *
  */
  export namespace Properties {
    /**
    *
    */
    export const IDENTIFIER: 'identifier' = 'identifier'
    /**
    *
    */
    export const NAME: 'name' = 'name'
    /**
    *
    */
    export const DEFINITION: 'definition' = 'definition'
    /**
    *
    */
    export const STATE: 'state' = 'state'
    /**
    *
    */
    export const REASON: 'reason' = 'reason'
    /**
    *
    */
    export const RESULT: 'result' = 'result'

    /**
    *
    */
    export const ALL: string[] = [
      IDENTIFIER,
      NAME,
      DEFINITION,
      STATE,
      REASON,
      RESULT
    ]
  }
}
