import { UnidocReducer } from '@cedric-demongivert/unidoc'

/**
*
*/
export function reduceTagAsText(): UnidocReducer<string | undefined> {
  return UnidocReducer.reduceTag.content(UnidocReducer.reduceText())
}
