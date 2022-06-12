import React from 'react'

import { Text } from '../../typescript/model'
import { TextStructureRenderer } from './TextStructureRenderer'

/**
 * 
 */
const SPACE: string = ' '

/**
 * 
 */
const NO_SPACE_BEFORE: RegExp = /^(,|;|\.)/i

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
      if (index > 0 && !NO_SPACE_BEFORE.test(child)) {
        content.push(SPACE)
      }
      content.push(child)
    } else {
      if (index > 0) {
        content.push(SPACE)
      }
      content.push(<TextStructureRenderer key={index}>{ child }</TextStructureRenderer>)
    }
  }

  return <div className='text'>{ content }</div>
}

export namespace TextRenderer {
  /**
  *
  */
  export type Properties = {
    /**
     * 
     */
    readonly children?: Text
  }
}
