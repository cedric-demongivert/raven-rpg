
import { Pack } from '@cedric-demongivert/gl-tool-collection'
import { UnidocEvent, UnidocEventType, UnidocListener } from '@cedric-demongivert/unidoc'

import { UnidocTagAutomataState } from './UnidocTagAutomataState'

/**
 * 
 */
export class UnidocTagAutomata extends UnidocListener<UnidocEvent> {
  /**
   * 
   */
  private _state: UnidocTagAutomataState

  /**
   * 
   */
  public constructor() {
    super()
    this._state = UnidocTagAutomataState.DEFAULT
  }

  /**
   * 
   */
  public start(): void {
    this._state = UnidocTagAutomataState.DEFAULT
  }

  /**
   * 
   */
  public next(event: UnidocEvent): void {
    switch (this._state) {
      case UnidocTagAutomataState.LEADING_STREAM:
        return this.handleLeadingStream(event)
      case UnidocTagAutomataState.SHALLOW_STREAM:
        return this.handleAfterTagStart(event)
      case UnidocTagAutomataState.CONTENT_STREAM:

      case UnidocTagAutomataState.DEEP_STREAM:

      case UnidocTagAutomataState.TRAILING_STREAM:

      default:
        throw new Error(
          `Unable to process event ${event.toString()} in state ${UnidocTagAutomataState.toDebugString(this._state)} as ` +
          'no procedure was defined for that.'
        )
    }
  }

  /**
   * 
   */
  private handleLeadingStream(event: UnidocEvent): void {
    if (!event.isStartOfAnyTag()) return

    this._state = UnidocTagAutomataState.SHALLOW_STREAM
    this.handleTagStart(event)
  }

  /**
   * 
   */
  private handleAfterTagStart(event: UnidocEvent): void {
    this.handleAnyEvent(event)
    this.handleShallowEvent(event)

    switch (event.type) {
      case UnidocEventType.WHITESPACE:
        return this.handleLeadingWhitespace(event)
      case UnidocEventType.WORD:
        return this.handleContentStart(event)
      case UnidocEventType.START_TAG:
        return this.handleChildTagStart(event)
      case UnidocEventType.END_TAG:
        return this.handleTagEnd(event)
      default:
        throw new Error(`No procedure defined to handle event of type ${UnidocEventType.toDebugString(event.type)}.`)
    }
  }

  /**
   * 
   */
  protected handleAnyEvent(event: UnidocEvent): void {
    switch (event.type) {
      case UnidocEventType.WHITESPACE:
        return this.handleAnyWhitespace(event)
      case UnidocEventType.WORD:
        return this.handleAnyWord(event)
      case UnidocEventType.START_TAG:
        return this.handleAnyStartTag(event)
      case UnidocEventType.END_TAG:
        return this.handleAnyEndTag(event)
      default:
        throw new Error(`No procedure defined to handle event of type ${UnidocEventType.toDebugString(event.type)}.`)
    }
  }

  /**
   * 
   */
  protected handleLeadingWhitespace(event: UnidocEvent): void {

  }

  /**
   * 
   */
  protected handleAnyWhitespace(event: UnidocEvent): void {

  }

  /**
   * 
   */
  protected handleAnyWord(event: UnidocEvent): void {

  }

  /**
   * 
   */
  protected handleAnyStartTag(event: UnidocEvent): void {

  }

  /**
   * 
   */
  protected handleAnyEndTag(event: UnidocEvent): void {

  }

  /**
   * 
   */
  protected handleShallowEvent(event: UnidocEvent): void {
    switch (event.type) {
      case UnidocEventType.WHITESPACE:
        return this.handleShallowWhitespace(event)
      case UnidocEventType.WORD:
        return this.handleShallowWord(event)
      case UnidocEventType.START_TAG:
        return this.handleShallowStartTag(event)
      case UnidocEventType.END_TAG:
        return this.handleShallowEndTag(event)
      default:
        throw new Error(`No procedure defined to handle event of type ${UnidocEventType.toDebugString(event.type)}.`)
    }
  }

  /**
   * 
   */
  protected handleShallowWhitespace(event: UnidocEvent): void {

  }

  /**
   * 
   */
  protected handleShallowWord(event: UnidocEvent): void {

  }

  /**
   * 
   */
  protected handleShallowStartTag(event: UnidocEvent): void {

  }

  /**
   * 
   */
  protected handleShallowEndTag(event: UnidocEvent): void {

  }

  /**
   * 
   */
  protected handleDeepEvent(event: UnidocEvent): void {

  }

  /**
   * 
   */
  protected handleDeepWhitespace(event: UnidocEvent): void {

  }

  /**
   * 
   */
  protected handleDeepWord(event: UnidocEvent): void {

  }

  /**
   * 
   */
  protected handleDeepStartTag(event: UnidocEvent): void {

  }

  /**
   * 
   */
  protected handleDeepEndTag(event: UnidocEvent): void {

  }

  /**
   * 
   */
  protected handleTagStart(event: UnidocEvent): void {

  }
}

/**
 * 
 */
export namespace UnidocTagAutomata {

}