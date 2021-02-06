import React from 'react'
import { ReactElement } from 'react'

import { Application } from '../../typescript/application/Application'
import { Entry } from '../../typescript/data/Entry'

import { Repository } from '../../typescript/repository/Repository'
import { RepositoryState } from '../../typescript/repository/RepositoryState'

import { Commit } from '../../typescript/commit/Commit'
import { CommitState } from '../../typescript/commit/CommitState'

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

  switch (repository.model.state) {
    case RepositoryState.HOLLOW:
      return <Loading>Initialization of the application repository</Loading>
    case RepositoryState.CLONING_REQUESTED:
      return <Loading>Cloning of {repository.model.origin} requested</Loading>
    case RepositoryState.CLONING:
      return <Loading>Cloning of {repository.model.origin} requested</Loading>
    case RepositoryState.CLONING_FAILURE:
      throw new Error('Error rendering component not implemented yet.')
    case RepositoryState.CLONED:
      return <Loading>{repository.model.origin} successfully cloned</Loading>
    case RepositoryState.COMMITS_EXTRACTION_REQUESTED:
      return <Loading>Extraction of the list of commits of {repository.model.origin} requested</Loading>
    case RepositoryState.EXTRACTING_COMMITS:
      return <Loading>Extraction of the list of commits of {repository.model.origin}</Loading>
    case RepositoryState.COMMITS_EXTRACTION_FAILURE:
      throw new Error('Error rendering component not implemented yet.')
    case RepositoryState.COMMITS_EXTRACTED:
      return <Loading>Commits of {repository.model.origin} successfully extracted</Loading>
    case RepositoryState.LABELS_EXTRACTION_REQUESTED:
      return <Loading>Extraction of the list of labels of {repository.model.origin} requested</Loading>
    case RepositoryState.EXTRACTING_LABELS:
      return <Loading>Extraction of the list of labels of {repository.model.origin}</Loading>
    case RepositoryState.LABELS_EXTRACTION_FAILURE:
      throw new Error('Error rendering component not implemented yet.')
    case RepositoryState.LABELS_EXTRACTED:
      return <Loading>Labels of {repository.model.origin} successfully extracted</Loading>
    case RepositoryState.READY:
      return renderLoadingOfBooks(properties, repository)
    default:
      throw new Error(
        'Unable to render repository in state ' +
        RepositoryState.toDebugString(repository.model.state) + ' because no ' +
        'procedure was defined for that.'
      )
  }
}

function renderLoadingOfBooks (properties: RepositoryPageLoading.Properties, repository: Entry<Repository>): ReactElement {
  const commit: Entry<Commit> | undefined = properties.application.commits.getLatestOfRepository(repository)

  if (commit == undefined) {
    throw new Error('Unable to display the absence of the selected commit as no procedure was defined for that.')
  }

  switch (commit.model.state) {
    case CommitState.HOLLOW:
      return <Loading>Initialization of commit {commit.model.identifier}</Loading>
    case CommitState.BOOKS_EXTRACTION_REQUESTED:
      return <Loading>Extraction of the list of books available in commit {commit.model.identifier} requested</Loading>
    case CommitState.EXTRACTING_BOOKS:
      return <Loading>Extraction of the list of books available in commit {commit.model.identifier}</Loading>
    case CommitState.BOOKS_EXTRACTED:
      return <Loading>The list of books available in commit {commit.model.identifier} was successfully extracted</Loading>
    case CommitState.BOOKS_EXTRACTION_FAILURE:
      throw new Error('Error rendering component not implemented yet.')
    case CommitState.READY:
      return properties.children()
    default:
      throw new Error(
        'Unable to render commit in state ' +
        CommitState.toDebugString(commit.model.state) + ' because no ' +
        'procedure was defined for that.'
      )
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
