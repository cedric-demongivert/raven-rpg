import React from 'react'
import { PureComponent } from 'react'
import { ReactElement } from 'react'
import { RefObject } from 'react'

import { SubjectSummary } from '../components/subject/SubjectSummary'
import { SubjectContent } from '../components/subject/SubjectContent'
import { SubjectTitle } from '../components/subject/SubjectTitle'
import { SubjectKeyword } from '../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../components/subject/SubjectIdentifier'
import { Subject } from '../components/subject/Subject'

export class Map extends PureComponent {
  private _root : RefObject<HTMLDivElement>

  public constructor (props : any, context : any) {
    super(props, context)

    this._root = React.createRef()
  }

  public componentDidMount () : void {
    if (window != undefined) {
      const leaflet : any = require('leaflet')

      const map : any = leaflet.map(this._root.current, {
        crs: leaflet.CRS.Simple,
        minZoom: -5
      })

      const bounds = [[0,0], [4901,6929]]
      const layer0 = leaflet.imageOverlay('/images/map/z1.png', bounds).addTo(map)
      map.fitBounds(bounds)
    }
  }

  public render () : ReactElement {
    return (
      <div className='map' ref={this._root} />
    )
  }
}
