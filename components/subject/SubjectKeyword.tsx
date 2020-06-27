import React from 'react'
import { PureComponent } from 'react'
import { ReactElement } from 'react'
import { classNames } from 'classnames'

export class SubjectKeyword extends PureComponent<SubjectSummary.Properties> {
  public render () : ReactElement {
    return null
  }
}

export namespace SubjectSummary {
  export type Properties = {
    children: string
  }
}
