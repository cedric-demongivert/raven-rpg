import React from 'react'
import { PureComponent } from 'react'
import { ReactNode } from 'react'
import { ReactElement } from 'react'
import classNames from 'classnames'

export class SubjectContent extends PureComponent<SubjectContent.Properties> {
  public render () : ReactElement {
    return (
      <div className={classNames('subject-content', this.props.className)}>
        {this.props.children}
      </div>
    )
  }
}

export namespace SubjectContent {
  export type Properties = {
    children: ReactNode,
    className?: string
  }
}
