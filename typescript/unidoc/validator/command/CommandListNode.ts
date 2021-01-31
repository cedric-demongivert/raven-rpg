import { CommandListElement } from './CommandListElement'

/**
*
*/
export type CommandListNode = {
  count: number,
  element: CommandListElement
}

/**
*
*/
export namespace CommandListNode {
  /**
  *
  */
  export function fromElement(element: CommandListElement): CommandListNode {
    return {
      count: 0,
      element
    }
  }
}
