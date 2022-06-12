import { Empty } from "@cedric-demongivert/gl-tool-utils"
import { UnidocReducer, UnidocReduction, UTF32String } from "@cedric-demongivert/unidoc"

import { LinkBuilder } from "../model"
import { reduceTagMetadata } from "./reduceTagMetadata"

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

  const builder: LinkBuilder = new LinkBuilder()

  yield* reduceTagMetadata(builder)

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
    return builder.setURL(content)
  } else {
    return builder.setContent(content).setURL(url)
  }
}