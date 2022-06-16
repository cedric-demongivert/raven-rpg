import React from 'react'
import { CorvusParagraph } from '../../typescript/model'
import { CorvusTreeRenderingContext } from './CorvusTreeRenderingContext'
import { renderCorvusBlock } from './renderCorvusBlock'

/**
 * 
 */
export function renderCorvusParagraph(context: CorvusTreeRenderingContext<CorvusParagraph>) : React.ReactElement {
  return renderCorvusBlock(context, 'corvus-paragraph', React.createElement('p', CorvusTreeRenderingContext.toCorvusNodeProperties(context)))
}