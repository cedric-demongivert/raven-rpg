import React from 'react'
import { ReactElement } from 'react'

import { Link } from '../../typescript/state/hypertext/Link'

/**
 * 
 */
export function LinkRenderer(properties: LinkRenderer.Properties): ReactElement {
  return (
    <a className='hypertext hypertext-link' href={properties.children.url}>
      {properties.children.content}
    </a>
  )
}

/**
 * 
 */
export namespace LinkRenderer {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    children: Link
  }
}