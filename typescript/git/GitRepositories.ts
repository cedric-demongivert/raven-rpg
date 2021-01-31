import { GitRepository } from './GitRepository'

const REPOSITORY: Map<number, GitRepository> = new Map()

export namespace GitRepositories {
  /**
  *
  */
  export function create(identifier: number, origin: string): GitRepository {
    const repository: GitRepository = new GitRepository(identifier, origin)

    REPOSITORY.set(identifier, repository)

    return repository
  }

  /**
  *
  */
  export function get(identifier: number): GitRepository {
    return REPOSITORY.get(identifier)
  }
}
