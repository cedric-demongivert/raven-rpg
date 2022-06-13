import React from 'react'

import { CorvusTree } from '../typescript/tree/CorvusTree'
import { CorvusMatterRenderer } from './rendering/CorvusMatterRenderer'

/**
 * 
 */
const RENDERER: CorvusMatterRenderer = new CorvusMatterRenderer()

/**
 * 
 */
export class CorvusMatterView extends React.Component<CorvusMatterView.Properties> {
  /**
   * 
   */
  public render(): React.ReactElement {
    RENDERER.visit(this.props.value)

    return (
      <div className='corvus-matter'>
        { RENDERER.result() }
      </div>
    )
  }
}

/**
 * 
 */
export namespace CorvusMatterView {
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