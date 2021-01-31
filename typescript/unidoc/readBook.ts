import { UnidocValidator } from '@cedric-demongivert/unidoc'
import { UnidocProducerEvent } from '@cedric-demongivert/unidoc'
import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocProducer } from '@cedric-demongivert/unidoc'

import { Document } from '../hypertext/Document'
import { Book } from '../book/Book'
import { Commit } from '../commit/Commit'

import * as validators from './validator'
import * as reducer from './reducer'

import { Reader } from './Reader'

export function readBook(commit: Commit, book: Book): Promise<Document> {
  return new Promise(function(resolve, reject) {
    const reader: Reader = new Reader(commit)
    const validator: UnidocValidator = UnidocValidator.kiss(
      validators.validateUnidoc.factory(validators.validateDocument)
    )

    validator.subscribe(reader.output)
    //validator.addEventListener(UnidocProducerEvent.PRODUCTION, x => console.log(x.toString()))

    const parser: UnidocProducer<Document> = UnidocReducer.reduce.validation(
      validator,
      () => reducer.reduceUnidoc(reducer.reduceDocument())
    )

    parser.addEventListener(UnidocProducerEvent.FAILURE, reject)
    parser.addEventListener(UnidocProducerEvent.PRODUCTION, resolve)

    reader.read(book.content)
  })
}
