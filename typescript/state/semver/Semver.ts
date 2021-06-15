const SEMVER_REGEXP: RegExp = /^\s*v?(\d+)(\.\d+)?(\.\d+)?\s*$/

/**
 * 
 */
export class Semver {
  /**
   * 
   */
  public readonly major: number

  /**
   * 
   */
  public readonly minor: number

  /**
   * 
   */
  public readonly patch: number

  /**
   * 
   */
  public static readonly EMPTY: Semver = new Semver()

  /**
   * 
   */
  public static empty(): Semver {
    return Semver.EMPTY
  }

  /**
   * 
   */
  public static create(major: number = 0, minor: number = 0, patch: number = 0): Semver {
    return major === minor && minor === patch && patch === 0 ? Semver.EMPTY : new Semver(major, minor, patch)
  }

  /**
   * 
   */
  public static fromString(version: string): Semver | undefined {
    const match: RegExpExecArray | null = SEMVER_REGEXP.exec(version)

    if (match == null) {
      return undefined
    } else {
      return new Semver(
        parseInt(match[1]),
        match[2] ? parseInt(match[2].substr(1)) : 0,
        match[3] ? parseInt(match[3].substr(1)) : 0
      )
    }
  }

  /**
   * 
   */
  private constructor(major: number = 0, minor: number = 0, patch: number = 0) {
    this.major = major
    this.minor = minor
    this.patch = patch
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof Semver) {
      return (
        other.major === this.major &&
        other.minor === this.minor &&
        other.patch === this.patch
      )
    }

    return false
  }

  /**
   * 
   */
  public toString(): string {
    return this.major + '.' + this.minor + '.' + this.patch
  }
}

/**
 * 
 */
export namespace Semver {
  /**
   * 
   */
  export function compare(left: Semver, right: Semver): number {
    const majorComparison: number = left.major - right.major

    if (majorComparison === 0) {
      const minorComparison: number = left.minor - right.minor

      if (minorComparison === 0) {
        return left.patch - right.patch
      } else {
        return minorComparison
      }
    } else {
      return majorComparison
    }
  }
}