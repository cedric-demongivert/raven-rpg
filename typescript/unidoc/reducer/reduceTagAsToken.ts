import { UnidocReducer } from '@cedric-demongivert/unidoc'

/**
*
*/
export function reduceTagAsToken(): UnidocReducer<string | undefined> {
  return UnidocReducer.reduceTag.content(UnidocReducer.reduceToken())
}
