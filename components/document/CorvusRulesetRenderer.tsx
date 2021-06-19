import React from 'react'
import classnames from 'classnames'

import { RPGRulesetLayout } from '../../typescript/state/rpg/RPGRulesetLayout'
import { CorvusDocument } from '../../typescript/corvus/CorvusDocument'
import { CorvusRuleset } from '../../typescript/corvus/CorvusRuleset'
import { CorvusElement } from '../../typescript/corvus/CorvusElement'
import { CorvusElementRenderer } from './CorvusElementRenderer'

/**
*
*/
function renderTwoColumnSet(properties: CorvusRulesetRenderer.Properties, element: CorvusRuleset) : React.ReactElement {
  return (
    <div 
      className='row rpg-element rpg-ruleset two-column'
      id={element.key == null ? undefined : element.key.replaceAll(':', '-')}
    >
       { 
        element.children.map(function renderTwoColumnSetElement (element: number, index: number) {
          return (
            <div className='col-xs-12 col-md-6 col-lg-12 col-xl-6' key={index}>
              <CorvusElementRenderer
                depth={properties.depth}
                document={properties.document}
                element={element}
              />
           </div>
          )
        }) 
       } 
    </div>
  )
}

/**
*
*/
function renderOneColumnSet(properties: CorvusRulesetRenderer.Properties, element: CorvusRuleset) : React.ReactElement {
  return (
    <div 
      className={classnames('rpg-element rpg-ruleset two-column', properties.className)}
      id={element.key == null ? undefined : element.key.replaceAll(':', '-')}
    >
      {
        element.children.map(function renderOneColumnSetElement (element: number) {
          return (
            <CorvusElementRenderer
              key={element} 
              depth={properties.depth}
              document={properties.document}
              element={element}
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
  const element: CorvusElement = document.require(properties.element)

  CorvusRuleset.assert(element)

  switch (element.layout) {
    case RPGRulesetLayout.ONE_COLUMN:
      return renderOneColumnSet(properties, element)
    case RPGRulesetLayout.TWO_COLUMN:
      return renderTwoColumnSet(properties, element)
    default:
      throw new Error('Unable to render layout ' + RPGRulesetLayout.toDebugString(element.layout) + ' as no procedure was defined for that.')
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