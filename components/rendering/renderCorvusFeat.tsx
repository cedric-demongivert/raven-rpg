import classNames from 'classnames'
import React from 'react'
import { CorvusFeat } from '../../typescript/model'
import { CorvusTreeRenderingContext } from './CorvusTreeRenderingContext'
import { renderCorvusFeatRestrictions } from './renderCorvusFeatRestrictions'
import { renderCorvusTitle } from './renderCorvusTitle'


/**
 * 
 */
export function renderCorvusFeat(context: CorvusTreeRenderingContext<CorvusFeat>) : React.ReactElement {
  const properties = CorvusTreeRenderingContext.toShallowCorvusNodeProperties.withKey(context)
  properties.className = classNames('corvus-feat', properties.className)

  return React.createElement(
    'section', 
    properties,
    renderCorvusTitle(context),
    (
      <div className='corvus-block'>
        <div className='corvus-block-margin' />
        <div className='corvus-block-content'>
          { renderCorvusFeatRestrictions(context.node.restrictions) }
        </div>
      </div>
    ),
    context.children
  )
}