import React from 'react'
import { ReactElement } from 'react'
import { CorvusImage } from '../../../typescript/corvus/CorvusImage'
import { CorvusDocument } from '../../../typescript/corvus/CorvusDocument'

import { Resource } from '../../../typescript/state/resource/Resource'
import { RPGImageFormat } from '../../../typescript/state/rpg'
import { SVGImageRenderer } from './SVGImageRenderer'
import { CorvusDocumentElement } from '../../../typescript/corvus/CorvusDocumentElement'

/**
 * 
 */
export function CorvusImageRenderer(properties: CorvusImageRenderer.Properties): ReactElement {
  if (properties.resource == null) {
    return null
  } 

  const document: CorvusDocument = properties.document
  const element: CorvusDocumentElement<CorvusImage> = document.requireByIdentifier(properties.element, CorvusImage.assert)
  
  switch (element.model.format) {
    case RPGImageFormat.SVG:
      return <SVGImageRenderer {...properties} />
    default:
      throw new Error(
        'Unable to render image of type ' + RPGImageFormat.toDebugString(element.model.format) + 
        ' as no procedure was defined for that.'
      )
  }
}

/**
 * 
 */
export namespace CorvusImageRenderer {
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
    element: number,

    /**
     * 
     */
    resource: Resource | undefined
  }
}