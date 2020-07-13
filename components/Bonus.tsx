import React from 'react'

import { ReactElement } from 'react'

export function Bonus (props : any) : ReactElement {
  return <span className='bonus'>{props.children}</span>
}
