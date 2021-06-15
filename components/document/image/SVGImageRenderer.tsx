import React from 'react'
import { ReactElement } from 'react'
import { PureComponent } from 'react'
import { RefObject } from 'react'
import { CorvusDocument } from '../../../typescript/corvus/CorvusDocument'
import { CorvusDocumentElement } from '../../../typescript/corvus/CorvusDocumentElement'
import { CorvusImage } from '../../../typescript/corvus/CorvusImage'

import { Resource } from '../../../typescript/state/resource/Resource'

/**
 * 
 */
export class SVGImageRenderer extends PureComponent<SVGImageRenderer.Properties> {
  /**
   * 
   */
  private root: RefObject<HTMLDivElement>

  /**
   * 
   */
  public constructor (properties: SVGImageRenderer.Properties) {
    super(properties)

    this.root = React.createRef()
  }

  /**
   * 
   */
  public componentDidMount(): void {
    const document: CorvusDocument = this.props.document
    const element: CorvusDocumentElement<CorvusImage> = document.requireByIdentifier(this.props.element, CorvusImage.assert)
  
    const resource: Resource = this.props.resource

    this.root.current.innerHTML = resource.data.toString('utf8')

    const svg = this.root.current.children.item(0)

    if (element.model.width != null || element.model.height != null) {
      if (element.model.width != null) {
        svg.setAttribute('width', element.model.width)
      } else {
        svg.removeAttribute('width')
      }

      if (element.model.height != null) {
        svg.setAttribute('height', element.model.height)
      } else {
        svg.removeAttribute('height')
      }
    } else {
      svg.classList.add('img-fluid')
    }
    
  }
  
  /**
   * 
   */
  public render(): ReactElement {
    return (
      <div className='rpg-element rpg-image rpg-svg-image' ref={this.root} />
    )
  }
  
}

/**
 * 
 */
export namespace SVGImageRenderer {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    depth?: number | undefined,

    /**
     * 
     */
    className?: string | undefined,

    /**
     * 
     */
    document: CorvusDocument,
    
    /**
     * 
     */
    element: number,

    /**
     * 
     */
    resource: Resource
  }
}