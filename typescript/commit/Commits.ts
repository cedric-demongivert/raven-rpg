import { Entry } from '../data/Entry'
import { Commit } from './Commit'

export namespace Commits {
  /**
  *
  */
  export function latest(commits: Iterable<Commit>): Commit | undefined {
    let result: Commit | undefined = undefined

    for (const commit of commits) {
      if (result == null) {
        result = commit
      } else if (result.timestamp < commit.timestamp) {
        result = commit
      }
    }

    return result
  }

  /**
  *
  */
  export function latestEntry(commits: Iterable<Entry<Commit>>): Entry<Commit> | undefined {
    let result: Entry<Commit> | undefined = undefined

    for (const commit of commits) {
      if (result == null) {
        result = commit
      } else if (result.model.timestamp < commit.model.timestamp) {
        result = commit
      }
    }

    return result
  }
}
