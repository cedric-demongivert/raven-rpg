import React from 'react'

import { GitRepository } from '../typescript/git'
import { CorvusDocument, CorvusDocumentBuilder } from '../typescript/model'
import { parse } from '../typescript/parse'

import { CorvusError } from './CorvusError'
import { CorvusLoading } from './CorvusLoading'
import { CorvusLoadingState } from './CorvusLoadingState'


/**
 * 
 */
export class CorvusDocumentParser<Payload> extends React.Component<CorvusDocumentParser.Properties<Payload>, CorvusDocumentParser.State> {
  /**
   * 
   */
  public constructor(properties: CorvusDocumentParser.Properties<Payload>) {
    super(properties)

    this.state = {
      state: CorvusLoadingState.DEFAULT,
      error: null,
      document: null
    }

    this.handleSuccess = this.handleSuccess.bind(this)
    this.handleFailure = this.handleFailure.bind(this)

    try {
      parse(properties.repository, properties.commit).then(this.handleSuccess, this.handleFailure)
    } catch (error) {
      this.handleFailure(error)
    }
  }

  /**
   * 
   */
  public handleSuccess(document: CorvusDocumentBuilder): void {
    this.setState({
      state: CorvusLoadingState.SUCCESS,
      error: null,
      document: document.build()
    })
  }

  /**
   * 
   */
  public handleFailure(error: Error): void {
    this.setState({
      state: CorvusLoadingState.FAILURE,
      error,
      document: null
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
    return <this.props.renderer value={this.state.document} payload={this.props.payload} />
  }

  /**
   * 
   */
  public renderLoading(): React.ReactElement {
    return (
      <div className='layout layout-centered'>
        <CorvusLoading>
          Parsing commit {this.props.commit}
        </CorvusLoading>
      </div>
    )
  }

  /**
   * 
   */
  public renderFailure(): React.ReactElement {
    return (
      <div className='layout layout-centered'>
        <CorvusError 
          value={this.state.error} 
          message={'Une erreur est survenue lors de la traduction du commit "' + this.props.commit + '".'} 
        />
      </div>
    )
  }
}

/**
 * 
 */
export namespace CorvusDocumentParser {
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
    document: CorvusDocument | null,

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
    commit: string,

    /**
     * 
     */
    renderer: React.JSXElementConstructor<{ value: CorvusDocument, payload: Payload }>,

    /**
     * 
     */
    payload: Payload
  }
}