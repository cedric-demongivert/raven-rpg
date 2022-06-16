import React from 'react'

import { GitRepository } from '../typescript/git'

import { CorvusError } from './CorvusError'
import { CorvusLoading } from './CorvusLoading'
import { CorvusLoadingState } from './CorvusLoadingState'

/**
 * 
 */
const SUCCESS_STATE: Pick<CorvusRepositoryLoader.State, 'error' | 'state'> = {
  error: null,
  state: CorvusLoadingState.SUCCESS
}

/**
 * 
 */
export class CorvusRepositoryLoader<Payload> extends React.Component<CorvusRepositoryLoader.Properties<Payload>, CorvusRepositoryLoader.State> {
  /**
   * 
   */
  public constructor(properties: CorvusRepositoryLoader.Properties<Payload>) {
    super(properties)

    this.state = {
      state: CorvusLoadingState.DEFAULT,
      error: null,
      repository: new GitRepository(properties.origin, properties.name)
    }

    this.handleSuccess = this.handleSuccess.bind(this)
    this.handleFailure = this.handleFailure.bind(this)

    this.state.repository.clone().then(this.handleSuccess, this.handleFailure)
  }

  /**
   * 
   */
  public handleSuccess(): void {
    this.setState(SUCCESS_STATE)
  }

  /**
   * 
   */
  public handleFailure(error: Error): void {
    this.setState({ error, state: CorvusLoadingState.FAILURE })
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
    return <this.props.renderer value={this.state.repository} payload={this.props.payload} />
  }

  /**
   * 
   */
  public renderLoading(): React.ReactElement {
    return (
      <div className='layout layout-centered'>
        <CorvusLoading>
          Cloning repository {this.state.repository.origin}
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
          message={'Une erreur est survenue lors du chargement du dépôt "' + this.props.origin + '" en tant que "' + this.props.name + '".'} 
        />
      </div>
    )
  }
}

/**
 * 
 */
export namespace CorvusRepositoryLoader {
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
    repository: GitRepository,

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
    origin: string,

    /**
     * 
     */
    name: string,

    /**
     * 
     */
    renderer: React.JSXElementConstructor<{ value: GitRepository, payload: Payload }>,

    /**
     * 
     */
    payload: Payload
  }
}