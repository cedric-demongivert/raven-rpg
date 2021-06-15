import { Empty } from '../../utils'

import { Table } from '../../data/table'

import { OneToOne } from '../../data/relationship/OneToOne'

import { Repository } from '../git/Repository'

/**
*
*/
export class RepositoryCollection {
  /**
  *
  */
  public readonly all: Table<Repository>

  /**
  *
  */
  public readonly byOrigin: OneToOne<string, Repository>

  /**
  *
  */
  public static readonly EMPTY: RepositoryCollection = new RepositoryCollection()

  /**
  *
  */
  public static empty(): RepositoryCollection {
    return RepositoryCollection.EMPTY
  }

  /**
   * 
   */
  public static create(all: Table<Repository> = Table.EMPTY): RepositoryCollection {
    return all.isEmpty() ? RepositoryCollection.EMPTY : new RepositoryCollection(all)
  }

  /**
  *
  */
  private constructor(all: Table<Repository> = Table.EMPTY) {
    this.all = all
    this.byOrigin = all.indexBy(RepositoryCollection.compareOrigins)
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof RepositoryCollection) {
      return other.all.equals(this.all)
    }
  }
}

/**
*
*/
export namespace RepositoryCollection {
  /**
   * 
   */
  export function compareOrigins(left: Repository | string, right: Repository): number {
    if (typeof left === 'string') {
      return left.localeCompare(right.origin)
    } else {
      return left.origin.localeCompare(right.origin)
    }
  }
}
