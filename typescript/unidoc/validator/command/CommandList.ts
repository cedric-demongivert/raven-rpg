import { CommandListElement } from './CommandListElement'

/**
*
*/
export type CommandList = CommandListElement[]

/**
*
*/
export namespace CommandList {
  /**
  *
  */
  export function capture(...parameters: CommandListElement[]): CommandList {
    return parameters
  }
}
