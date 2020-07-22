import React from 'react'
import { ReactElement } from 'react'
import { ReactNode } from 'react'
import { Component } from 'react'
import classNames from 'classnames'

import { Table2DCell } from './Table2DCell'
import { Table2DRow } from './Table2DRow'

export class Table2D extends Component<Table2D.Properties, Table2D.State> {
  private _rows : number
  private _columns : number
  private _handlers : (() => void)[]

  /**
  * @see Component.constructor
  */
  public constructor (props : Table2D.Properties) {
    super(props)

    this.state = {
      column: -1,
      row: -1
    }

    this._rows = 0
    this._columns = 0
    this._handlers = []

    this.computeCellSelectionHandlers(props.children)

    this.handleDeselection = this.handleDeselection.bind(this)
    this.renderRow = this.renderRow.bind(this)
  }

  /**
  *
  */
  private computeCellSelectionHandlers (children : ReactNode) : void {
    this._rows = React.Children.count(children)
    this._columns = React.Children.map(
      children,
      (child : ReactElement<Table2DRow.Properties>) => React.Children.count(
        child.props.children
      )
    ).reduce((a : number, b : number) => Math.max(a, b), 0)

    this._handlers.length = 0

    for (let row = 0; row < this._rows; ++row) {
      for (let column = 0; column < this._columns; ++column) {
        this._handlers.push(this.handleCellSelection.bind(this, column, row))
      }
    }
  }

  /**
  *
  */
  public handleCellSelection (column : number, row : number) : void {
    this.setState({ row, column })
  }

  /**
  *
  */
  public handleDeselection () : void {
    this.setState({ row: -1, column: -1 })
  }

  /**
  * @param Component.shouldComponentUpdate
  */
  public shouldComponentUpdate (nextProps : Table2D.Properties) : boolean {
    if (nextProps.children !== this.props.children) {
      this.computeCellSelectionHandlers(nextProps.children)
    }

    return true
  }

  /**
  * @param Component.render
  */
  public render () : ReactElement {
    const className : string = classNames('table-2d', this.props.className)
    const properties : any = {
      className,
      onMouseOut: this.handleDeselection
    }

    if (this.props.width) {
      properties.style = { width: this.props.width }
    }

    return (
      <table {...properties}>
        <tbody>
          { React.Children.map(this.props.children, this.renderRow) }
        </tbody>
      </table>
    )
  }

  /**
  *
  */
  private renderRow (children : ReactElement<Table2DRow.Properties>, row : number) : ReactElement<Table2DRow.Properties> {
    return React.cloneElement(
      children, {},
      React.Children.map(
        children.props.children,
        (cell : ReactElement<Table2DCell.Properties>, column : number) : ReactElement<Table2DCell.Properties> => React.cloneElement(
          cell, {
            onSelect: this._handlers[row * this._columns + column],
            selected: (
              this.state.row === this._rows - 1 && column === this.state.column ||
              this.state.column === 0 && row === this.state.row  ||
              this.state.row  !== this._rows - 1 && this.state.column !== 0 && (
                column === this.state.column || row === this.state.row
              )
            )
          }
        )
      )
    )
  }
}

export namespace Table2D {
  export const Cell = Table2DCell
  export const Row = Table2DRow

  export type Properties = {
    className?: string,
    children?: ReactNode,
    width?: string
  }

  export type State = {
    row: number,
    column: number
  }
}
