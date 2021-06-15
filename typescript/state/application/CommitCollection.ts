import { Reference } from '../../data/Reference'
import { Table } from '../../data/table/Table'

import { OneToOne } from '../../data/relationship/OneToOne'
import { OneToMany } from '../../data/relationship/OneToMany'

import { Commit } from '../git/Commit'
import { Repository } from '../git/Repository'
import { Entry } from '../../data/Entry'

/**
*
*/
export class CommitCollection {
  /**
  *
  */
  public readonly all: Table<Commit>

  /**
  *
  */
  public readonly byIdentifier: OneToOne<string, Commit>

  /**
  *
  */
  public readonly byRepository: OneToMany<number, Commit>

  /**
  *
  */
  public static EMPTY: CommitCollection = new CommitCollection()

  /**
  *
  */
  public static empty(): CommitCollection {
    return CommitCollection.EMPTY
  }

  /**
   * 
   */
  public static create(all: Table<Commit> = Table.EMPTY): CommitCollection {
    return all.isEmpty() ? CommitCollection.EMPTY : new CommitCollection(all)
  }

  /**
  *
  */
  private constructor(all: Table<Commit> = Table.EMPTY) {
    this.all = all
    this.byIdentifier = all.indexBy(CommitCollection.compareIdentifier)
    this.byRepository = all.groupBy(CommitCollection.compareRepository)
  }

  /**
  *
  */
  public latest(repository: Reference<Repository>): Entry<Commit> | undefined {
    const commits: Table<Commit> = this.byRepository.get(Reference.identifier(repository))

    if (commits.size > 0) {
      let latest: Entry<Commit> = commits.first()

      for (const commit of commits) {
        if (commit.model.timestamp > latest.model.timestamp) {
          latest = commit
        }
      }

      return latest
    } else {
      return undefined
    }
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CommitCollection) {
      return other.all.equals(this.all)
    }
  }
}

/**
*
*/
export namespace CommitCollection {
  /**
   * 
   */
  export function compareIdentifier(left: Commit | string, right: Commit): number {
    if (typeof left === 'string') {
      return left.localeCompare(right.identifier)
    } else {
      return left.identifier.localeCompare(right.identifier)
    }
  }

  /**
   * 
   */
  export function compareRepository(left: Commit | number, right: Commit): number {
    if (typeof left === 'number') {
      return Reference.compare(left, right.repository)
    } else {
      return Reference.compare(left.repository, right.repository)
    }
  }
}
