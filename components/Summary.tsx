import React from 'react'
import { PureComponent } from 'react'
import { ReactElement } from 'react'
import { ReactNode } from 'react'
import classNames from 'classnames'

import { Subject as SubjectModel } from '../typescript/redux/document/Subject'
import { Document as DocumentModel } from '../typescript/redux/document/Document'

export class Summary extends PureComponent<Summary.Properties> {
  private _base : number

  /**
  * @see PureComponent.constructor
  */
  public constructor (props : Summary.Properties, context : any) {
    super(props, context)
    this.renderElement = this.renderElement.bind(this)
    this._base = 0
  }

  public renderElement (element : SubjectModel, index : number) : ReactElement {
    const depth : number = this.props.document.getDepth(element)

    const className : string = classNames(
      'summary-element',
      'summary-element-depth-' + depth
    )

    if (element.key) {
      return (
        <a
          href={'#' + element.key}
          className={className}
          key={index}
          style={{ paddingLeft: ((depth - this._base) * 10) + 'px' }}
        > { element.name } </a>
      )
    } else {
      return (
        <div
          className={className + ' is-disabled'}
          key={index}
          style={{paddingLeft: ((depth - this._base) * 10) + 'px'}}
        > { element.name } </div>
      )
    }
  }

  public renderColumn (elements : SubjectModel[]) : ReactNode {
    return elements.map(this.renderElement)
  }

  public render () : ReactElement {
    const className : string = classNames('summary', this.props.className)
    const content : SubjectModel[] = [
      ...this.props.document.walkInChildren(this.props.subjects)
    ]

    this._base = content.length > 0 ? content.map(
      (x : SubjectModel) : number => this.props.document.getDepth(x)
    ).reduce(
      (a : number, b : number) : number => Math.min(a, b)
    ) : 0

    return (
      <div className={className}>
        <div className='row justify-content-center'>
          <div className='col-xs-12 col-md-5'>
            { this.renderColumn(content.slice(0, Math.ceil(content.length / 2))) }
          </div>
          <div className='col-xs-12 col-md-5'>
            { this.renderColumn(content.slice(Math.ceil(content.length / 2))) }
          </div>
        </div>
      </div>
    )
  }
}

export namespace Summary {
  export type Properties = {
    subjects: Iterable<SubjectModel | number>,
    document: DocumentModel,
    className?: string
  }
}
