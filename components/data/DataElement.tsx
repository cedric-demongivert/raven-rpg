import React from 'react'
import { ReactElement } from 'react'
import { ReactNode } from 'react'
import classNames from 'classnames'

export function DataElement (properties : DataElement.Properties) : ReactElement {
  const className : string = classNames(
    'data-element',
    properties.className,
    { 'data-static': properties.static }
  )

  const style : any = { }

  if (properties.width) {
    style.width = properties.width
  }

  return (
    <div className={className} style={style}>{ properties.children }</div>
  )
}

export namespace DataElement {
  export type Properties = {
    children?: ReactNode,
    className?: string,
    width?: string,
    static?: boolean
  }
}
