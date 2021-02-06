import { ApplicationEvent } from '../ApplicationEvent'

import { Table } from '../data/table/Table'

import { RPGElementAction } from './RPGElementAction'
import { RPGElement } from './RPGElement'
import { RPGElementEvent } from './RPGElementEvent'

export namespace RPGElementTableReducer {
  /**
  *
  */
  export function reduceExtracted(state: Table<RPGElement>, action: RPGElementEvent.Extracted): Table<RPGElement> {
    return state.add(action.payload)
  }

  /**
  *
  */
  export function reduce(state: Table<RPGElement> | undefined, action: ApplicationEvent): Table<RPGElement> {
    const nonNullState: Table<RPGElement> = state || Table.empty()

    switch (action.type) {
      case RPGElementAction.EXTRACTED:
        return nonNullState.add(action.payload)
      default:
        return nonNullState.pristine()
    }
  }
}
