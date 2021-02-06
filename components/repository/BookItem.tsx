import React from 'react'
import { ReactElement } from 'react'

import { Entry } from '../../typescript/data/Entry'

import { RPGBook } from '../../typescript/rpg/book/RPGBook'
import { HypertextRenderer } from '../HypertextRenderer'

export const renderSummary = (properties: BookItem.Properties): ReactElement => {
  if (properties.value.model.summary) {
    return (
      <p>
        <HypertextRenderer>{properties.value.model.summary}</HypertextRenderer>
      </p>
    )
  } else {
    return null
  }
}

/**
*
*/
export const BookItem = (properties: BookItem.Properties): ReactElement => {
  // className='layout layout-item layout-item-book'
  return (
    <div>
      <h1>{properties.value.model.title}</h1>

      { renderSummary(properties) }
    </div>
  )
}

/**
*
*/
export namespace BookItem {
  /**
  *
  */
  export type Properties = {
    value: Entry<RPGBook>
  }
}
