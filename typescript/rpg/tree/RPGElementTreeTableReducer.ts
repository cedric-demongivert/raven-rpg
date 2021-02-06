import { ApplicationEvent } from '../../ApplicationEvent'

import { Table } from '../../data/table/Table'
import { Entry } from '../../data/Entry'

import { RPGElementTree } from './RPGElementTree'
import { RPGElementTreeAction } from './RPGElementTreeAction'
import { RPGElementTreeEvent } from './RPGElementTreeEvent'

export namespace RPGElementTreeTableReducer {
  /**
  *
  */
  export function reduceAddition(state: Table<RPGElementTree>, action: RPGElementTreeEvent.Add): Table<RPGElementTree> {
    return state.add(new RPGElementTree({ element: action.payload }))
  }

  /**
  *
  */
  export function reduceChain(state: Table<RPGElementTree>, action: RPGElementTreeEvent.Chain): Table<RPGElementTree> {
    const previous: Entry<RPGElementTree> | undefined = action.payload.previous ? state.get(action.payload.previous) : undefined
    const next: Entry<RPGElementTree> | undefined = action.payload.next ? state.get(action.payload.next) : undefined

    if (previous && next) {
      if (previous.model.next == null && next.model.previous == null) {
        return reduceChainWithBothFreeTrees(state, previous, next)
      } else if (previous.model.next == null) {
        return reduceChainWithNextAsFreeTree(state, previous, next)
      } else if (next.model.previous == null) {
        return reduceChainWithPreviousAsFreeTree(state, previous, next)
      } else {
        return reduceChainWithBothChainedTree(state, previous, next)
      }
    } else if (previous) {
      return reduceRemoveNext(state, previous)
    } else {
      return reduceRemovePrevious(state, next)
    }
  }

  /**
  *
  */
  function reduceChainWithBothFreeTrees(state: Table<RPGElementTree>, previous: Entry<RPGElementTree>, next: Entry<RPGElementTree>): Table<RPGElementTree> {
    return state.updateMany([
      previous.setModel(previous.model.setNext(next.identifier)),
      next.setModel(next.model.setPrevious(previous.identifier))
    ])
  }

  /**
  *
  */
  function reduceChainWithNextAsFreeTree(state: Table<RPGElementTree>, previous: Entry<RPGElementTree>, next: Entry<RPGElementTree>): Table<RPGElementTree> {
    const previousOldNext: Entry<RPGElementTree> | undefined = state.get(previous.model.next)

    if (previousOldNext) {
      return state.updateMany([
        previousOldNext.setModel(previousOldNext.model.setPrevious(undefined)),
        previous.setModel(previous.model.setNext(next.identifier)),
        next.setModel(next.model.setPrevious(previous.identifier))
      ])
    } else {
      throw new Error(
        'Illegal table state, an element tree declare to have a ' +
        'preceding tree that does not exists in the table.'
      )
    }
  }

  /**
  *
  */
  function reduceChainWithPreviousAsFreeTree(state: Table<RPGElementTree>, previous: Entry<RPGElementTree>, next: Entry<RPGElementTree>): Table<RPGElementTree> {
    const nextOldPrevious: Entry<RPGElementTree> | undefined = state.get(next.model.previous)

    if (nextOldPrevious) {
      return state.updateMany([
        nextOldPrevious.setModel(nextOldPrevious.model.setNext(undefined)),
        next.setModel(next.model.setPrevious(previous.identifier)),
        previous.setModel(previous.model.setNext(next.identifier))
      ])
    } else {
      throw new Error(
        'Illegal table state, an element tree declare to have a ' +
        'following tree that does not exists in the table.'
      )
    }
  }

  /**
  *
  */
  function reduceChainWithBothChainedTree(state: Table<RPGElementTree>, previous: Entry<RPGElementTree>, next: Entry<RPGElementTree>): Table<RPGElementTree> {
    const previousOldNext: Entry<RPGElementTree> | undefined = state.get(previous.model.next)
    const nextOldPrevious: Entry<RPGElementTree> | undefined = state.get(next.model.previous)

    if (nextOldPrevious) {
      if (previousOldNext) {
        return state.updateMany([
          previousOldNext.setModel(previousOldNext.model.setPrevious(undefined)),
          nextOldPrevious.setModel(nextOldPrevious.model.setNext(undefined)),
          next.setModel(next.model.setPrevious(previous.identifier)),
          previous.setModel(previous.model.setNext(next.identifier))
        ])
      } else {
        throw new Error(
          'Illegal table state, an element tree declare to have a ' +
          'preceding tree that does not exists in the table.'
        )
      }
    } else {
      throw new Error(
        'Illegal table state, an element tree declare to have a ' +
        'following tree that does not exists in the table.'
      )
    }
  }

  /**
  *
  */
  function reduceRemoveNext(state: Table<RPGElementTree>, node: Entry<RPGElementTree>): Table<RPGElementTree> {
    if (node.model.next == null) {
      return state
    } else {
      const oldNext: Entry<RPGElementTree> | undefined = state.get(node.model.next)

      if (oldNext) {
        return state.updateMany([
          node.setModel(node.model.setNext(undefined)),
          oldNext.setModel(oldNext.model.setPrevious(undefined)),
        ])
      } else {
        throw new Error(
          'Illegal table state, an element tree declare to have a ' +
          'preceding tree that does not exists in the table.'
        )
      }
    }
  }

  /**
  *
  */
  function reduceRemovePrevious(state: Table<RPGElementTree>, node: Entry<RPGElementTree>): Table<RPGElementTree> {
    if (node.model.previous == null) {
      return state
    } else {
      const oldPrevious: Entry<RPGElementTree> | undefined = state.get(node.model.previous)

      if (oldPrevious) {
        return state.updateMany([
          node.setModel(node.model.setPrevious(undefined)),
          oldPrevious.setModel(oldPrevious.model.setNext(undefined)),
        ])
      } else {
        throw new Error(
          'Illegal table state, an element tree declare to have a ' +
          'following tree that does not exists in the table.'
        )
      }
    }
  }

  /**
  *
  */
  export function reduceHierarchize(state: Table<RPGElementTree>, action: RPGElementTreeEvent.Hierarchize): Table<RPGElementTree> {
    const parent: Entry<RPGElementTree> | undefined = action.payload.parent ? state.get(action.payload.parent) : undefined
    const child: Entry<RPGElementTree> | undefined = action.payload.child ? state.get(action.payload.child) : undefined

    if (parent && child) {
      if (child.model.parent == null) {
        return reduceSetParent(state, child, parent)
      } else {
        return reduceSwapParent(state, child, parent)
      }
    } else {
      return reduceRemoveParent(state, child)
    }
  }

  /**
  *
  */
  function reduceSwapParent(state: Table<RPGElementTree>, child: Entry<RPGElementTree>, parent: Entry<RPGElementTree>): Table<RPGElementTree> {
    const oldParent: Entry<RPGElementTree> | undefined = state.get(child.model.parent)

    if (oldParent) {
      return state.updateMany([
        oldParent.setModel(oldParent.model.removeChild(child.identifier)),
        child.setModel(child.model.setParent(parent.identifier)),
        parent.setModel(parent.model.addChild(child.identifier))
      ])
    } else {
      throw new Error(
        'Illegal table state, an element tree declare to have a ' +
        'parent tree that does not exists in the table.'
      )
    }
  }

  /**
  *
  */
  function reduceSetParent(state: Table<RPGElementTree>, child: Entry<RPGElementTree>, parent: Entry<RPGElementTree>): Table<RPGElementTree> {
    return state.updateMany([
      child.setModel(child.model.setParent(parent.identifier)),
      parent.setModel(parent.model.addChild(child.identifier))
    ])
  }

  /**
  *
  */
  function reduceRemoveParent(state: Table<RPGElementTree>, node: Entry<RPGElementTree>): Table<RPGElementTree> {
    if (node.model.parent == null) {
      return state
    } else {
      const oldParent: Entry<RPGElementTree> | undefined = state.get(node.model.parent)

      if (oldParent) {
        return state.updateMany([
          node.setModel(node.model.setParent(undefined)),
          oldParent.setModel(oldParent.model.removeChild(node.identifier)),
        ])
      } else {
        throw new Error(
          'Illegal table state, an element tree declare to have a ' +
          'parent tree that does not exists in the table.'
        )
      }
    }
  }

  /**
  *
  */
  function reduceRemove(state: Table<RPGElementTree>, action: RPGElementTreeEvent.Remove): Table<RPGElementTree> {
    throw new Error('Not implemented yet.')
  }

  /**
  *
  */
  export function reduce(state: Table<RPGElementTree> | undefined, action: ApplicationEvent): Table<RPGElementTree> {
    const nonNullState: Table<RPGElementTree> = state || Table.empty()

    switch (action.type) {
      case RPGElementTreeAction.ADD:
        return reduceAddition(state, action)
      case RPGElementTreeAction.CHAIN:
        return reduceChain(state, action)
      case RPGElementTreeAction.HIERARCHIZE:
        return reduceHierarchize(state, action)
      case RPGElementTreeAction.REMOVE:
        return reduceRemove(state, action)
      default:
        return nonNullState.pristine()
    }
  }
}
