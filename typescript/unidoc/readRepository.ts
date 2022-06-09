import { UnidocEvent, UnidocValidationEvent, UnidocValidator } from '@cedric-demongivert/unidoc'
import { UnidocProducerEvent } from '@cedric-demongivert/unidoc'
import { UnidocReducer } from '@cedric-demongivert/unidoc'
import { UnidocProducer } from '@cedric-demongivert/unidoc'

import { Entry } from '../data/Entry'
import { Commit } from '../state/git/Commit'

import * as validators from './validator'

import { Reader } from './Reader'
import { RepositoryCommand } from './RepositoryCommand'
import { CorvusDocumentBuilder } from '../corvus/CorvusDocumentBuilder'

export function readRepository(commit: Entry<Commit>): Promise<CorvusDocumentBuilder> {
  return new Promise(function (resolve, reject) {
    const reader: Reader = new Reader(commit.model)

    const events: UnidocProducer<UnidocEvent> = reader.output
    const validation: UnidocProducer<UnidocValidationEvent> = UnidocValidator.kiss(
      events,
      validators.validateCommand.factory('document', RepositoryCommand.validateContent)
    )

    //validation.on('next', x => console.log(x.toString()))

    const result: UnidocProducer<CorvusDocumentBuilder> = UnidocReducer.reduce.validation(
      validation, () => RepositoryCommand.reduceTag()
    )

    result.on('failure', reject)
    result.on('next', resolve)

    reader.read('index.unidoc')
  })
}
