import { Empty } from "@cedric-demongivert/gl-tool-utils"

/**
 * 
 */
export type CorvusLocationFormatter = (value: number) => string

/**
 * 
 */
export namespace CorvusLocationFormatter {

  /**
   * 
   */
  export const LETTERS: Array<string> = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ]

  /**
   * 
   */
  export function letterize(value: number): string {
    let result: string = Empty.STRING

    while (value > 0) {
      const next: number = value % 24
      value = (value / 24) << 0

      result = LETTERS[next] + result
    }

    return result
  }

  /**
   * 
   */
  export function numberize(value: number): string {
    return (value + 1).toString()
  }


  /**
   * 
   */
  export function romanize(value: number): string {
    let result: string = Empty.STRING
    value += 1

    while (value > 0) {
      if (value > 1000) {
        result += 'M'
        value -= 1000
      } else if (value > 100) {
        result += 'C'
        value -= 100
      } else if (value > 10) {
        result += 'X'
        value -= 10
      } else if (value > 9) {
        result += 'IX'
        value -= 9
      } else if (value > 5) {
        result += 'V'
        value -= 5
      } else {
        switch (value) {
          case 1:
            result += 'I'
            value -= 1
            break
          case 2:
            result += 'II'
            value -= 2
            break
          case 3:
            result += 'III'
            value -= 3
            break
          case 4:
            result += 'IV'
            value -= 4
            break
        }
      }
    }

    return result
  }
}