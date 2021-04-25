export type TagAction = (
  TagAction.EXTRACTED
)

export namespace TagAction {
  /**
  *
  */
  export type EXTRACTED = 'tag:extracted'

  /**
  *
  */
  export const EXTRACTED: EXTRACTED = 'tag:extracted'

  /**
  *
  */
  export const ALL: TagAction[] = [
    EXTRACTED
  ]
}
