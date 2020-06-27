import React from 'react'
import { PureComponent } from 'react'
import { ReactElement } from 'react'

import { Subject } from './Subject'
import { Document } from '../Document'
import { DocumentEvent } from '../../typescript/redux/document/DocumentEvent'
import { Subject as SubjectModel } from '../../typescript/redux/document/Subject'
import { Document as DocumentModel } from '../../typescript/redux/document/Document'

class RawSubjectIdentifier extends PureComponent<RawSubjectIdentifier.Properties> {
  /**
  * @see React.render
  */
  public render () : ReactElement {
    return null
  }

  public componentDidMount () {
    this.props.onDocumentChange(
      DocumentEvent.defineKey(
        this.props.subject.identifier,
        this.props.children
      )
    )
  }

  public componentDidUpdate (oldProps : RawSubjectIdentifier.Properties) {
    if (this.props.children !== oldProps.children) {
      this.props.onDocumentChange(
        DocumentEvent.updateKey(
          this.props.subject.identifier,
          this.props.children
        )
      )
    }
  }

  public componentWillUnmount () {
    this.props.onDocumentChange(
      DocumentEvent.deleteKey(this.props.subject.identifier)
    )
  }
}

namespace RawSubjectIdentifier {
  export type Properties = {
    subject: SubjectModel,
    document: DocumentModel,
    onDocumentChange: Document.ChangeListener
    children: string
  }
}

export function SubjectIdentifier (props : SubjectIdentifier.Properties) : ReactElement {
  return (
    <Subject.Consumer>{
      (subjectState : Subject.State) => (
        <Document.Consumer>{
          (documentState : Document.State) => (
            <RawSubjectIdentifier
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

export namespace SubjectIdentifier {
  export type Properties = {
    children: string
  }
}
