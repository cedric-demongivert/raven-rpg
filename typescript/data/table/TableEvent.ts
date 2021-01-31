import { ApplicationEvent } from '../../ApplicationEvent'

import { Entry } from '../Entry'

import { TableAction } from './TableAction'

export namespace TableEvent {
  /**
  *
  */
  export type Add<Model> = ApplicationEvent<Model>

  /**
  *
  */
  export type Update<Model> = ApplicationEvent<Entry<Model>>

  /**
  *
  */
  export type Remove = ApplicationEvent<number>

  /**
  *
  */
  export type Clear = ApplicationEvent

  /**
  *
  */
  export function add<Model>(payload: Model): Add<Model> {
    return {
      type: TableAction.ADD,
      payload
    }
  }

  /**
  *
  */
  export function update<Model>(entry: Entry<Model>): Update<Model>
  /**
  *
  */
  export function update<Model>(identifier: number, model: Model): Update<Model>
  export function update<Model>(...parameters: any[]): Update<Model> {
    return {
      type: TableAction.UPDATE,
      payload: parameters.length > 1 ? new Entry(parameters[0], parameters[1]) : parameters[0]
    }
  }

  /**
  *
  */
  export function remove<Model>(payload: Entry<Model>): Remove
  /**
  *
  */
  export function remove(payload: number): Remove
  /**
  *
  */
  export function remove<Model>(identifiable: Entry<Model> | number): Remove
  export function remove<Model>(identifiable: Entry<Model> | number): Remove {
    return {
      type: TableAction.REMOVE,
      payload: Entry.identifier(identifiable)
    }
  }

  const CLEAR_EVENT: Clear = {
    type: TableAction.CLEAR,
    payload: null
  }

  /**
  *
  */
  export function clear(): Clear {
    return CLEAR_EVENT
  }
}
