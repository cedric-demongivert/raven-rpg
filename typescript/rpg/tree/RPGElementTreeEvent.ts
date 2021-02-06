import { ApplicationEvent } from '../../ApplicationEvent'

import { Entry } from '../../data/Entry'

import { RPGElement } from '../RPGElement'

import { RPGElementTree } from './RPGElementTree'
import { RPGElementTreeAction } from './RPGElementTreeAction'

export namespace RPGElementTreeEvent {
  /**
  *
  */
  export type Add = ApplicationEvent<number>

  /**
  *
  */
  export type Chain = ApplicationEvent<(
    { previous: number | undefined, next: number } |
    { previous: number, next: number | undefined } |
    { previous: number, next: number }
  )>

  /**
  *
  */
  export type Hierarchize = ApplicationEvent<{
    child: number,
    parent: number | undefined
  }>

  /**
  *
  */
  export type Remove = ApplicationEvent<number>

  /**
  *
  */
  export function add(element: Entry<RPGElement> | number): Add {
    return {
      type: RPGElementTreeAction.ADD,
      payload: Entry.identifier(element)
    }
  }

  /**
  *
  */
  export function chain(previous: number | Entry<RPGElementTree>, next: number | Entry<RPGElementTree>): Chain
  export function chain(previous: undefined, next: number | Entry<RPGElementTree>): Chain
  export function chain(previous: number | Entry<RPGElementTree>, next: undefined): Chain
  export function chain(previous: number | Entry<RPGElementTree> | undefined, next: number | Entry<RPGElementTree> | undefined): Chain {
    return {
      type: RPGElementTreeAction.CHAIN,
      payload: {
        previous: Entry.identifier(previous),
        next: Entry.identifier(next)
      }
    }
  }

  /**
  *
  */
  export function hierarchize(child: number | Entry<RPGElementTree>, parent: number | Entry<RPGElementTree> | undefined): Hierarchize {
    return {
      type: RPGElementTreeAction.HIERARCHIZE,
      payload: {
        child: Entry.identifier(child),
        parent: Entry.identifier(parent)
      }
    }
  }

  /**
  *
  */
  export function remove(payload: number | Entry<RPGElementTree>): Remove {
    return {
      type: RPGElementTreeAction.REMOVE,
      payload: Entry.identifier(payload)
    }
  }
}
