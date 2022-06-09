import React from "react"
import classNames from "classnames"

/**
 * 
 */
export function StackLayout (properties: React.HTMLAttributes<HTMLDivElement>): React.ReactElement {
  return (
    <div {...properties} className={classNames('layout layout-stack', properties.className)} />
  )
}

/**
 * 
 */
export namespace StackLayout {
  /**
   * 
   */
  export function Header (properties: React.HTMLAttributes<HTMLDivElement>): React.ReactElement {
    return (
      <div {...properties} className={classNames('layout-stack-header', properties.className)} />
    )
  }

  /**
   * 
   */
  export function Body (properties: React.HTMLAttributes<HTMLDivElement>): React.ReactElement {
    return (
      <div {...properties} className={classNames('layout-stack-body', properties.className)} />
    )
  }

  /**
   * 
   */
  export function Footer (properties: React.HTMLAttributes<HTMLDivElement>): React.ReactElement {
    return (
      <div {...properties} className={classNames('layout-stack-footer', properties.className)} />
    )
  }
}