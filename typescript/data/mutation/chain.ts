
import { MutationType } from './MutationType'

import { Mutation } from './Mutation'
import { Addition } from './Addition'
import { Deletion } from './Deletion'
import { Update } from './Update'
import { Identity } from './Identity'

/**
 * 
 */
function assertChain<Model>(previous: Mutation<Model>, next: Mutation<Model>, message?: string | undefined): void {
  if (previous.next !== next.previous) {
    throw new Error(message || 'The models of the given mutations does not chain themselves.')
  }
}

/**
 * 
 */
export function chain<Model>(previous: Identity<Model>, next: Addition<Model>): Addition<Model>
/**
* 
*/
export function chain<Model>(previous: Identity<Model>, next: Update<Model>): Update<Model>
/**
* 
*/
export function chain<Model>(previous: Identity<Model>, next: Deletion<Model>): Deletion<Model>
/**
* 
*/
export function chain<Model>(previous: Identity<Model>, next: Identity<Model>): Identity<Model>
/**
 * 
 */
export function chain<Model>(previous: Addition<Model>, next: Addition<Model>): never
/**
* 
*/
export function chain<Model>(previous: Addition<Model>, next: Update<Model>): Addition<Model>
/**
* 
*/
export function chain<Model>(previous: Addition<Model>, next: Deletion<Model>): Identity<Model>
/**
* 
*/
export function chain<Model>(previous: Addition<Model>, next: Identity<Model>): Addition<Model>
/**
* 
*/
export function chain<Model>(previous: Update<Model>, next: Addition<Model>): never
/**
* 
*/
export function chain<Model>(previous: Update<Model>, next: Update<Model>): Update<Model>
/**
* 
*/
export function chain<Model>(previous: Update<Model>, next: Deletion<Model>): Deletion<Model>
/**
* 
*/
export function chain<Model>(previous: Update<Model>, next: Identity<Model>): Update<Model>
/**
* 
*/
export function chain<Model>(previous: Deletion<Model>, next: Addition<Model>): Update<Model>
/**
* 
*/
export function chain<Model>(previous: Deletion<Model>, next: Update<Model>): never
/**
* 
*/
export function chain<Model>(previous: Deletion<Model>, next: Deletion<Model>): never
/**
* 
*/
export function chain<Model>(previous: Deletion<Model>, next: Identity<Model>): Deletion<Model>
/**
* 
*/
export function chain<Model>(previous: Mutation<Model>, next: Mutation<Model>): Mutation<Model>
export function chain<Model>(previous: Mutation<Model>, next: Mutation<Model>): Mutation<Model> {
  try {
    switch (next.type) {
      case MutationType.ADDITION:
        return chainAdditionWith(previous as Addition<Model>, next)
      case MutationType.UPDATE:
        return chainUpdateWith(previous as Update<Model>, next)
      case MutationType.DELETION:
        return chainDeletionWith(previous as Deletion<Model>, next)
      case MutationType.IDENTITY:
        return chainIdentityWith(previous as Identity<Model>, next)
      default:
        throw new Error('No procedure was defined to chain a mutation of type ' + MutationType.toDebugString(previous.type) + '.')
    }
  } catch (error) {
    throw new Error('Unable to chain the mutation ' + previous.toString() + ' with the mutation ' + next.toString())
  }
}

/**
 * 
 */
export function chainIdentityWith<Model>(previous: Identity<Model>, next: Addition<Model>): Addition<Model>
/**
* 
*/
export function chainIdentityWith<Model>(previous: Identity<Model>, next: Update<Model>): Update<Model>
/**
* 
*/
export function chainIdentityWith<Model>(previous: Identity<Model>, next: Deletion<Model>): Deletion<Model>
/**
* 
*/
export function chainIdentityWith<Model>(previous: Identity<Model>, next: Identity<Model>): Addition<Model>
/**
* 
*/
export function chainIdentityWith<Model>(previous: Identity<Model>, next: Mutation<Model>): Mutation<Model>
export function chainIdentityWith<Model>(previous: Identity<Model>, next: Mutation<Model>): Mutation<Model> {
  if (previous.identifier !== next.identifier) {
    throw new Error('The given mutations does not mutate the same object.')
  }

  return next;
}

/**
 * 
 */
export function chainAdditionWith<Model>(previous: Addition<Model>, next: Addition<Model>): never
/**
* 
*/
export function chainAdditionWith<Model>(previous: Addition<Model>, next: Update<Model>): Addition<Model>
/**
* 
*/
export function chainAdditionWith<Model>(previous: Addition<Model>, next: Deletion<Model>): Identity<Model>
/**
* 
*/
export function chainAdditionWith<Model>(previous: Addition<Model>, next: Identity<Model>): Addition<Model>
/**
* 
*/
export function chainAdditionWith<Model>(previous: Addition<Model>, next: Mutation<Model>): Mutation<Model>
export function chainAdditionWith<Model>(previous: Addition<Model>, next: Mutation<Model>): Mutation<Model> {
  if (previous.identifier !== next.identifier) {
    throw new Error('The given mutations does not mutate the same object.')
  }

  switch (next.type) {
    case MutationType.ADDITION:
      throw new Error('The mutation to chain try to add an entry that already exists.')
    case MutationType.UPDATE:
      assertChain(previous, next)
      return Mutation.addition(next.identifier, next.next)
    case MutationType.DELETION:
      assertChain(previous, next)
      return Mutation.identity(previous.identifier)
    case MutationType.IDENTITY:
      return previous
    default:
      throw new Error('No procedure was defined to chain an addition with a mutation of type ' + MutationType.toDebugString(next.type) + '.')
  }
}

/**
 * 
 */
export function chainUpdateWith<Model>(previous: Update<Model>, next: Addition<Model>): never
/**
* 
*/
export function chainUpdateWith<Model>(previous: Update<Model>, next: Update<Model>): Update<Model>
/**
* 
*/
export function chainUpdateWith<Model>(previous: Update<Model>, next: Deletion<Model>): Deletion<Model>
/**
* 
*/
export function chainUpdateWith<Model>(previous: Update<Model>, next: Identity<Model>): Update<Model>
/**
* 
*/
export function chainUpdateWith<Model>(previous: Update<Model>, next: Mutation<Model>): Mutation<Model>
export function chainUpdateWith<Model>(previous: Update<Model>, next: Mutation<Model>): Mutation<Model> {
  if (previous.identifier !== next.identifier) {
    throw new Error('The given mutations does not mutate the same object.')
  }

  switch (next.type) {
    case MutationType.ADDITION:
      throw new Error('The mutation to chain try to add an entry that already exists.')
    case MutationType.UPDATE:
      assertChain(previous, next)
      return Mutation.update(next.identifier, previous.previous, next.next)
    case MutationType.DELETION:
      assertChain(previous, next)
      return Mutation.deletion(previous.identifier, previous.previous)
    case MutationType.IDENTITY:
      return previous
    default:
      throw new Error('No procedure was defined to chain an update with a mutation of type ' + MutationType.toDebugString(next.type) + '.')
  }
}

/**
 * 
 */
export function chainDeletionWith<Model>(previous: Deletion<Model>, next: Addition<Model>): Update<Model>
/**
* 
*/
export function chainDeletionWith<Model>(previous: Deletion<Model>, next: Update<Model>): never
/**
* 
*/
export function chainDeletionWith<Model>(previous: Deletion<Model>, next: Deletion<Model>): never
/**
* 
*/
export function chainDeletionWith<Model>(previous: Deletion<Model>, next: Identity<Model>): Deletion<Model>
/**
* 
*/
export function chainDeletionWith<Model>(previous: Deletion<Model>, next: Mutation<Model>): Mutation<Model>
export function chainDeletionWith<Model>(previous: Deletion<Model>, next: Mutation<Model>): Mutation<Model> {
  if (previous.identifier !== next.identifier) {
    throw new Error('The given mutations does not mutate the same object.')
  }

  switch (next.type) {
    case MutationType.ADDITION:
      return Mutation.update(previous.identifier, previous.previous, next.next)
    case MutationType.UPDATE:
      throw new Error('The mutation to chain try to update an entry that was deleted.')
    case MutationType.DELETION:
      throw new Error('The mutation to chain try to delete an entry that was deleted.')
    case MutationType.IDENTITY:
      return previous
    default:
      throw new Error('No procedure was defined to chain an deletion with a mutation of type ' + MutationType.toDebugString(next.type) + '.')
  }
}
