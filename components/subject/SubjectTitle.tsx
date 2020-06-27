import React from 'react'
import { PureComponent } from 'react'
import { ReactElement } from 'react'
import classNames from 'classnames'

import { Subject } from './Subject'
import { Document } from '../Document'
import { DocumentEvent } from '../../typescript/redux/document/DocumentEvent'
import { Subject as SubjectModel } from '../../typescript/redux/document/Subject'
import { Document as DocumentModel } from '../../typescript/redux/document/Document'

class RawSubjectTitle extends PureComponent<RawSubjectTitle.Properties> {
  /**
  * Render the heading element of this title in accordance with this title
  * related subject depth.
  *
  * @return The heading element of this title component.
  */
  public renderHeading () : ReactElement {
    const depth : number = this.props.document.getDepth(this.props.subject)

    const className : string = classNames(
      'title',
      'title-' + (depth + 1)
    )

    switch (depth) {
      case 0: return <h1 className={className}>{this.props.children}</h1>
      case 1: return <h2 className={className}>{this.props.children}</h2>
      case 2: return <h3 className={className}>{this.props.children}</h3>
      case 3: return <h4 className={className}>{this.props.children}</h4>
      case 4: return <h5 className={className}>{this.props.children}</h5>
      case 5: return <h6 className={className}>{this.props.children}</h6>
      default: return <div className={className}>{this.props.children}</div>
    }
  }

  /**
  * @see React.render
  */
  public render () : ReactElement {
    const className : string = classNames(
      'subject-title text-center',
      this.props.className
    )

    if (this.props.subject.key) {
      return (
        <div className={className}>
          <a href={'#' + this.props.subject.key}>
            {this.renderHeading()}
          </a>
        </div>
      )
    } else {
      return (
        <div className={className}>
          {this.renderHeading()}
        </div>
      )
    }
  }

  public componentDidMount () {
    this.props.onDocumentChange(
      DocumentEvent.defineName(
        this.props.subject.identifier,
        this.props.children
      )
    )
  }

  public componentDidUpdate (oldProps : RawSubjectTitle.Properties) {
    if (this.props.children !== oldProps.children) {
      this.props.onDocumentChange(
        DocumentEvent.updateName(
          this.props.subject.identifier,
          this.props.children
        )
      )
    }
  }

  public componentWillUnmount () {
    this.props.onDocumentChange(
      DocumentEvent.deleteName(this.props.subject.identifier)
    )
  }
}

namespace RawSubjectTitle {
  export type Properties = {
    subject: SubjectModel,
    document: DocumentModel,
    onDocumentChange: Document.ChangeListener
    children: string,
    className?: string
  }
}


export function SubjectTitle (props : SubjectTitle.Properties) : ReactElement {
  return (
    <Subject.Consumer>{
      (subjectState : Subject.State) => (
        <Document.Consumer>{
          (documentState : Document.State) => (
            <RawSubjectTitle
              subject={subjectState ? subjectState.subject : null}
              document={documentState.document}
              onDocumentChange={documentState.onChange}
              {...props}
            />
          )
        }</Document.Consumer>
      )
    }</Subject.Consumer>
  )
}

export namespace SubjectTitle {
  export type Properties = {
    children: string,
    className?: string
  }
}
