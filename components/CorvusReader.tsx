import React from 'react'
import classnames from 'classnames'

import { CorvusTree } from '../typescript/tree'
import { CorvusDocument } from '../typescript/model'

import { CorvusDocumentView } from './CorvusDocumentView'
import { CorvusMatterView } from './CorvusMatterView'

/**
 * 
 */
function toggleAside (state: CorvusReader.State) : CorvusReader.State {
  return { 
    ...state, 
    aside: !state.aside 
  }
}

/**
 * 
 */
export class CorvusReader extends React.Component<CorvusReader.Properties, CorvusReader.State> {
  /**
   * 
   */
  public constructor (properties: CorvusReader.Properties) {
    super(properties)

    this.state = {
      tree: CorvusTree.fromDocument(properties.value),
      aside: false 
    }

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
      <div className={classnames('corvus-reader', this.props.className)}>
        <div className='corvus-reader-content'>
          <CorvusDocumentView value={this.state.tree} />
        </div>
        <div className={classnames('corvus-reader-aside')}>
          <CorvusMatterView value={this.state.tree} />
        </div> 
      </div>
    )
  }
}

/**
 * 
 */
export namespace CorvusReader {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    className?: string | null | undefined,

    /**
     * 
     */
    value: CorvusDocument
  }

  /**
   * 
   */
  export type State = {
    /**
     * 
     */
    aside: boolean,

    /**
     * 
     */
    tree: CorvusTree<unknown>
  }
}