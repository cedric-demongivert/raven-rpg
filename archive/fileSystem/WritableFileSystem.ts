import { Mode } from './Mode'

export interface WritableFileSystem {
  /**
  * @see fs.writeFile
  */
  writeFile(
    path: string,
    data: string | NodeJS.ArrayBufferView,
    options?: { encoding?: BufferEncoding | null, mode?: Mode, flag?: string } | string | null
  ): Promise<void>

  /**
  * @see fs.unlink
  */
  unlink(path: string): Promise<void>

  /**
  * @see fs.mkdir
  */
  // mkdir(
  // path: string,
  // options: { mode?: Mode, recursive: true }
  // ): Promise<string>

  /**
  * @see fs.mkdir
  */
  // mkdir(
  // path: string,
  // options?: Mode | ({ mode?: Mode, recursive?: false }) | null
  // ): Promise<void>

  /**
  * @see fs.mkdir
  */
  // mkdir(
  // path: string,
  // options?: Mode | { mode?: Mode, recursive?: boolean } | null
  // ): Promise<string | undefined>

  /**
  * @see fs.mkdir
  */
  mkdir(path: string, mode?: Mode): Promise<undefined>

  /**
  * @see fs.rmdir
  */
  // rmdir(
  //   path: string,
  //   options?: { maxRetries?: number, recursive?: boolean, retryDelay?: number }
  // ): Promise<void>

  /**
  * @see fs.rmdir
  */
  rmdir(path: string): Promise<void>

  /**
  * @see fs.symlink
  */
  symlink(
    target: string,
    path: string,
    type?: string | null
  ): Promise<void>

  /**
  * @see fs.chmod
  */
  chmod(path: string, mode: Mode): Promise<void>
}

export namespace WritableFileSystem {

}
