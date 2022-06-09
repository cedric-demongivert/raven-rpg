import React from 'react'
import classnames from 'classnames'

import { StackLayout } from './layout/StackLayout'

import { CorvusDocument } from '../typescript/corvus/CorvusDocument'
import { CorvusSubidivison } from '../typescript/corvus/CorvusSubdivision'

import { CorvusMinimapElement } from './CorvusMinimapElement'
import { CorvusMinimapElements } from './CorvusMinimapElements'

/**
*
*/
export class CorvusMinimap extends React.Component<CorvusMinimap.Properties> {
  /**
   * 
   */
  public constructor (properties : CorvusMinimap.Properties) {
    super(properties)
  }

  /**
   * 
   */
  public extractElements(): CorvusMinimapElement[] {
    const document: CorvusDocument = this.props.document
    const result: CorvusMinimapElement[] = []

    for (const element of document.elements(/*this.props.root*/)) {
      if (CorvusSubidivison.is(element)) {
        result.push(
          CorvusMinimapElement.create({
            identifier: element.identifier,
            depth: document.depth(element.identifier),
            content: CorvusSubidivison.get(element),
            key: element.key.replaceAll(':', '-')
          })
        )
      }
    }

    return result
  }

  /**
   * @see React.render
   */
  public render ():React.ReactElement {
    if (this.props.document == null) {
      return null
    } 
  
    const elements: CorvusMinimapElement[] = this.extractElements()
  
    if (elements.length < 1) {
      return null
    }
  
    return (
      <div className={classnames('rpg-minimap', this.props.className)}>
        <StackLayout>
          <StackLayout.Header />
          <StackLayout.Body>
            <CorvusMinimapElements elements={elements} />
          </StackLayout.Body>
          <StackLayout.Footer />
        </StackLayout>
      </div>
    )
  }
} 

/**
 * 
 */
export namespace CorvusMinimap {
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
    root?: number | undefined
  }
}
