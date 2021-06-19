import React from 'react'
import { ReactElement } from 'react'
import { CorvusDocument } from '../../typescript/corvus/CorvusDocument'
import classnames from 'classnames'

import { CorvusElementRenderer } from './CorvusElementRenderer'

/**
*
*/
export function CorvusDocumentRenderer(properties: CorvusDocumentRenderer.Properties): ReactElement {
  if (properties.document == null) {
    return null
  } 

  return (
    <div className={classnames('rpg-document', properties.className)}>
      <CorvusElementRenderer depth={properties.depth || 0} document={properties.document} element={0} />
    </div>
  )
}

/**
 * 
 */
export namespace CorvusDocumentRenderer {
  /**
  *
  */
  export type Properties = {
    /**
     * 
     */
    className?: string | undefined,

    /**
     * 
     */
    depth?: number | undefined,

    /**
     * 
     */
    document?: CorvusDocument | undefined
  }
}
