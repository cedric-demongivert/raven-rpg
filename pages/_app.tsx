import React from 'react'
import { JSXElementConstructor } from 'react'
import { ReactElement } from 'react'
import { PureComponent } from 'react'

import { Provider } from 'react-redux'

import { store } from '../typescript/store'

import '../node_modules/leaflet/dist/leaflet.css'
import '../scss/app.scss'

export default class Application extends PureComponent<Application.Properties> {
  public render () : ReactElement {
    return (
      <Provider store={store}>
        <this.props.Component { ...this.props.pageProps } />
      </Provider>
    )
  }
}


export namespace Application {
  export type Properties = {
    pageProps: any,
    Component: JSXElementConstructor<any>
  }
}
