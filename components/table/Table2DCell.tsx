import React from 'react'
import { ReactElement } from 'react'
import { ReactNode } from 'react'
import { PureComponent } from 'react'
import classNames from 'classnames'

function nothing () : void { }

export class Table2DCell extends PureComponent<Table2DCell.Properties> {
  /**
  * @see PureComponent.defaultProps
  */
  public static defaultProps : Table2DCell.Properties = {
    onSelect: nothing
  }

  /**
  * @see PureComponent.constructor
  */
  public constructor (props : Table2DCell.Properties) {
    super(props)

    this.handleMouseOver = this.handleMouseOver.bind(this)
  }

  /**
  *
  */
  public handleMouseOver () : void {
    if (!this.props.selected) {
      this.props.onSelect()
    }
  }

  /**
  * @param PureComponent.render
  */
  public render () : ReactElement {
    const className : string = classNames(
      { 'is-selected': this.props.selected },
      this.props.className
    )

    if (this.props.heading) {
      return (
        <th
          className={className}
          onMouseOver={this.handleMouseOver}
          style={{ width: this.props.width }}
        > {this.props.children} </th>
      )
    } else {
      return (
        <td
          className={className}
          onMouseOver={this.handleMouseOver}
          style={{ width: this.props.width }}
        > {this.props.children} </td>
      )
    }
  }
}

export namespace Table2DCell {
  export type Properties = {
    children?: ReactNode,
    className?: string,
    heading?: boolean,
    selected?: boolean,
    width?: string,
    onSelect?: () => void
  }
}
