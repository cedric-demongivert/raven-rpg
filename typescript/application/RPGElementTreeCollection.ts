import { List } from 'immutable'

import { Entry } from '../data/Entry'
import { Table } from '../data/table/Table'
import { OneToOneIndex } from '../data/view/OneToOneIndex'

import { RPGElementTree } from '../rpg/tree/RPGElementTree'
import { RPGElement } from '../rpg/RPGElement'

import { Empty } from '../Empty'

/**
*
*/
export class RPGElementTreeCollection {
  /**
  *
  */
  public readonly table: Table<RPGElementTree>

  /**
  *
  */
  public readonly byElement: OneToOneIndex<number, RPGElementTree>

  /**
  *
  */
  public get entries(): List<Entry<RPGElementTree>> {
    return this.table.entries
  }

  /**
  *
  */
  public constructor(properties: RPGElementTreeCollection.Properties = Empty.OBJECT) {
    this.table = properties.table || Table.EMPTY

    this.byElement = (
      properties.byElement ||
      OneToOneIndex.make(this.table, RPGElementTree.getElement)
    )
  }

  /**
  *
  */
  public getByIdentifier(identifier: number): Entry<RPGElementTree> | undefined {
    return this.table.get(identifier)
  }

  /**
  *
  */
  public getByElement(element: Entry<RPGElement> | number): Entry<RPGElementTree> | undefined {
    return this.byElement.get(Entry.identifier(element))
  }
}

/**
*
*/
export namespace RPGElementTreeCollection {
  /**
  *
  */
  export type Properties = {
    /**
    *
    */
    table?: Table<RPGElementTree>

    /**
    *
    */
    byElement?: OneToOneIndex<number, RPGElementTree>
  }

  /**
  *
  */
  export const EMPTY: RPGElementTreeCollection = new RPGElementTreeCollection()

  /**
  *
  */
  export function empty(): RPGElementTreeCollection {
    return EMPTY
  }
}
