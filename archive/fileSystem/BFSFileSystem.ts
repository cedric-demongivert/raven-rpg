import { FSModule } from 'browserfs/dist/node/core/FS'

import { FileSystem } from './FileSystem'
// import { BigIntOptions } from './BigIntOptions'
// import { StatOptions } from './StatOptions'
// import { BigIntStats } from './BigIntStats'
import { Stats } from './Stats'
import { Mode } from './Mode'

export class BFSFileSystem implements FileSystem {
  /**
  *
  */
  private readonly fileSystem: FSModule

  /**
  *
  */
  public constructor(fileSystem: FSModule) {
    this.fileSystem = fileSystem
  }

  /**
  * @see ReadableFileSystem.readFile
  */
  public readFile(path: string, options: { encoding?: null, flag?: string }): Promise<Buffer>
  /**
  * @see ReadableFileSystem.readFile
  */
  public readFile(path: string, options: string | { encoding: BufferEncoding, flag?: string }): Promise<string>
  /**
  * @see ReadableFileSystem.readFile
  */
  public readFile(path: string): Promise<string>
  /**
  * @see ReadableFileSystem.readFile
  */
  public readFile(path: string, options: string | { encoding?: BufferEncoding, flag?: string }): Promise<string | Buffer>
  public readFile(path: any, options?: any): any {
    const fileSystem: FSModule = this.fileSystem

    if (options == null) {
      return new Promise(
        function executeReadFile(resolve, reject): void {
          fileSystem.readFile(
            path,
            function handleReadFileResult(error: Error | undefined, data: any) {
              if (error) {
                reject(error)
              } else {
                resolve(data)
              }
            }
          )
        }
      )
    } else {
      return new Promise(
        function executeReadFile(resolve, reject): void {
          fileSystem.readFile(
            path, options,
            function handleReadFileResult(error: Error | undefined, data: any) {
              if (error) {
                reject(error)
              } else {
                resolve(data)
              }
            }
          )
        }
      )
    }
  }

  /**
  * @see ReadableFileSystem.readdir
  */
  public readdir(path: string): Promise<string[]> {
    const fileSystem: FSModule = this.fileSystem

    return new Promise(
      function executeReaddir(resolve, reject): void {
        fileSystem.readdir(
          path,
          function handleReaddirResult(error: Error | undefined, data: string[]) {
            if (error) {
              reject(error)
            } else {
              resolve(data)
            }
          }
        )
      }
    )
  }

  /**
  * @see ReadableFileSystem.stat
  */
  public stat(path: string): Promise<Stats> {
    const fileSystem: FSModule = this.fileSystem

    return new Promise(
      function executeStat(resolve, reject): void {
        fileSystem.stat(
          path,
          function handleStatResult(error: Error | undefined, data: Stats) {
            if (error) {
              reject(error)
            } else {
              resolve(data)
            }
          }
        )
      }
    )
  }

  /**
  * @see ReadableFileSystem.lstat
  */
  public lstat(path: string): Promise<Stats> {
    const fileSystem: FSModule = this.fileSystem

    return new Promise(
      function executeLStat(resolve, reject): void {
        fileSystem.lstat(
          path,
          function handleLStatResult(error: Error | undefined, data: Stats) {
            if (error) {
              reject(error)
            } else {
              resolve(data)
            }
          }
        )
      }
    )
  }

  /**
  * @see ReadableFileSystem.readlink
  */
  public readlink(path: string): Promise<string> {
    const fileSystem: FSModule = this.fileSystem

    return new Promise(
      function executeReadlink(resolve, reject): void {
        fileSystem.readlink(
          path,
          function handleReadlinkResult(error: Error | undefined, data: string) {
            if (error) {
              reject(error)
            } else {
              resolve(data)
            }
          }
        )
      }
    )
  }

  /**
  * @see WritableFileSystem.writeFile
  */
  public writeFile(
    path: string,
    data: string | NodeJS.ArrayBufferView,
    options?: string | { encoding?: BufferEncoding, mode?: Mode, flag?: string }
  ): Promise<void> {
    const fileSystem: FSModule = this.fileSystem

    if (options == null) {
      return new Promise(
        function executeWriteFile(resolve, reject): void {
          fileSystem.writeFile(
            path, data,
            function handleWriteFileResult(error: Error | undefined) {
              if (error) {
                reject(error)
              } else {
                resolve()
              }
            }
          )
        }
      )
    } else {
      return new Promise(
        function executeWriteFile(resolve, reject): void {
          fileSystem.writeFile(
            path, data, options as any,
            function handleWriteFileResult(error: Error | undefined) {
              if (error) {
                reject(error)
              } else {
                resolve()
              }
            }
          )
        }
      )
    }
  }

  /**
  * @see WritableFileSystem.unlink
  */
  public unlink(path: string): Promise<void> {
    const fileSystem: FSModule = this.fileSystem

    return new Promise(
      function executeUnlink(resolve, reject): void {
        fileSystem.unlink(
          path,
          function handleUnlinkResult(error: Error | undefined) {
            if (error) {
              reject(error)
            } else {
              resolve()
            }
          }
        )
      }
    )
  }

  /**
  * @see WritableFileSystem.mkdir
  */
  public mkdir(path: string, mode?: Mode): Promise<undefined> {
    const fileSystem: FSModule = this.fileSystem

    if (mode == null) {
      return new Promise(
        function executeMkdir(resolve, reject): void {
          fileSystem.mkdir(
            path,
            function handleMkdirResult(error: Error | undefined) {
              if (error) {
                reject(error)
              } else {
                resolve()
              }
            }
          )
        }
      )
    } else {
      return new Promise(
        function executeMkdir(resolve, reject): void {
          fileSystem.mkdir(
            path, mode,
            function handleMkdirResult(error: Error | undefined) {
              if (error) {
                reject(error)
              } else {
                resolve()
              }
            }
          )
        }
      )
    }
  }

  /**
  * @see WritableFileSystem.rmdir
  */
  public rmdir(path: string): Promise<void> {
    const fileSystem: FSModule = this.fileSystem

    return new Promise(
      function executeRmdir(resolve, reject): void {
        fileSystem.rmdir(
          path,
          function handleRmdirResult(error: Error | undefined) {
            if (error) {
              reject(error)
            } else {
              resolve()
            }
          }
        )
      }
    )
  }

  /**
  * @see WritableFileSystem.symlink
  */
  public symlink(target: string, path: string, type?: string): Promise<void> {
    const fileSystem: FSModule = this.fileSystem

    if (type == null) {
      return new Promise(
        function executeSymlink(resolve, reject): void {
          fileSystem.symlink(
            target, path,
            function handleSymlinkResult(error: Error | undefined) {
              if (error) {
                reject(error)
              } else {
                resolve()
              }
            }
          )
        }
      )
    } else {
      return new Promise(
        function executeSymlink(resolve, reject): void {
          fileSystem.symlink(
            target, path, type,
            function handleSymlinkResult(error: Error | undefined) {
              if (error) {
                reject(error)
              } else {
                resolve()
              }
            }
          )
        }
      )
    }
  }

  /**
  * @see WritableFileSystem.chmod
  */
  public chmod(path: string, mode: Mode): Promise<void> {
    const fileSystem: FSModule = this.fileSystem

    return new Promise(
      function executeChmod(resolve, reject): void {
        fileSystem.chmod(
          path, mode,
          function handleChmodResult(error: Error | undefined) {
            if (error) {
              reject(error)
            } else {
              resolve()
            }
          }
        )
      }
    )
  }
}

export namespace BFSFileSystem {

}
