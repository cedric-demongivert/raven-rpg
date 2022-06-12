import React from 'react'

import '../scss/app.scss'

/**
 * 
 */
export default function Application(props: Readonly<Application.Properties>): React.ReactElement {
  return (
    <div className='application'>
      <props.Component { ...props.pageProps } />
    </div>
  )
}

/**
 * 
 */
export namespace Application {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    pageProps: any,

    /**
     * 
     */
    Component: React.JSXElementConstructor<any>
  }
}
