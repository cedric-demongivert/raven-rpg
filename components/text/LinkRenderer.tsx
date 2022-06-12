import React from 'react'

import { Link } from '../../typescript/model'

/**
 * 
 */
export function LinkRenderer(properties: Readonly<LinkRenderer.Properties>): React.ReactElement {
  return (
    <a className='text-element text-link' href={properties.children.url}>
      { properties.children.hasContent() ? properties.children.content : properties.children.url }
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
    readonly children: Link
  }
}