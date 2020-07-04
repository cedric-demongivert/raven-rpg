import React from 'react'
import { ReactElement } from 'react'
import { ReactNode } from 'react'
import classNames from 'classnames'

export function DataHeader (properties : DataHeader.Properties) : ReactElement {
  return (
    <div className={classNames('data-header', properties.className)}>
      <div className='data-header-content'>
        { properties.children }
      </div>
    </div>
  )
}

export namespace DataHeader {
  export type Properties = {
    children?: ReactNode,
    className?: string
  }
}
