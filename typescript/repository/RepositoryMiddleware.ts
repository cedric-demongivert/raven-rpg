import { ApplicationMiddleware } from '../ApplicationMiddleware'
import { ApplicationPublication } from '../ApplicationPublication'

import { GitRepositories } from '../git/GitRepositories'

import { Application } from '../application/Application'

import { TagEvent } from '../tag/TagEvent'
import { Tag } from '../tag/Tag'

import { Entry } from '../data/Entry'

import { Commit } from '../commit/Commit'
import { CommitEvent } from '../commit/CommitEvent'

import { Repository } from './Repository'
import { RepositoryAction } from './RepositoryAction'
import { RepositoryEvent } from './RepositoryEvent'
import { RepositoryState } from './RepositoryState'


export class RepositoryMiddleware implements ApplicationMiddleware<Application>
{
  /**
  * @see ApplicationListener.beforeReduction
  */
  public beforeReduction(publication: ApplicationPublication<Application>): void {

  }

  /**
  * @see ApplicationListener.afterEventPublication
  */
  public afterReduction(publication: ApplicationPublication<Application>): void {
    switch (publication.event.type) {
      case RepositoryAction.SUBSCRIBE:
        return this.addRepository(publication)
      case RepositoryAction.CLONE:
        return this.cloneRepository(publication)
      case RepositoryAction.EXTRACT_COMMITS:
        return this.extractCommits(publication)
      case RepositoryAction.EXTRACT_LABELS:
        return this.extractLabels(publication)
      default:
        return
    }
  }

  /**
  *
  */
  private addRepository(publication: ApplicationPublication<Application, RepositoryEvent.Subscribe>): void {
    const identifier: number = publication.store.getState().repositories.table.getFirstInserted().identifier
    GitRepositories.create(identifier, publication.event.payload)
  }

  /**
  *
  */
  private cloneRepository(publication: ApplicationPublication<Application, RepositoryEvent.Clone>): void {
    const identifier: number = publication.event.payload
    const repository: Entry<Repository> | undefined = publication.store.getState().repositories.getByIdentifier(identifier)

    if (repository == null) {
      throw new Error(
        'Unable to clone repository #' + identifier + ' because the ' +
        'requested repository does not exists.'
      )
    }

    if (repository.model.state === RepositoryState.CLONING_REQUESTED) {
      if (typeof window !== 'undefined') {
        const operation: Promise<void> = GitRepositories.get(identifier).clone()

        publication.store.dispatch(RepositoryEvent.cloning(repository))

        operation.then(this.handleCloningSuccess.bind(this, publication))
        operation.catch(this.handleCloningFailure.bind(this, publication))
      }
    } else {
      throw new Error(
        'Unable to clone repository ' + repository.toString() + ' ' +
        'because the requested repository is not in state ' +
        RepositoryState.toDebugString(RepositoryState.CLONING_REQUESTED) + '.' +
        ' You may have a problem somewhere into your workflow.'
      )
    }
  }

  /**
  *
  */
  private handleCloningSuccess(publication: ApplicationPublication<Application, RepositoryEvent.Clone>): void {
    const identifier: number = publication.event.payload
    const repository: Entry<Repository> | undefined = publication.store.getState().repositories.getByIdentifier(identifier)

    if (repository == null) {
      throw new Error(
        'Unable to handle success of the cloning operation of repository #' +
        identifier + ' because the requested repository does not exists.'
      )
    }

    if (repository.model.state === RepositoryState.CLONING) {
      publication.store.dispatch(RepositoryEvent.cloned(repository))
    } else {
      throw new Error(
        'Unable to handle success of the cloning operation of repository ' +
        repository.toString() + ' because the requested repository is ' +
        'not in state ' + RepositoryState.toDebugString(RepositoryState.CLONING) +
        '. You may have a problem somewhere into your workflow.'
      )
    }
  }

  /**
  *
  */
  private handleCloningFailure(publication: ApplicationPublication<Application, RepositoryEvent.Clone>, reason: Error): void {
    const identifier: number = publication.event.payload
    const repository: Entry<Repository> | undefined = publication.store.getState().repositories.getByIdentifier(identifier)

    if (repository == null) {
      throw new Error(
        'Unable to handle failure of the cloning operation of repository #' +
        identifier + ' because the requested repository does not exists.'
      )
    }

    if (repository.model.state === RepositoryState.CLONING) {
      publication.store.dispatch(RepositoryEvent.cloningFailure(repository, reason))
    } else {
      throw new Error(
        'Unable to handle failure of the cloning operation of repository ' +
        repository.toString() + ' because the requested repository is ' +
        'not in state ' + RepositoryState.toDebugString(RepositoryState.CLONING) +
        '. You may have a problem somewhere into your workflow.'
      )
    }
  }

  /**
  *
  */
  private extractCommits(publication: ApplicationPublication<Application, RepositoryEvent.ExtractCommits>): void {
    const identifier: number = publication.event.payload
    const repository: Entry<Repository> | undefined = publication.store.getState().repositories.getByIdentifier(identifier)

    if (repository == null) {
      throw new Error(
        'Unable to extract commits of repository #' + identifier + ' because ' +
        'the requested repository does not exists.'
      )
    }

    if (repository.model.state === RepositoryState.COMMITS_EXTRACTION_REQUESTED) {
      const operation: Promise<any[]> = GitRepositories.get(identifier).readCommits()

      publication.store.dispatch(RepositoryEvent.extractingCommits(repository))

      operation.then(this.handleCommitsExtractionSuccess.bind(this, publication))
      operation.catch(this.handleCommitsExtractionFailure.bind(this, publication))
    } else {
      throw new Error(
        'Unable to extract commits of repository ' + repository.toString()
        + ' because the requested repository is not in state ' +
        RepositoryState.toDebugString(RepositoryState.COMMITS_EXTRACTION_REQUESTED) + '.' +
        ' You may have a problem somewhere into your workflow.'
      )
    }
  }

  /**
  *
  */
  private handleCommitsExtractionSuccess(publication: ApplicationPublication<Application, RepositoryEvent.ExtractCommits>, commits: any[]): void {
    const identifier: number = publication.event.payload
    const repository: Entry<Repository> | undefined = publication.store.getState().repositories.getByIdentifier(identifier)

    if (repository == null) {
      throw new Error(
        'Unable to handle success of the extraction of commits of ' +
        'repository #' + identifier + ' because the requested repository ' +
        'does not exists.'
      )
    }

    if (repository.model.state === RepositoryState.EXTRACTING_COMMITS) {
      for (const commit of commits) {
        publication.store.dispatch(
          CommitEvent.extracted(Commit.create({
            identifier: commit.oid,
            repository: repository.identifier,
            message: commit.commit.message,
            timestamp: commit.commit.author.timestamp
          }))
        )
      }

      publication.store.dispatch(RepositoryEvent.commitsExtracted(repository))
    } else {
      throw new Error(
        'Unable to handle success of the extraction of commits of ' +
        repository.toString() + ' because the requested repository is ' +
        'not in state ' + RepositoryState.toDebugString(RepositoryState.EXTRACTING_COMMITS) +
        '. You may have a problem somewhere into your workflow.'
      )
    }
  }

  /**
  *
  */
  private handleCommitsExtractionFailure(publication: ApplicationPublication<Application, RepositoryEvent.ExtractCommits>, reason: Error): void {
    const identifier: number = publication.event.payload
    const repository: Entry<Repository> | undefined = publication.store.getState().repositories.getByIdentifier(identifier)

    if (repository == null) {
      throw new Error(
        'Unable to handle failure of extraction of commits of repository #' +
        identifier + ' because the requested repository does not exists.'
      )
    }

    if (repository.model.state === RepositoryState.EXTRACTING_COMMITS) {
      publication.store.dispatch(RepositoryEvent.commitsExtractionFailure(repository, reason))
    } else {
      throw new Error(
        'Unable to handle failure of extraction of commits of repository ' +
        repository.toString() + ' because the requested repository is ' +
        'not in state ' + RepositoryState.toDebugString(RepositoryState.EXTRACTING_COMMITS) +
        '. You may have a problem somewhere into your workflow.'
      )
    }
  }

  /**
  *
  */
  private extractLabels(publication: ApplicationPublication<Application, RepositoryEvent.ExtractLabels>): void {
    const identifier: number = publication.event.payload
    const repository: Entry<Repository> | undefined = publication.store.getState().repositories.getByIdentifier(identifier)

    if (repository == null) {
      throw new Error(
        'Unable to extract labels of repository #' + identifier + ' because ' +
        'the requested repository does not exists.'
      )
    }

    if (repository.model.state === RepositoryState.LABELS_EXTRACTION_REQUESTED) {
      const operation: Promise<any[]> = GitRepositories.get(identifier).readTags()

      publication.store.dispatch(RepositoryEvent.extractingLabels(repository))

      operation.then(this.handleLabelsExtractionSuccess.bind(this, publication))
      operation.catch(this.handleLabelsExtractionFailure.bind(this, publication))
    } else {
      throw new Error(
        'Unable to extract labels of repository ' + repository.toString()
        + ' because the requested repository is not in state ' +
        RepositoryState.toDebugString(RepositoryState.LABELS_EXTRACTION_REQUESTED) + '.' +
        ' You may have a problem somewhere into your workflow.'
      )
    }
  }

  /**
  *
  */
  private handleLabelsExtractionSuccess(publication: ApplicationPublication<Application, RepositoryEvent.ExtractCommits>, labels: any[]): void {
    const identifier: number = publication.event.payload
    const repository: Entry<Repository> | undefined = publication.store.getState().repositories.getByIdentifier(identifier)

    if (repository == null) {
      throw new Error(
        'Unable to handle success of the extraction of labels of ' +
        'repository #' + identifier + ' because the requested repository ' +
        'does not exists.'
      )
    }

    if (repository.model.state === RepositoryState.EXTRACTING_LABELS) {
      for (const label of labels) {
        const commit: Entry<Commit> = publication.store.getState().commits.getByGitIdentifier(label[1].oid)

        publication.store.dispatch(TagEvent.extracted(
          Tag.create({
            commit: commit.identifier,
            repository: repository.identifier,
            identifier: label[1].oid,
            tag: label[0],
            timestamp: label[1].commit.author.timestamp
          })
        ))
      }

      publication.store.dispatch(RepositoryEvent.labelsExtracted(repository))
    } else {
      throw new Error(
        'Unable to handle success of the extraction of labels of ' +
        repository.toString() + ' because the requested repository is ' +
        'not in state ' + RepositoryState.toDebugString(RepositoryState.EXTRACTING_LABELS) +
        '. You may have a problem somewhere into your workflow.'
      )
    }
  }

  /**
  *
  */
  private handleLabelsExtractionFailure(publication: ApplicationPublication<Application, RepositoryEvent.ExtractCommits>, reason: Error): void {
    const identifier: number = publication.event.payload
    const repository: Entry<Repository> | undefined = publication.store.getState().repositories.getByIdentifier(identifier)

    if (repository == null) {
      throw new Error(
        'Unable to handle failure of extraction of labels of repository #' +
        identifier + ' because the requested repository does not exists.'
      )
    }

    if (repository.model.state === RepositoryState.EXTRACTING_LABELS) {
      publication.store.dispatch(RepositoryEvent.labelsExtractionFailure(repository, reason))
    } else {
      throw new Error(
        'Unable to handle failure of extraction of labels of repository ' +
        repository.toString() + ' because the requested repository is ' +
        'not in state ' + RepositoryState.toDebugString(RepositoryState.EXTRACTING_LABELS) +
        '. You may have a problem somewhere into your workflow.'
      )
    }
  }
}
