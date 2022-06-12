import React from 'react'
import classnames from 'classnames'

import { DocumentElement, Section } from '../../typescript/model'

import { DocumentElementRenderer } from './DocumentElementRenderer'
import { TitleRenderer } from './TitleRenderer'

function renderSectionChild(depth: number, child: DocumentElement, index: number): React.ReactElement {
  return (
    <DocumentElementRenderer
      key={index} 
      depth={depth}
    >{child}</DocumentElementRenderer>
  )
}

/**
 * 
 */
export function SectionRenderer(properties: Readonly<CorvusSectionRenderer.Properties>): React.ReactElement {
  const section: Section = properties.children

  return (
    <div 
      className={classnames('document-element document-section', properties.className, ...section.classes)}
      id={section.hasIdentifier() ? section.identifier : undefined}
    >
      { <TitleRenderer depth={properties.depth} href={section.identifier}>{ section.title }</TitleRenderer> }
      { section.content.map(renderSectionChild.bind(undefined, (properties.depth || 0) + 1)) }
    </div>
  )
}

/**
 * 
 */
export namespace CorvusSectionRenderer {
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
    children: Section
  }
}