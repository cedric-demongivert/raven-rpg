import React from 'react'

/**
 * 
 */
 function renderTitle(depth: number, content: React.ReactNode) : React.ReactElement {
  switch (depth) {
    case 0:
      return (<h1 className='document-section-title'>{content}</h1>)
    case 1:
      return (<h2 className='document-section-title'>{content}</h2>)
    case 2:
      return (<h3 className='document-section-title'>{content}</h3>)
    case 3:
      return (<h4 className='document-section-title'>{content}</h4>)
    case 4:
      return (<h5 className='document-section-title'>{content}</h5>)
    case 5:
      return (<h6 className='document-section-title'>{content}</h6>)
    default:
      return (<strong className='document-section-title'>{content}</strong>)
  }
}

/**
 * 
 */
export function TitleRenderer(properties: Readonly<TitleRenderer.Properties>): React.ReactElement {
  if (properties.href == null) {
    return renderTitle(properties.depth || 0, properties.children)
  } else {
    return (
      <a href={'#' + properties.href}>
        { renderTitle(properties.depth || 0, properties.children) }
      </a>
    )
  }
}

/**
 * 
 */
export namespace TitleRenderer {
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
    children?: React.ReactNode | undefined,

    /**
     * 
     */
    href?: string | undefined
  }
}