import React from 'react'
import { ReactElement } from 'react'

import { Entry } from '../../typescript/data/Entry'
import { Book } from '../../typescript/book/Book'
import { Application } from '../../typescript/application/Application'

import { DocumentRenderer } from '../DocumentRenderer'

/**
*
*/
export function BookPage (properties: BookPage.Properties): ReactElement {
  const book: Entry<Book> | undefined = properties.application.books.get(properties.book)

  if (book) {
    return (
      <div className='layout layout-page layout-page-book'>
        <h1>{book.model.title}</h1>

        <div className='container'>
          <div className='row'>
            <div className='col'>
              <DocumentRenderer>{ book.model.document }</DocumentRenderer>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='layout layout-page layout-page-book'>
        Le livre demandé n'existe pas ou est en cours de chargement.
      </div>
    )
  }

}

/**
*
*/
export namespace BookPage {
  /**
  *
  */
  export type Properties = {
    application: Application,
    book: number
  }
}
