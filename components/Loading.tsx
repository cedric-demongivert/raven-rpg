import { ReactElement } from 'react'

/**
*
*/
export function Loading (properties: Loading.Properties) : ReactElement {
  return (
    <div className='layout layout-centered layout-loading'>
      <h1>Corvus</h1>
      <div className='feedback'>
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
    children: string | string[]
  }
}
