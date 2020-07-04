import React from 'react'
import { ReactElement } from 'react'
import { ReactNode } from 'react'
import classNames from 'classnames'

import { DataHeader } from './DataHeader'
import { DataElement } from './DataElement'
import { DataList } from './DataList'

export function Data (properties : Data.Properties) : ReactElement {
  return (
    <div className={classNames('data', properties.className)}>
      { properties.children }
    </div>
  )
}

export namespace Data {
  export type Properties = {
    children?: ReactNode,
    className?: string
  }

  export const Header = DataHeader
  export const Element = DataElement
  export const List = DataList
}
