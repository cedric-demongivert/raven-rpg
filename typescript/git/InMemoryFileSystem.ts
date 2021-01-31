import * as BrowserFS from 'browserfs'
import { FSModule } from 'browserfs/dist/node/core/FS'

/**
*
*/
export type InMemoryFileSystem = FSModule

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
  const INSTANCE: FSModule = BrowserFS.BFSRequire('fs')

  /**
  *
  */
  export function get(): FSModule {
    return INSTANCE
  }
}
