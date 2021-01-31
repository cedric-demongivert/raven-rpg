export interface Dirent {
  /**
  *
  */
  isFile(): boolean

  /**
  *
  */
  isDirectory(): boolean

  /**
  *
  */
  isBlockDevice(): boolean

  /**
  *
  */
  isCharacterDevice(): boolean

  /**
  *
  */
  isSymbolicLink(): boolean

  /**
  *
  */
  isFIFO(): boolean

  /**
  *
  */
  isSocket(): boolean

  /**
  *
  */
  name: string
}
