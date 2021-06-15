import React from 'react'
import { ReactElement } from 'react'

import { Entry } from '../../typescript/data/Entry'
import { Application } from '../../typescript/state/application/Application'

import { CorvusDocumentRenderer } from '../document/CorvusDocumentRenderer'

import { Loading } from '../Loading'
import { CorvusCommit } from '../../typescript/corvus/CorvusCommit'

/**
*
*/
export function ContentPage (properties: ContentPage.Properties): ReactElement {
  const content: Entry<CorvusCommit> | undefined = properties.application.documents.all.first(undefined)

  if (content) {
    return (
      <div className='layout layout-page layout-page-content'>
        <div className='container'>
          <div className='row'>
            <div className='col d-none d-lg-block col-lg-2'>
            </div>
            <div className='col col-lg-10'>
              <CorvusDocumentRenderer document={content.model.document} />
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='layout layout-page layout-page-content'>
        <Loading>Chargement en cours</Loading>
      </div>
    )
  }
}

/**
*
*/
export namespace ContentPage {
  /**
  *
  */
  export type Properties = {
    /**
     * 
     */
    application: Application
  }
}
