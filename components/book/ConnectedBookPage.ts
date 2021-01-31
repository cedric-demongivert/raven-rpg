import { connect } from 'react-redux'

import { Application } from '../../typescript/application/Application'

import { BookPage } from './BookPage'

/**
*
*/
function mapStateToProps(state: Application, ownProperties: { book: number }): BookPage.Properties {
  return {
    application: state,
    book: ownProperties.book
  }
}

/**
*
*/
export const ConnectedBookPage = connect(mapStateToProps)(BookPage)
