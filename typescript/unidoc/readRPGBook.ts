import { UnidocValidator } from '@cedric-demongivert/unidoc'
import { UnidocProducerEvent } from '@cedric-demongivert/unidoc'
import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocProducer } from '@cedric-demongivert/unidoc'

import { RPGDocument } from '../rpg/RPGDocument'
import { RPGBook } from '../rpg/book/RPGBook'
import { Commit } from '../commit/Commit'

import * as validators from './validator'
import * as reducer from './reducer'

import { Reader } from './Reader'

export function readRPGBook(commit: Commit, book: RPGBook): Promise<RPGDocument> {
  return new Promise(function(resolve, reject) {
    const reader: Reader = new Reader(commit)
    const validator: UnidocValidator = UnidocValidator.kiss(
      validators.validateUnidoc.factory(validators.validateDocument)
    )

    validator.subscribe(reader.output)
    //validator.addEventListener(UnidocProducerEvent.PRODUCTION, x => console.log(x.toString()))

    const parser: UnidocProducer<RPGDocument> = UnidocReducer.reduce.validation(
      validator,
      () => reducer.reduceUnidoc(reducer.reduceRPGDocument())
    )

    parser.addEventListener(UnidocProducerEvent.FAILURE, reject)
    parser.addEventListener(UnidocProducerEvent.PRODUCTION, resolve)

    reader.read(book.path)
  })
}
