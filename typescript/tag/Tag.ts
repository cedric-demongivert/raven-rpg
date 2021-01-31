import { Record } from 'immutable'

type TagProperties = {
  /**
  *
  */
  objectIdentifier: string,

  /**
  *
  */
  commitIdentifier: number,

  /**
  *
  */
  repositoryIdentifier: number,

  /**
  *
  */
  tag: string,

  /**
  *
  */
  timestamp: number
}

/**
*
*/
const EMPTY_STRING: string = ''

/**
*
*/
const DEFAULT_PROPERTIES: TagProperties = {
  objectIdentifier: EMPTY_STRING,
  commitIdentifier: 0,
  repositoryIdentifier: 0,
  tag: EMPTY_STRING,
  timestamp: 0
}

/**
*
*/
export class Tag extends Record(DEFAULT_PROPERTIES) {
  /**
  *
  */
  public getObjectIdentifier(): string {
    return this.get(Tag.Properties.OBJECT_IDENTIFIER)
  }

  /**
  *
  */
  public getRepositoryIdentifier(): number {
    return this.get(Tag.Properties.REPOSITORY_IDENTIFIER)
  }


  /**
  *
  */
  public getCommitIdentifier(): number {
    return this.get(Tag.Properties.COMMIT_IDENTIFIER)
  }

  /**
  *
  */
  public getTag(): string {
    return this.get(Tag.Properties.TAG)
  }

  /**
  *
  */
  public getTimestamp(): number {
    return this.get(Tag.Properties.TIMESTAMP)
  }

  /**
  *
  */
  public toDebugString(): string {
    return (
      this.constructor.name + ' of repository #' +
      this.get(Tag.Properties.REPOSITORY_IDENTIFIER) + ' ' +
      this.get(Tag.Properties.OBJECT_IDENTIFIER)
    )
  }
}

/**
*
*/
export namespace Tag {
  /**
  *
  */
  export type Properties = TagProperties

  export function getCommitIdentifier(tag: Tag): number {
    return tag.getCommitIdentifier()
  }

  export function getRepositoryIdentifier(tag: Tag): number {
    return tag.getRepositoryIdentifier()
  }

  export function getObjectIdentifier(tag: Tag): string {
    return tag.getObjectIdentifier()
  }

  /**
  *
  */
  export namespace Properties {
    /**
    *
    */
    export const OBJECT_IDENTIFIER: 'objectIdentifier' = 'objectIdentifier'

    /**
    *
    */
    export const REPOSITORY_IDENTIFIER: 'repositoryIdentifier' = 'repositoryIdentifier'

    /**
    *
    */
    export const COMMIT_IDENTIFIER: 'commitIdentifier' = 'commitIdentifier'

    /**
    *
    */
    export const TAG: 'tag' = 'tag'

    /**
    *
    */
    export const TIMESTAMP: 'timestamp' = 'timestamp'

    /**
    *
    */
    export const ALL: string[] = [
      OBJECT_IDENTIFIER,
      REPOSITORY_IDENTIFIER,
      COMMIT_IDENTIFIER,
      TAG,
      TIMESTAMP
    ]
  }
}
