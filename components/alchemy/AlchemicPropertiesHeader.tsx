import React from 'react'
import { ReactElement } from 'react'
import classNames from 'classnames'

import { Data } from '../data/Data'

export function AlchemicPropertiesHeader (
  properties : AlchemicPropertiesHeader.Properties
) : ReactElement {
  const className : string = classNames(
    'data-alchemic-property-header',
    properties.className
  )

  return (
    <Data.List row header className={className}>
      <Data.Element className='data-alchemic-property-effects'>
        Effets
      </Data.Element>
      <Data.Element
        static width='90px'
        className='data-alchemic-property-duration text-center'
      > Durée </Data.Element>
      <Data.Element
        static width='50px'
        className='data-alchemic-property-cost text-center'
      > Coût </Data.Element>
    </Data.List>
  )
}

export namespace AlchemicPropertiesHeader {
  export type Properties = {
    className?: string
  }
}
