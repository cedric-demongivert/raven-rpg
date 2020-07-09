import React from 'react'
import { ReactElement } from 'react'

import { Feat } from '../../typescript/feat/Feat'
import { Data } from '../data/Data'

export function FeatLinks (properties : FeatLinks.Properties) : ReactElement {
  return (
    <Data.List>
      {
        properties.children.map(
          function (feat : Feat, index : number) : ReactElement {
            return (
              <a className='data-element' href={'#feats-' + feat.identifier}>
                { feat.name }
              </a>
            )
          }
        )
      }
    </Data.List>
  )
}

export namespace FeatLinks {
  export type Properties = {
    children : Feat[]
  }
}
