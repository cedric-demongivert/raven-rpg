import { Empty } from "@cedric-demongivert/gl-tool-utils"
import { CorvusLocationFormatter } from "./CorvusLocationFormatter"

/**
 * 
 */
export type CorvusLocationFormat = Array<CorvusLocationFormatter | CorvusLocationFormat.RESET | string>

/**
 * 
 */
export namespace CorvusLocationFormat {
  /**
   * 
   */
  export const RESET: unique symbol = Symbol('CorvusLocationFormat.RESET')

  /**
   * 
   */
  export type RESET = typeof RESET

  /**
   * 
   */
  export const DEFAULT: CorvusLocationFormat = [
    CorvusLocationFormatter.romanize,
    RESET,
    CorvusLocationFormatter.numberize,
    '.',
    CorvusLocationFormatter.numberize,
    '.',
    CorvusLocationFormatter.numberize,
    RESET,
    CorvusLocationFormatter.letterize,
    '.',
    CorvusLocationFormatter.letterize,
    '.',
    CorvusLocationFormatter.letterize
  ]

  /**
   * 
   */
  export const DEFAULT_IDENTIFIER: CorvusLocationFormat = [
    CorvusLocationFormatter.romanize,
    '-',
    CorvusLocationFormatter.numberize,
    '-',
    CorvusLocationFormatter.numberize,
    '-',
    CorvusLocationFormatter.numberize,
    '-',
    CorvusLocationFormatter.letterize,
    '-',
    CorvusLocationFormatter.letterize,
    '-',
    CorvusLocationFormatter.letterize
  ]

  /**
   * 
   */
  export function format(section: Array<number>, format: CorvusLocationFormat): string {
    let result: string = Empty.STRING
    let formatCursor: number = 0

    for (let index = 0; index < section.length; ++index) {
      if (formatCursor >= format.length) {
        return result
      }

      while (formatCursor < format.length) {
        const action = format[formatCursor]

        if (action === RESET) {
          result = Empty.STRING
          formatCursor += 1
        } else if (typeof action === 'string') {
          result += action
          formatCursor += 1
        } else {
          result += action(section[index])
          formatCursor += 1
          break
        }
      }
    }

    return result
  }



  /**
   * 
   */
  export function fullFormat(section: Array<number>, format: CorvusLocationFormat): string {
    let result: string = Empty.STRING
    let formatCursor: number = 0

    for (let index = 0; index < section.length; ++index) {
      if (formatCursor >= format.length) {
        return result
      }

      while (formatCursor < format.length) {
        const action = format[formatCursor]

        if (action === RESET) {
          result += '-'
          formatCursor += 1
        } else if (typeof action === 'string') {
          result += action
          formatCursor += 1
        } else {
          result += action(section[index])
          formatCursor += 1
          break
        }
      }
    }

    return result
  }
}