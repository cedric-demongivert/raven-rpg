import React from 'react'
import { ReactElement } from 'react'

import { Application } from '../../typescript/application/Application'
import { Entry } from '../../typescript/data/Entry'
import { Task } from '../../typescript/task/Task'
import { TaskState } from '../../typescript/task/TaskState'

import { Repository } from '../../typescript/repository/Repository'
import { RepositoryState } from '../../typescript/repository/RepositoryState'
import { RepositoryTask } from '../../typescript/repository/RepositoryTask'

import { Commit } from '../../typescript/commit/Commit'
import { CommitState } from '../../typescript/commit/CommitState'
import { CommitTask } from '../../typescript/commit/CommitTask'

import { Loading } from '../Loading'

/**
*
*/
export function RepositoryPageLoading (properties: RepositoryPageLoading.Properties): ReactElement {
  const repository: Entry<Repository> | undefined = properties.application.repositories.getByIdentifier(properties.repository)

  if (repository == undefined) {
    return (
      <Loading>Initialization of the application repository</Loading>
    )
  }

  const state = repository.model.state

  if (Task.is(state)) {
    switch (state.type) {
      case RepositoryTask.CLONING:
        switch (state.state) {
          case TaskState.PENDING:
            return <Loading>Cloning of {repository.model.origin} requested</Loading>
          case TaskState.RUNNING:
            return <Loading>Cloning of {repository.model.origin} requested</Loading>
          case TaskState.RESOLVED:
            throw new Error('Error rendering component not implemented yet.')
          case TaskState.REJECTED:
            return <Loading>{repository.model.origin} successfully cloned</Loading>
          default:
            throw new Error(
              'Unable to render repository in state ' + TaskState.toDebugString(state.state) + ' because no ' +
              'procedure was defined for that.'
            )
        }
      case RepositoryTask.EXTRACTING_COMMITS:
        switch (state.state) {
          case TaskState.PENDING:
            return <Loading>Extraction of the list of commits of {repository.model.origin} requested</Loading>
          case TaskState.RUNNING:
            return <Loading>Extraction of the list of commits of {repository.model.origin}</Loading>
          case TaskState.RESOLVED:
            throw new Error('Error rendering component not implemented yet.')
          case TaskState.REJECTED:
            return <Loading>Commits of {repository.model.origin} successfully extracted</Loading>
          default:
            throw new Error(
              'Unable to render repository in state ' + TaskState.toDebugString(state.state) + ' because no ' +
              'procedure was defined for that.'
            )
        }
      case RepositoryTask.EXTRACTING_LABELS:
        switch (state.state) {
          case TaskState.PENDING:
            return <Loading>Extraction of the list of labels of {repository.model.origin} requested</Loading>
          case TaskState.RUNNING:
            return <Loading>Extraction of the list of labels of {repository.model.origin}</Loading>
          case TaskState.RESOLVED:
            throw new Error('Error rendering component not implemented yet.')
          case TaskState.REJECTED:
            return <Loading>Labels of {repository.model.origin} successfully extracted</Loading>
          default:
            throw new Error(
              'Unable to render repository in state ' + TaskState.toDebugString(state.state) + ' because no ' +
              'procedure was defined for that.'
            )
        }
      default:
        throw new Error(
          'Unable to render repository in state ' + RepositoryTask.toDebugString(state.type) + ' because no ' +
          'procedure was defined for that.'
        )
    }
  } else {
    switch (state) {
      case RepositoryState.HOLLOW:
        return <Loading>Initialization of the application repository</Loading>
      case RepositoryState.READY:
        return renderLoadingOfBooks(properties, repository)
      default:
        throw new Error(
          'Unable to render repository in state ' + RepositoryState.toDebugString(state) + ' because no ' +
          'procedure was defined for that.'
        )
    }
  }
}

function renderLoadingOfBooks (properties: RepositoryPageLoading.Properties, repository: Entry<Repository>): ReactElement {
  const commit: Entry<Commit> | undefined = properties.application.commits.getLatestOfRepository(repository)

  if (commit == undefined) {
    throw new Error('Unable to display the absence of the selected commit as no procedure was defined for that.')
  }

  const state = commit.model.state

  if (Task.is(state)) {
    switch (state.type) {
      case CommitTask.EXTRACTING_BOOKS:
        switch (state.state) {
          case TaskState.PENDING:
            return <Loading>Extraction of the list of books available in commit {commit.model.identifier} requested</Loading>
          case TaskState.RUNNING:
            return <Loading>Extraction of the list of books available in commit {commit.model.identifier}</Loading>
          case TaskState.RESOLVED:
            throw new Error('Error rendering component not implemented yet.')
          case TaskState.REJECTED:
            return <Loading>The list of books available in commit {commit.model.identifier} was successfully extracted</Loading>
          default:
            throw new Error(
              'Unable to render commit in state ' + TaskState.toDebugString(state.state) + ' because no ' +
              'procedure was defined for that.'
            )
        }
      default:
        throw new Error(
          'Unable to render commit in state ' + CommitTask.toDebugString(state.type) + ' because no ' +
          'procedure was defined for that.'
        )
    }
  } else {
    switch (state) {
      case RepositoryState.HOLLOW:
        return <Loading>Initialization of commit {commit.model.identifier}</Loading>
      case RepositoryState.READY:
        return renderLoadingOfBooks(properties, repository)
      default:
        throw new Error(
          'Unable to render commit in state ' + RepositoryState.toDebugString(state) + ' because no ' +
          'procedure was defined for that.'
        )
    }
  }
}

/**
*
*/
export namespace RepositoryPageLoading {
  /**
  *
  */
  export type Properties = {
    repository: number,
    application: Application,
    children: () => ReactElement
  }
}
