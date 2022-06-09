import React from "react"
import classNames from "classnames"

/**
 * 
 */
export function CenteredLayout (properties: React.HTMLAttributes<HTMLDivElement>): React.ReactElement {
  return (
    <div {...properties} className={classNames('layout layout-centered', properties.className)} />
  )
}
