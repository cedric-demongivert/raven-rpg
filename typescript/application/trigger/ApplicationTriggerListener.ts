export interface ApplicationTriggerListener<Result = any> {
  /**
  *
  */
  resolve(value?: Result): void

  /**
  *
  */
  reject(reason: Error): void
}
