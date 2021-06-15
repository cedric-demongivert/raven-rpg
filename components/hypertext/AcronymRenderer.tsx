import React from 'react'
import { ReactElement } from 'react'

import { Acronym } from '../../typescript/state/hypertext/Acronym'

/**
 * 
 */
export function AcronymRenderer(properties: AcronymRenderer.Properties): ReactElement {
  return (
    <span className='hypertext hypertext-acronym'>
      {properties.children.acronym} ({properties.children.expanded})
    </span>
  )
}

/**
 * 
 */
export namespace AcronymRenderer {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    children: Acronym
  }
}