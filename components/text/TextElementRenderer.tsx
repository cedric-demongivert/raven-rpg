import React from 'react'

import { TextNodeElement } from '../../typescript/model'

import { TextStructureRenderer } from './TextStructureRenderer'


/**
 * 
 */
export function TextElementRenderer(properties: Readonly<TextElementRenderer.Properties>): React.ReactNode {
  if (typeof properties.children === 'string') {
    return properties.children
  }

  return TextStructureRenderer({ children: properties.children })
}

/**
 * 
 */
export namespace TextElementRenderer {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    children: TextNodeElement
  }
}