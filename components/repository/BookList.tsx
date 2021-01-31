import React from 'react'
import { ReactElement } from 'react'
import { List } from 'immutable'

import { Application } from '../../typescript/application/Application'
import { Book } from '../../typescript/book/Book'
import { Table } from '../../typescript/data/table/Table'
import { Entry } from '../../typescript/data/Entry'

import { BookItem } from './BookItem'
/**
*
*/
export const BookList = (properties: BookList.Properties): ReactElement => {
  const books: List<Entry<Book>> = properties.application.getBooksByCommitIdentifier().get(properties.commit).entries

  books.sort(Entry.comparator(Book.compareBookTitles))

  //
  return (
    <div className='layout-page-repository-book'>
      {books.map(renderBook)}
    </div>
  )
}

function renderBook(book: Entry<Book>): ReactElement {
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
