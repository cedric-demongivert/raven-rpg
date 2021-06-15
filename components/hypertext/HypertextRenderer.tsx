import React from 'react'
import { ReactElement } from 'react'
import { HypertextElement } from '../../typescript/state/hypertext'

import { Hypertext } from '../../typescript/state/hypertext/Hypertext'

import { HypertextElementRenderer } from './HypertextElementRenderer'

/**
*
*/
export function HypertextRenderer(properties: HypertextRenderer.Properties): ReactElement {
  if (properties == null) {
    return null
  } else {
    return <>{
      properties.children.map(function renderElement(element: HypertextElement, index: number) : ReactElement {
        return <HypertextElementRenderer key={index}>{ element }</HypertextElementRenderer>
      })
    }</>
  }
}

export namespace HypertextRenderer {
  /**
  *
  */
  export type Properties = {
    children?: Hypertext
  }
}
