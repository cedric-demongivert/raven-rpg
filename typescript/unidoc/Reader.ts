import { UnidocStream } from '@cedric-demongivert/unidoc'
import { UnidocProducer } from '@cedric-demongivert/unidoc'
import { UnidocEvent } from '@cedric-demongivert/unidoc'
import { fullyParse } from '@cedric-demongivert/unidoc'

import { Commit } from '../commit/Commit'

import { RepositoryResolver } from './RepositoryResolver'

export class Reader {
  /**
  *
  */
  private readonly _stream: UnidocStream

  /**
  *
  */
  public readonly output: UnidocProducer<UnidocEvent>

  /**
  *
  */
  public constructor(commit: Commit) {
    this._stream = new UnidocStream(new RepositoryResolver(commit))
    this.output = fullyParse(this._stream)
  }

  /**
  *
  */
  public read(file: string) {
    this._stream.import(file)
  }
}
