import React from 'react'
import classnames from 'classnames'

import { RPGRulesetLayout } from '../../typescript/state/rpg/RPGRulesetLayout'
import { CorvusDocument } from '../../typescript/corvus/CorvusDocument'
import { CorvusDocumentElement } from '../../typescript/corvus/CorvusDocumentElement'
import { CorvusRuleset } from '../../typescript/corvus/CorvusRuleset'
import { CorvusDocumentSubdivision } from '../../typescript/corvus/CorvusDocumentSubdivision'
import { CorvusSection } from '../../typescript/corvus'
import { CorvusDocumentElementRenderer } from './CorvusDocumentElementRenderer'

/**
 * 
 */
function subdivisions (document: CorvusDocument, element: CorvusDocumentElement): CorvusDocumentElement<CorvusDocumentSubdivision>[] {
  const result: CorvusDocumentElement<CorvusDocumentSubdivision>[] = []

  for (const child of element.children) {
    const childElement: CorvusDocumentElement = document.requireByIdentifier(child)

    if (CorvusDocumentSubdivision.is(childElement.model)) {
      result.push(childElement as CorvusDocumentElement<CorvusDocumentSubdivision>)
    }
  }

  return result
}

/**
*
*/
function renderTwoColumnSet(properties: CorvusRulesetRenderer.Properties, element: CorvusDocumentElement<CorvusRuleset>) : React.ReactElement {
  const children: CorvusDocumentElement<CorvusDocumentSubdivision>[] = subdivisions(properties.document, element)
  const result: React.ReactElement[] = []

  for (let index = 0; index < children.length; ++index) {
    result.push(
      <div className='col-xs-12 col-md-6' key={index}>
        <CorvusDocumentElementRenderer
          depth={properties.depth}
          document={properties.document}
          element={children[index].identifier}
        />
      </div>
    )
  }

  return (
    <div 
      className='row rpg-element rpg-ruleset two-column'
      id={element.key == null ? undefined : element.key.replaceAll(':', '-')}
    > { result } </div>
  )
}

/**
*
*/
function renderOneColumnSet(properties: CorvusRulesetRenderer.Properties, element: CorvusDocumentElement<CorvusRuleset>) : React.ReactElement {
  const children: CorvusDocumentElement<CorvusDocumentSubdivision>[] = subdivisions(properties.document, element)

  children.sort(CorvusSection.compareElementByTitle)

  return (
    <div 
      className={classnames('rpg-element rpg-ruleset two-column', properties.className)}
      id={element.key == null ? undefined : element.key.replaceAll(':', '-')}
    >
      {
        children.map(function renderSubdivision (section: CorvusDocumentElement<CorvusDocumentSubdivision>) {
          return (
            <CorvusDocumentElementRenderer
              key={section.identifier} 
              depth={properties.depth}
              document={properties.document}
              element={section.identifier}
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
export function CorvusRulesetRenderer(properties: CorvusRulesetRenderer.Properties): React.ReactElement {
  const document: CorvusDocument = properties.document
  const element: CorvusDocumentElement<CorvusRuleset> = document.requireByIdentifier(properties.element, CorvusRuleset.assert)

  switch (element.model.layout) {
    case RPGRulesetLayout.ONE_COLUMN:
      return renderOneColumnSet(properties, element)
    case RPGRulesetLayout.TWO_COLUMN:
      return renderTwoColumnSet(properties, element)
    default:
      throw new Error('Unable to render layout ' + RPGRulesetLayout.toDebugString(element.model.layout) + ' as no procedure was defined for that.')
  }
}

/**
 * 
 */
export namespace CorvusRulesetRenderer {
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