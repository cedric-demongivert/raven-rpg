import React from 'react'

import { Acronym, Emphasize, Link, ContentNodeType, TextualNode } from '../../typescript/model'

import { EmphasizeRenderer } from './EmphasizeRenderer'
import { AcronymRenderer } from './AcronymRenderer'
import { LinkRenderer } from './LinkRenderer'

/**
 * 
 */
export function TextStructureRenderer(properties: Readonly<TextStructureRenderer.Properties>): React.ReactElement {
  switch (properties.children.type) {
    case ContentNodeType.EMPHASIZE:
      return <EmphasizeRenderer>{ properties.children as Emphasize }</EmphasizeRenderer>
    case ContentNodeType.LINK:
      return <LinkRenderer>{ properties.children as Link }</LinkRenderer>
    case ContentNodeType.ACRONYM:
      return <AcronymRenderer>{ properties.children as Acronym }</AcronymRenderer>
    default:
      throw new Error(
        `Unable to render text element of type ${ContentNodeType.toDebugString(properties.children.type)} ` +
        'because no procedure was defined for that.'
      )
  }
}

/**
 * 
 */
export namespace TextStructureRenderer {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    children: TextualNode
  }
}