import React from 'react'
import { ReactElement } from 'react'
import { ReactNode } from 'react'
import classNames from 'classnames'

export function DataList (properties : DataList.Properties) : ReactElement {
  const className : string = classNames(
    'data-list',
    properties.className,
    { 'data-list-row': properties.row },
    { 'data-list-header': properties.header }
  )

  const style : any = { }

  if (properties.width) {
    style.width = properties.width
  }

  return (
    <div className={className} style={style}>
      { properties.children }
    </div>
  )
}

export namespace DataList {
  export type Properties = {
    children?: ReactNode,
    className?: string,
    width?: string,
    row?: boolean,
    header?: boolean
  }
}
