import { ReactElement } from 'react'

import { PackSet } from '@cedric-demongivert/gl-tool-collection'
import { NativeSet } from '@cedric-demongivert/gl-tool-collection'

import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectSummary } from '../../../components/subject/SubjectSummary'

export class Subject {
  /**
  * Identifier of the parent subject of this subject.
  */
  public parent : number

  /**
  * Unique number that identify this subject into it's parent document.
  */
  public identifier : number

  /**
  * Unique key associated to this subject.
  */
  public key : string

  /**
  * Name of this subject.
  */
  public name : string

  /**
  * A set of keywords related to this subject.
  */
  public keywords : NativeSet<string>

  /**
  * Identifier of each subject that are a children of this subject.
  */
  public children : PackSet<number>

  /**
  * The content of this subject.
  */
  public content : () => ReactElement<SubjectContent>

  /**
  * The summary of this subject.
  */
  public summary : () => ReactElement<SubjectSummary>

  /**
  * Instantiate a new subject instance.
  */
  public constructor () {
    this.parent     = -1
    this.identifier = 0
    this.key        = null
    this.name       = null
    this.summary    = null
    this.content    = null
    this.keywords   = NativeSet.any()
    this.children   = PackSet.uint32(16)
  }
  
  /**
  * @return A new subject model that is a copy of this one
  */
  public clone () : Subject {
    const result : Subject = new Subject()

    result.parent     = this.parent
    result.identifier = this.identifier
    result.key        = this.key
    result.name       = this.name
    result.summary    = this.summary
    result.content    = this.content
    result.keywords.copy(this.keywords)
    result.children.copy(this.children)

    return result
  }

  /**
  * @see Object.equals
  */
  public equals (other : any) : boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof Subject) {
      return other.parent === this.parent &&
             other.identifier === this.identifier &&
             other.key === this.key &&
             other.name === this.name &&
             other.summary === this.summary &&
             other.content === this.content &&
             other.keywords.equals(this.keywords) &&
             other.children.equals(this.children)
    }

    return false
  }
}

export namespace Subject {
  export const EMPTY : Subject = new Subject()
}
