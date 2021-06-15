import { ApplicationTriggerListener } from './ApplicationTriggerListener'
import { ApplicationTrigger } from './ApplicationTrigger'

import { ApplicationPublication } from '../ApplicationPublication'

const RUNNING: number = 0
const RESOLVED: number = 1
const REJECTED: number = 2

type ResolveCallback<T> = (value?: T) => void
type RejectCallback = (reason: Error) => void

export class ApplicationTriggerHandler<Result = any, State = any>
  implements ApplicationTriggerListener<Result>
{
  /**
  *
  */
  public readonly trigger: ApplicationTrigger<Result, State>

  /**
  *
  */
  public readonly promise: Promise<Result>

  /**
  *
  */
  private _resolveCallback: ResolveCallback<Result> | undefined

  /**
  *
  */
  private _rejectCallback: RejectCallback | undefined

  /**
  *
  */
  private _state: number

  /**
  *
  */
  private _reason: Error | undefined

  /**
  *
  */
  private _result: Result | undefined

  /**
  *
  */
  public get resolved(): boolean {
    return this._state === RESOLVED
  }

  /**
  *
  */
  public get rejected(): boolean {
    return this._state === REJECTED
  }

  /**
  *
  */
  public get running(): boolean {
    return this._state === RUNNING
  }

  /**
  *
  */
  public constructor(trigger: ApplicationTrigger<Result, State>) {
    this._resolveCallback = undefined
    this._rejectCallback = undefined
    this._state = RUNNING
    this._reason = undefined
    this._result = undefined

    this.trigger = trigger
    this.promise = new Promise(this.handlePromise.bind(this))
  }

  /**
  *
  */
  private handlePromise(resolve: ResolveCallback<Result>, reject: RejectCallback): void {
    this._resolveCallback = resolve
    this._rejectCallback = reject

    switch (this._state) {
      case RUNNING:
        return
      case RESOLVED:
        this._resolveCallback(this._result)
        return
      case REJECTED:
        this._rejectCallback(this._reason)
        return
      default:
        return
    }
  }

  /**
  *
  */
  public resolve(value: Result): void {
    if (this._state === RUNNING) {
      this._state = RESOLVED
      this._result = value

      if (this._resolveCallback) {
        this._resolveCallback(value)
      }
    } else {
      throw new Error(
        'Trying to resolve a trigger that was already resolved or rejected.'
      )
    }
  }

  /**
  *
  */
  public reject(reason: Error): void {
    if (this._state === RUNNING) {
      this._state = REJECTED
      this._reason = reason

      if (this._rejectCallback) {
        this._rejectCallback(reason)
      }
    } else {
      throw new Error(
        'Trying to reject a trigger that was already resolved or rejected.'
      )
    }
  }

  /**
  *
  */
  public afterReduction(publication: ApplicationPublication<State>): void {
    this.trigger.afterReduction(this, publication)
  }

  /**
  *
  */
  public afterStart(state: State): void {
    this.trigger.afterStart(this, state)
  }
}
