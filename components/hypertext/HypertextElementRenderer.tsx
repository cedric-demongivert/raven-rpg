import React from 'react'
import { ReactElement } from 'react'

import { Acronym } from '../../typescript/state/hypertext/Acronym'
import { Emphasize } from '../../typescript/state/hypertext/Emphasize'
import { Link } from '../../typescript/state/hypertext/Link'

import { HypertextElement } from '../../typescript/state/hypertext/HypertextElement'
import { HypertextElementType } from '../../typescript/state/hypertext/HypertextElementType'

import { EmphasizeRenderer } from './EmphasizeRenderer'
import { AcronymRenderer } from './AcronymRenderer'
import { LinkRenderer } from './LinkRenderer'

/**
 * 
 */
export function HypertextElementRenderer(properties: HypertextElementRenderer.Properties): ReactElement {
  if (typeof properties.children === 'string') {
    return properties.children
  }

  switch (properties.children.type) {
    case HypertextElementType.EMPHASIZE:
      return <EmphasizeRenderer>{ properties.children as Emphasize }</EmphasizeRenderer>
    case HypertextElementType.LINK:
      return <LinkRenderer>{ properties.children as Link }</LinkRenderer>
    case HypertextElementType.ACRONYM:
      return <AcronymRenderer>{ properties.children as Acronym }</AcronymRenderer>
    default:
      throw new Error(
        'Unable to render hypertext element of type ' +
        HypertextElementType.toDebugString(properties.children.type) + ' because ' +
        'no procedure was defined for that.'
      )
  }
}

/**
 * 
 */
export namespace HypertextElementRenderer {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    children: HypertextElement
  }
}