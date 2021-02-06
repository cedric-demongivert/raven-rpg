import React from 'react'
import { ReactElement } from 'react'

import { List } from 'immutable'

import { RPGDocument } from '../typescript/rpg/RPGDocument'
import { RPGElement } from '../typescript/rpg/RPGElement'
import { RPGElementType } from '../typescript/rpg/RPGElementType'

import { RPGParagraph } from '../typescript/rpg/RPGParagraph'
import { RPGSection } from '../typescript/rpg/RPGSection'
import { RPGRuleset } from '../typescript/rpg/RPGRuleset'
import { RPGRulesetLayout } from '../typescript/rpg/RPGRulesetLayout'

import { HypertextRenderer } from './HypertextRenderer'

/**
*
*/
function renderParagraph(element: RPGParagraph, index: number) : ReactElement {
  return (
    <p key={index}>
      <HypertextRenderer>{element.content}</HypertextRenderer>
    </p>
  )
}

function renderSectionTitle(depth: number, content: string) : ReactElement {
  switch (depth) {
    case 0:
      return (<h1 className='section-title'>{content}</h1>)
    case 1:
      return (<h2 className='section-title'>{content}</h2>)
    case 2:
      return (<h3 className='section-title'>{content}</h3>)
    case 3:
      return (<h4 className='section-title'>{content}</h4>)
    case 4:
      return (<h5 className='section-title'>{content}</h5>)
    case 5:
      return (<h6 className='section-title'>{content}</h6>)
    default:
      return (<strong className='section-title'>{content}</strong>)
  }
}

/**
*
*/
function renderSection(depth: number, element: RPGSection, index: number) : ReactElement {
  return (
    <div className='section' key={index}>
      { renderSectionTitle(depth, element.title) }

      <DocumentRenderer depth={depth + 1}>{element.children}</DocumentRenderer>
    </div>
  )
}

/**
*
*/
function renderTwoColumnSet(depth: number, element: RPGRuleset, index: number) : ReactElement {
  const content: List<RPGSection> = element.children.sort(RPGSection.compareByTitle)
  const result: ReactElement[] = []
  const pairs: number = (content.size >> 1) << 1

  for (let index = 0; index < pairs; ++index) {
    result.push(
      <div className='col-xs-12 col-md-6' key={index}>
        { renderSection(depth, content.get(index), index) }
      </div>
    )
  }

  if ((content.size & 0b1) === 1) {
    result.push(
      <div className='col-xs-12 col-md-6 offset-md-3' key={content.size - 1}>
        { renderSection(depth, content.last(), content.size - 1) }
      </div>
    )
  }

  return (
    <div className='row set two-column' key={index}>
      { result }
    </div>
  )
}

/**
*
*/
function renderOneColumnSet(depth: number, element: RPGRuleset, index: number) : ReactElement {
  return (
    <div className='set two-column' key={index}>
      {
        element.children.sort(RPGSection.compareByTitle).map(function (section: RPGSection, index: number) {
          return renderSection(depth, section, index)
        })
      }
    </div>
  )
}

/**
*
*/
function renderSet(depth: number, element: RPGRuleset, index: number) : ReactElement {
  switch (element.layout) {
    case RPGRulesetLayout.ONE_COLUMN:
      return renderOneColumnSet(depth, element, index)
    case RPGRulesetLayout.TWO_COLUMN:
      return renderTwoColumnSet(depth, element, index)
    default:
      throw new Error(
        'Unable to render document set of layout ' +
        RPGRulesetLayout.toDebugString(element.layout) +
        ' as no procedure was defined for that.'
      )
  }
}

/**
*
*/
function renderDocumentElement(depth: number, element: RPGElement, index: number): ReactElement {
  switch (element.type) {
    case RPGElementType.PARAGRAPH:
      return renderParagraph(element as RPGParagraph, index)
    case RPGElementType.SECTION:
      return renderSection(depth, element as RPGSection, index)
    case RPGElementType.RULESET:
      return renderSet(depth, element as RPGRuleset, index)
    case RPGElementType.IMAGE:
      return null
    default:
      throw new Error(
        'Unable to render document element of type ' +
        RPGElementType.toDebugString(element.type) + ' because ' +
        'no procedure was defined for that.'
      )
  }
}

/**
*
*/
export function DocumentRenderer(properties: DocumentRenderer.Properties): ReactElement {
  if (properties.children == null) {
    return null
  } else {
    return (
      <>{
        properties.children.map(
          renderDocumentElement.bind(null, properties.depth == null ? 0 : properties.depth)
        )
      }</>
    )
  }
}

export namespace DocumentRenderer {
  /**
  *
  */
  export const DEFAULT_PROPERTIES: Properties = {
    depth: 0
  }

  /**
  *
  */
  export type Properties = {
    depth?: number,
    children?: RPGDocument
  }
}
