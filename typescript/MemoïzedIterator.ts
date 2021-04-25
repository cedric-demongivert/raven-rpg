export class MemoïzedIterator<IterationType, ReturnType = undefined> implements Iterator<IterationType, ReturnType> {
  /**
   * 
   */
  private _current: IteratorResult<IterationType, ReturnType> | undefined

  /**
   * 
   */
  private _iterator: Iterator<IterationType, ReturnType>

  /**
   * 
   */
  public constructor(iterator: Iterator<IterationType, ReturnType>) {
    this._current = undefined
    this._iterator = iterator
  }

  /**
   * 
   */
  public current(): IteratorResult<IterationType, ReturnType> | undefined {
    return this._current
  }

  /**
   * 
   */
  public next(...args: [any] | []): IteratorResult<IterationType, ReturnType> {
    this._iterator.next()
    return this._current = this._iterator.next(...args)
  }

  /**
   *
   */
  public return(...args: [ReturnType] | []): IteratorResult<IterationType, ReturnType> {
    return this._current = this._iterator.return(...args)
  }

  /**
   * 
   */
  public throw?(...args: [any] | []): IteratorResult<IterationType, ReturnType> {
    return this._current = this._iterator.throw(...args)
  }
}

export namespace MemoïzedIterator {
  /**
   * 
   */
  export function wrap<IterationType, ReturnType>(iterator: Iterator<IterationType, ReturnType>): MemoïzedIterator<IterationType, ReturnType> {
    return new MemoïzedIterator<IterationType, ReturnType>(iterator)
  }
}