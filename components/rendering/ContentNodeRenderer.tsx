import React from 'react'
import { ReactElement } from 'react'
import { ContentNodeType, Section, Paragraph, ContentNode, Emphasize, Link, Acronym } from '../../typescript/model'
import { AcronymRenderer } from './AcronymRenderer'
import { EmphasizeRenderer } from './EmphasizeRenderer'
import { LinkRenderer } from './LinkRenderer'

import { ParagraphRenderer } from './ParagraphRenderer'
import { SectionRenderer } from './SectionRenderer'

/**
 * 
 */
export function ContentNodeRenderer(properties: Readonly<ContentNodeRenderer.Properties>): ReactElement {
  switch(properties.children.type) {
    case ContentNodeType.SECTION:
      return <SectionRenderer depth={properties.depth}>{properties.children as Section}</SectionRenderer>
    case ContentNodeType.PARAGRAPH:
      return <ParagraphRenderer depth={properties.depth}>{properties.children as Paragraph}</ParagraphRenderer>
    case ContentNodeType.EMPHASIZE:
      return <EmphasizeRenderer>{properties.children as Emphasize}</EmphasizeRenderer>
    case ContentNodeType.LINK:
      return <LinkRenderer>{properties.children as Link}</LinkRenderer>
    case ContentNodeType.ACRONYM:
      return <AcronymRenderer>{properties.children as Acronym}</AcronymRenderer>
    default:
      throw new Error(
        `Unable to render document element of type ${ContentNodeType.toDebugString(properties.children.type)} ` +
        'because no procedure was defined for that.'
      )
  }
}


/**
 * 
 */
export namespace ContentNodeRenderer {
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
    children: ContentNode
  }
}