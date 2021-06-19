import React from 'react'
import { CorvusDocument } from '../../typescript/corvus/CorvusDocument'
import classnames from 'classnames'

import { CorvusElement } from '../../typescript/corvus/CorvusElement'
import { CorvusSubdivision, CorvusSubidivison } from '../../typescript/corvus/CorvusSubdivision'

/**
 * 
 */
type SummaryElement = {
  /**
   * 
   */
  readonly element: CorvusElement,

  /**
   * 
   */
  readonly depth: number,

  /**
   * 
   */
  readonly title: string
}

/**
 * 
 */
function extractSummaryElements(document: CorvusDocument, root: number): SummaryElement[] {
  const result: SummaryElement[] = []

  for (const element of document.elements()) {
    if (CorvusSubidivison.is(element)) {
      result.push({
        element,
        depth: document.depth(element.identifier),
        title: CorvusSubidivison.get(element)
      })
    }
  }

  return result
}

/**
 * 
 */
function renderSummaryElement(element: SummaryElement): React.ReactElement {
  if (element.element.key == null) {
    return (
      <div 
        key={element.element.identifier}
        className={'rpg-summary-element rpg-summary-depth-' + element.depth}
      >{ element.title }</div>
    )
  } else {
    return (
      <a 
        key={element.element.identifier}
        className={'rpg-summary-element rpg-summary-depth-' + element.depth}
        href={'#' + element.element.key.replaceAll(':', '-')}
      >{ element.title }</a>
    )
  }
}

/**
*
*/
export function CorvusSummaryRenderer(properties: CorvusSummaryRenderer.Properties): React.ReactElement {
  if (properties.document == null) {
    return null
  } 

  const elements: SummaryElement[] = extractSummaryElements(properties.document, properties.root)

  if (elements.length < 1) {
    return null
  }

  const pivot: number = (elements.length >> 1) + (elements.length & 0b1)
  const left: SummaryElement[] = elements.slice(0, pivot)
  const right: SummaryElement[] = elements.slice(pivot)

  return (
    <div className={classnames('rpg-document rpg-summary', properties.className)}>
      <div className='row'>
        <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
          { left.map(renderSummaryElement) }
        </div>
        <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
          { right.map(renderSummaryElement) }
        </div>
      </div>
    </div>
  )
}

/**
 * 
 */
export namespace CorvusSummaryRenderer {
  /**
  *
  */
  export type Properties = {
    /**
     * 
     */
    className?: string | undefined,

    /**
     * 
     */
    document?: CorvusDocument | undefined,

    /**
     * 
     */
    root?: number
  }
}
