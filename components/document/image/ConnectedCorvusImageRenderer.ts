import { connect } from 'react-redux'
import { CorvusDocument } from '../../../typescript/corvus/CorvusDocument'
import { CorvusDocumentElement } from '../../../typescript/corvus/CorvusDocumentElement'
import { CorvusImage } from '../../../typescript/corvus/CorvusImage'
import { Entry } from '../../../typescript/data/Entry'

import { Application } from '../../../typescript/state/application/Application'
import { Resource } from '../../../typescript/state/resource/Resource'

import { CorvusImageRenderer } from './CorvusImageRenderer'

/**
*
*/
function mapStateToProps(state: Application, ownProps: Readonly<ConnectedCorvusImageRenderer.Properties>): CorvusImageRenderer.Properties {
  const document: CorvusDocument = ownProps.document
  const element: CorvusDocumentElement<CorvusImage> = document.requireByIdentifier(ownProps.element, CorvusImage.assert)

  const resource: Entry<Resource> | undefined = state.resources.get(state.commits.latest(state.repositories.all.first()), element.model.path)

  return {
    resource: resource == null ? undefined : resource.model, // @todo get repository
    ...ownProps
  }
}

/**
*
*/
export const ConnectedCorvusImageRenderer = connect(mapStateToProps)(CorvusImageRenderer)

/**
 * 
 */
export namespace ConnectedCorvusImageRenderer {
  /**
     * 
     */
  export type Properties = {
    /**
     * 
     */
    depth?: number | undefined,

    /**
     * 
     */
    className?: string | undefined,

    /**
     * 
     */
    document: CorvusDocument,

    /**
     * 
     */
    element: number
  }
}
