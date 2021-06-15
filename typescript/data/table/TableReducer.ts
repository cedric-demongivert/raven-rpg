import { Reference } from '../Reference'
import { Predicate } from '../Predicate'
import { Entry } from '../Entry'

import { Table } from './Table'
import { TableAddition } from './TableAddition'
import { TableDeletion } from './TableDeletion'
import { TableFiltration } from './TableFiltration'
import { TableAssignation } from './TableAssignation'

/**
 * 
 */
export namespace TableReducer {
  /**
   *
   */
  export function reduceFiltration<From, To extends From = From>(table: Table<From>, predicate: Predicate<From, To>): TableFiltration<From, To> {
    return table.filter(predicate)
  }

  /**
  *
  */
  export function reduceAddition<Model>(table: Table<Model>, model: Model): TableAddition<Model> {
    return table.add(model)
  }

  /**
  *
  */
  export function reduceManyAddition<Model>(table: Table<Model>, iterator: Iterator<Model>): TableAddition<Model> {
    return table.addMany(iterator)
  }

  /**
  *
  */
  export function reduceDeletion<Model>(table: Table<Model>, model: Reference<Model>): TableDeletion<Model> {
    return table.delete(model)
  }

  /**
  *
  */
  export function reduceManyDeletion<Model>(table: Table<Model>, iterator: Iterator<Reference<Model>>): TableDeletion<Model> {
    return table.deleteMany(iterator)
  }

  /**
  *
  */
  export function reduceOrderedDeletion<Model>(table: Table<Model>, iterator: Iterator<Reference<Model>>): TableDeletion<Model> {
    return table.deleteOrdered(iterator)
  }

  /**
  *
  */
  export function reduceAssignation<Model>(table: Table<Model>, update: Entry<Model>): TableAssignation<Model> {
    return table.set(update)
  }

  /**
  *
  */
  export function reduceManyAssignation<Model>(table: Table<Model>, iterator: Iterator<Entry<Model>>): TableAssignation<Model> {
    return table.setMany(iterator)
  }

  /**
  *
  */
  export function reduceOrderedAssignation<Model>(table: Table<Model>, updates: Iterator<Entry<Model>>): TableAssignation<Model> {
    return table.setOrdered(updates)
  }

  /**
  *
  */
  export function reduceClear<Model>(table: Table<Model>): Table<Model> {
    return Table.EMPTY
  }
}