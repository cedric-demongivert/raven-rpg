import React, { RefObject } from 'react'
import classnames from 'classnames'

import { CorvusMinimapElement } from './CorvusMinimapElement'

/**
*
*/
export class CorvusMinimapElements extends React.Component<CorvusMinimapElements.Properties> {
  /**
   * 
   */
  private readonly _root: RefObject<HTMLDivElement>

  /**
   * 
   */
  public constructor (properties : CorvusMinimapElements.Properties) {
    super(properties)

    this.handleScrollUpdate = this.handleScrollUpdate.bind(this)
    this.handleWindowResize = this.handleWindowResize.bind(this)
    this.handleElementRendering = this.handleElementRendering.bind(this)

    this._root = React.createRef()
  }

  /**
   * 
   */
  public componentDidMount(): void {
    window.addEventListener('scroll', this.handleScrollUpdate, true)
    window.addEventListener('resize', this.handleWindowResize)
  }

  /**
   * 
   */
  public componentWillUnmount(): void {
    window.removeEventListener('scroll', this.handleScrollUpdate, true)
    window.removeEventListener('resize', this.handleWindowResize)
  }

  /**
   * 
   */
  public handleScrollUpdate (): void {
    this.forceUpdate()
  }

  /**
   * 
   */
  public handleWindowResize (): void {
    this.forceUpdate()
  }

  /**
   * 
   */
  public computeMinimapContentOffset(): any {
    const view: HTMLElement | undefined = document.getElementById('document')

    if (view) {
      const documentBoundary: DOMRect = view.getBoundingClientRect()
      const windowHeight: number = window.innerHeight

      const scrollableLength: number = documentBoundary.height - windowHeight
      const documentOffset: number = Math.min(Math.max(-documentBoundary.y, 0), scrollableLength)

      const delta: number = documentOffset / scrollableLength

      return { marginTop: ((-delta * 200 + 50).toFixed(2)) + '%' }
    } else {
      return { marginTop: '0px' }
    }
  }


  /**
   * @see React.render
   */
  public render ():React.ReactElement {  
    return (
      <div ref={this._root} className={classnames('rpg-minimap-content', this.props.className)} style={this.computeMinimapContentOffset()}>
        { this.props.elements.map(this.handleElementRendering) }
      </div>
    )
  }

  /**
   * 
   */
  public renderDisabledElement(element: CorvusMinimapElement): React.ReactElement {
    return (
      <div 
        key={element.identifier}
        className={'rpg-minimap-element rpg-minimap-depth-' + element.depth + ' is-disabled'}
      >{ element.content }</div>
    )
  }

  /**
   * 
   */
  public renderEnabledElement(element: CorvusMinimapElement, relatedElement: HTMLElement): React.ReactElement {
    const relatedElementBoundingBox: DOMRect = relatedElement.getBoundingClientRect()
    const isActive: boolean = relatedElementBoundingBox.top < window.innerHeight && relatedElementBoundingBox.bottom > 0

    return (
      <a 
        key={element.identifier}
        className={'rpg-minimap-element rpg-minimap-depth-' + element.depth + (isActive ? ' is-active' : '')}
        href={'#' + element.key}
      >{ element.content }</a>
    )
  }

  /**
   * 
   */
  public handleElementRendering (element: CorvusMinimapElement): React.ReactElement {
    if (element.key == null) {
      return this.renderDisabledElement(element)
    } else {
      const relatedElement: HTMLElement | undefined = document.getElementById(element.key)

      if (relatedElement == null) {
        return this.renderDisabledElement(element)
      } else {
        return this.renderEnabledElement(element, relatedElement)
      }
    }
  }
} 

/**
 * 
 */
export namespace CorvusMinimapElements {
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
    elements: CorvusMinimapElement[]
  }
}
