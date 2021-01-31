import * as BrowserFS from 'browserfs'

import { BFSFileSystem } from './BFSFileSystem'

/**
*
*/
export type InMemoryFileSystem = BFSFileSystem

/**
*
*/
export namespace InMemoryFileSystem {
  /**
  *
  */
  const CONTEXT: any = {}

  BrowserFS.install(CONTEXT)

  function handleFileSystemConfiguration(error?: Error): void {
    if (error) {
      throw error
    }
  }

  BrowserFS.configure(
    {
      fs: 'InMemory',
      options: undefined
    }, handleFileSystemConfiguration
  )

  /**
  *
  */
  const INSTANCE: InMemoryFileSystem = new BFSFileSystem(BrowserFS.BFSRequire('fs'))

  /**
  *
  */
  export function get(): InMemoryFileSystem {
    return INSTANCE
  }
}
