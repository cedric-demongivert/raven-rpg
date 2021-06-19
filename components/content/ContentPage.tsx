import React from 'react'
import { ReactElement } from 'react'

import { Entry } from '../../typescript/data/Entry'
import { Application } from '../../typescript/state/application/Application'
import { CorvusCommit } from '../../typescript/corvus/CorvusCommit'

import { CorvusDocumentRenderer } from '../document/CorvusDocumentRenderer'

import { CorvusMinimap } from '../CorvusMinimap'
import { Loading } from '../Loading'
import { DocumentLayout } from '../DocumentLayout'

/**
 * 
 */
function renderAside (properties: ContentPage.Properties): ReactElement {
  const content: Entry<CorvusCommit> | undefined = properties.application.documents.all.first(undefined)

  return (
    <CorvusMinimap document={content.model.document} />
  )
}

/**
*
*/
export function ContentPage (properties: ContentPage.Properties): ReactElement {
  const content: Entry<CorvusCommit> | undefined = properties.application.documents.all.first(undefined)

  if (content) {
    return (
      <div className='layout layout-vanilla'>
        <DocumentLayout aside={renderAside(properties)}>
          <div className='layout layout-sandwich' id='document'>
            <CorvusDocumentRenderer document={content.model.document} />
          </div>
        </DocumentLayout>
      </div>
    )
  } else {
    return (
      <div className='layout layout-vanilla'>
        <div className='layout layout-centered'>
          <Loading>Chargement en cours</Loading>
        </div>
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
