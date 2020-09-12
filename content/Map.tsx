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
        crs: leaflet.CRS.Simple
      })

      const tiles = leaflet.tileLayer('./images/map/m-z{z}-x{x}-y{y}.png', {
        minZoom: 0,
        maxZoom: 2,
        tileSize: leaflet.point(1654 / 2, Math.floor(1165 / 2)),
        noWrap: true,
        tms: true
      }).addTo(map)

      //map.fitWorld()
      //map.setZoom(0)
      map.setView([1165 / 4, 1654 / 4], 0)
      //map.fitBounds(bounds)
    }
  }

  public render () : ReactElement {
    return (
      <div className='map' ref={this._root} />
    )
  }
}
