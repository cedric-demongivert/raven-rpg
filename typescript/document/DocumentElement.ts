import { Comparable } from '@cedric-demongivert/gl-tool-utils'

import { DocumentElementType } from './DocumentElementType'

/**
 *
 */
export interface DocumentElement extends Comparable {
  /**
   *
   */
  readonly type: DocumentElementType
}