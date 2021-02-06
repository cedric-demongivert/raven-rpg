import { UnidocReducer } from '@cedric-demongivert/unidoc'

export function reduceTagWith<T>(reducer: UnidocReducer<T>): UnidocReducer<T> {
  return UnidocReducer.reduceTag.content(reducer)
}
