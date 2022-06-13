import React from 'react'
import { CorvusDocument } from '../typescript/model'

import { CorvusTree } from '../typescript/tree'

import { CorvusMatterRenderer, CorvusTreeRenderer } from './rendering'

/**
 * 
 */
const DOCUMENT_RENDERER: CorvusTreeRenderer = new CorvusTreeRenderer()

/**
 * 
 */
const MATTER_RENDERER: CorvusMatterRenderer = new CorvusMatterRenderer()

/**
 * 
 */
export function CorvusOnePageView(properties : Readonly<CorvusOnePageView.Properties>): React.ReactElement {
  const tree: CorvusTree<CorvusDocument> = CorvusTree.fromDocument(properties.value) 

  DOCUMENT_RENDERER.visit(tree)
  MATTER_RENDERER.visit(tree)

  const matter: Array<React.ReactNode> = MATTER_RENDERER.result()

  return (
    <div className='corvus-document corvus-document-onepage'>
      <section id='corvus'>
        <div className='corvus-title corvus-title-main'>
          <div className='corvus-title-body'>
            <div className='corvus-title-margin' />
            <div className='corvus-title-content'>
              <a href='#corvus'><h1>Corvus</h1></a>
            </div>
          </div>
        </div>

        <section id='matter'>
          <div className='corvus-title corvus-title-1'>
            <div className='corvus-title-body'>
              <div className='corvus-title-margin'>
                <a id='section-A' className='corvus-numbering' href='#section-A'>A</a>
              </div>
              <div className='corvus-title-content'>
                <a href='#matter'><h1>Sommaire</h1></a>
              </div>
            </div>
          </div>

          <div className='corvus-block corvus-matter'>
            <div className='corvus-block-margin' />
            <div className='corvus-block-content'>
              <div className='corvus-matter-column'>
                { matter.slice(0, Math.ceil(matter.length / 2)) }
              </div>
              <div className='corvus-matter-column'>
                { matter.slice(Math.ceil(matter.length / 2)) }
              </div>
            </div>
          </div>
        </section>

        { DOCUMENT_RENDERER.result() }
      </section>
    </div>
  )
}

/**
 * 
 */
export namespace CorvusOnePageView {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    value: CorvusDocument
  }
}