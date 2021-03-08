import { List } from 'immutable'

import { Entry } from '../data/Entry'
import { Reference } from '../data/Reference'
import { Table } from '../data/table/Table'
import { OneToManyIndex } from '../data/view/OneToManyIndex'
import { View } from '../data/view/View'

import { Commit } from '../commit/Commit'

import { RPGBook } from '../rpg/book/RPGBook'
import { RPGImage } from '../rpg/RPGImage'
import { RPGElement } from '../rpg/RPGElement'

import { Empty } from '../Empty'

/**
*
*/
export class RPGElementCollection {
  /**
  *
  */
  public readonly table: Table<RPGElement>

  /**
  *
  */
  public readonly books: View<RPGBook>

  /**
  *
  */
  public readonly booksByCommit: OneToManyIndex<number, RPGBook>

  /**
  *
  */
  public readonly images: View<RPGImage>

  /**
  *
  */
  public get entries(): List<Entry<RPGElement>> {
    return this.table.entries
  }

  /**
  *
  */
  public constructor(properties: RPGElementCollection.Properties = Empty.OBJECT) {
    this.table = properties.table || Table.EMPTY
    this.books = properties.books || View.filter(this.table, RPGBook.is)
    this.images = properties.images || View.filter(this.table, RPGImage.is)

    this.booksByCommit = (
      properties.booksByCommit ||
      OneToManyIndex.make(this.books, RPGBook.getCommit)
    )
  }

  /**
  *
  */
  public getByIdentifier(identifier: number): Entry<RPGElement> | undefined {
    return this.table.get(identifier)
  }

  /**
  *
  */
  public getBookByIdentifier(identifier: number): Entry<RPGBook> | undefined {
    return this.books.get(identifier)
  }

  /**
  *
  */
  public getBooksByCommit(commit: Entry<Commit> | number): Table<RPGBook> {
    return this.booksByCommit.get(Reference.get(commit))
  }
}

/**
*
*/
export namespace RPGElementCollection {
  /**
  *
  */
  export type Properties = {
    /**
    *
    */
    table?: Table<RPGElement>,

    /**
    *
    */
    books?: View<RPGBook>,

    /**
    *
    */
    booksByCommit?: OneToManyIndex<number, RPGBook>,

    /**
    *
    */
    images?: View<RPGImage>
  }

  /**
  *
  */
  export const EMPTY: RPGElementCollection = new RPGElementCollection()

  /**
  *
  */
  export function empty(): RPGElementCollection {
    return EMPTY
  }
}
