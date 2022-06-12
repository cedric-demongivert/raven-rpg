import React from 'react'
import classnames from 'classnames'

import { Document, DocumentElement } from '../../typescript/model'

import { DocumentElementRenderer } from './DocumentElementRenderer'

/**
 * 
 */
export function renderElement(depth: number, element: DocumentElement, index: number): React.ReactElement {
  return <DocumentElementRenderer key={index} depth={depth}>{element}</DocumentElementRenderer>
}

/**
 *
 */
export function DocumentRenderer(properties: Readonly<DocumentRenderer.Properties>): React.ReactElement {
  if (properties.children == null) {
    return null
  } 

  return (
    <div className={classnames('document', properties.className)}>
      { properties.children.map(renderElement.bind(undefined, properties.depth == null ? 0 : properties.depth))}
    </div>
  )
}

/**
 * 
 */
export namespace DocumentRenderer {
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
    depth?: number | undefined,

    /**
     * 
     */
    children?: Document | undefined
  }
}
