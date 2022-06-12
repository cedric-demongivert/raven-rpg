import React from 'react'
import classnames from 'classnames'

import { TextNodeRenderer } from './TextNodeRenderer'

import { Paragraph } from '../../typescript/model'

/**
 * 
 */
export function ParagraphRenderer(properties: Readonly<ParagraphRenderer.Properties>): React.ReactElement {
  const paragraph = properties.children
  const paragraphProperties: React.HTMLAttributes<HTMLParagraphElement> = { }

  if (paragraph.hasIdentifier()) {
    paragraphProperties.id = paragraph.identifier
  }

  if (paragraph.hasClasses() || properties.className != null && properties.className.length > 0) {
    paragraphProperties.className = classnames(properties.className, ...paragraph.classes)
  }

  return (
    <p {...paragraphProperties}>
      <TextNodeRenderer>{paragraph.text}</TextNodeRenderer>
    </p>
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