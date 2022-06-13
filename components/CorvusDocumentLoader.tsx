import { ReadCommitResult } from 'isomorphic-git'
import React from 'react'

import { GitRepository } from '../typescript/git'
import { parse } from '../typescript/parse'
import { CorvusDocument, CorvusDocumentBuilder } from '../typescript/model'

import { CorvusDocumentLoaderState } from './CorvusDocumentLoaderState'
import { Loading } from './Loading'

/**
 * 
 */
export class CorvusDocumentLoader extends React.Component<CorvusDocumentLoader.Properties, CorvusDocumentLoader.State> {
  /**
   * 
   */
  static defaultProps: Partial<CorvusDocumentLoader.Properties> = {
    /**
     * 
     */
    commit: 'latest'
  }

  /**
   * 
   */
  public constructor(properties: CorvusDocumentLoader.Properties) {
    super(properties)

    this.state = {
      state: CorvusDocumentLoaderState.DEFAULT,
      commit: null,
      document: null,
      repository: new GitRepository(properties.origin, properties.name)
    }

    this.handleRepositoryCloningSuccess = this.handleRepositoryCloningSuccess.bind(this)
    this.handleLoadingLatestCommitSuccess = this.handleLoadingLatestCommitSuccess.bind(this)
    this.handleFailure = this.handleFailure.bind(this)
    this.handleParseSuccess = this.handleParseSuccess.bind(this)
    this.parseCommit = this.parseCommit.bind(this)

    this.state.repository.clone().then(this.handleRepositoryCloningSuccess, this.handleFailure)
  }

  /**
   * 
   */
  public loadLatestCommit(): void {
    this.setState({ state: CorvusDocumentLoaderState.LOADING_LATEST_COMMIT })
    this.state.repository.readCommits().then(this.handleLoadingLatestCommitSuccess, this.handleFailure)
  }

  /**
   * 
   */
  public handleLoadingLatestCommitSuccess(commits: Array<ReadCommitResult>): void {
    this.setState({ commit: commits[0].oid }, this.parseCommit)
  }

  /**
   * 
   */
  public handleRepositoryCloningSuccess(): void {
    if (this.props.commit === 'latest') {
      this.loadLatestCommit()
      return
    }

    this.setState({ commit: this.props.commit }, this.parseCommit)
  }

  /**
   * 
   */
  public handleParseSuccess(result: CorvusDocumentBuilder): void {
    this.setState({ state: CorvusDocumentLoaderState.SUCCESS, document: result.build() })
  }

  /**
   * 
   */
  public parseCommit(): void {
    this.setState({ state: CorvusDocumentLoaderState.PARSING_COMMIT })
    parse(this.state.repository, this.state.commit).then(this.handleParseSuccess, this.handleFailure)
  }

  /**
   * 
   */
  public handleFailure(error: Error): void {
    console.error(error)
  }

  /**
   * 
   */
  public render(): React.ReactElement {
    switch (this.state.state) {
      case CorvusDocumentLoaderState.CLONING:
        return this.renderCloningRepository()
      case CorvusDocumentLoaderState.LOADING_LATEST_COMMIT:
        return this.renderLoadingLatestCommit()
      case CorvusDocumentLoaderState.PARSING_COMMIT:
        return this.renderParsingCommit()
      case CorvusDocumentLoaderState.SUCCESS:
        return this.renderDocument()
      default:
        throw new Error(
          `Unable to render document page in state ${CorvusDocumentLoaderState.toDebugString(this.state.state)} ` +
          'because no rendering function was defined for that.'
        )
    }
  }

  /**
   * 
   */
  public renderDocument(): React.ReactElement {
    return <this.props.renderer value={this.state.document} />
  }

  /**
   * 
   */
  public renderParsingCommit(): React.ReactElement {
    return (
      <Loading>
        Parsing commit {this.state.commit}
      </Loading>
    )
  }

  /**
   * 
   */
  public renderCloningRepository(): React.ReactElement {
    return (
      <Loading>
        Cloning repository {this.state.repository.origin}
      </Loading>
    )
  }

  /**
   * 
   */
  public renderLoadingLatestCommit(): React.ReactElement {
    return (
      <Loading>
        Loading latest available commit
      </Loading>
    )
  }
}

/**
 * 
 */
export namespace CorvusDocumentLoader {
  /**
   * 
   */
  export type State = {
    /**
     * 
     */
    state: CorvusDocumentLoaderState,

    /**
     * 
     */
    commit: string | null,

    /**
     * 
     */
    document: CorvusDocument | null,

    /**
     * 
     */
    repository: GitRepository
  }


  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    origin: string,

    /**
     * 
     */
    name: string,

    /**
     * 
     */
    commit?: string,

    /**
     * 
     */
    renderer: React.JSXElementConstructor<{ value: CorvusDocument }>
  }
}