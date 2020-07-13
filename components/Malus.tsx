import React from 'react'

import { ReactElement } from 'react'

export function Malus (props : any) : ReactElement {
  return <span className='malus'>{props.children}</span>
}
