import classNames from 'classnames'
import { List } from 'immutable'
import React from 'react'
import { CorvusConstraintFeatRestriction, CorvusPlainFeatRestriction } from '../../typescript/data'
import { CorvusFeat } from '../../typescript/model'
import { CorvusTreeRenderingContext } from './CorvusTreeRenderingContext'
import { renderCorvusTitle } from './renderCorvusTitle'

/**
 * 
 */
 function renderCorvusConstraintFeatRestrictionConstraint(value: CorvusConstraintFeatRestriction, index: number): React.ReactElement {
  return <div key={index} className='corvus-constraint-feat-restriction-constraint'>{ value.constraint }</div>
}

/**
 * 
 */
function renderCorvusConstraintFeatRestrictionTarget(value: CorvusConstraintFeatRestriction, index: number): React.ReactElement {
  return <div key={index} className='corvus-constraint-feat-restriction-target'>{ value.target }</div>
}

/**
 * 
 */
 function renderCorvusConstraintFeatRestrictions(restrictions: List<CorvusConstraintFeatRestriction>): React.ReactElement {
  return (
    <div className='corvus-feat-restriction corvus-constraint-feat-restrictions'>
      <div className='corvus-constraint-feat-restrictions-targets'>{ restrictions.map(renderCorvusConstraintFeatRestrictionTarget) }</div>
      <div className='corvus-constraint-feat-restrictions-constraints'>{ restrictions.map(renderCorvusConstraintFeatRestrictionConstraint) }</div>
    </div>
  )
}

/**
 * 
 */
function renderCorvusPlainFeatRestriction(value: CorvusPlainFeatRestriction, index: number): React.ReactElement {
  return <div key={index} className='corvus-feat-restriction corvus-plain-feat-restriction'>{ value.content }</div>
}

/**
 * 
 */
function renderCorvusFeatRestrictions(context: CorvusTreeRenderingContext<CorvusFeat>): React.ReactElement {
  return (
    <div className='corvus-block corvus-feat-restrictions'>
      <div className='corvus-block-margin' />
      <div className='corvus-block-content'>
        { renderCorvusConstraintFeatRestrictions(context.node.restrictions.filter(CorvusConstraintFeatRestriction.is)) }
        { context.node.restrictions.filter(CorvusPlainFeatRestriction.is).map(renderCorvusPlainFeatRestriction) }
      </div>
    </div>
  )
}

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
    renderCorvusFeatRestrictions(context),
    context.children
  )
}