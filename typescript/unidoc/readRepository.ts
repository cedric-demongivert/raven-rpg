import { UnidocValidator } from '@cedric-demongivert/unidoc'
import { UnidocProducerEvent } from '@cedric-demongivert/unidoc'
import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocProducer } from '@cedric-demongivert/unidoc'

import { Entry } from '../data/Entry'
import { Commit } from '../state/git/Commit'

import * as validators from './validator'

import { Reader } from './Reader'
import { RepositoryCommand } from './RepositoryCommand'
import { CorvusDocumentElementBuilder } from '../corvus'

export function readRepository(commit: Entry<Commit>): Promise<CorvusDocumentElementBuilder> {
  return new Promise(function (resolve, reject) {
    const reader: Reader = new Reader(commit.model)
    const validator: UnidocValidator = UnidocValidator.kiss(
      validators.validateCommand.factory('document', RepositoryCommand.validateContent)
    )

    validator.subscribe(reader.output)
    //validator.addEventListener(UnidocProducerEvent.PRODUCTION, x => console.log(x.toString()))

    const parser: UnidocProducer<CorvusDocumentElementBuilder> = UnidocReducer.reduce.validation(
      validator, () => RepositoryCommand.reduceTag()
    )

    parser.addEventListener(UnidocProducerEvent.FAILURE, reject)
    parser.addEventListener(UnidocProducerEvent.PRODUCTION, resolve)

    reader.read('index.unidoc')
  })
}
