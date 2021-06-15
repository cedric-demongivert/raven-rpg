import { Reference } from '../../data/Reference'
import { Table } from '../../data/table/Table'

import { OneToOne } from '../../data/relationship/OneToOne'
import { CorvusCommit } from '../../corvus/CorvusCommit'

/**
*
*/
export class CorvusDocumentCollection {
  /**
  *
  */
  public readonly all: Table<CorvusCommit>

  /**
  *
  */
  public readonly byCommit: OneToOne<number, CorvusCommit>

  /**
  *
  */
  public static EMPTY: CorvusDocumentCollection = new CorvusDocumentCollection()

  /**
  *
  */
  public static empty(): CorvusDocumentCollection {
    return CorvusDocumentCollection.EMPTY
  }

  /**
   * 
   */
  public static create(all: Table<CorvusCommit> = Table.EMPTY): CorvusDocumentCollection {
    return all.isEmpty() ? CorvusDocumentCollection.EMPTY : new CorvusDocumentCollection(all)
  }

  /**
  *
  */
  private constructor(all: Table<CorvusCommit> = Table.EMPTY) {
    this.all = all
    this.byCommit = all.indexBy(CorvusDocumentCollection.compareCommit)
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusDocumentCollection) {
      return other.all.equals(this.all)
    }
  }
}

/**
*
*/
export namespace CorvusDocumentCollection {
  /**
   * 
   */
  export function compareCommit(left: CorvusCommit | number, right: CorvusCommit): number {
    if (typeof left === 'number') {
      return Reference.compare(left, right.commit)
    } else {
      return Reference.compare(left.commit, right.commit)
    }
  }
}
