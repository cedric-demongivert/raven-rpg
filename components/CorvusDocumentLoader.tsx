import React from 'react'
import { GitRepository } from '../typescript/git'

import { CorvusDocument } from '../typescript/model'

import { CorvusRepositoryLoader } from './CorvusRepositoryLoader'
import { CorvusCommitResolver } from './CorvusCommitResolver'
import { CorvusDocumentParser } from './CorvusDocumentParser'

function renderDocumentParser(properties: renderDocumentParser.Properties): React.ReactElement {
  return <properties.payload.payload.payload.renderer value={properties.value} />
}

/**
 * 
 */
namespace renderDocumentParser {
  /**
   * 
   */
  export type Properties = { 
    value: CorvusDocument, 
    payload: renderCommitResolver.Properties
  }
}

function renderCommitResolver(properties: renderCommitResolver.Properties): React.ReactElement {
  return (
    <CorvusDocumentParser 
      repository={properties.payload.value} 
      commit={properties.value}
      renderer={renderDocumentParser}
      payload={properties}
    />
  )
}

/**
 * 
 */
namespace renderCommitResolver {
  /**
   * 
   */
  export type Properties = { 
    value: string, 
    payload: renderCommitLoader.Properties 
  }
}

function renderCommitLoader(properties: renderCommitLoader.Properties): React.ReactElement {
  return (
    <CorvusCommitResolver 
      repository={properties.value} 
      value={properties.payload.target == null ? 'latest' : properties.payload.target}
      renderer={renderCommitResolver}
      payload={properties}
    />
  )
}

/**
 * 
 */
namespace renderCommitLoader {
  /**
   * 
   */
  export type Properties = { 
    value: GitRepository, 
    payload: CorvusDocumentLoader.Properties 
  }
}

/**
 * 
 */
export function CorvusDocumentLoader(properties: CorvusDocumentLoader.Properties): React.ReactElement {
  return <CorvusRepositoryLoader origin={properties.origin} name={properties.name} payload={properties} renderer={renderCommitLoader} />
}

/**
 * 
 */
export namespace CorvusDocumentLoader {
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
    target?: string,

    /**
     * 
     */
    renderer: React.JSXElementConstructor<{ value: CorvusDocument }>
  }
}