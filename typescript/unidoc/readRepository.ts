import { UnidocValidator } from '@cedric-demongivert/unidoc'
import { UnidocProducerEvent } from '@cedric-demongivert/unidoc'
import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocProducer } from '@cedric-demongivert/unidoc'

import { Entry } from '../data/Entry'
import { RPGBook } from '../rpg/book/RPGBook'
import { Commit } from '../commit/Commit'

import * as validators from './validator'
import * as reducer from './reducer'

import { Reader } from './Reader'

export function readRepository(commit: Entry<Commit>): Promise<RPGBook[]> {
  return new Promise(function(resolve, reject) {
    const reader: Reader = new Reader(commit.model)
    const validator: UnidocValidator = UnidocValidator.kiss(
      validators.validateUnidoc.factory(
        validators.validateCommand.factory(
          'repository',
          validators.validateRepository
        )
      )
    )

    validator.subscribe(reader.output)
    //validator.addEventListener(UnidocProducerEvent.PRODUCTION, x => console.log(x.toString()))

    const parser: UnidocProducer<RPGBook[]> = UnidocReducer.reduce.validation(
      validator,
      () => UnidocReducer.reduceTag.content(
        UnidocReducer.reduceTag.content(
          reducer.reduceRepository()
        )
      )
    )

    parser.addEventListener(UnidocProducerEvent.FAILURE, reject)
    parser.addEventListener(UnidocProducerEvent.PRODUCTION, function(result: RPGBook[]) {
      resolve(result.map(book => book.setCommit(commit.identifier)))
    })

    reader.read('repository.unidoc')
  })
}