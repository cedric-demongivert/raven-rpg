import git, { ReadCommitResult, ReadBlobResult } from 'isomorphic-git'

import * as http from './http'

import { InMemoryFileSystem } from './InMemoryFileSystem'
import { GitCommit } from './GitCommit'
import { Stats } from './Stats'
import { Path } from './Path'

/**
 * 
 */
export class GitRepository {
  /**
   *
   */
  public readonly origin: string

  /**
   *
   */
  public readonly root: string

  /**
   *
   */
  private _cloned: boolean

  /**
   * 
   */
  public get cloned(): boolean {
    return this._cloned
  }

  /**
   *
   */
  public constructor(origin: string, root: string) {
    this.origin = origin
    this.root = root
    this._cloned = false
  }

  /**
   *
   */
  public commit(commit: string): GitCommit {
    return new GitCommit(this, commit)
  }

  /**
   *
   */
  // @todo add cloning error
  public async clone(): Promise<void> {
    if (!this._cloned) {
      await git.clone({
        fs: InMemoryFileSystem.get(),
        http,
        noCheckout: true,
        dir: this.root,
        url: this.origin
      })

      this._cloned = true
    }
  }

  /**
   *
   */
  // @todo add cloning error
  public async dump(): Promise<void> {
    if (this._cloned) {
      InMemoryFileSystem.get().rmdir(this.root)
      this._cloned = false
    }
  }

  /**
   *
   */
  public readCommits(): Promise<ReadCommitResult[]> {
    return git.log({
      fs: InMemoryFileSystem.get(),
      dir: this.root
    })
  }

  /**
   *
   */
  public async readTags(): Promise<[string, ReadCommitResult][]> {
    const root: string = this.root

    const references: string[] = await git.listTags({
      fs: InMemoryFileSystem.get(),
      dir: root
    })

    return await Promise.all(
      references.map(async function (ref: string): Promise<[string, ReadCommitResult]> {
        const oid: string = await git.resolveRef({
          fs: InMemoryFileSystem.get(),
          dir: root,
          ref
        })

        const commit: ReadCommitResult = await git.readCommit({
          fs: InMemoryFileSystem.get(),
          dir: root,
          oid
        })

        return [ref, commit]
      })
    )
  }

  /**
   * @see ReadableFileSystem.readFile
   */
  public async readFile(commit: string, path: string): Promise<Buffer> {
    const result: ReadBlobResult = await git.readBlob({
      fs: InMemoryFileSystem.get(),
      dir: this.root,
      oid: commit,
      filepath: Path.resolve(path).slice(1)
    })

    return Buffer.from(result.blob.buffer)
  }

  /**
   * @see ReadableFileSystem.readdir
   */
  public readdir(commit: string, path: string): Promise<string[]> {
    throw new Error('Not implemented yet.')
  }

  /**
   * @see ReadableFileSystem.stat
   */
  public async stat(commit: string, path: string): Promise<Stats> {
    throw new Error('Not implemented yet.')
  }

  /**
   *
   */
  public async isDirectory(commit: string, path: string): Promise<boolean> {
    try {
      await git.readTree({
        fs: InMemoryFileSystem.get(),
        dir: this.root,
        oid: commit,
        filepath: Path.resolve(path).slice(1)
      })

      return true
    } catch (error) {
      return false
    }
  }

  /**
   *
   */
  public async exists(commit: string, path: string): Promise<boolean> {
    try {
      await git.readTree({
        fs: InMemoryFileSystem.get(),
        dir: this.root,
        oid: commit,
        filepath: Path.resolve(path).slice(1)
      })

      return true
    } catch (error) {
      return false
    }
  }

  /**
   * @see ReadableFileSystem.lstat
   */
  public async lstat(commit: string, path: string): Promise<Stats> {
    throw new Error('Not implemented yet.')
  }

  /**
   * @see ReadableFileSystem.readlink
   */
  public async readlink(commit: string, path: string): Promise<string> {
    throw new Error('Not implemented yet.')
  }
}

/**
 * 
 */
export namespace GitRepository {

}
