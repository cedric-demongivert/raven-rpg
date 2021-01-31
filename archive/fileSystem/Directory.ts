import { FileSystem } from './FileSystem'
import { Path } from './Path'
import { Mode } from './Mode'
import { Stats } from './Stats'

/**
*
*/
export class Directory implements FileSystem {
  /**
  *
  */
  private readonly _path: string

  /**
  *
  */
  private readonly _system: FileSystem

  /**
  *
  */
  public constructor(system: FileSystem, path: string) {
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

  /**
  * @see WritableFileSystem.writeFile
  */
  public writeFile(
    path: string,
    data: string | NodeJS.ArrayBufferView,
    options?: string | { encoding?: BufferEncoding; mode?: Mode; flag?: string }
  ): Promise<void> {
    const nextPath: string = Path.resolve(this._path, path)

    if (nextPath.startsWith(this._path)) {
      if (options == null) {
        return this._system.writeFile(nextPath, data)
      } else {
        return this._system.writeFile(nextPath, data, options)
      }
    } else {
      throw new Error('The requested file \"' + path + '\" is out of the scope of this file system.')
    }
  }

  /**
  * @see WritableFileSystem.unlink
  */
  public unlink(path: string): Promise<void> {
    const nextPath: string = Path.resolve(this._path, path)

    if (nextPath.startsWith(this._path)) {
      return this._system.unlink(nextPath)
    } else {
      throw new Error('The requested file \"' + path + '\" is out of the scope of this file system.')
    }
  }

  /**
  * @see WritableFileSystem.mkdir
  */
  public mkdir(path: string, mode?: Mode): Promise<undefined> {
    const nextPath: string = Path.resolve(this._path, path)

    if (nextPath.startsWith(this._path)) {
      if (mode == null) {
        return this._system.mkdir(nextPath)
      } else {
        return this._system.mkdir(nextPath, mode)
      }
    } else {
      throw new Error('The requested file \"' + path + '\" is out of the scope of this file system.')
    }
  }

  /**
  * @see WritableFileSystem.rmdir
  */
  public rmdir(path: string): Promise<void> {
    const nextPath: string = Path.resolve(this._path, path)

    if (nextPath.startsWith(this._path)) {
      return this._system.rmdir(nextPath)
    } else {
      throw new Error('The requested file \"' + path + '\" is out of the scope of this file system.')
    }
  }

  /**
  * @see WritableFileSystem.symlink
  */
  public symlink(target: string, path: string, type?: string): Promise<void> {
    const nextPath: string = Path.resolve(this._path, path)
    const nextTarget: string = Path.resolve(this._path, target)

    if (nextPath.startsWith(this._path)) {
      if (nextTarget.startsWith(this._path)) {
        if (type == null) {
          return this._system.symlink(nextTarget, nextPath)
        } else {
          return this._system.symlink(nextTarget, nextPath, type)
        }
      } else {
        throw new Error('The requested file \"' + target + '\" is out of the scope of this file system.')
      }
    } else {
      throw new Error('The requested file \"' + path + '\" is out of the scope of this file system.')
    }
  }

  /**
  * @see WritableFileSystem.chmod
  */
  public chmod(path: string, mode: Mode): Promise<void> {
    const nextPath: string = Path.resolve(this._path, path)

    if (nextPath.startsWith(this._path)) {
      return this._system.chmod(nextPath, mode)
    } else {
      throw new Error('The requested file \"' + path + '\" is out of the scope of this file system.')
    }
  }
}
