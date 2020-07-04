import React from 'react'
import { ReactElement } from 'react'
import classNames from 'classnames'

export function Unit (
  properties : Unit.Properties
) : ReactElement {
  const className : string = classNames('unit', properties.className)

  return (
    <span className={className}>
      { properties.children }
    </span>
  )
}

export namespace Unit {
  export type Properties = {
    children: string,
    className?: string
  }
}
