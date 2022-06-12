import React from 'react'

import { TextNode } from '../../typescript/model'
import { TextStructureRenderer } from './TextStructureRenderer'

/**
*
*/
export function TextRenderer(properties: Readonly<TextRenderer.Properties>): React.ReactElement {
  if (properties.children == null) return null

  const elements = properties.children
  const content: Array<React.ReactNode> = []

  for (let index = 0; index < elements.size; ++index) {
    const child = elements.get(index)

    if (typeof child === 'string') {
      content.push(child)
    } else {
      content.push(<TextStructureRenderer key={index}>{ child }</TextStructureRenderer>)
    }
  }

  return <span className='text'>{ content }</span>
}

export namespace TextRenderer {
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
