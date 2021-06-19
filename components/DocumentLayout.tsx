import React from 'react'
import classnames from 'classnames'
import { Toggler } from '../typescript/Toggler'

/**
 * 
 */
const IS_OPEN: Toggler = Toggler.create('is-open')

/**
 * 
 */
const IS_CLOSE: Toggler = Toggler.create('is-close')

/**
 * 
 */
function toggleAside (state: DocumentLayout.State) : DocumentLayout.State {
  return { aside: !state.aside }
}

/**
 * 
 */
export class DocumentLayout extends React.Component<DocumentLayout.Properties, DocumentLayout.State> {
  /**
   * 
   */
  public constructor (properties: DocumentLayout.Properties) {
    super(properties)

    this.state = { aside: false }

    this.handleAsideToggling = this.handleAsideToggling.bind(this)
  }

  /**
   * 
   */
  private handleAsideToggling(): void {
    this.setState(toggleAside)
  }

  /**
   * @see React.Component.render
   */
  public render (): React.ReactElement {
    return (
      <div className={classnames('layout layout-document', this.props.className)}>
        <div className='layout-document-content-area'>
          <div className='layout-document-content'>
            { this.props.children }
          </div>
        </div>
        <div className={classnames('layout-document-aside-area', IS_OPEN.toggle(this.state.aside), IS_CLOSE.toggle(!this.state.aside))}>
          <div className='layout-document-aside-content'>
            { this.props.aside }
          </div>
          <button className='btn btn-aside' onClick={this.handleAsideToggling} />
        </div>
      </div>
    )
  }
}

/**
 * 
 */
export namespace DocumentLayout {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    className?: string | undefined,

    /**
     * 
     */
    aside?: React.ReactNode | undefined,

    /**
     * 
     */
    children?: React.ReactNode | undefined
  }

  /**
   * 
   */
  export type State = {
    /**
     * 
     */
    aside: boolean
  }
}