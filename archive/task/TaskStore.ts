import { ApplicationListener } from '../ApplicationListener'
import { ApplicationPublication } from '../ApplicationPublication'
import { ApplicationTrigger } from '../ApplicationTrigger'

import { Table } from '../table/Table'

import { Task } from './Task'
import { TaskAction } from './TaskAction'
import { TaskEvent } from './TaskEvent'
import { TaskState } from './TaskState'
import { TaskTrigger } from './TaskTrigger'

export class TaskStore implements ApplicationListener {
  /**
  *
  */
  private _tasks: Table<Task>

  /**
  *
  */
  public get tasks(): Table<Task> {
    return this._tasks
  }

  /**
  *
  */
  public constructor() {
    this._tasks = Table.empty()
  }

  /**
  *
  */
  public reduceCreate<T>(action: TaskEvent.Create<T>): void {
    const task: Task<T> = new Task(action.payload)
    const oldTasks: Table<Task> = this._tasks
    const newTasks: Table<Task> = oldTasks.insertRecord(task)

    this._tasks = newTasks

    action.payback = Table.next(newTasks, oldTasks)
  }

  /**
  *
  */
  public reduceRemove(action: TaskEvent.Remove): void {
    const oldTasks: Table<Task> = this._tasks
    const task: Task | null = oldTasks.getRecord(action.payload)

    if (task == null) {
      throw new Error(
        'Unable to remove task #' + action.payload + ' because the requested ' +
        'task does not exists.'
      )
    }

    switch (task.get(Task.Properties.STATE)) {
      case TaskState.CANCELED:
      case TaskState.FAILURE:
      case TaskState.SUCCESS:
        this._tasks = oldTasks.removeRecord(action.payload)
        return
      default:
        throw new Error(
          'Trying to remove task ' + task.toDebugString() + ' that is in ' +
          'a non-removable state. You may have a problem somewhere into your ' +
          'workflow.'
        )
    }
  }

  /**
  *
  */
  public reduceRun(action: TaskEvent.Run): void {
    const oldTasks: Table<Task> = this._tasks
    const task: Task | null = oldTasks.getRecord(action.payload)

    if (task == null) {
      throw new Error(
        'Unable to run task #' + action.payload + ' because the requested ' +
        'state does not exists.'
      )
    }

    this._tasks = oldTasks.setRecord(task.run())
  }

  /**
  *
  */
  public reduceCancel(action: TaskEvent.Cancel): void {
    const oldTasks: Table<Task> = this._tasks
    const task: Task | null = oldTasks.getRecord(action.payload.task)

    if (task == null) {
      throw new Error(
        'Unable to cancel task #' + action.payload.task + ' because the ' +
        'requested state does not exists.'
      )
    }

    this._tasks = oldTasks.setRecord(task.cancel(action.payload.reason))
  }

  /**
  *
  */
  public reduceSuccess(action: TaskEvent.Success): void {
    const oldTasks: Table<Task> = this._tasks
    const task: Task | null = oldTasks.getRecord(action.payload.task)

    if (task == null) {
      throw new Error(
        'Unable to resolve task #' + action.payload.task + ' as a success ' +
        'because the requested state does not exists.'
      )
    }

    this._tasks = oldTasks.setRecord(task.success(action.payload.result))
  }

  /**
  *
  */
  public reduceFailure(action: TaskEvent.Failure): void {
    const oldTasks: Table<Task> = this._tasks
    const task: Task | null = oldTasks.getRecord(action.payload.task)

    if (task == null) {
      throw new Error(
        'Unable to resolve task #' + action.payload.task + ' as a failure ' +
        'because the requested state does not exists.'
      )
    }

    this._tasks = oldTasks.setRecord(task.fail(action.payload.reason))
  }

  /**
  *
  */
  public reduceCancellation(action: TaskEvent.Cancellation): void {
    const oldTasks: Table<Task> = this._tasks
    const task: Task | null = oldTasks.getRecord(action.payload)

    if (task == null) {
      throw new Error(
        'Unable to resolve task #' + action.payload + ' as canceled ' +
        'because the requested state does not exists.'
      )
    }

    this._tasks = oldTasks.setRecord(task.canceled())
  }

  /**
  *
  */
  public reduceResume(action: TaskEvent.Resume): void {
    const oldTasks: Table<Task> = this._tasks
    const task: Task | null = oldTasks.getRecord(action.payload)

    if (task == null) {
      throw new Error(
        'Unable to resume task #' + action.payload + ' because the requested ' +
        'state does not exists.'
      )
    }

    this._tasks = oldTasks.setRecord(task.canceled())
  }

  /**
  * @see ApplicationListener.beforeEventPublication
  */
  public beforeEventPublication(publication: ApplicationPublication): void {

  }

  /**
  * @see ApplicationListener.onEventPublication
  */
  public onEventPublication(publication: ApplicationPublication): void {
    switch (publication.event.type) {
      case TaskAction.CREATE:
        return this.reduceCreate(publication.event)
      case TaskAction.RUN:
        return this.reduceRun(publication.event)
      case TaskAction.CANCEL:
        return this.reduceCancel(publication.event)
      case TaskAction.RESUME:
        return this.reduceResume(publication.event)
      case TaskAction.SUCCESS:
        return this.reduceSuccess(publication.event)
      case TaskAction.FAILURE:
        return this.reduceFailure(publication.event)
      case TaskAction.CANCELLATION:
        return this.reduceCancellation(publication.event)
      case TaskAction.REMOVE:
        return this.reduceRemove(publication.event)
      default:
        break
    }
  }

  /**
  * @see ApplicationListener.afterEventPublication
  */
  public afterEventPublication(publication: ApplicationPublication): void {
    switch (publication.event.type) {
      case TaskAction.RUN:
        return this.resolve(publication)
      default:
        break
    }
  }

  /**
  *
  */
  private resolve<T>(publication: ApplicationPublication<TaskEvent.Run>): void {
    const identifier: number = publication.event.payload
    const task: Task<T> | undefined = this._tasks.getRecord(identifier)

    if (task == null) {
      throw new Error(
        'Unable to resolve task #' + identifier + ' because the requested ' +
        'task does not exists.'
      )
    }

    if (task.getState() === TaskState.RUNNING) {
      const promise: Promise<T> = task.toPromise()
      promise.then(this.handleTaskSuccess.bind(publication))
      promise.catch(this.handleTaskFailure.bind(publication))
    } else {
      throw new Error(
        'Trying to resolve task ' + task.toDebugString() + ' but that task ' +
        'is in progress or was already resolved. You may have a problem ' +
        'somewhere into your workflow.'
      )
    }
  }

  /**
  *
  */
  private handleTaskSuccess<T>(publication: ApplicationPublication<TaskEvent.Run>, value: T): void {
    const identifier: number = publication.event.payload
    const task: Task<T> | undefined = this._tasks.getRecord(identifier)

    if (task == null) {
      throw new Error(
        'Unable to handle the success of task #' + identifier + ' because ' +
        'the requested task does not exists.'
      )
    }

    const state: TaskState = task.get(Task.Properties.STATE)

    switch (state) {
      case TaskState.RUNNING:
        publication.stream.publish(TaskEvent.success(task, value))
        break
      case TaskState.CANCELING:
        publication.stream.publish(TaskEvent.cancellation(task))
        break
      default:
        throw new Error(
          'Task ' + task.toDebugString() + ' succeed in an illegal state. ' +
          'You may have a problem somewhere into your workflow.'
        )
    }
  }

  /**
  *
  */
  private handleTaskFailure<T>(publication: ApplicationPublication<TaskEvent.Run>, error: Error): void {
    const identifier: number = publication.event.payload
    const task: Task<T> | undefined = this._tasks.getRecord(identifier)

    if (task == null) {
      throw new Error(
        'Unable to handle the failure of task #' + identifier + ' because ' +
        'the requested task does not exists in the publication store.'
      )
    }

    const state: TaskState = task.get(Task.Properties.STATE)

    switch (state) {
      case TaskState.RUNNING:
        publication.stream.publish(TaskEvent.failure(task, error))
        break
      case TaskState.CANCELING:
        publication.stream.publish(TaskEvent.cancellation(task))
        break
      default:
        throw new Error(
          'Task ' + task.toDebugString() + ' failed in an illegal state. ' +
          'You may have a problem somewhere into your workflow.'
        )
    }
  }

  /**
  *
  */
  public after<T>(task: Task<T>): ApplicationTrigger<T>
  /**
  *
  */
  public after<T>(identifier: number): ApplicationTrigger<T>
  /**
  *
  */
  public after<T>(parameter: number | Task): ApplicationTrigger<T>
  /**
  *
  */
  public after<T>(parameter: number | Task): ApplicationTrigger<T> {
    const identifier: number = typeof parameter === 'number' ? parameter : parameter.getIdentifier()
    const task: Task | undefined = this._tasks.getRecord(identifier)

    if (task == null) {
      throw new Error(
        'Unable to await the end of task #' + identifier + ' because ' +
        'the requested task does not exists.'
      )
    }

    return new TaskTrigger(this, identifier)
  }
}
