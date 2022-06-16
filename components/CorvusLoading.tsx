import React from 'react'

/**
*
*/
export function CorvusLoading (properties: Readonly<Loading.Properties>) : React.ReactElement {
  return (
    <div className='corvus-loading'>
      <h1>Corvus</h1>
      <div className='corvus-loading-feedback'>
        { properties.children }
        <div className='loader dot-loader' />
      </div>
    </div>
  )
}

export namespace Loading {
  /**
  *
  */
  export type Properties = {
    /**
     * 
     */
    children: string | string[]
  }
}
