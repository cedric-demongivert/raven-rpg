import React from 'react'
import { JSXElementConstructor } from 'react'
import { ReactElement } from 'react'
import { PureComponent } from 'react'

import '../scss/app.scss'

export default class Application extends PureComponent<Application.Properties> {
  public render () : ReactElement {
    return (
      <this.props.Component { ...this.props.pageProps } />
    )
  }

  public componentDidMount () : void {
    if (window.location.hash) {
      window.setTimeout(function () {
        document.getElementById('application').scrollTo(
          0,
          document.getElementById(window.location.hash.substr(1))
                  .getBoundingClientRect().top
        )
      })
    }
  }
}


export namespace Application {
  export type Properties = {
    pageProps: any,
    Component: JSXElementConstructor<any>
  }
}
