import React from 'react'

import { Emphasize } from '../../typescript/model'
import { TextNodeRenderer } from './TextNodeRenderer'

/**
 * 
 */
export function EmphasizeRenderer(properties: Readonly<EmphasizeRenderer.Properties>): React.ReactElement {
  return (
    <strong>
      <TextNodeRenderer>{ properties.children.text }</TextNodeRenderer>
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