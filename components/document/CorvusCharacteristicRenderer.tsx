import React from 'react'
import classnames from 'classnames'

import { CorvusDocument } from '../../typescript/corvus/CorvusDocument'
import { CorvusDocumentElement } from '../../typescript/corvus/CorvusDocumentElement'
import { CorvusCharacteristic } from '../../typescript/corvus/CorvusCharacteristic'

import { CorvusDocumentElementRenderer } from './CorvusDocumentElementRenderer'
import { TitleRenderer } from './TitleRenderer'
import { CorvusMastery } from '../../typescript/corvus'

/**
 * 
 */
function renderRelatedMasteries(document: CorvusDocument, characteristic: CorvusDocumentElement<CorvusCharacteristic>): React.ReactElement {
  if (characteristic.key == null) {
    return null
  }

  const relatedMasteries: CorvusDocumentElement<CorvusMastery>[] = []

  for (const element of document.values()) {
    if (CorvusMastery.is(element.model) && element.model.isReferingToCharacteristic(characteristic.key)) {
      relatedMasteries.push(element as CorvusDocumentElement<CorvusMastery>)
    }
  }

  if (relatedMasteries.length < 1) {
    return null
  }

  relatedMasteries.sort(CorvusMastery.compareElementByTitle)

  if (relatedMasteries.length === 1) {
    return (
      <div className='data data-list rpg-mastery-innates'>
        <div className='data data-header'>
          Influence la maîtrise :
        </div>
        <a href={'#' + relatedMasteries[0].key.replaceAll(':', '-')} className='rpg-data data-element'>  
          { relatedMasteries[0].model.title }
        </a>
      </div>
    )
  } else {
    return (
      <div className='data data-list lg-column-2 xl-column-3 rpg-mastery-innates'>
        <div className='data data-header'>
          Influence les maîtrises :
        </div>
        { 
          relatedMasteries.map(function renderMastery(value: CorvusDocumentElement<CorvusMastery>, index: number): React.ReactElement {
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
export function CorvusCharacteristicRenderer(properties: CorvusCharacteristicRenderer.Properties): React.ReactElement {
  const document: CorvusDocument = properties.document
  const element: CorvusDocumentElement<CorvusCharacteristic> = document.requireByIdentifier(properties.element, CorvusCharacteristic.assert)

  return (
    <div 
      className={classnames('rpg-element rpg-section rpg-characteristic', properties.className, ...element.model.classes)}
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
      { renderRelatedMasteries(document, element) }
    </div>
  )
}

/**
 * 
 */
export namespace CorvusCharacteristicRenderer {
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