const WOVEL : number = 0
const CONSONANT : number = 1
const PUNCTUATION : number = 2

export function shy (word : string) : string {
  return word
}

function kind (symbol : number) : number {
  if (symbol >= 0x0040 && symbol <= 0x007F) {
    switch (symbol) {
      case 0x0040: case 0x005B: case 0x005C:
      case 0x005D: case 0x005E: case 0x005F:
      case 0x0060: case 0x007B: case 0x007C:
      case 0x007D: case 0x007E: case 0x007F:
        return PUNCTUATION
      default:
        symbol -= symbol >= 0x0060 ? 0x1E : 0
      switch (symbol) {
        case 0x0041: case 0x0045:
        case 0x0049: case 0x004F:
          return WOVEL
        default:
          return CONSONANT
      }
    }
  } else {

  }
}
