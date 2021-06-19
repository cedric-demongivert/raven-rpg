import React from 'react'
import classnames from 'classnames'

import { CorvusDocument } from '../../typescript/corvus/CorvusDocument'
import { CorvusElement } from '../../typescript/corvus/CorvusElement'
import { CorvusCharacteristic } from '../../typescript/corvus/CorvusCharacteristic'
import { CorvusMastery } from '../../typescript/corvus/CorvusMastery'

import { CorvusElementRenderer } from './CorvusElementRenderer'
import { TitleRenderer } from './TitleRenderer'
import { CorvusSubidivison } from '../../typescript/corvus/CorvusSubdivision'

/**
 * 
 */
function renderRelatedMasteries(document: CorvusDocument, characteristic: CorvusCharacteristic): React.ReactElement {
  if (characteristic.key == null) {
    return null
  }

  const relatedMasteries: CorvusMastery[] = []

  for (const element of document.elements()) {
    if (CorvusMastery.is(element) && element.isReferingToCharacteristic(characteristic.key)) {
      relatedMasteries.push(element)
    }
  }

  if (relatedMasteries.length < 1) {
    return null
  }

  relatedMasteries.sort(CorvusSubidivison.compareBySubdivision)

  if (relatedMasteries.length === 1) {
    return (
      <div className='data data-list rpg-mastery-innates'>
        <div className='data data-header'>
          Influence la maîtrise :
        </div>
        <a href={'#' + relatedMasteries[0].key.replaceAll(':', '-')} className='rpg-data data-element'>  
          { relatedMasteries[0].title }
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
          relatedMasteries.map(function renderMastery(value: CorvusMastery, index: number): React.ReactElement {
            return (
              <a href={'#' + value.key.replaceAll(':', '-')} key={index} className='data data-element'>  
                { value.title }
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
  const element: CorvusElement = document.require(properties.element)

  CorvusCharacteristic.assert(element)

  return (
    <div 
      className={classnames('rpg-element rpg-section rpg-characteristic', properties.className, ...element.classes)}
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
      { /* renderRelatedMasteries(document, element) */ }
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