import { ReadCommitResult } from 'isomorphic-git'
import React from 'react'

import { GitRepository } from '../typescript/git'

import { CorvusError } from './CorvusError'
import { CorvusLoading } from './CorvusLoading'
import { CorvusLoadingState } from './CorvusLoadingState'

/**
 * 
 */
const IDENTIFIER_REGEXP = /^([a-f0-9])+$/

/**
 * 
 */
export class CorvusCommitResolver<Payload> extends React.Component<CorvusCommitResolver.Properties<Payload>, CorvusCommitResolver.State> {
  /**
   * 
   */
  public constructor(properties: CorvusCommitResolver.Properties<Payload>) {
    super(properties)

    this.state = {
      state: CorvusLoadingState.DEFAULT,
      error: null,
      commit: null
    }

    this.searchForTag = this.searchForTag.bind(this)
    this.searchForCommit = this.searchForCommit.bind(this)
    this.searchForLatestTag = this.searchForLatestTag.bind(this)
    this.searchForLatestCommit = this.searchForLatestCommit.bind(this)
    this.handleFailure = this.handleFailure.bind(this)

    if (properties.value === 'latest') {
      properties.repository.readTags().then(this.searchForLatestTag, this.handleFailure)
    } else if (properties.value === 'canari') {
      properties.repository.readCommits().then(this.searchForLatestCommit, this.handleFailure)
    } else {
      properties.repository.readTags().then(this.searchForTag, this.handleFailure)
    }
  }

  /**
   * 
   */
  public searchForLatestTag(tags: Array<[string, ReadCommitResult]>): void {
    if (tags.length > 0) {
      return this.setState({
        state: CorvusLoadingState.SUCCESS,
        commit: tags[tags.length - 1][1].oid,
        error: null
      })
    }

    this.props.repository.readCommits().then(this.searchForLatestCommit, this.handleFailure)
  }

  /**
   * 
   */
  public searchForTag(tags: Array<[string, ReadCommitResult]>): void {
    for (const [key, commit] of tags) {
      if (key === this.props.value) {
        return this.setState({
          state: CorvusLoadingState.SUCCESS,
          commit: commit.oid,
          error: null
        })
      }
    }

    this.props.repository.readCommits().then(this.searchForCommit, this.handleFailure)
  }

  /**
   * 
   */
  public searchForLatestCommit(commits: Array<ReadCommitResult>): void {
    if (commits.length > 0) {
      return this.setState({
        state: CorvusLoadingState.SUCCESS,
        commit: commits[0].oid,
        error: null
      })
    }

    this.setState({
      state: CorvusLoadingState.FAILURE,
      commit: null,
      error: new Error('Empty repository.')
    })
  }

  /**
   * 
   */
  public searchForCommit(commits: Array<ReadCommitResult>): void {
    for (const commit of commits) {
      if (commit.oid === this.props.value) {
        return this.setState({
          state: CorvusLoadingState.SUCCESS,
          commit: commit.oid,
          error: null
        })
      }
    }


    this.setState({
      state: CorvusLoadingState.FAILURE,
      commit: null,
      error: new Error('No commit nor tag that match "' + this.props.value + '".')
    })
  }

  /**
   * 
   */
  public handleFailure(error: Error): void {
    this.setState({
      state: CorvusLoadingState.FAILURE,
      commit: null,
      error
    })
  }

  /**
   * 
   */
  public render(): React.ReactElement {
    switch (this.state.state) {
      case CorvusLoadingState.LOADING:
        return this.renderLoading()
      case CorvusLoadingState.SUCCESS:
        return this.renderSuccess()
      case CorvusLoadingState.FAILURE:
        return this.renderFailure()
      default:
        throw new Error(
          `Unable to render component in state ${CorvusLoadingState.toDebugString(this.state.state)} ` +
          'because no rendering function was defined for that.'
        )
    }
  }

  /**
   * 
   */
  public renderSuccess(): React.ReactElement {
    return <this.props.renderer value={this.state.commit} payload={this.props.payload} />
  }

  /**
   * 
   */
  public renderLoading(): React.ReactElement {
    if (this.props.value === 'latest') {
      return (
        <div className='layout layout-centered'>
          <CorvusLoading>Searching for latest tag</CorvusLoading>
        </div>
      )
    } else if (this.props.value === 'canari') {
      return (
        <div className='layout layout-centered'>
          <CorvusLoading>Searching for latest commit</CorvusLoading>
        </div>
      )
    } else {
      return (
        <div className='layout layout-centered'>
          <CorvusLoading>Searching for latest tag or commit "{this.props.value}"</CorvusLoading>
        </div>
      )
    }
  }

  /**
   * 
   */
  public renderFailure(): React.ReactElement {
    return (
      <div className='layout layout-centered'>
        <CorvusError 
          value={this.state.error} 
          message={'Une erreur est survenue lors de la résolution du commit "' + this.props.value + '".'} 
        />
      </div>
    )
  }
}

/**
 * 
 */
export namespace CorvusCommitResolver {
  /**
   * 
   */
  export type State = {
    /**
     * 
     */
    state: CorvusLoadingState,

    /**
     * 
     */
    commit: string,

    /**
     * 
     */
    error: Error | null
  }


  /**
   * 
   */
  export type Properties<Payload> = {
    /**
     * 
     */
    repository: GitRepository,

    /**
     * 
     */
    value: string,

    /**
     * 
     */
    renderer: React.JSXElementConstructor<{ value: string, payload: Payload }>,

    /**
     * 
     */
    payload: Payload
  }
}