import React from 'react'

import { Acronym } from '../../typescript/model'

/**
 * 
 */
export function AcronymRenderer(properties: Readonly<AcronymRenderer.Properties>): React.ReactElement {
  return (
    <span className='acronym'>
      {properties.children.acronym}
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