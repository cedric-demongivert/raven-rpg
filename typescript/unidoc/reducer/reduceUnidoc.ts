import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocReductionRequest } from '@cedric-demongivert/unidoc'

/**
*
*/
export function* reduceUnidoc<T>(reducer: UnidocReducer<T>): UnidocReducer<T> {
  yield* UnidocReducer.skipStart()
  yield UnidocReductionRequest.NEXT

  return yield* reducer
}
