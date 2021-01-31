const EMPTY: number = ' '.codePointAt(0)

/**
*
*/
export function shyfy(word: string, isShy: Function): string {
  let result: string = word[0]

  for (let index = 1; index < word.length; ++index) {
    const c0: number = word.codePointAt(index - 3) || EMPTY
    const c1: number = word.codePointAt(index - 2) || EMPTY
    const c2: number = word.codePointAt(index - 1) || EMPTY
    const c3: number = word.codePointAt(index)
    const c4: number = word.codePointAt(index + 1) || EMPTY
    const c5: number = word.codePointAt(index + 2) || EMPTY

    if (isShy(c0, c1, c2, c3, c4, c5)) {
      result += '\u00AD'
    }

    result += word[index]
  }

  return result
}

export namespace shyfy {
  /**
  *
  */
  export function fr(c0: number, c1: number, c2: number, c3: number, c4: number, c5: number): boolean {
    switch (c4) {
      case 105:
        switch (c1) {
          case 32:
          case 110:
          case 233:
          case 115:
          case 98:
            return false
          case 105:
            return c3 !== 116
          case 117:
            return c3 !== 116
          case 97:
            return c3 === 116
          case 99:
            return c5 !== 99
          case 111:
            return c0 !== 114
          case 112:
            return c0 !== 32
          case 114:
            switch (c0) {
              case 111:
              case 97:
                return false
              default:
                return true
            }
          default:
            return true
        }
      case 101:
        switch (c1) {
          case 32:
          case 110:
          case 121:
            return false
          case 105:
            return c0 === 114
          case 116:
            return c0 !== 108
          case 114:
            return c0 !== 112
          case 117:
            return c5 !== 32
          case 112:
            return c5 !== 32
          case 101:
            switch (c2) {
              case 110:
              case 114:
                return true
              default:
                return false
            }
          case 99:
            return c0 !== 233
          case 97:
            switch (c0) {
              case 108:
              case 109:
              case 114:
              case 120:
              case 112:
                return false
              default:
                return true
            }
          case 109:
            return c3 !== 114
          case 111:
            switch (c0) {
              case 108:
              case 104:
              case 114:
                return false
              default:
                return true
            }
          default:
            return true
        }
      case 97:
        switch (c1) {
          case 32:
          case 105:
          case 115:
          case 233:
            return false
          case 111:
            return c5 === 116
          case 97:
            return c0 !== 114
          case 108:
            return c3 !== 114
          default:
            return true
        }
      case 117:
        switch (c1) {
          case 32:
          case 99:
          case 98:
          case 117:
          case 105:
          case 118:
          case 110:
          case 112:
            return false
          case 97:
            return c0 === 32
          default:
            return true
        }
      case 104:
        return c0 !== 32
      case 233:
        switch (c1) {
          case 101:
          case 112:
            return false
          case 32:
            return c3 === 112
          case 105:
            return c3 !== 110
          default:
            return true
        }
      case 111:
        switch (c1) {
          case 32:
          case 117:
          case 105:
          case 99:
          case 233:
            return false
          case 111:
            return c5 !== 110
          case 97:
            switch (c5) {
              case 110:
              case 114:
                return false
              default:
                return true
            }
          case 108:
            return c5 !== 110
          case 116:
            return c0 !== 97
          default:
            return true
        }
      case 114:
        switch (c3) {
          case 100:
          case 103:
            return true
          case 116:
            return c2 !== 115
          case 112:
            return c5 === 233
          default:
            return false
        }
      case 116:
        switch (c3) {
          case 115:
            return c2 !== 101
          case 99:
            return c5 === 105
          default:
            return false
        }
      case 232:
        return c0 === 32
      case 110:
        return c0 === 109
      case 109:
        return c2 === 105
      default:
        return false
    }
  }
}
