import React from 'react'
import classnames from 'classnames'

import { CorvusDocument } from '../../typescript/corvus/CorvusDocument'
import { CorvusDocumentElement } from '../../typescript/corvus/CorvusDocumentElement'
import { CorvusMastery } from '../../typescript/corvus/CorvusMastery'

import { CorvusDocumentElementRenderer } from './CorvusDocumentElementRenderer'
import { CorvusCharacteristic } from '../../typescript/corvus'
import { TitleRenderer } from './TitleRenderer'

/**
 * 
 */
function renderInnates (document: CorvusDocument, element: CorvusDocumentElement<CorvusMastery>): React.ReactElement {
  if (element.model.innates.size < 1) {
    return null
  }

  const tokens: CorvusDocumentElement<CorvusCharacteristic>[] = []

  for (const innate of element.model.innates) {
    const characteristic: CorvusDocumentElement<CorvusCharacteristic> = document.requireByKey(innate.element, CorvusCharacteristic.is)
    tokens.push(characteristic)
  }

  tokens.sort(CorvusCharacteristic.compareElementByTitle)

  if (tokens.length === 1) {
    return (
      <div className='data data-list rpg-mastery-innates'>
        <div className='data data-header'>
          Influencée par la charactéristique :
        </div>
        <a href={'#' + tokens[0].key.replaceAll(':', '-')} className='rpg-data data-element'>  
          { tokens[0].model.title }
        </a>
      </div>
    )
  } else {
    return (
      <div className='data data-list rpg-mastery-innates'>
        <div className='data data-header'>
          Influencée par une des charactéristiques :
        </div>
        { 
          tokens.map(function renderToken(value: CorvusDocumentElement<CorvusCharacteristic>, index: number): React.ReactElement {
            return (
              <a href={'#' + value.key.replaceAll(':', '-')} key={index} className='data data-element'>  
                { value.model.title }
              </a>
            )
          }) 
        }
      </div>
    )
  }
}

/**
 * 
 */
export function CorvusMasteryRenderer(properties: CorvusMasteryRenderer.Properties): React.ReactElement {
  const document: CorvusDocument = properties.document
  const element: CorvusDocumentElement<CorvusMastery> = document.requireByIdentifier(properties.element, CorvusMastery.assert)

  return (
    <div 
      className={classnames('rpg-element rpg-section rpg-mastery', properties.className, ...element.model.classes)}
      id={element.key == null ? undefined : element.key.replaceAll(':', '-')}
    >
      { <TitleRenderer depth={properties.depth} href={element.key}>{ element.model.title }</TitleRenderer> }
      { renderInnates(document, element) }
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
export namespace CorvusMasteryRenderer {
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