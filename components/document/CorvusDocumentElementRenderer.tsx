import React from 'react'
import { ReactElement } from 'react'

import { CorvusParagraphRenderer } from './CorvusParagraphRenderer'
import { CorvusSectionRenderer } from './CorvusSectionRenderer'
import { CorvusBookRenderer } from './CorvusBookRenderer'
import { ConnectedCorvusImageRenderer } from './image/ConnectedCorvusImageRenderer'
import { CorvusDocument } from '../../typescript/corvus/CorvusDocument'
import { CorvusDocumentElement } from '../../typescript/corvus/CorvusDocumentElement'
import { CorvusDocumentModelType } from '../../typescript/corvus/CorvusDocumentModelType'
import { CorvusRulesetRenderer } from './CorvusRulesetRenderer'
import { CorvusCharacteristicRenderer } from './CorvusCharacteristicRenderer'
import { CorvusMasteryRenderer } from './CorvusMasteryRenderer'

/**
 * 
 */
export function CorvusDocumentElementRenderer(properties: CorvusDocumentElementRenderer.Properties): ReactElement {
  const document: CorvusDocument = properties.document
  const element: CorvusDocumentElement = document.requireByIdentifier(properties.element)

  switch (element.model.type) {
    case CorvusDocumentModelType.PARAGRAPH:
      return <CorvusParagraphRenderer {...properties} />
    case CorvusDocumentModelType.SECTION:
      return <CorvusSectionRenderer  {...properties} />
    case CorvusDocumentModelType.CHARACTERISTIC:
      return <CorvusCharacteristicRenderer  {...properties} />
    case CorvusDocumentModelType.RULESET:
      return <CorvusRulesetRenderer {...properties}  />
    case CorvusDocumentModelType.IMAGE:
      return <ConnectedCorvusImageRenderer {...properties}  />
    case CorvusDocumentModelType.BOOK:
      return <CorvusBookRenderer {...properties} />
    case CorvusDocumentModelType.MASTERY:
      return <CorvusMasteryRenderer {...properties} />
    default:
      throw new Error(
        'Unable to render document element of type ' +
        CorvusDocumentModelType.toDebugString(element.model.type) + ' because ' +
        'no procedure was defined for that.'
      )
  }
}


/**
 * 
 */
export namespace CorvusDocumentElementRenderer {
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