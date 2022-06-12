import { Stats } from './Stats'

import { GitRepository } from './GitRepository'

/**
 * 
 */
export class GitCommit {
  /**
   *
   */
  public readonly commit: string

  /**
   *
   */
  public readonly parent: GitRepository

  /**
   *
   */
  public constructor(parent: GitRepository, commit: string) {
    this.parent = parent
    this.commit = commit
  }

  /**
   * @see ReadableFileSystem.readFile
   */
  public async readFile(path: string): Promise<Buffer> {
    return this.parent.readFile(this.commit, path)
  }

  /**
   * @see ReadableFileSystem.readdir
   */
  public async readdir(path: string): Promise<string[]> {
    return this.parent.readdir(this.commit, path)
  }

  /**
   * @see ReadableFileSystem.stat
   */
  public async stat(path: string): Promise<Stats> {
    return this.parent.stat(this.commit, path)
  }

  /**
   * @see ReadableFileSystem.lstat
   */
  public async lstat(path: string): Promise<Stats> {
    return this.parent.lstat(this.commit, path)
  }

  /**
   * @see ReadableFileSystem.readlink
   */
  public async readlink(path: string): Promise<string> {
    return this.parent.readlink(this.commit, path)
  }
}
