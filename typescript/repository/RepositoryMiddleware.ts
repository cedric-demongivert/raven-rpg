import { ApplicationMiddleware } from '../ApplicationMiddleware'
import { ApplicationPublication } from '../ApplicationPublication'
import { Utils } from '../Utils'

import { GitRepositories } from '../git/GitRepositories'

import { Application } from '../application/Application'
import { RepositoryCollection } from '../application/RepositoryCollection'

import { TagEvent } from '../tag/TagEvent'
import { Tag } from '../tag/Tag'

import { Task } from '../task/Task'

import { Entry } from '../data/Entry'
import { Reference } from '../data/Reference'

import { Commit } from '../commit/Commit'
import { CommitEvent } from '../commit/CommitEvent'

import { Repository } from './Repository'
import { RepositoryAction } from './RepositoryAction'
import { RepositoryEvent } from './RepositoryEvent'
import { RepositoryTask } from './RepositoryTask'


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
        return this.tryToCloneRepository(publication)
      case RepositoryAction.EXTRACT_COMMITS:
        return this.tryToExtractCommits(publication)
      case RepositoryAction.EXTRACT_LABELS:
        return this.tryToExtractLabels(publication)
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
  private tryToCloneRepository(publication: ApplicationPublication<Application, RepositoryEvent.Clone>): void {
    try {
      this.cloneRepository(publication)
    } catch (error) {
      throw new Error('Unable to clone the repository #' + publication.event.payload.identifier + '.')
    }
  }

  /**
  *
  */
  private cloneRepository(publication: ApplicationPublication<Application, RepositoryEvent.Clone>): void {
    const repositories: RepositoryCollection = publication.store.getState().repositories
    const repository: Entry<Repository> | undefined = repositories.getByReference(publication.event.payload)

    Utils.assertDefined(repository, 'The requested repository does not exists.')

    const state = repository.model.state

    Task.assert(state, 'The repository does not declare any occuring operation.')
    Task.assertOfType(state, RepositoryTask.CLONING, 'The repository does not request a cloning operation.')
    Task.assertRunnable(state, 'The cloning operation was already started.')

    publication.store.dispatch(RepositoryEvent.update(repository, Task.run(state)))

    GitRepositories.get(repository.identifier).clone()
      .then(this.tryToHandleCloningSuccess.bind(this, publication))
      .catch(this.tryToHandleCloningFailure.bind(this, publication))
  }

  /**
  *
  */
  private tryToHandleCloningSuccess(publication: ApplicationPublication<Application, RepositoryEvent.Clone>): void {
    try {
      this.handleCloningSuccess(publication)
    } catch (error) {
      throw new Error('Unable to resolve the cloning operation of the repository #' + publication.event.payload.identifier + '.')
    }
  }

  /**
  *
  */
  private handleCloningSuccess(publication: ApplicationPublication<Application, RepositoryEvent.Clone>): void {
    const repositories: RepositoryCollection = publication.store.getState().repositories
    const repository: Entry<Repository> | undefined = repositories.getByReference(publication.event.payload)

    Utils.assertDefined(repository, 'The requested repository does not exists.')

    const state = repository.model.state

    Task.assert(state, 'The repository does not declare any occuring operation.')
    Task.assertOfType(state, RepositoryTask.CLONING, 'The repository does not declare a cloning operation.')
    Task.assertResolvable(state, 'The cloning operation is not resolvable.')

    publication.store.dispatch(RepositoryEvent.update(repository, Task.resolve(state, undefined)))
  }

  /**
  *
  */
  private tryToHandleCloningFailure(publication: ApplicationPublication<Application, RepositoryEvent.Clone>, reason: Error): void {
    try {
      this.handleCloningFailure(publication, reason)
    } catch (error) {
      throw new Error('Unable to reject the cloning operation of the repository #' + publication.event.payload.identifier + '.')
    }
  }

  /**
  *
  */
  private handleCloningFailure(publication: ApplicationPublication<Application, RepositoryEvent.Clone>, reason: Error): void {
    const repositories: RepositoryCollection = publication.store.getState().repositories
    const repository: Entry<Repository> | undefined = repositories.getByReference(publication.event.payload)

    Utils.assertDefined(repository, 'The requested repository does not exists.')

    const state = repository.model.state

    Task.assert(state, 'The repository does not declare any occuring operation.')
    Task.assertOfType(state, RepositoryTask.CLONING, 'The repository does not declare a cloning operation.')
    Task.assertRejectable(state, 'The cloning operation is not rejectable.')

    publication.store.dispatch(RepositoryEvent.update(repository, Task.reject(state, reason)))
  }

  /**
  *
  */
  private tryToExtractCommits(publication: ApplicationPublication<Application, RepositoryEvent.ExtractCommits>): void {
    try {
      this.extractCommits(publication)
    } catch (error) {
      throw new Error('Unable to extract all commits of the repository #' + publication.event.payload.identifier + '.')
    }
  }

  /**
  *
  */
  private extractCommits(publication: ApplicationPublication<Application, RepositoryEvent.ExtractCommits>): void {
    const repositories: RepositoryCollection = publication.store.getState().repositories
    const repository: Entry<Repository> | undefined = repositories.getByReference(publication.event.payload)

    Utils.assertDefined(repository, 'The requested repository does not exists.')

    const state = repository.model.state

    Task.assert(state, 'The repository does not declare any occuring operation.')
    Task.assertOfType(state, RepositoryTask.EXTRACTING_COMMITS, 'The repository does not declare a commits extraction operation.')
    Task.assertRunnable(state, 'The commits extraction operation was already started.')

    publication.store.dispatch(RepositoryEvent.update(repository, Task.run(state)))

    GitRepositories.get(repository.identifier).readCommits()
      .then(this.tryToHandleCommitsExtractionSuccess.bind(this, publication))
      .catch(this.tryToHandleCommitsExtractionFailure.bind(this, publication))
  }

  /**
  *
  */
  private tryToHandleCommitsExtractionSuccess(publication: ApplicationPublication<Application, RepositoryEvent.ExtractCommits>, commits: any[]): void {
    try {
      this.handleCommitsExtractionSuccess(publication, commits)
    } catch (error) {
      throw new Error('Unable to resolve the commits extraction operation of repository #' + publication.event.payload.identifier + '.')
    }
  }

  /**
  *
  */
  private handleCommitsExtractionSuccess(publication: ApplicationPublication<Application, RepositoryEvent.ExtractCommits>, commits: any[]): void {
    const repositories: RepositoryCollection = publication.store.getState().repositories
    const repository: Entry<Repository> | undefined = repositories.getByReference(publication.event.payload)

    Utils.assertDefined(repository, 'The requested repository does not exists.')

    const state = repository.model.state

    Task.assert(state, 'The repository does not declare any occuring operation.')
    Task.assertOfType(state, RepositoryTask.EXTRACTING_COMMITS, 'The repository does not declare a commits extraction operation.')
    Task.assertResolvable(state, 'The commits extraction operation is not resolvable.')

    if (Task.isCancelable(state)) {
      for (const commit of commits) {
        publication.store.dispatch(
          CommitEvent.extracted(Commit.create({
            identifier: commit.oid,
            repository: publication.event.payload,
            message: commit.commit.message,
            timestamp: commit.commit.author.timestamp
          }))
        )
      }
    }

    publication.store.dispatch(RepositoryEvent.update(repository, Task.resolve(state, undefined)))
  }

  /**
  *
  */
  private tryToHandleCommitsExtractionFailure(publication: ApplicationPublication<Application, RepositoryEvent.ExtractCommits>, reason: Error): void {
    try {
      this.handleCommitsExtractionFailure(publication, reason)
    } catch (error) {
      throw new Error('Unable to reject the commits extraction operation of repository #' + publication.event.payload.identifier + '.')
    }
  }

  /**
  *
  */
  private handleCommitsExtractionFailure(publication: ApplicationPublication<Application, RepositoryEvent.ExtractCommits>, reason: Error): void {
    const repositories: RepositoryCollection = publication.store.getState().repositories
    const repository: Entry<Repository> | undefined = repositories.getByReference(publication.event.payload)

    Utils.assertDefined(repository, 'The requested repository does not exists.')

    const state = repository.model.state

    Task.assert(state, 'The repository does not declare any occuring operation.')
    Task.assertOfType(state, RepositoryTask.EXTRACTING_COMMITS, 'The repository does not declare a commits extraction operation.')
    Task.assertRejectable(state, 'The commits extraction operation is not rejectable.')

    publication.store.dispatch(RepositoryEvent.update(repository, Task.reject(state, reason)))
  }

  /**
  *
  */
  private tryToExtractLabels(publication: ApplicationPublication<Application, RepositoryEvent.ExtractLabels>): void {
    try {
      this.extractLabels(publication)
    } catch (error) {
      throw new Error('Unable to extract all labels of the repository #' + publication.event.payload.identifier + '.')
    }
  }

  /**
  *
  */
  private extractLabels(publication: ApplicationPublication<Application, RepositoryEvent.ExtractLabels>): void {
    const repositories: RepositoryCollection = publication.store.getState().repositories
    const repository: Entry<Repository> | undefined = repositories.getByReference(publication.event.payload)

    Utils.assertDefined(repository, 'The requested repository does not exists.')

    const state = repository.model.state

    Task.assert(state, 'The repository does not declare any occuring operation.')
    Task.assertOfType(state, RepositoryTask.EXTRACTING_LABELS, 'The repository does not declare a labels extraction operation.')
    Task.assertRunnable(state, 'The labels extraction operation was already started.')

    publication.store.dispatch(RepositoryEvent.update(repository, Task.run(state)))

    GitRepositories.get(repository.identifier).readTags()
      .then(this.tryToHandleLabelsExtractionSuccess.bind(this, publication))
      .catch(this.tryToHandleLabelsExtractionFailure.bind(this, publication))
  }

  /**
  *
  */
  private tryToHandleLabelsExtractionSuccess(publication: ApplicationPublication<Application, RepositoryEvent.ExtractCommits>, labels: any[]): void {
    try {
      this.handleLabelsExtractionSuccess(publication, labels)
    } catch (error) {
      throw new Error('Unable to resolve the labels extraction operation of repository #' + publication.event.payload.identifier + '.')
    }
  }

  /**
  *
  */
  private handleLabelsExtractionSuccess(publication: ApplicationPublication<Application, RepositoryEvent.ExtractCommits>, labels: any[]): void {
    const repositories: RepositoryCollection = publication.store.getState().repositories
    const repository: Entry<Repository> | undefined = repositories.getByReference(publication.event.payload)

    Utils.assertDefined(repository, 'The requested repository does not exists.')

    const state = repository.model.state

    Task.assert(state, 'The repository does not declare any occuring operation.')
    Task.assertOfType(state, RepositoryTask.EXTRACTING_LABELS, 'The repository does not declare a labels extraction operation.')
    Task.assertResolvable(state, 'The labels extraction operation is not resolvable.')

    if (Task.isCancelable(state)) {
      for (const label of labels) {
        const commit: Entry<Commit> = publication.store.getState().commits.getByGitIdentifier(label[1].oid)

        publication.store.dispatch(TagEvent.extracted(
          Tag.create({
            commit: Reference.fromEntry(commit),
            repository: publication.event.payload,
            identifier: label[1].oid,
            tag: label[0],
            timestamp: label[1].commit.author.timestamp
          })
        ))
      }
    }

    publication.store.dispatch(RepositoryEvent.update(repository, Task.resolve(state, undefined)))
  }

  /**
  *
  */
  private tryToHandleLabelsExtractionFailure(publication: ApplicationPublication<Application, RepositoryEvent.ExtractCommits>, reason: Error): void {
    try {
      this.handleLabelsExtractionFailure(publication, reason)
    } catch (error) {
      throw new Error('Unable to reject the labels extraction operation of repository #' + publication.event.payload.identifier + '.')
    }
  }

  /**
  *
  */
  private handleLabelsExtractionFailure(publication: ApplicationPublication<Application, RepositoryEvent.ExtractCommits>, reason: Error): void {
    const repositories: RepositoryCollection = publication.store.getState().repositories
    const repository: Entry<Repository> | undefined = repositories.getByReference(publication.event.payload)

    Utils.assertDefined(repository, 'The requested repository does not exists.')

    const state = repository.model.state

    Task.assert(state, 'The repository does not declare any occuring operation.')
    Task.assertOfType(state, RepositoryTask.EXTRACTING_LABELS, 'The repository does not declare a labels extraction operation.')
    Task.assertRejectable(state, 'The labels extraction operation is not rejectable.')

    publication.store.dispatch(RepositoryEvent.update(repository, Task.reject(state, reason)))
  }
}
