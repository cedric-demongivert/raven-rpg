import { UnidocContext } from '@cedric-demongivert/unidoc'
import { UnidocProducer } from '@cedric-demongivert/unidoc'
import { UnidocEvent } from '@cedric-demongivert/unidoc'
import { fullyParse } from '@cedric-demongivert/unidoc'

import { Commit } from '../state/git/Commit'

import { RepositoryResolver } from './RepositoryResolver'

export class Reader {
  /**
  *
  */
  private readonly _stream: UnidocContext

  /**
  *
  */
  public readonly output: UnidocProducer<UnidocEvent>

  /**
  *
  */
  public constructor(commit: Commit) {
    this._stream = new UnidocContext(new RepositoryResolver(commit))
    this.output = fullyParse(this._stream)
  }

  /**
  *
  */
  public read(file: string) {
    this._stream.import(file)
  }
}
