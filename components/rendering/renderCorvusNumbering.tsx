import React from 'react'
import { CorvusLocation, CorvusLocationFormat } from '../../typescript/location'

/**
 * 
 */
export function renderCorvusNumbering(location: CorvusLocation): React.ReactNode {
  if (location.depth < 5) {
    const identifier: string = 'section-' + location.stringifySection(CorvusLocationFormat.DEFAULT_IDENTIFIER)
    return (
      <a className='corvus-numbering' id={identifier} href={`#${identifier}`}>
        { location.stringifySection() }
      </a>
    )
  }

  return null
}