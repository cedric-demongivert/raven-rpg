import React from 'react'
import { PureComponent } from 'react'
import { ReactElement } from 'react'
import { ReactNode } from 'react'
import classNames from 'classnames'

import { Subject as SubjectModel } from '../../typescript/redux/document/Subject'
import { Document as DocumentModel } from '../../typescript/redux/document/Document'
import { DocumentEvent } from '../../typescript/redux/document/DocumentEvent'
import { Document } from '../Document'

export class RawSubject extends PureComponent<RawSubject.Properties, Subject.State> {
  /**
  * @see PureComponent.constructor
  */
  public constructor (props : RawSubject.Properties, context : any) {
    super(props, context)

    this.state = {
      subject: null
    }
  }

  /**
  * @see PureComponent.render
  */
  public render () : ReactElement {
    if (this.state.subject == null) {
      return null
    }

    const className : string = classNames('subject', this.props.className)

    if (this.state.subject.key == null) {
      return (
        <Subject.Provider value={this.state}>
          <div className={className}>
            { this.props.children }
          </div>
        </Subject.Provider>
      )
    } else {
      return (
        <Subject.Provider value={this.state}>
          <div className={className} id={this.state.subject.key}>
            { this.props.children }
          </div>
        </Subject.Provider>
      )
    }

  }

  /**
  * @see PureComponent.componentDidMount
  */
  public componentDidMount () : void {
    let creation : DocumentEvent.SubjectCreationEvent

    if (this.props.parent) {
      creation = DocumentEvent.createSubject(this.props.parent.identifier)
    } else {
      creation = DocumentEvent.createSubject()
    }

    this.props.onDocumentChange(creation, () : void => {
      this.setState({ subject: creation.payback })
    })
  }

  /**
  * @see PureComponent.componentDidUpdate
  */
  public componentDidUpdate (oldProperties : RawSubject.Properties, oldState : Subject.State) : void {
    if (oldProperties.document !== this.props.document && this.state.subject) {
      const oldSubject : SubjectModel = oldState.subject
      const newSubject : SubjectModel = this.props.document.get(oldSubject.identifier)

      if (newSubject !== oldSubject) {
        this.setState({ subject: newSubject })
      }
    }
  }

  /**
  * @see PureComponent.componentWillUnmount
  */
  public componentWillUnmount () : void {
    this.props.onDocumentChange(
      DocumentEvent.deleteSubject(
        this.state.subject.identifier
      )
    )
  }
}

namespace RawSubject {
  export type Properties = {
    document: DocumentModel,
    onDocumentChange: Document.ChangeListener,
    parent?: SubjectModel,
    children?: ReactNode,
    className?: string
  }
}

export function Subject (props : Subject.Properties) : ReactElement {
  return (
    <Subject.Consumer>{
      (subjectState : Subject.State) => (
        <Document.Consumer>{
          (documentState : Document.State) => (
            <RawSubject
              parent={subjectState ? subjectState.subject : null}
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

export namespace Subject {
  export type Properties = {
    children?: ReactNode,
    className?: string
  }

  export type State = { subject: SubjectModel }

  export const Context : React.Context<State> = React.createContext(null)
  export const Provider : React.Provider<State> = Context.Provider
  export const Consumer : React.Consumer<State> = Context.Consumer
}
