import React from 'react'
import { ReactElement } from 'react'

import '../scss/app.scss'

export default function application (props : any) : ReactElement {
  return (
    <props.Component { ...props.pageProps } />
  )
}
