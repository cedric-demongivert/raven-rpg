import React from 'react'
import { JSXElementConstructor } from 'react'
import { ReactElement } from 'react'
import { PureComponent } from 'react'

import { Provider } from 'react-redux'

import { context } from '../typescript/context'
import { initialize } from '../typescript/initialize'

import '../node_modules/leaflet/dist/leaflet.css'
import '../scss/app.scss'

export default class Application extends PureComponent<Application.Properties> {
  /**
   * 
   */
  public componentDidMount() {
    if (process.browser) {
      initialize(context)
    }
  }

  /**
   * 
   */
  public render () : ReactElement {
    if (process.browser) {
      return (
        <Provider store={context.store}>
          <this.props.Component { ...this.props.pageProps } />
        </Provider>
      )
    } else {
      return <div className='application' id='application' />
    }
  }
}


export namespace Application {
  export type Properties = {
    pageProps: any,
    Component: JSXElementConstructor<any>
  }
}
