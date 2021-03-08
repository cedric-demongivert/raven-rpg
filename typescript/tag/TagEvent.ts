import { ApplicationEvent } from '../ApplicationEvent'

import { TagAction } from './TagAction'
import { Tag } from './Tag'


export namespace TagEvent {
  /**
  *
  */
  export type Extracted = ApplicationEvent<Tag>

  /**
  *
  */
  export function extracted(tag: Tag): Extracted {
    return {
      type: TagAction.EXTRACTED,
      payload: tag
    }
  }
}
