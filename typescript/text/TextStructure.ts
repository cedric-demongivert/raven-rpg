import { Comparable } from '@cedric-demongivert/gl-tool-utils'

import { TextStructureType } from './TextStructureType'

/**
 *
 */
export interface TextStructure extends Comparable {
  /**
   *
   */
  readonly type: TextStructureType
}