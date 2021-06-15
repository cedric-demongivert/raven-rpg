import { TaskState } from './TaskState'

import { PendingTask } from './PendingTask'
import { ResolvedTask } from './ResolvedTask'
import { RunningTask } from './RunningTask'
import { RejectedTask } from './RejectedTask'
import { CancelingTask } from './CancelingTask'
import { CanceledTask } from './CanceledTask'

import { CancelableTask } from './CancelableTask'
import { RejectableTask } from './RejectableTask'
import { ResolvableTask } from './ResolvableTask'
import { RunnableTask } from './RunnableTask'
import { FinishedTask } from './FinishedTask'

/**
*
*/
export class Task<Properties extends Task.Properties> {
  /**
  *
  */
  readonly type: Properties['type']

  /**
  *
  */
  readonly state: Properties['state']

  /**
  *
  */
  readonly result: Properties['result']

  /**
  *
  */
  readonly reason: Properties['reason']

  /**
   * 
   */
  public static create<Properties extends Task.Properties>(properties: Properties): Task<Properties> {
    return new Task(properties)
  }

  /**
  *
  */
  private constructor(properties: Properties) {
    this.type = properties.type
    this.state = properties.state
    this.result = properties.result
    this.reason = properties.reason
  }

  /**
  *
  */
  public toString(typeFormatter: Task.TypeFormatter<Properties['type']> = Task.defaultTypeFormatter): string {
    const base: string = (
      this.constructor.name + ' ' + typeFormatter(this.type) + ' ' +
      TaskState.toDebugString(this.state)
    )

    switch (this.state) {
      case TaskState.CANCELED:
      case TaskState.CANCELING:
      case TaskState.REJECTED:
        return base + ' ' + this.reason.message
      default:
        return base
    }
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof Task) {
      return (
        other.type === this.type &&
        other.reason === this.reason &&
        other.result === this.result &&
        other.state === this.state
      )
    }

    return false
  }
}

export namespace Task {
  /**
  *
  */
  export type Properties<Type extends number = number, Result = any, Reason extends Error = Error> = (
    PendingTask.Properties<Type> |
    RunningTask.Properties<Type> |
    ResolvedTask.Properties<Type, Result> |
    RejectedTask.Properties<Type, Reason> |
    CancelingTask.Properties<Type, Reason> |
    CanceledTask.Properties<Type, Reason>
  )

  /**
  *
  */
  export type TypeFormatter<Type extends number = number> = (type: Type) => string

  /**
  *
  */
  export function defaultTypeFormatter(type: number): string {
    return '#' + type
  }

  /**
  *
  */
  export function is(value: any): value is Task<any> {
    return value instanceof Task
  }

  /**
  *
  */
  export function assert(value: any, message?: string | undefined): asserts value is Task<any> {
    if (!is(value)) {
      throw new Error(message || 'Parameter value is not a task.')
    }
  }

  /**
  *
  */
  export function isOfType<Properties extends Task.Properties, Type extends number = number>(task: Task<Properties>, type: Type): task is Task<Properties & Task.Any<Type>> {
    return task.type === type
  }

  /**
  *
  */
  export function assertOfType<Properties extends Task.Properties, Type extends number = number>(task: Task<Properties>, type: Type, message?: string | undefined): asserts task is Task<Properties & Task.Any<Type>> {
    if (!isOfType(task, type)) {
      throw new Error(message || 'Parameter task is not of the requested type.')
    }
  }

  /**
  *
  */
  export function isTaskOfType<Type extends number = number>(value: any, type: Type): value is Task.Any<Type> {
    return is(value) && isOfType(value, type)
  }

  /**
  *
  */
  export const isCancelable: typeof CancelableTask.is = CancelableTask.is

  /**
   * 
   */
  export const assertCancelable: typeof CancelableTask.assert = CancelableTask.assert

  /**
  *
  */
  export const isCanceled: typeof CanceledTask.is = CanceledTask.is

  /**
   * 
   */
  export const assertCanceled: typeof CanceledTask.assert = CanceledTask.assert

  /**
  *
  */
  export const isCanceling: typeof CancelingTask.is = CancelingTask.is

  /**
   * 
   */
  export const assertCanceling: typeof CancelingTask.assert = CancelingTask.assert

  /**
  *
  */
  export const isPending: typeof PendingTask.is = PendingTask.is

  /**
   * 
   */
  export const assertPending: typeof PendingTask.assert = PendingTask.assert

  /**
  *
  */
  export const isRejectable: typeof RejectableTask.is = RejectableTask.is

  /**
   * 
   */
  export const assertRejectable: typeof RejectableTask.assert = RejectableTask.assert

  /**
  *
  */
  export const isRejected: typeof RejectedTask.is = RejectedTask.is

  /**
   * 
   */
  export const assertRejected: typeof RejectedTask.assert = RejectedTask.assert

  /**
  *
  */
  export const isResolvable: typeof ResolvableTask.is = ResolvableTask.is

  /**
   * 
   */
  export const assertResolvable: typeof ResolvableTask.assert = ResolvableTask.assert

  /**
  *
  */
  export const isResolved: typeof ResolvedTask.is = ResolvedTask.is

  /**
   * 
   */
  export const assertResolved: typeof ResolvedTask.assert = ResolvedTask.assert

  /**
  *
  */
  export const isRunnable: typeof RunnableTask.is = RunnableTask.is

  /**
   * 
   */
  export const assertRunnable: typeof RunnableTask.assert = RunnableTask.assert

  /**
  *
  */
  export const isRunning: typeof RunningTask.is = RunningTask.is

  /**
   * 
   */
  export const assertRunning: typeof RunningTask.assert = RunningTask.assert

  /**
   * 
   */
  export const isFinished: typeof FinishedTask.is = FinishedTask.is

  /**
   * 
   */
  export const assertFinished: typeof FinishedTask.assert = FinishedTask.assert

  /**
  *
  */
  export type Any<Type extends number = number, Result = any> = (
    PendingTask<Type> |
    RunningTask<Type> |
    ResolvedTask<Type, Result> |
    RejectedTask<Type, Error> |
    CancelingTask<Type, Error> |
    CanceledTask<Type, Error>
  )

  /**
  *
  */
  export type Void<Type extends number = number> = (
    PendingTask<Type> |
    RunningTask<Type> |
    ResolvedTask<Type, void> |
    RejectedTask<Type, Error> |
    CancelingTask<Type, Error> |
    CanceledTask<Type, Error>
  )

  /**
  *
  */
  export const resolve: typeof ResolvableTask.resolve = ResolvableTask.resolve

  /**
  *
  */
  export const reject: typeof RejectableTask.reject = RejectableTask.reject

  /**
  *
  */
  export const cancel: typeof CancelableTask.cancel = CancelableTask.cancel

  /**
  *
  */
  export const run: typeof RunnableTask.run = RunnableTask.run

  /**
   *
   */
  export function pending<Type extends number = number>(type: Type): PendingTask<Type> {
    return Task.create({ type, state: TaskState.PENDING, result: undefined, reason: undefined })
  }
}
