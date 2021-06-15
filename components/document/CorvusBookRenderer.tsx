import React from 'react'
import { ReactElement } from 'react'
import { CorvusBook } from '../../typescript/corvus/CorvusBook'
import { CorvusDocument } from '../../typescript/corvus/CorvusDocument'
import { CorvusDocumentElement } from '../../typescript/corvus/CorvusDocumentElement'

import { CorvusDocumentElementRenderer } from './CorvusDocumentElementRenderer'
import { CorvusSummaryRenderer } from './CorvusSummaryRenderer'

/**
 * 
 */
export function CorvusBookRenderer(properties: RPGBookRenderer.Properties): ReactElement {
  const document: CorvusDocument = properties.document
  const element: CorvusDocumentElement<CorvusBook> = document.requireByIdentifier(properties.element, CorvusBook.assert)

  return (
    <div 
      className='rpg-element rpg-book'
      id={element.key == null ? undefined : element.key.replaceAll(':', '-')}
    >
      <h1 className='rpg-book-title'>{ element.model.title }</h1>
      <div className='rpg-book-content'>
        <div className='rpg-element rpg-section'>
          <h2 className='rpg-section-title'>Sommaire</h2>

          <CorvusSummaryRenderer document={document} root={0} />
        </div>
        
        {   
          element.children.map(function renderBookChild(child: number): React.ReactElement {
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
    </div>
  )
}

/**
 * 
 */
export namespace RPGBookRenderer {
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