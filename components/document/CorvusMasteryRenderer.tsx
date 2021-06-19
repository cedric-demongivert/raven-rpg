import React from 'react'
import classnames from 'classnames'

import { CorvusDocument } from '../../typescript/corvus/CorvusDocument'
import { CorvusElement } from '../../typescript/corvus/CorvusElement'
import { CorvusMastery } from '../../typescript/corvus/CorvusMastery'
import { CorvusCharacteristic } from '../../typescript/corvus/CorvusCharacteristic'

import { CorvusElementRenderer } from './CorvusElementRenderer'
import { TitleRenderer } from './TitleRenderer'
import { CorvusSubidivison } from '../../typescript/corvus/CorvusSubdivision'

/**
 * 
 */
function renderInnates (document: CorvusDocument, element: CorvusMastery): React.ReactElement {
  if (element.innates.size < 1) {
    return (
      <div className='data data-list rpg-mastery-innates'>
        <div className='data data-header'>
          Cette maîtrise n'est pas sujette à un bonus inné.
        </div>
      </div>
    )
  }

  const tokens: CorvusCharacteristic[] = []

  for (const innate of element.innates) {
    const characteristic: CorvusElement = document.require(innate.element)
    CorvusCharacteristic.assert(characteristic)
    tokens.push(characteristic)
  }

  tokens.sort(CorvusSubidivison.compareBySubdivision)

  if (tokens.length === 1) {
    return (
      <div className='data data-list rpg-mastery-innates'>
        <div className='data data-header'>
          Influencée par la charactéristique :
        </div>
        <div className='data data-element'>
          <a href={'#' + tokens[0].key.replaceAll(':', '-')}>{ tokens[0].title }</a>
        </div>
      </div>
    )
  } else {
    return (
      <div className='data data-list rpg-mastery-innates'>
        <div className='data data-header'>
          Influencée par une des charactéristiques :
        </div>
        <div className='data data-element'>
          { 
            tokens.map(function renderToken(value: CorvusCharacteristic, index: number): React.ReactElement {
              return (
                <React.Fragment key={index}>
                  <a href={'#' + value.key.replaceAll(':', '-')} key={index}>  
                    { value.title }
                  </a>
                  { index < tokens.length - 1 ? <span className='separator'>, </span> : null }
                </React.Fragment>
                
              )
            }) 
          }
        </div>
      </div>
    )
  }
}

/**
 * 
 */
export function CorvusMasteryRenderer(properties: CorvusMasteryRenderer.Properties): React.ReactElement {
  const document: CorvusDocument = properties.document
  const element: CorvusElement = document.require(properties.element)

  CorvusMastery.assert(element)

  return (
    <div 
      className={classnames('rpg-element rpg-section rpg-mastery', properties.className, ...element.classes)}
      id={element.key == null ? undefined : element.key.replaceAll(':', '-')}
    >
      { <TitleRenderer depth={properties.depth} href={element.key}>{ element.title }</TitleRenderer> }
      { renderInnates(document, element) }
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