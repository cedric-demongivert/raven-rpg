import React from 'react'

const MATCH: RegExp = /^\s*(.*?)\s*\(\s*(.*?)\s*\)\s*$/

/**
 * 
 */
function renderStackElement(element: string, index: number): React.ReactElement {
  const tokens: RegExpExecArray = MATCH.exec(element)

  return (
    <div key={index} className='corvus-error-stack-element'>
      <div className='corvus-error-stack-element-index'>{ index }</div>
      <div className='corvus-error-stack-element-content'>
        { tokens[1] }
        <div className='corvus-error-stack-element-origin'>{ tokens[2] }</div>
      </div>
    </div>
  )
}

/**
 * 
 */
export function CorvusError(properties: CorvusError.Properties): React.ReactElement {
  return (
    <div className='corvus-error'>
      <h1>Erreur</h1>
      <p className='corvus-error-message'>{properties.message}</p>
      <p className='corvus-error-technical-message'>{properties.value.message}</p>
      <div className='corvus-error-stack'>
        { properties.value.stack.split(/\s+at\s+/).slice(1).map(renderStackElement) }
      </div>
    </div>
  )
}

/**
 * 
 */
export namespace CorvusError {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    value: Error,
    
    /**
     * 
     */
    message: string
  }
}
