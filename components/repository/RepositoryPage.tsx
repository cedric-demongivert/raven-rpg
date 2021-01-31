import React from 'react'
import { ReactElement } from 'react'

import { Application } from '../../typescript/application/Application'

import { RepositoryPageLoading } from './RepositoryPageLoading'
import { BookList } from './BookList'

/**
*
*/
export function RepositoryPage (properties: RepositoryPage.Properties): ReactElement {
  return (
    <RepositoryPageLoading application={properties.application} repository={0}>
      { renderPage.bind(null, properties) }
    </RepositoryPageLoading>
  )
}

/**
*
*/
function renderPage(properties: RepositoryPage.Properties): ReactElement {
  return (
    <div className='layout layout-page layout-page-repository'>
      <h1>Corvus</h1>
      <h2>Livres disponibles dans cette édition</h2>

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <BookList
              application={properties.application}
              commit={properties.application.getLatestCommitOf(0).identifier}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

/**
*
*/
export namespace RepositoryPage {
  /**
  *
  */
  export type Properties = {
    application: Application
  }
}
