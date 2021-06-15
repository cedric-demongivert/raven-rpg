export class AbstractError extends Error {
  /**
   * 
   */
  public readonly cause: Error

  /**
   * 
   */
  public readonly stack: string

  /**
   * 
   */
  public constructor(message: string, cause: Error) {
    super(message + ' Caused by "' + cause.message + '".')

    this.cause = cause
    this.stack = cause.stack
  }
}