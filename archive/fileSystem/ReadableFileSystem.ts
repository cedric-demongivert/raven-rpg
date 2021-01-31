// import { Dirent } from './Dirent'
// import { BigIntOptions } from './BigIntOptions'
// import { StatOptions } from './StatOptions'
import { Stats } from './Stats'
// import { BigIntStats } from './BigIntStats'

export interface ReadableFileSystem {
  /**
  * @see fs.readFile
  */
  readFile(
    path: string,
    options: { encoding?: null, flag?: string; } | undefined | null
  ): Promise<Buffer>

  /**
  * @see fs.readFile
  */
  readFile(
    path: string,
    options: { encoding: BufferEncoding, flag?: string; } | string
  ): Promise<string>

  /**
  * @see fs.readFile
  */
  readFile(path: string): Promise<string>

  /**
  * @see fs.readFile
  */
  readFile(
    path: string,
    options: { encoding?: BufferEncoding | null, flag?: string } | string | undefined | null
  ): Promise<string | Buffer>

  /**
  * @see fs.readdir
  */
  // readdir(
  //   path: string,
  //   options: { encoding: BufferEncoding | null, withFileTypes?: false } | BufferEncoding | undefined | null
  // ): Promise<string[]>

  /**
  * @see fs.readdir
  */
  // readdir(
  //   path: string,
  //   options: { encoding: "buffer", withFileTypes?: false } | "buffer"
  // ): Promise<Buffer[]>

  /**
  * @see fs.readdir
  */
  // readdir(
  //   path: string,
  //   options: { encoding?: BufferEncoding | null, withFileTypes?: false } | BufferEncoding | undefined | null
  // ): Promise<string[] | Buffer[]>

  /**
  * @see fs.readdir
  */
  readdir(path: string): Promise<string[]>

  /**
  * @see fs.readdir
  */
  // readdir(
  //   path: string,
  //   options: { encoding?: BufferEncoding | null, withFileTypes: true }
  // ): Promise<Dirent[]>

  /**
  * @see fs.stat
  */
  // stat(path: string, options: BigIntOptions): Promise<BigIntStats>

  /**
  * @see fs.stat
  */
  // stat(path: string, options: StatOptions): Promise<Stats | BigIntStats>

  /**
  * @see fs.stat
  */
  stat(path: string): Promise<Stats>

  /**
  * @see fs.lstat
  */
  lstat(path: string): Promise<Stats>

  /**
  * @see fs.readlink
  */
  // readlink(path: string, options?: { encoding?: BufferEncoding | null } | BufferEncoding | null): Promise<string>

  /**
  * @see fs.readlink
  */
  // readlink(path: string, options: 'buffer' | { encoding: 'buffer' }): Promise<Buffer>

  /**
  * @see fs.readlink
  */
  // readlink(path: string, options?: { encoding?: BufferEncoding | null } | string | null): Promise<string | Buffer>

  /**
  * @see fs.readlink
  */
  readlink(path: string): Promise<string>
}

export namespace ReadableFileSystem {

}
