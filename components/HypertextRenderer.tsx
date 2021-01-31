import React from 'react'
import { ReactElement } from 'react'

import { Link } from '../typescript/hypertext/Link'
import { Hypertext } from '../typescript/hypertext/Hypertext'
import { Emphasize } from '../typescript/hypertext/Emphasize'
import { Acronym } from '../typescript/hypertext/Acronym'
import { HypertextElement } from '../typescript/hypertext/HypertextElement'
import { HypertextElementType } from '../typescript/hypertext/HypertextElementType'

/**
*
*/
function renderAcronym(element: Acronym, index: number) : ReactElement {
  return (
    <span className='acronym' key={index}>
      {element.acronym} ({element.expanded})
    </span>
  )
}

/**
*
*/
function renderLink(element: Link, index: number) : ReactElement {
  return (
    <a href={element.url} key={index}>
      {element.content}
    </a>
  )
}

/**
*
*/
function renderEmphasize(element: Emphasize, index: number) : ReactElement {
  return (
    <strong key={index}>
      <HypertextRenderer>{element.content}</HypertextRenderer>
    </strong>
  )
}

function Text (properties: { children: string }) : ReactElement {
  return (<>{properties.children}</>)
}

/**
*
*/
function renderHypertextElement(element: HypertextElement | string, index: number): ReactElement {
  if (typeof element === 'string') {
    return (<Text key={index}>{element}</Text>)
  }

  switch (element.type) {
    case HypertextElementType.EMPHASIZE:
      return renderEmphasize(element as Emphasize, index)
    case HypertextElementType.LINK:
      return renderLink(element as Link, index)
    case HypertextElementType.ACRONYM:
      return renderAcronym(element as Acronym, index)
    default:
      throw new Error(
        'Unable to render hypertext element of type ' +
        HypertextElementType.toDebugString(element.type) + ' because ' +
        'no procedure was defined for that.'
      )
  }
}

/**
*
*/
export function HypertextRenderer(properties: HypertextRenderer.Properties): ReactElement {
  if (properties == null) {
    return null
  } else {
    return (<>{properties.children.map(renderHypertextElement)}</>)
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
