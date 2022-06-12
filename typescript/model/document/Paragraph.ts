import { Set } from 'immutable'

import { Text } from '../text/Text'

import { DocumentElement } from './DocumentElement'
import { DocumentElementType } from './DocumentElementType'
import type { ParagraphBuilder } from './ParagraphBuilder'

/**
 *
 */
export class Paragraph implements DocumentElement {
  /**
   *
   */
  public readonly type: DocumentElementType.PARAGRAPH

  /**
   *
   */
  public readonly classes: Set<string>

  /**
   *
   */
  public readonly identifier: string

  /**
   *
   */
  public readonly title: string

  /**
   *
   */
  public readonly text: Text

  /**
   *
   */
  public constructor(builder: ParagraphBuilder) {
    this.type = DocumentElementType.PARAGRAPH
    this.identifier = builder.identifier
    this.title = builder.title
    this.text = builder.text.build()
    this.classes = builder.classes.build()
  }

  /**
   * 
   */
  public hasIdentifier(): boolean {
    return this.identifier.length > 0
  }

  /**
   *
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof Paragraph) {
      return (
        other.identifier === this.identifier &&
        other.title === this.title &&
        other.text.equals(this.text) &&
        other.classes.equals(this.classes)
      )
    }

    return false
  }
}

/**
 *
 */
export namespace Paragraph {
  /**
   * 
   */
  export function create(builder: ParagraphBuilder): Paragraph {
    return new Paragraph(builder)
  }
}
