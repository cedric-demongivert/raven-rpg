import { ApplicationEvent } from '../ApplicationEvent'

import { RPGElement } from './RPGElement'
import { RPGElementAction } from './RPGElementAction'

export namespace RPGElementEvent {
  /**
  *
  */
  export type Extracted = ApplicationEvent<RPGElement>

  /**
  *
  */
  export function extracted(element: RPGElement): Extracted {
    return {
      type: RPGElementAction.EXTRACTED,
      payload: element
    }
  }
}
