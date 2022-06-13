import React from 'react'
import { CorvusParagraph } from '../../typescript/model'
import { CorvusTreeRenderingContext } from './CorvusTreeRenderingContext'

/**
 * 
 */
export function renderCorvusParagraph(context: CorvusTreeRenderingContext<CorvusParagraph>) : React.ReactElement {
  return (
    <div className='corvus-block corvus-paragraph'>
      <div className='corvus-block-margin' />
      <div className='corvus-block-content'>
        { React.createElement('p', CorvusTreeRenderingContext.toCorvusNodeProperties(context)) }
      </div>
    </div>
  )
}