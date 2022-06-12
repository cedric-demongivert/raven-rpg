import React from 'react'

import { TextNode } from '../../typescript/model'
import { ContentNodeRenderer } from './ContentNodeRenderer'

/**
*
*/
export function TextNodeRenderer(properties: Readonly<TextNodeRenderer.Properties>): React.ReactElement {
  if (properties.children == null) return null

  const elements = properties.children
  const content: Array<React.ReactNode> = []

  for (let index = 0; index < elements.size; ++index) {
    const child = elements.get(index)

    if (typeof child === 'string') {
      content.push(child)
    } else {
      content.push(<ContentNodeRenderer key={index}>{ child }</ContentNodeRenderer>)
    }
  }

  return <>{ content }</>
}

export namespace TextNodeRenderer {
  /**
  *
  */
  export type Properties = {
    /**
     * 
     */
    readonly children?: TextNode
  }
}
