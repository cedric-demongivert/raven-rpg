import { ApplicationService } from '../application/service/ApplicationService'
import { ApplicationPublication } from '../application/ApplicationPublication'
import { ApplicationStore } from '../application/ApplicationStore'

import { GitRepositories } from '../git/GitRepositories'
import { assertDefined } from '../utils/assertDefined'
import { AbstractError } from '../utils/AbstractError'

import { Task } from '../state/task/Task'

import { Entry } from '../data/Entry'
import { Reference } from '../data/Reference'

import { Application } from '../state/application/Application'
import { RepositoryCollection } from '../state/application/RepositoryCollection'
import { Repository } from '../state/git/Repository'
import { RepositoryTask } from '../state/git/RepositoryTask'
import { Commit } from '../state/git/Commit'

import { RepositoryAction } from '../redux/git/RepositoryAction'
import { RepositoryEvent } from '../redux/git/RepositoryEvent'
import { ReadCommitResult } from 'isomorphic-git'
import { Tag } from '../state/git/Tag'
import { ApplicationTriggerMiddleware } from '../application'
import { CommitLoadingTaskTrigger } from '../trigger/git/CommitLoadingTaskTrigger'
import { RepositoryLoadingTaskTrigger } from '../trigger/git/RepositoryLoadingTaskTrigger'
import { RepositorySemver } from '../state/semver/RepositorySemver'
import { Semver } from '../state/semver/Semver'
import { CommitEvent } from '../redux/git/CommitEvent'
import { CommitTask } from '../state/git/CommitTask'
import { CommitCollection } from '../state/application/CommitCollection'
import { readRepository } from '../unidoc/readRepository'
import { CommitAction } from '../redux/git/CommitAction'
import { Resource } from '../state/resource/Resource'
import { MimeType } from '../state/resource/MimeType'
import { ResourceAddress } from '../state/resource/ResourceAddress'
import { CorvusDocument } from '../corvus/CorvusDocument'
import { CorvusCommit } from '../corvus/CorvusCommit'
import { CorvusImage } from '../corvus/CorvusImage'
import { CorvusDocumentBuilder } from '../corvus/CorvusDocumentBuilder'

export class GitService implements ApplicationService<Application>
{
  /**
   * 
   */
  private _store: ApplicationStore<Application> | undefined

  /**
   * 
   */
  private _triggers: ApplicationTriggerMiddleware<Application>

  /**
   * 
   */
  public constructor(triggers: ApplicationTriggerMiddleware<Application>) {
    this._store = undefined
    this._triggers = triggers
  }

  /**
  * @see ApplicationService.afterSubscription
  */
  public afterSubscription(store: ApplicationStore<Application>): void {
    this._store = store
  }

  /**
  * @see ApplicationService.beforeUnsubscription
  */
  public beforeUnsubscription(store: ApplicationStore<Application>): void {
    this._store = undefined
  }

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
        this.afterRepositorySubscription(publication)
        return
      case RepositoryAction.LOAD:
        this.afterLoadRepository(publication)
        return
      case CommitAction.LOAD:
        this.afterLoadCommit(publication)
        return
      default:
        return
    }
  }

  /**
   * 
   */
  public subscribe(origin: string): Entry<Repository> {
    try {
      const store: ApplicationStore<Application> | undefined = this._store

      assertDefined(store, 'This service does not have a parent store.')

      store.dispatch(RepositoryEvent.subscribe(origin))

      return store.getState().repositories.byOrigin.get(origin)
    } catch (error) {
      throw new AbstractError('Unable to subscribe to the repository "' + origin + '".', error)
    }
  }

  /**
   * 
   */
  public loadRepository(reference: Reference<Repository>): Promise<void> {
    try {
      const store: ApplicationStore<Application> | undefined = this._store

      assertDefined(store, 'This service does not have a parent store.')

      const repository: Entry<Repository> | undefined = store.getState().repositories.all.get(Reference.identifier(reference))

      assertDefined(repository, 'The requested repository does not exists.')

      store.dispatch(RepositoryEvent.load(repository))

      return this._triggers.trigger(new RepositoryLoadingTaskTrigger(repository))
    } catch (error) {
      throw new AbstractError('Unable to load the repository #' + Reference.identifier(reference) + '.', error)
    }
  }

  /**
   * 
   */
  public loadCommit(reference: Reference<Commit>): Promise<void> {
    try {
      const store: ApplicationStore<Application> | undefined = this._store

      assertDefined(store, 'This service does not have a parent store.')

      const commit: Entry<Commit> | undefined = store.getState().commits.all.get(Reference.identifier(reference))

      assertDefined(commit, 'The requested commit does not exists.')

      store.dispatch(CommitEvent.load(commit))

      return this._triggers.trigger(new CommitLoadingTaskTrigger(commit))
    } catch (error) {
      throw new AbstractError('Unable to load the repository #' + Reference.identifier(reference) + '.', error)
    }
  }

  /**
  *
  */
  private afterRepositorySubscription(publication: ApplicationPublication<Application, RepositoryEvent.Subscribe>): void {
    const identifier: number = publication.store.getState().repositories.byOrigin.get(publication.event.payload).identifier
    GitRepositories.create(identifier, publication.event.payload)
  }

  /**
  *
  */
  private async afterLoadRepository(publication: ApplicationPublication<Application, RepositoryEvent.Load>): Promise<void> {
    try {
      await this.tryToLoadRepository(publication)
      publication.store.dispatch(RepositoryEvent.loading.success(publication.event.payload))
    } catch (error) {
      publication.store.dispatch(RepositoryEvent.loading.failure(publication.event.payload, error))
    }
  }

  /**
  *
  */
  private async tryToLoadRepository(publication: ApplicationPublication<Application, RepositoryEvent.Load>): Promise<void> {
    try {
      this.assertThatRepositoryCanBeLoaded(publication)

      publication.store.dispatch(RepositoryEvent.loading(publication.event.payload))

      await this.cloneRepository(publication)
      await this.extractCommits(publication)
      await this.extractLabels(publication)
      this.extractVersions(publication)
    } catch (error) {
      throw new AbstractError('Unable to load the repository #' + Reference.identifier(publication.event.payload) + '.', error)
    }
  }

  /**
   * 
   */
  private assertThatRepositoryCanBeLoaded(publication: ApplicationPublication<Application, RepositoryEvent.Load>): void {
    const repositories: RepositoryCollection = publication.store.getState().repositories
    const repository: Entry<Repository> | undefined = repositories.all.get(publication.event.payload)

    assertDefined(repository, 'The repository to load does not exists. Did you subscribed to it ?')

    const state = repository.model.state

    Task.assert(state, 'The repository does not declare any pending operation.')
    Task.assertOfType(state, RepositoryTask.LOADING, 'The repository does not request a loading operation.')
    Task.assertRunnable(state, 'The cloning operation was already started.')
  }

  /**
  *
  */
  private cloneRepository(publication: ApplicationPublication<Application, RepositoryEvent.Load>): Promise<void> {
    const repositories: RepositoryCollection = publication.store.getState().repositories
    const repository: Entry<Repository> | undefined = repositories.all.get(publication.event.payload)

    assertDefined(repository, 'The repository to clone does not exists.')

    return GitRepositories.get(repository.identifier).clone()
  }

  /**
  *
  */
  private async extractCommits(publication: ApplicationPublication<Application, RepositoryEvent.Load>): Promise<void> {
    const repositories: RepositoryCollection = publication.store.getState().repositories
    const repository: Entry<Repository> | undefined = repositories.all.get(publication.event.payload)

    assertDefined(repository, 'The repository to extract does not exists.')

    const commits: ReadCommitResult[] = await GitRepositories.get(repository.identifier).readCommits()

    publication.store.dispatch(
      RepositoryEvent.commits(
        repository,
        commits.map(function toCommit(commit: ReadCommitResult): Commit {
          return Commit.create({
            identifier: commit.oid,
            repository: publication.event.payload,
            message: commit.commit.message,
            timestamp: commit.commit.author.timestamp
          })
        })
      )
    )
  }

  /**
  *
  */
  private async extractLabels(publication: ApplicationPublication<Application, RepositoryEvent.Load>): Promise<void> {
    const repositories: RepositoryCollection = publication.store.getState().repositories
    const repository: Entry<Repository> | undefined = repositories.all.get(publication.event.payload)

    assertDefined(repository, 'The requested repository does not exists.')

    const tags: Array<[string, ReadCommitResult]> = await GitRepositories.get(repository.identifier).readTags()

    publication.store.dispatch(RepositoryEvent.tags(
      repository,
      tags.map(function toTag([tag, commit]: [string, ReadCommitResult]): Tag {
        return Tag.create({
          commit: publication.store.getState().commits.byIdentifier.get(commit.oid),
          repository: publication.event.payload,
          identifier: commit.oid,
          tag,
          timestamp: commit.commit.author.timestamp
        })
      })
    ))
  }

  /**
  *
  */
  private extractVersions(publication: ApplicationPublication<Application, RepositoryEvent.Load>): void {
    const repositories: RepositoryCollection = publication.store.getState().repositories
    const repository: Entry<Repository> | undefined = repositories.all.get(publication.event.payload)

    assertDefined(repository, 'The requested repository does not exists.')

    const versions: RepositorySemver[] = []

    for (const tag of publication.store.getState().tags.byRepository.get(repository.identifier)) {
      const version: Semver | undefined = Semver.fromString(tag.model.tag)

      if (version) {
        versions.push(RepositorySemver.create({
          version,
          tag: tag.identifier,
          repository: repository.identifier
        }))
      }
    }

    publication.store.dispatch(RepositoryEvent.versions(
      repository,
      versions
    ))
  }

  /**
   *
   */
  private async afterLoadCommit(publication: ApplicationPublication<Application, CommitEvent.Load>): Promise<void> {
    try {
      await this.tryToLoadCommit(publication)
      publication.store.dispatch(CommitEvent.loading.success(publication.event.payload))
    } catch (error) {
      publication.store.dispatch(CommitEvent.loading.failure(publication.event.payload, error))
    }
  }

  /**
   * 
   */
  private async tryToLoadCommit(publication: ApplicationPublication<Application, CommitEvent.Load>): Promise<void> {
    try {
      this.assertThatCommitCanBeLoaded(publication)

      publication.store.dispatch(CommitEvent.loading(publication.event.payload))

      const content: CorvusDocumentBuilder = await this.extractCommitContent(publication)
      const document: CorvusDocument = content.build()

      publication.store.dispatch(CommitEvent.content(CorvusCommit.create({ commit: publication.event.payload, document })))

      await this.extractCommitResources(publication, document)
    } catch (error) {
      throw new AbstractError('Unable to extract the content of commit #' + publication.event.payload + '.', error)
    }
  }

  /**
   * 
   */
  private assertThatCommitCanBeLoaded(publication: ApplicationPublication<Application, CommitEvent.Load>): void {
    const commits: CommitCollection = publication.store.getState().commits
    const commit: Entry<Commit> | undefined = commits.all.get(publication.event.payload)

    assertDefined(commit, 'The commit to load does not exists. Did you loaded it\'s parent repository ?')

    const state = commit.model.state

    Task.assert(state, 'The commit does not declare any pending operation.')
    Task.assertOfType(state, CommitTask.LOADING, 'The commit does not request a loading operation.')
    Task.assertRunnable(state, 'The cloning operation was already started.')
  }

  /**
  *
  */
  private async extractCommitContent(publication: ApplicationPublication<Application, CommitEvent.Load>): Promise<CorvusDocumentBuilder> {
    const identifier: number = publication.event.payload
    const commit: Entry<Commit> | undefined = publication.store.getState().commits.all.get(identifier)

    assertDefined(commit, 'The given commit does not exists.')

    return await readRepository(commit)
  }

  /**
  *
  */
  private async extractCommitResources(publication: ApplicationPublication<Application, CommitEvent.Load>, content: CorvusDocument): Promise<void> {
    const identifier: number = publication.event.payload
    const commit: Entry<Commit> | undefined = publication.store.getState().commits.all.get(identifier)

    assertDefined(commit, 'The given commit does not exists.')

    const resources: Resource[] = []

    for (const element of content.elements()) {
      if (CorvusImage.is(element)) {
        const data: Buffer = await GitRepositories.get(
          Reference.identifier(commit.model.repository)
        ).readFile(commit.model.identifier, element.path)

        resources.push(Resource.create({
          address: ResourceAddress.create(commit.identifier, element.path),
          type: MimeType.fromRPGImageFormat(element.format),
          data
        }))
      }
    }

    publication.store.dispatch(CommitEvent.resources(commit, resources))
  }
}
