import { Reference } from '../../data/Reference'
import { Table } from '../../data/table/Table'

import { OneToOne } from '../../data/relationship/OneToOne'
import { OneToMany } from '../../data/relationship/OneToMany'

import { Tag } from '../git/Tag'


/**
*
*/
export class TagCollection {
  /**
  *
  */
  public readonly all: Table<Tag>

  /**
  *
  */
  public readonly byCommit: OneToOne<number, Tag>

  /**
  *
  */
  public readonly byIdentifier: OneToOne<string, Tag>

  /**
  *
  */
  public readonly byRepository: OneToMany<number, Tag>

  /**
  *
  */
  public static readonly EMPTY: TagCollection = new TagCollection()

  /**
  *
  */
  public static empty(): TagCollection {
    return TagCollection.EMPTY
  }

  /**
   * 
   */
  public static create(all: Table<Tag> = Table.EMPTY): TagCollection {
    return all.isEmpty() ? TagCollection.EMPTY : new TagCollection(all)
  }

  /**
  *
  */
  private constructor(all: Table<Tag> = Table.EMPTY) {
    this.all = all || Table.EMPTY
    this.byCommit = all.indexBy(TagCollection.compareCommit)
    this.byIdentifier = all.indexBy(TagCollection.compareIdentifier)
    this.byRepository = all.groupBy(TagCollection.compareRepository)
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof TagCollection) {
      return other.all.equals(this.all)
    }
  }
}

/**
*
*/
export namespace TagCollection {
  /**
   * 
   */
  export function compareIdentifier(left: Tag | string, right: Tag): number {
    if (typeof left === 'string') {
      return left.localeCompare(right.identifier)
    } else {
      return left.identifier.localeCompare(right.identifier)
    }
  }

  /**
   * 
   */
  export function compareRepository(left: Tag | number, right: Tag): number {
    if (typeof left === 'number') {
      return Reference.compare(left, right.repository)
    } else {
      return Reference.compare(left.repository, right.repository)
    }
  }

  /**
   * 
   */
  export function compareCommit(left: Tag | number, right: Tag): number {
    if (typeof left === 'number') {
      return Reference.compare(left, right.commit)
    } else {
      return Reference.compare(left.commit, right.commit)
    }
  }
}
