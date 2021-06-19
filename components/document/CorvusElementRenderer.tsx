import React from 'react'
import { ReactElement } from 'react'

import { CorvusParagraphRenderer } from './CorvusParagraphRenderer'
import { CorvusSectionRenderer } from './CorvusSectionRenderer'
import { CorvusBookRenderer } from './CorvusBookRenderer'
import { ConnectedCorvusImageRenderer } from './image/ConnectedCorvusImageRenderer'
import { CorvusDocument } from '../../typescript/corvus/CorvusDocument'
import { CorvusElement } from '../../typescript/corvus/CorvusElement'
import { CorvusRulesetRenderer } from './CorvusRulesetRenderer'
import { CorvusCharacteristicRenderer } from './CorvusCharacteristicRenderer'
import { CorvusMasteryRenderer } from './CorvusMasteryRenderer'
import { CorvusParagraph } from '../../typescript/corvus/CorvusParagraph'
import { CorvusCharacteristic } from '../../typescript/corvus/CorvusCharacteristic'
import { CorvusSection } from '../../typescript/corvus/CorvusSection'
import { CorvusRuleset } from '../../typescript/corvus/CorvusRuleset'
import { CorvusImage } from '../../typescript/corvus/CorvusImage'
import { CorvusBook } from '../../typescript/corvus/CorvusBook'
import { CorvusMastery } from '../../typescript/corvus/CorvusMastery'

/**
 * 
 */
export function CorvusElementRenderer(properties: CorvusElementRenderer.Properties): ReactElement {
  const document: CorvusDocument = properties.document
  const element: CorvusElement = document.require(properties.element)

  if (CorvusParagraph.is(element)) {
    return <CorvusParagraphRenderer {...properties} />
  } else if (CorvusCharacteristic.is(element)) {
    return <CorvusCharacteristicRenderer {...properties} />
  } else if (CorvusSection.is(element)) {
    return <CorvusSectionRenderer {...properties} />
  } else if (CorvusRuleset.is(element)) {
    return <CorvusRulesetRenderer {...properties} />
  } else if (CorvusImage.is(element)) {
    return <ConnectedCorvusImageRenderer {...properties} />
  } else if (CorvusBook.is(element)) {
    return <CorvusBookRenderer {...properties} />
  } else if (CorvusMastery.is(element)) {
    return <CorvusMasteryRenderer {...properties} />
  } else {
    throw new Error(
      'Unable to render document element of type ' +
      element.constructor.name + 
      ' because no procedure was defined for that.'
    )
  }
}


/**
 * 
 */
export namespace CorvusElementRenderer {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    depth?: number | undefined,

    /**
     * 
     */
    document: CorvusDocument,
    
    /**
     * 
     */
    element: number
  }
}