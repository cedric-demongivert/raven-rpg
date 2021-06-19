import React from 'react'
import classnames from 'classnames'

import { CorvusDocument } from '../../typescript/corvus/CorvusDocument'
import { CorvusElement } from '../../typescript/corvus/CorvusElement'
import { CorvusSection } from '../../typescript/corvus/CorvusSection'

import { CorvusElementRenderer } from './CorvusElementRenderer'
import { TitleRenderer } from './TitleRenderer'

/**
 * 
 */
export function CorvusSectionRenderer(properties: CorvusSectionRenderer.Properties): React.ReactElement {
  const document: CorvusDocument = properties.document
  const element: CorvusElement = document.require(properties.element)

  CorvusSection.assert(element)

  return (
    <div 
      className={classnames('rpg-element rpg-section', properties.className, ...element.classes)}
      id={element.key == null ? undefined : element.key.replaceAll(':', '-')}
    >
      { <TitleRenderer depth={properties.depth} href={element.key}>{ element.title }</TitleRenderer> }

      {
        element.children.map(function renderSectionChild(child: number): React.ReactElement {
          return (
            <CorvusElementRenderer
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