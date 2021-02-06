import { UnidocImportationResolver } from '@cedric-demongivert/unidoc'
import { UnidocImportation } from '@cedric-demongivert/unidoc'
import { UnidocResource } from '@cedric-demongivert/unidoc'
import { UnidocSymbolReader } from '@cedric-demongivert/unidoc'
import { UnidocOrigin } from '@cedric-demongivert/unidoc'
import { UnidocOriginElementType } from '@cedric-demongivert/unidoc'

import { Path } from '../git/Path'
import { GitRepositories } from '../git/GitRepositories'
import { GitRepository } from '../git/GitRepository'
import { Commit } from '../commit/Commit'

const UNIDOC_EXTENSION = '.unidoc'
const ROOT = '/'

export class RepositoryResolver implements UnidocImportationResolver {
  /**
  *
  */
  public readonly commit: Commit

  /**
  *
  */
  public get repository(): GitRepository {
    return GitRepositories.get(this.commit.repository)
  }

  /**
  *
  */
  public constructor(commit: Commit) {
    this.commit = commit
  }

  /**
  *
  */
  private origin(value: UnidocImportation): string {
    const repository: any = value.origin.from.elements.last

    if (repository.type === UnidocOriginElementType.RESOURCE) {
      if (repository.unifiedResourceIdentifier === this.repository.origin) {
        const file: any = value.origin.from.elements.get(value.origin.from.elements.size - 2)
        return Path.dirname(file.unifiedResourceIdentifier)
      } else {
        return ROOT
      }
    } else {
      return ROOT
    }
  }

  /**
  *
  */
  public async resolve(importation: UnidocImportation): Promise<UnidocResource> {
    const origin: string = this.origin(importation)
    const objectIdentifier: string = this.commit.identifier
    const repository: GitRepository = this.repository

    let file: string = Path.resolve(origin, importation.resource)

    if (!file.endsWith(UNIDOC_EXTENSION)) {
      if (await repository.isDirectory(objectIdentifier, file)) {
        file = Path.resolve(file, 'index.unidoc')
      } else {
        file += '.unidoc'
      }
    }

    const content: string = (await repository.readFile(objectIdentifier, file)).toString('utf8')

    const resource: UnidocResource = new UnidocResource()
    resource.resource = file
    resource.reader = UnidocSymbolReader.fromString(
      content,
      new UnidocOrigin().resource(file).resource(repository.origin)
    )
    resource.origin.copy(importation)

    return resource
  }
}
