import React from 'react'

import { CorvusTree } from '../typescript/tree/CorvusTree'
import { CorvusTreeRenderer } from './rendering/CorvusTreeRenderer'

/**
 * 
 */
const RENDERER: CorvusTreeRenderer = new CorvusTreeRenderer()

/**
 * 
 */
export class CorvusDocumentView extends React.Component<CorvusDocumentView.Properties> {
  /**
   * 
   */
  public render(): React.ReactElement {
    RENDERER.visit(this.props.value)

    return (
      <div className='corvus-document'>
        { RENDERER.result() }
      </div>
    )
  }
}

/**
 * 
 */
export namespace CorvusDocumentView {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    value: CorvusTree<unknown>
  }
}