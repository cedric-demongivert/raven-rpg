import React from 'react'
import { ReactElement } from 'react'

import { Feat } from '../../typescript/feat/Feat'
import { FeatSubject } from './FeatSubject'

function reduceToPairs <T> (base : T[][], next : T) : T[][] {
  if (base.length <= 0) {
    base.push([next])
    return base
  }

  const last : T[] = base[base.length - 1]

  if (last.length === 1) {
    last.push(next)
  } else {
    base.push([next])
  }

  return base
}

export function FeatSubjects (properties : FeatSubjects.Properties) : ReactElement {
  return (
    <>
      {
        properties.children.reduce(reduceToPairs, []).map(
          function (pair : Feat[], index : number) : ReactElement {
            return (
              <div className='row justify-content-center' key={index}>
                {
                  pair.map(
                    function (data : Feat, index : number) : ReactElement {
                      return (
                        <div className='col-xs-12 col-lg-6' key={index}>
                          <FeatSubject>{ data }</FeatSubject>
                        </div>
                      )
                    }
                  )
                }
              </div>
            )
          }
        )
      }
    </>
  )
}

export namespace FeatSubjects {
  export type Properties = {
    children : Feat[]
  }
}
