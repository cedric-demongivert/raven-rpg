import React from 'react'
import { ReactElement } from 'react'
import { List } from 'immutable'

import { Application } from '../../typescript/application/Application'
import { RPGBook } from '../../typescript/rpg/book/RPGBook'
import { Entry } from '../../typescript/data/Entry'

import { BookItem } from './BookItem'
/**
*
*/
export const BookList = (properties: BookList.Properties): ReactElement => {
  const books: List<Entry<RPGBook>> = properties.application.elements.getBooksByCommit(properties.commit).entries

  console.log(properties.application.elements.books.entries)

  books.sort(Entry.comparator(RPGBook.compareByTitle))

  return (
    <div className='layout-page-repository-book'>
      {books.map(renderBook)}
    </div>
  )
}

function renderBook(book: Entry<RPGBook>): ReactElement {
  return <BookItem value={book} key={book.identifier} />
}

/**
*
*/
export namespace BookList {
  /**
  *
  */
  export type Properties = {
    application: Application,
    commit: number
  }
}
