import React from 'react'
import { ReactElement } from 'react'
import { ReactNode } from 'react'
import { PureComponent } from 'react'
import classNames from 'classnames'

export class Table2DRow extends PureComponent<Table2DRow.Properties> {
  /**
  * @param PureComponent.render
  */
  public render () : ReactElement {
    return (
      <tr className={this.props.className}>
        { this.props.children }
      </tr>
    )
  }
}


export namespace Table2DRow {
  export type Properties = {
    children?: ReactNode,
    className?: string
  }

  export type Element = ReactElement<Properties>
}
