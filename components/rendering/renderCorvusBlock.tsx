import classNames from 'classnames'
import React from 'react'
import { CorvusParagraph } from '../../typescript/model'
import { CorvusTreeRenderingContext } from './CorvusTreeRenderingContext'

/**
 * 
 */
export function renderCorvusBlock(
  context: CorvusTreeRenderingContext<unknown>, 
  className: string | null | undefined, 
  children: React.ReactNode
) : React.ReactElement {

  const properties: any = {
    className: classNames('corvus-block', className)
  }

  if (context.hasKey()) {
    properties.key = context.key
  }

  return (
    <div {...properties}>
      <div className='corvus-block-margin' />
      <div className='corvus-block-content'>
        { children }
      </div>
    </div>
  )
}