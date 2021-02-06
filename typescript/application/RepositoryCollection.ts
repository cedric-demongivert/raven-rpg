import { List } from 'immutable'

import { Entry } from '../data/Entry'
import { Table } from '../data/table/Table'
import { OneToOneIndex } from '../data/view/OneToOneIndex'

import { Repository } from '../repository/Repository'

import { Empty } from '../Empty'

/**
*
*/
export class RepositoryCollection {
  /**
  *
  */
  public readonly table: Table<Repository>

  /**
  *
  */
  public readonly byOrigin: OneToOneIndex<string, Repository>

  /**
  *
  */
  public get entries(): List<Entry<Repository>> {
    return this.table.entries
  }

  /**
  *
  */
  public constructor(properties: RepositoryCollection.Properties = Empty.OBJECT) {
    this.table = properties.table || Table.EMPTY

    this.byOrigin = (
      properties.byOrigin ||
      OneToOneIndex.make(this.table, Repository.getOrigin)
    )
  }

  /**
  *
  */
  public getDefault(): Entry<Repository> | undefined {
    if (this.table.size > 0) {
      return this.table.entries.first()
    } else {
      return undefined
    }
  }

  /**
  *
  */
  public getByIdentifier(identifier: number): Entry<Repository> | undefined {
    return this.table.get(identifier)
  }

  /**
  *
  */
  public getByOrigin(origin: string): Entry<Repository> | undefined {
    return this.byOrigin.get(origin)
  }
}

/**
*
*/
export namespace RepositoryCollection {
  /**
  *
  */
  export type Properties = {
    /**
    *
    */
    table?: Table<Repository>,

    /**
    *
    */
    byOrigin?: OneToOneIndex<string, Repository>
  }

  /**
  *
  */
  export const EMPTY: RepositoryCollection = new RepositoryCollection()

  /**
  *
  */
  export function empty(): RepositoryCollection {
    return EMPTY
  }
}
