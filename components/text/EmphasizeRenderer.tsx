import React from 'react'

import { Emphasize } from '../../typescript/model'
import { TextRenderer } from './TextRenderer'

/**
 * 
 */
export function EmphasizeRenderer(properties: Readonly<EmphasizeRenderer.Properties>): React.ReactElement {
  return (
    <strong className='text-element text-emphasize'>
      <TextRenderer>{ properties.children.content }</TextRenderer>
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