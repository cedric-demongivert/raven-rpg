import React from 'react'
import { ReactElement } from 'react'
import { ReactNode } from 'react'
import classNames from 'classnames'

import { Data } from '../data/Data'

export function AlchemicProperty (
  properties : AlchemicProperty.Properties
) : ReactElement {
  const className : string = classNames(
    'data-alchemic-property',
    properties.className
  )

  return (
    <Data.List row className={className}>
      <Data.Element className='data-alchemic-property-effects'>
        {properties.children.effects.map(function (effect : ReactNode, index : number) : ReactElement {
          return (
            <Data.Element key={index} className='data-alchemic-property-effect'>
              {effect}
            </Data.Element>
          )
        })}
      </Data.Element>
      <Data.Element static className='data-alchemic-property-duration text-center' width='120px'>
        {properties.children.duration}
      </Data.Element>
      <Data.Element static className='data-alchemic-property-cost text-center' width='50px'>
        {properties.children.cost}
      </Data.Element>
    </Data.List>
  )
}

export namespace AlchemicProperty {
  export type Data = {
    effects: ReactNode[],
    duration: ReactNode,
    cost: ReactNode
  }

  export type Properties = {
    className?: string,
    children: Data
  }
}
