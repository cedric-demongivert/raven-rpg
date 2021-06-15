import { Reference } from '../../data/Reference'
import { Table } from '../../data/table/Table'

import { OneToOne } from '../../data/relationship/OneToOne'
import { OneToMany } from '../../data/relationship/OneToMany'

import { RepositorySemver } from '../semver/RepositorySemver'

/**
*
*/
export class VersionCollection {
  /**
  *
  */
  public readonly all: Table<RepositorySemver>

  /**
  *
  */
  public readonly byTag: OneToOne<number, RepositorySemver>

  /**
  *
  */
  public readonly byRepository: OneToMany<number, RepositorySemver>

  /**
  *
  */
  public static EMPTY: VersionCollection = new VersionCollection()

  /**
  *
  */
  public static empty(): VersionCollection {
    return VersionCollection.EMPTY
  }

  /**
   * 
   */
  public static create(all: Table<RepositorySemver> = Table.EMPTY): VersionCollection {
    return all.isEmpty() ? VersionCollection.EMPTY : new VersionCollection(all)
  }

  /**
  *
  */
  private constructor(all: Table<RepositorySemver> = Table.EMPTY) {
    this.all = all
    this.byTag = all.indexBy(VersionCollection.compareTag)
    this.byRepository = all.groupBy(VersionCollection.compareRepository)
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof VersionCollection) {
      return other.all.equals(this.all)
    }
  }
}

/**
*
*/
export namespace VersionCollection {
  /**
   * 
   */
  export function compareTag(left: RepositorySemver | number, right: RepositorySemver): number {
    if (typeof left === 'number') {
      return Reference.compare(left, right.repository)
    } else {
      return Reference.compare(left.repository, right.repository)
    }
  }

  /**
   * 
   */
  export function compareRepository(left: RepositorySemver | number, right: RepositorySemver): number {
    if (typeof left === 'number') {
      return Reference.compare(left, right.repository)
    } else {
      return Reference.compare(left.repository, right.repository)
    }
  }
}
