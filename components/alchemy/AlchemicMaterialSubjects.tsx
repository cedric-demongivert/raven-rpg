import React from 'react'
import { ReactElement } from 'react'
import { ReactNode } from 'react'

import { AlchemicMaterial } from '../../typescript/alchemy/AlchemicMaterial'

import { AlchemicMaterialSubject } from './AlchemicMaterialSubject'

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

export function AlchemicMaterialSubjects (properties : AlchemicMaterialSubjects.Properties) : ReactElement {
  return (
    <>
      {
        properties.children.reduce(reduceToPairs, []).map(
          function (pair : AlchemicMaterial[], index : number) : ReactElement {
            return (
              <div className='row justify-content-center' key={index}>
                {
                  pair.map(
                    function (data : AlchemicMaterial, index : number) : ReactElement {
                      return (
                        <div className='col-xs-12 col-lg-6' key={index}>
                          <AlchemicMaterialSubject>{ data }</AlchemicMaterialSubject>
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

export namespace AlchemicMaterialSubjects {
  export type Properties = {
    children : AlchemicMaterial[]
  }
}
