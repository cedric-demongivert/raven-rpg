import React from 'react'
import { ReactElement } from 'react'
import { DocumentElement, DocumentElementType, Section, Paragraph } from '../../typescript/model'

import { ParagraphRenderer } from './ParagraphRenderer'
import { SectionRenderer } from './SectionRenderer'

/**
 * 
 */
export function DocumentElementRenderer(properties: Readonly<DocumentElementRenderer.Properties>): ReactElement {
  switch(properties.children.type) {
    case DocumentElementType.SECTION:
      return <SectionRenderer depth={properties.depth}>{properties.children as Section}</SectionRenderer>
    case DocumentElementType.PARAGRAPH:
      return <ParagraphRenderer depth={properties.depth}>{properties.children as Paragraph}</ParagraphRenderer>
    default:
      throw new Error(
        `Unable to render document element of type ${DocumentElementType.toDebugString(properties.children.type)} ` +
        'because no procedure was defined for that.'
      )
  }
}


/**
 * 
 */
export namespace DocumentElementRenderer {
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
    children: DocumentElement
  }
}