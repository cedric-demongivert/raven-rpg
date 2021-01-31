import { UnidocReducer } from '@cedric-demongivert/unidoc'

import { Hypertext } from '../../hypertext/Hypertext'

import { reduceHypertext } from './reduceHypertext'

/**
*
*/
export function reduceTagAsHypertext(): UnidocReducer<Hypertext | undefined> {
  return UnidocReducer.reduceTag.content(reduceHypertext())
}
