import React from 'react'
import classnames from 'classnames'

import { TextRenderer } from '../text'

import { Paragraph } from '../../typescript/model'

/**
 * 
 */
export function ParagraphRenderer(properties: Readonly<ParagraphRenderer.Properties>): React.ReactElement {
  const paragraph = properties.children

  return (
    <p 
      className={classnames('document-element document-paragraph', properties.className)}
      id={paragraph.hasIdentifier() ? paragraph.identifier : undefined}
    ><TextRenderer>{paragraph.text}</TextRenderer></p>
  )
}

/**
 * 
 */
export namespace ParagraphRenderer {
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
    children: Paragraph
  }
}