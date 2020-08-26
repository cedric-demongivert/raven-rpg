import React from 'react'
import { ReactElement } from 'react'
import { ReactNode } from 'react'
import classNames from 'classnames'

function * range (size : number) : Iterable<number> {
  for (let index = 0; index < size; ++index) {
    yield index
  }
}

export function Spell (props : any) : ReactElement {
  const runesByRow : number = Math.ceil(props.runes.length / props.rows)

  return (
    <div className='spells'>
      <div className={classNames('spell d-none d-lg-flex', props.className)}>
        {
          [...range(props.rows)].map(function (index : number) : ReactElement[] {
            const runes : ReactElement[] = []

            if (index > 0) {
              runes.push(
                <div key={props.runes.length + index} className='w-100' />
              )
            }

            for (let rune = 0; rune < runesByRow; ++rune) {
              runes.push(
                <img key={rune * props.rows + index} className='spell-rune' src={'./images/runic-' + props.runes[rune * props.rows + index] + '.svg'} />
              )
            }

            return runes
          }).reduce(function (a : ReactElement[], b : ReactElement[]) : ReactElement[] {
            return a.concat(b)
          })
        }
      </div>

      <div className={classNames('spell spell-column d-flex d-lg-none', props.className)}>
        {
          props.runes.map(function (rune : string, index : number) : ReactElement {
            return <img key={index} className='spell-rune' src={'./images/runic-' + rune + '.svg'} />
          })
        }
      </div>
    </div>
  )
}
