import React from 'react'
import katex from 'katex'
import { ReactElement } from 'react'
import { RefObject } from 'react'
import { PureComponent } from 'react'
import classNames from 'classnames'

export class Formula extends PureComponent<Formula.Properties> {
  private root : RefObject<HTMLDivElement>

  public constructor (properties : Formula.Properties, context : any) {
    super(properties, context)
    this.root = React.createRef()
  }

  public render () : ReactElement {
    return (
      <div
        className={classNames('formula', this.props.className)}
        ref={this.root}
      />
    )
  }

  public componentDidMount () : void {
    katex.render(this.props.children, this.root.current, {
      output: 'html',
      displayMode: true
    })
  }

  public componentDidUpdate (properties : Formula.Properties) : void {
    if (this.props.children !== properties.children) {
      katex.render(this.props.children, this.root.current, {
        output: 'html',
        displayMode: true
      })
    }
  }
}

export namespace Formula {
  export type Properties = {
    className?: string,
    children: string
  }
}
