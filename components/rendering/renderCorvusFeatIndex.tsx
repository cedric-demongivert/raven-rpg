import React from 'react'
import { CorvusFeatIndex } from '../../typescript/model'
import { CorvusFeatIndexRenderer } from './CorvusFeatIndexRenderer'
import { CorvusTreeRenderingContext } from './CorvusTreeRenderingContext'
import { renderCorvusBlock } from './renderCorvusBlock'

/**
 * 
 */
const RENDERER: CorvusFeatIndexRenderer = new CorvusFeatIndexRenderer()

/**
 * 
 */
export function renderCorvusFeatIndex(context: CorvusTreeRenderingContext<CorvusFeatIndex>) : React.ReactElement {
  RENDERER.visit(context.tree.parent)

  return renderCorvusBlock(
    context, 
    'corvus-feat-index', 
    RENDERER.result()
  )
}