import React from 'react'
import { CorvusLocationFormat } from '../../typescript/location'
import { CorvusSectionLike } from '../../typescript/model'
import { CorvusTreeRenderingContext } from './CorvusTreeRenderingContext'
import { renderCorvusNumbering } from './renderCorvusNumbering'

/**
 * 
 */
function renderCorvusTitleHeading(context: CorvusTreeRenderingContext<CorvusSectionLike>) : React.ReactElement {
  switch (context.tree.sectionDepth) {
    case 0:
      return (<h1>{context.node.title}</h1>)
    case 1:
      return (<h2>{context.node.title}</h2>)
    case 2:
      return (<h3>{context.node.title}</h3>)
    case 3:
      return (<h4>{context.node.title}</h4>)
    case 4:
      return (<h5>{context.node.title}</h5>)
    case 5:
      return (<h6>{context.node.title}</h6>)
    default:
      return (<strong>{context.node.title}</strong>)
  }
}

/**
 * 
 */
function renderCorvusTitleContent(context: CorvusTreeRenderingContext<CorvusSectionLike>): React.ReactElement {
  if (context.node.hasIdentifier()) {
    return (
      <a href={'#' + context.node.identifier}>
        { renderCorvusTitleHeading(context) }
      </a>
    )
  } else {
    return renderCorvusTitleHeading(context)
  }
}

/**
 * 
 */
function renderCorvusTitleFooter(context: CorvusTreeRenderingContext<CorvusSectionLike>): React.ReactElement {
  const parentSection = context.tree.parentSection

  if (parentSection == null) {
    return (
      <div className='corvus-title-footer'>
        <div className='corvus-title-margin' />
        <div className='corvus-title-content'>
          <a href='#matter'>Sommaire</a>
        </div>
      </div>
    )
  }

  let identifier: string

  if (parentSection.node.hasIdentifier()) {
    identifier = '#' + parentSection.node.identifier
  } else {
    identifier = '#section-' + parentSection.location.stringifySection(CorvusLocationFormat.DEFAULT_IDENTIFIER)
  }

  return (
    <div className='corvus-title-footer'>
      <div className='corvus-title-margin' />
      <div className='corvus-title-content'>
        <a href='#matter'>Sommaire</a>&nbsp;&#xB7;&nbsp;<a href={identifier}>Section parente</a>
      </div>
    </div>
  )
}

/**
 * 
 */
export function renderCorvusTitle(context: CorvusTreeRenderingContext<CorvusSectionLike>): React.ReactElement {
  return (
    <div className={'corvus-title corvus-title-' + (context.tree.sectionDepth + 1)}>
      <div className='corvus-title-body'>
        <div className='corvus-title-margin'>
          {renderCorvusNumbering(context.tree.location)}
        </div> 
        <div className='corvus-title-content'>
          {renderCorvusTitleContent(context)}
        </div>
      </div>
      {renderCorvusTitleFooter(context)}
    </div>
  )
}