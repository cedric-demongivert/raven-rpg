import React from 'react'
import { PureComponent } from 'react'
import { ReactNode } from 'react'
import { ReactElement } from 'react'
import classNames from 'classnames'

import { Document as DocumentModel } from '../typescript/redux/document/Document'
import { DocumentEvent } from '../typescript/redux/document/DocumentEvent'
import { DocumentReducer } from '../typescript/redux/document/DocumentReducer'

export class Document extends PureComponent<Document.Properties, Document.State> {
  /**
  * @see PureComponent.constructor
  */
  public constructor (props : Document.Properties, context : any) {
    super(props, context)

    this.state = {
      document: new DocumentModel(8),
      onChange: this.handleDocumentChange.bind(this)
    }
  }

  /**
  * Handle an update request of this component document model.
  *
  * @param event - Event that describe the change to operate upon this component document model.
  */
  public handleDocumentChange (event : DocumentEvent, callback ? : () => void) : void {
    this.setState(
      function update (state : Document.State) : Document.State {
        return {
          document: DocumentReducer.reduce(state.document, event),
          onChange: state.onChange
        }
      }, callback
    )
  }

  /**
  * Handle an update request of this component document model.
  *
  * @param event - Event that describe the change to operate upon this component document model.
  */
  public handleSubjectAllocation (event : DocumentEvent) : void {
    this.setState(function update (state : Document.State) : Document.State {
      return {
        document: DocumentReducer.reduce(state.document, event),
        onChange: state.onChange
      }
    })
  }

  /**
  * @see PureComponent.render
  */
  public render () : ReactElement {
    const className : string = classNames('document', this.props.className)
    return (
      <Document.Provider value={this.state}>
        <div className={className}>
          { this.props.children }
        </div>
      </Document.Provider>
    )
  }
}

export namespace Document {
  export type ChangeListener = (event : DocumentEvent, callback? : () => void) => void

  export type Properties = {
    children?: ReactNode,
    className?: string
  }

  export type State = {
    document: DocumentModel,
    onChange: ChangeListener
  }

  export const Context : React.Context<State> = React.createContext(null)
  export const Provider : React.Provider<State> = Context.Provider
  export const Consumer : React.Consumer<State> = Context.Consumer
}
