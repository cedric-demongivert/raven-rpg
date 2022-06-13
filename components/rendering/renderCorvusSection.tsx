import React from 'react'
import { CorvusSection } from '../../typescript/model'
import { CorvusTreeRenderingContext } from './CorvusTreeRenderingContext'
import { renderCorvusTitle } from './renderCorvusTitle'

/**
 * 
 */
export function renderCorvusSection(context: CorvusTreeRenderingContext<CorvusSection>) : React.ReactElement {
  return React.createElement(
    'section', 
    CorvusTreeRenderingContext.toShallowCorvusNodeProperties(context),
    renderCorvusTitle(context),
    context.children
  )
}