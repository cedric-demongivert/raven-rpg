import React from 'react'
import { CorvusDocument } from '../../typescript/corvus/CorvusDocument'
import classnames from 'classnames'

import { CorvusDocumentElement } from '../../typescript/corvus/CorvusDocumentElement'
import { CorvusDocumentSubdivision } from '../../typescript/corvus/CorvusDocumentSubdivision'
import { CorvusDocumentModel } from '../../typescript/corvus'

/**
 * 
 */
type SummaryElement = {
  /**
   * 
   */
  readonly element: CorvusDocumentElement,

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
  const stack: number[] = [ root ]
  const result: SummaryElement[] = []

  while (stack.length > 0) {
    const element: CorvusDocumentElement = document.requireByIdentifier(stack.pop())
    const model: CorvusDocumentModel = element.model

    if (element.children) {
      for (let index = 0; index < element.children.size; ++index) {
        stack.push(element.children.get(element.children.size - index - 1))
      }
    }

    if (CorvusDocumentSubdivision.is(model)) {
      result.push({
        element,
        depth: document.depth(element.identifier),
        title: model.subdivision()
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
        <div className='col-12 col-lg-6'>
          { left.map(renderSummaryElement) }
        </div>
        <div className='col-12 col-lg-6'>
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
