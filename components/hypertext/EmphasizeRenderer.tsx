import React from 'react'
import { ReactElement } from 'react'

import { Emphasize } from '../../typescript/state/hypertext/Emphasize'
import { HypertextRenderer } from './HypertextRenderer'

/**
 * 
 */
export function EmphasizeRenderer(properties: EmphasizeRenderer.Properties): ReactElement {
  return (
    <strong className='hypertext-element hypertext-emphasize'>
      <HypertextRenderer>{ properties.children.content }</HypertextRenderer>
    </strong>
  )
}

/**
 * 
 */
export namespace EmphasizeRenderer {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    children: Emphasize
  }
}