import React from 'react'
import { ReactElement } from 'react'
import { capitalize } from 'lodash'
import classNames from 'classnames'

import { AlchemicTransformationEntry } from '../../typescript/alchemy/AlchemicTransformationEntry'
import { AlchemicTransformation } from '../../typescript/alchemy/AlchemicTransformation'

import { Data } from '../data/Data'

export function AlchemicTransformationList (
  properties : AlchemicTransformationList.Properties
) : ReactElement {
  const className : string = classNames(
    'data-alchemic-transformations',
    properties.className
  )

  return (
    <Data.List row className={className}>
      <Data.List className='data-static'>
        {
          properties.children.map(function renderType (element : AlchemicTransformationEntry, index : number) : ReactElement {
            return (
              <a
                key={index}
                href={'#alchemy-material-' + element[1].identifier}
                className='data-element data-alchemic-transformation-type'
              >{capitalize(AlchemicTransformation.toFrench(element[0]))}</a>
            )
          })
        }
      </Data.List>
      <Data.List>
        {
          properties.children.map(function renderArrow (element : AlchemicTransformationEntry, index : number) : ReactElement {
            return (
              <a
                key={index}
                href={'#alchemy-material-' + element[1].identifier}
                className='data-element arrow right-arrow'
              />
            )
          })
        }
      </Data.List>
      <Data.List className='data-static'>
        {
          properties.children.map(function renderArrow (element : AlchemicTransformationEntry, index : number) : ReactElement {
            return (
              <a
                key={index}
                href={'#alchemy-material-' + element[1].identifier}
                className='data-element data-alchemic-transformation-result'
              >{element[1].name}</a>
            )
          })
        }
      </Data.List>
    </Data.List>
  )
}

export namespace AlchemicTransformationList {
  export type Properties = {
    children?: AlchemicTransformationEntry[],
    className?: string
  }
}
