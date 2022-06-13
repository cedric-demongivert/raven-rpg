import { ReadCommitResult } from 'isomorphic-git'
import React from 'react'

import { GitRepository } from '../typescript/git'
import { parse } from '../typescript/parse'
import { CorvusDocument, CorvusDocumentBuilder } from '../typescript/model'

import { CorvusReader } from './CorvusReader'
import { DocumentPageState } from './DocumentPageState'

import { Loading } from './Loading'

/**
 * 
 */
export class DocumentPage extends React.Component<DocumentPage.Properties, DocumentPage.State> {
  /**
   * 
   */
  static defaultProps: Partial<DocumentPage.Properties> = {
    /**
     * 
     */
    commit: 'latest'
  }

  /**
   * 
   */
  public constructor(properties: DocumentPage.Properties) {
    super(properties)

    this.state = {
      state: DocumentPageState.DEFAULT,
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
    this.setState({ state: DocumentPageState.LOADING_LATEST_COMMIT })
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
    this.setState({ state: DocumentPageState.SUCCESS, document: result.build() })
  }

  /**
   * 
   */
  public parseCommit(): void {
    this.setState({ state: DocumentPageState.PARSING_COMMIT })
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
      case DocumentPageState.CLONING:
        return this.renderCloningRepository()
      case DocumentPageState.LOADING_LATEST_COMMIT:
        return this.renderLoadingLatestCommit()
      case DocumentPageState.PARSING_COMMIT:
        return this.renderParsingCommit()
      case DocumentPageState.SUCCESS:
        return this.renderDocument()
      default:
        throw new Error(
          `Unable to render document page in state ${DocumentPageState.toDebugString(this.state.state)} ` +
          'because no rendering function was defined for that.'
        )
    }
  }

  /**
   * 
   */
  public renderDocument(): React.ReactElement {
    return <CorvusReader value={this.state.document} />
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
export namespace DocumentPage {
  /**
   * 
   */
  export type State = {
    /**
     * 
     */
    state: DocumentPageState,

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
    commit?: string
  }
}