import React from 'react'
import classnames from 'classnames'

import { CorvusDocument } from '../../typescript/corvus/CorvusDocument'
import { CorvusDocumentElement } from '../../typescript/corvus/CorvusDocumentElement'
import { CorvusSection } from '../../typescript/corvus/CorvusSection'

import { CorvusDocumentElementRenderer } from './CorvusDocumentElementRenderer'
import { TitleRenderer } from './TitleRenderer'

/**
 * 
 */
export function CorvusSectionRenderer(properties: CorvusSectionRenderer.Properties): React.ReactElement {
  const document: CorvusDocument = properties.document
  const element: CorvusDocumentElement<CorvusSection> = document.requireByIdentifier(properties.element, CorvusSection.assert)

  return (
    <div 
      className={classnames('rpg-element rpg-section', properties.className, ...element.model.classes)}
      id={element.key == null ? undefined : element.key.replaceAll(':', '-')}
    >
      { <TitleRenderer depth={properties.depth} href={element.key}>{ element.model.title }</TitleRenderer> }

      {
        element.children.map(function renderSectionChild(child: number): React.ReactElement {
          return (
            <CorvusDocumentElementRenderer
              key={child} 
              depth={properties.depth + 1}
              document={properties.document}
              element={child}
            />
          )
        })
      }
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
    document: CorvusDocument,
    
    /**
     * 
     */
    element: number
  }
}