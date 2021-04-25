import { List } from 'immutable'

import { Entry } from '../data/Entry'
import { Reference } from '../data/Reference'
import { Table } from '../data/table/Table'
import { OneToOneIndex } from '../data/view/OneToOneIndex'
import { OneToManyIndex } from '../data/view/OneToManyIndex'

import { Repository } from '../repository/Repository'
import { Commit } from '../commit/Commit'
import { Commits } from '../commit/Commits'

import { Empty } from '../Empty'

/**
*
*/
export class CommitCollection {
  /**
  *
  */
  public readonly table: Table<Commit>

  /**
  *
  */
  public readonly byIdentifier: OneToOneIndex<string, Commit>

  /**
  *
  */
  public readonly byRepository: OneToManyIndex<number, Commit>

  /**
  *
  */
  public get entries(): List<Entry<Commit>> {
    return this.table.entries
  }

  /**
  *
  */
  public constructor(properties: CommitCollection.Properties = Empty.OBJECT) {
    this.table = properties.table || Table.EMPTY

    this.byIdentifier = (
      properties.byIdentifier ||
      OneToOneIndex.make(this.table, Commit.getIdentifier)
    )

    this.byRepository = (
      properties.byRepository ||
      OneToManyIndex.make(this.table, Commit.getRepositoryIdentifier)
    )
  }

  /**
  *
  */
  public getByIdentifier(identifier: number): Entry<Commit> | undefined {
    return this.table.get(identifier)
  }

  /**
  *
  */
  public getLatestOfRepository(repository: Entry<Repository> | number): Entry<Commit> | undefined {
    return Commits.latestEntry(this.getByRepository(repository).entries)
  }

  /**
  *
  */
  public getByRepository(repository: Entry<Repository> | number | Reference<Repository>): Table<Commit> {
    return this.byRepository.get(Reference.identifier(repository))
  }

  /**
  *
  */
  public getByGitIdentifier(identifier: string): Entry<Commit> | undefined {
    return this.byIdentifier.get(identifier)
  }
}

/**
*
*/
export namespace CommitCollection {
  /**
  *
  */
  export type Properties = {
    /**
    *
    */
    table?: Table<Commit>,

    /**
    *
    */
    byIdentifier?: OneToOneIndex<string, Commit>,

    /**
    *
    */
    byRepository?: OneToManyIndex<number, Commit>,
  }

  /**
  *
  */
  export const EMPTY: CommitCollection = new CommitCollection()

  /**
  *
  */
  export function empty(): CommitCollection {
    return EMPTY
  }
}
