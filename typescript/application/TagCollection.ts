import { List } from 'immutable'

import { Entry } from '../data/Entry'
import { Reference } from '../data/Reference'
import { Table } from '../data/table/Table'
import { OneToOneIndex } from '../data/view/OneToOneIndex'
import { OneToManyIndex } from '../data/view/OneToManyIndex'

import { Repository } from '../repository/Repository'
import { Commit } from '../commit/Commit'
import { Tag } from '../tag/Tag'

import { Empty } from '../Empty'

/**
*
*/
export class TagCollection {
  /**
  *
  */
  public readonly table: Table<Tag>

  /**
  *
  */
  public readonly byCommit: OneToOneIndex<number, Tag>

  /**
  *
  */
  public readonly byIdentifier: OneToOneIndex<string, Tag>

  /**
  *
  */
  public readonly byRepository: OneToManyIndex<number, Tag>

  /**
  *
  */
  public get entries(): List<Entry<Tag>> {
    return this.table.entries
  }

  /**
  *
  */
  public constructor(properties: TagCollection.Properties = Empty.OBJECT) {
    this.table = properties.table || Table.EMPTY
    this.byCommit = properties.byCommit || OneToOneIndex.make(this.table, Tag.getCommitIdentifier)
    this.byIdentifier = properties.byIdentifier || OneToOneIndex.make(this.table, Tag.getIdentifier)
    this.byRepository = properties.byRepository || OneToManyIndex.make(this.table, Tag.getRepositoryIdentifier)
  }

  /**
  *
  */
  public getByIdentifier(identifier: number): Entry<Tag> | undefined {
    return this.table.get(identifier)
  }

  /**
  *
  */
  public getByCommit(identifier: Entry<Commit> | number): Entry<Tag> | undefined {
    return this.byCommit.get(Reference.identifier(identifier))
  }

  /**
  *
  */
  public getByRepository(repository: Entry<Repository> | number): Table<Tag> {
    return this.byRepository.get(Reference.identifier(repository))
  }

  /**
  *
  */
  public getByGitIdentifier(identifier: string): Entry<Tag> | undefined {
    return this.byIdentifier.get(identifier)
  }
}

/**
*
*/
export namespace TagCollection {
  /**
  *
  */
  export type Properties = {
    /**
    *
    */
    table?: Table<Tag>,

    /**
    *
    */
    byCommit?: OneToOneIndex<number, Tag>,

    /**
    *
    */
    byIdentifier?: OneToOneIndex<string, Tag>,

    /**
    *
    */
    byRepository?: OneToManyIndex<number, Tag>
  }

  /**
  *
  */
  export const EMPTY: TagCollection = new TagCollection()

  /**
  *
  */
  export function empty(): TagCollection {
    return EMPTY
  }
}
