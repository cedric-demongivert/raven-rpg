import { ReadableFileSystem } from './ReadableFileSystem'
import { Path } from './Path'
import { Stats } from './Stats'

/**
*
*/
export class ReadableDirectory implements ReadableFileSystem {
  /**
  *
  */
  private readonly _path: string

  /**
  *
  */
  private readonly _system: ReadableFileSystem

  /**
  *
  */
  public constructor(system: ReadableFileSystem, path: string) {
    this._path = path
    this._system = system
  }

  /**
  * @see ReadableFileSystem.readFile
  */
  public readFile(path: string, options: { encoding?: null; flag?: string; }): Promise<Buffer>
  public readFile(path: string, options: string | { encoding: BufferEncoding; flag?: string; }): Promise<string>
  public readFile(path: string): Promise<string>
  public readFile(path: string, options: string | { encoding?: BufferEncoding; flag?: string; }): Promise<string | Buffer>
  public readFile(path: any, options?: any) {
    const nextPath: string = Path.resolve(this._path, path)

    if (nextPath.startsWith(this._path)) {
      if (options == null) {
        return this._system.readFile(nextPath)
      } else {
        return this._system.readFile(nextPath, options)
      }
    } else {
      throw new Error('The requested file \"' + path + '\" is out of the scope of this file system.')
    }
  }

  /**
  * @see ReadableFileSystem.readdir
  */
  public readdir(path: string): Promise<string[]> {
    const nextPath: string = Path.resolve(this._path, path)

    if (nextPath.startsWith(this._path)) {
      return this._system.readdir(nextPath)
    } else {
      throw new Error('The requested directory \"' + path + '\" does not exists in this file system.')
    }
  }

  /**
  * @see ReadableFileSystem.stat
  */
  public stat(path: string): Promise<Stats> {
    const nextPath: string = Path.resolve(this._path, path)

    if (nextPath.startsWith(this._path)) {
      return this._system.stat(nextPath)
    } else {
      throw new Error('The requested file \"' + path + '\" is out of the scope of this file system.')
    }
  }

  /**
  * @see ReadableFileSystem.lstat
  */
  public lstat(path: string): Promise<Stats> {
    const nextPath: string = Path.resolve(this._path, path)

    if (nextPath.startsWith(this._path)) {
      return this._system.lstat(nextPath)
    } else {
      throw new Error('The requested file \"' + path + '\" is out of the scope of this file system.')
    }
  }

  /**
  * @see ReadableFileSystem.readlink
  */
  public readlink(path: string): Promise<string> {
    const nextPath: string = Path.resolve(this._path, path)

    if (nextPath.startsWith(this._path)) {
      return this._system.readlink(nextPath)
    } else {
      throw new Error('The requested file \"' + path + '\" is out of the scope of this file system.')
    }
  }
}
