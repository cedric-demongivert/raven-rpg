import { ApplicationEvent } from '../ApplicationEvent'

import { Entry } from '../data/Entry'

import { DocumentElement } from '../document/DocumentElement'

import { DocumentTree } from './DocumentTree'
import { DocumentTreeAction } from './DocumentTreeAction'

export namespace DocumentTreeEvent {
  /**
  *
  */
  export type Add = ApplicationEvent<DocumentTree>

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
  export function add(element: DocumentElement): Add {
    return {
      type: DocumentTreeAction.ADD,
      payload: new DocumentTree({ element })
    }
  }

  /**
  *
  */
  export function chain(previous: number | Entry<DocumentTree>, next: number | Entry<DocumentTree>): Chain
  export function chain(previous: undefined, next: number | Entry<DocumentTree>): Chain
  export function chain(previous: number | Entry<DocumentTree>, next: undefined): Chain
  export function chain(previous: number | Entry<DocumentTree> | undefined, next: number | Entry<DocumentTree> | undefined): Chain {
    return {
      type: DocumentTreeAction.CHAIN,
      payload: {
        previous: Entry.identifier(previous),
        next: Entry.identifier(next)
      }
    }
  }

  /**
  *
  */
  export function hierarchize(child: number | Entry<DocumentTree>, parent: number | Entry<DocumentTree> | undefined): Hierarchize {
    return {
      type: DocumentTreeAction.HIERARCHIZE,
      payload: {
        child: Entry.identifier(child),
        parent: Entry.identifier(parent)
      }
    }
  }

  /**
  *
  */
  export function remove(payload: number | Entry<DocumentTree>): Remove {
    return {
      type: DocumentTreeAction.REMOVE,
      payload: Entry.identifier(payload)
    }
  }
}
