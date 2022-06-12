import { Empty } from "@cedric-demongivert/gl-tool-utils"
import { UnidocReducer, UnidocReduction, UTF32String } from "@cedric-demongivert/unidoc"

import { LinkBuilder } from "../model"

/**
 * 
 */
const URL_TAG: UTF32String = UTF32String.fromString('url')

/**
 *
 */
export function* reduceLinkTag(): UnidocReduction<LinkBuilder> {
  yield* UnidocReducer.assertStart()
  yield UnidocReduction.NEXT

  yield* UnidocReducer.assertStartOfAnyTag()
  yield UnidocReduction.NEXT

  let content: string
  let url: string | null

  content = (yield* UnidocReducer.reduceText()) || Empty.STRING
  url = yield* UnidocReducer.expectOptionalTag(URL_TAG, UnidocReducer.expectTokenTag)
  content += (yield* UnidocReducer.reduceText()) || Empty.STRING

  yield* UnidocReducer.assertEndOfAnyTag()

  if (content.length === 0 && url == null) {
    yield* UnidocReducer.fail(`Link tags must contains at least an url, received nothing.`)
  }

  yield UnidocReduction.NEXT

  yield* UnidocReducer.assertSuccess()

  if (url == null) {
    return LinkBuilder.create().setURL(content)
  } else {
    return LinkBuilder.create().setContent(content).setURL(url)
  }
}