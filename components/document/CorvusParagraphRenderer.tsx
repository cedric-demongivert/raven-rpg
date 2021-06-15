import React from 'react'
import classnames from 'classnames'

import { HypertextRenderer } from '../hypertext/HypertextRenderer'

import { CorvusDocument } from '../../typescript/corvus/CorvusDocument'
import { CorvusDocumentElement } from '../../typescript/corvus/CorvusDocumentElement'
import { CorvusParagraph } from '../../typescript/corvus/CorvusParagraph'

/**
 * 
 */
export function CorvusParagraphRenderer(properties: CorvusParagraphRenderer.Properties): React.ReactElement {
  const document: CorvusDocument = properties.document
  const element: CorvusDocumentElement<CorvusParagraph> = document.requireByIdentifier(properties.element, CorvusParagraph.assert)
  
  return (
    <p 
      className={classnames('rpg-element rpg-paragraph', properties.className)}
      id={element.key == null ? undefined : element.key.replaceAll(':', '-')}
    ><HypertextRenderer>{element.model.content}</HypertextRenderer></p>
  )
}

/**
 * 
 */
export namespace CorvusParagraphRenderer {
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
    document: CorvusDocument,
    
    /**
     * 
     */
    element: number
  }
}