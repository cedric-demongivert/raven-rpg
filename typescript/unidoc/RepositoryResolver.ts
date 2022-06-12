import { UnidocImportResolver, UnidocImport, UnidocSymbols, UnidocResource, UnidocURI } from '@cedric-demongivert/unidoc'

import { GitRepository, Path } from '../git'

/**
 * 
 */
const UNIDOC_EXTENSION: string = '.unidoc'

/**
 * 
 */
const ROOT_DIRECTORY: string = '/'

/**
 * 
 */
export class RepositoryResolver implements UnidocImportResolver {
  /**
   * 
   */
  public readonly repository: GitRepository

  /**
   *
   */
  public readonly commit: string

  /**
   *
   */
  private readonly _uri: UnidocURI

  /**
  *
  */
  public constructor(repository: GitRepository, commit: string) {
    this.repository = repository
    this.commit = commit
    this._uri = new UnidocURI()
  }

  /**
   * 
   */
  private origin(importation: UnidocImport): string {
    if (importation.origin.origins.size === 0) {
      return ROOT_DIRECTORY
    }

    const source: UnidocURI = importation.origin.origins.last.source

    if (source.scheme === 'file') {
      return Path.dirname(source.identifier)
    }

    return ROOT_DIRECTORY
  }

  /**
  *
  */
  public async resolve(importation: UnidocImport): Promise<UnidocResource> {
    const commit: string = this.commit
    const repository: GitRepository = this.repository

    let file: string = Path.resolve(this.origin(importation), importation.identifier).substring(1)

    if (!file.endsWith(UNIDOC_EXTENSION)) {
      if (await repository.isDirectory(commit, file)) {
        file = Path.resolve(file, 'index.unidoc').substring(1)
      } else {
        file += '.unidoc'
      }
    }

    this._uri.clear()
    this._uri.scheme = importation.scheme
    this._uri.identifier = file

    const content: string = (await repository.readFile(commit, file)).toString('utf8')

    return UnidocResource.fromIterator(this._uri, importation, UnidocSymbols.fromString(content, this._uri))
  }
}
