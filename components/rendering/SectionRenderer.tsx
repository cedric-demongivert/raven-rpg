import React from 'react'
import classnames from 'classnames'

import { DocumentElement, Section } from '../../typescript/model'

import { ContentNodeRenderer } from './ContentNodeRenderer'
import { TitleRenderer } from './TitleRenderer'

function renderSectionChild(depth: number, child: DocumentElement, index: number): React.ReactElement {
  return (
    <ContentNodeRenderer
      key={index} 
      depth={depth}
    >{child}</ContentNodeRenderer>
  )
}

/**
 * 
 */
export function SectionRenderer(properties: Readonly<CorvusSectionRenderer.Properties>): React.ReactElement {
  const section: Section = properties.children
  const sectionProperties: React.HTMLAttributes<HTMLDivElement> = { }

  if (section.hasIdentifier()) {
    sectionProperties.id = section.identifier
  }

  if (section.hasClasses() || properties.className != null && properties.className.length > 0) {
    sectionProperties.className = classnames(properties.className, ...section.classes)
  }

  return (
    <section {...sectionProperties}>
      { <TitleRenderer depth={properties.depth} href={section.identifier}>{ section.title }</TitleRenderer> }
      { section.content.map(renderSectionChild.bind(undefined, (properties.depth || 0) + 1)) }
    </section>
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