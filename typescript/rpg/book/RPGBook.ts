import { Hypertext } from '../../hypertext/Hypertext'
import { Entry } from '../../data/Entry'

import { Empty } from '../../Empty'

import { RPGDocument } from '../RPGDocument'
import { RPGElement } from '../RPGElement'
import { RPGElementType } from '../RPGElementType'

import { RPGBookState } from './RPGBookState'

/**
*
*/
export class RPGBook implements RPGElement {
  /**
  *
  */
  public readonly type: RPGElementType.BOOK

  /**
  *
  */
  public readonly commit: number

  /**
  *
  */
  public readonly identifier: string | undefined

  /**
  *
  */
  public readonly path: string

  /**
  *
  */
  public readonly state: RPGBookState

  /**
  *
  */
  public readonly lang: string

  /**
  *
  */
  public readonly title: string

  /**
  *
  */
  public readonly summary: Hypertext | undefined

  /**
  *
  */
  public readonly children: RPGDocument

  /**
  *
  */
  public readonly reason: Error | undefined

  /**
  *
  */
  public constructor(properties: RPGBook.Properties = Empty.OBJECT) {
    this.type = RPGElementType.BOOK
    this.commit = properties.commit || 0
    this.identifier = properties.identifier || undefined
    this.path = properties.path || Empty.STRING
    this.state = properties.state || RPGBookState.DEFAULT
    this.lang = properties.lang || Empty.STRING
    this.title = properties.title || Empty.STRING
    this.summary = properties.summary || undefined
    this.children = properties.children || RPGDocument.EMPTY
    this.reason = properties.reason || undefined
  }

  /**
  *
  */
  public setCommit(commit: number): RPGBook {
    if (this.commit === commit) {
      return this
    } else {
      return new RPGBook({ ...this, commit })
    }
  }

  /**
  *
  */
  public setIdentifier(identifier: string | undefined): RPGBook {
    if (this.identifier === identifier) {
      return this
    } else {
      return new RPGBook({ ...this, identifier })
    }
  }

  /**
  *
  */
  public setPath(path: string): RPGBook {
    if (this.path === path) {
      return this
    } else {
      return new RPGBook({ ...this, path })
    }
  }

  /**
  *
  */
  public setState(state: RPGBookState): RPGBook {
    if (this.state === state) {
      return this
    } else {
      return new RPGBook({ ...this, state })
    }
  }

  /**
  *
  */
  public setLang(lang: string): RPGBook {
    if (this.lang === lang) {
      return this
    } else {
      return new RPGBook({ ...this, lang })
    }
  }

  /**
  *
  */
  public setTitle(title: string): RPGBook {
    if (this.title === title) {
      return this
    } else {
      return new RPGBook({ ...this, title })
    }
  }

  /**
  *
  */
  public setSummary(summary: Hypertext | undefined): RPGBook {
    if (this.summary === summary) {
      return this
    } else {
      return new RPGBook({ ...this, summary })
    }
  }

  /**
  *
  */
  public setChildren(children: RPGDocument): RPGBook {
    if (this.children === children) {
      return this
    } else {
      return new RPGBook({ ...this, children })
    }
  }

  /**
  *
  */
  public setTree(tree: number | undefined): RPGBook {
    if (this.tree === tree) {
      return this
    } else {
      return new RPGBook({ ...this, tree })
    }
  }

  /**
  *
  */
  public markExtractContent(): RPGBook {
    switch (this.state) {
      case RPGBookState.HOLLOW:
        return this.setState(RPGBookState.CONTENT_EXTRACTION_REQUESTED)
      default:
        throw new Error(
          'Trying to illegaly move state of book ' + this.toString() + ' to ' +
          RPGBookState.toDebugString(RPGBookState.CONTENT_EXTRACTION_REQUESTED) +
          ' you may have a problem somewhere into your commit ' +
          'management workflow.'
        )
    }
  }

  /**
  *
  */
  public markExtractingContent(): RPGBook {
    switch (this.state) {
      case RPGBookState.CONTENT_EXTRACTION_REQUESTED:
        return this.setState(RPGBookState.EXTRACTING_CONTENT)
      default:
        throw new Error(
          'Trying to illegaly move state of book ' + this.toString() + ' to ' +
          RPGBookState.toDebugString(RPGBookState.EXTRACTING_CONTENT) +
          ' you may have a problem somewhere into your commit ' +
          'management workflow.'
        )
    }
  }

  /**
  *
  */
  public markContentExtracted(document: RPGDocument): RPGBook {
    switch (this.state) {
      case RPGBookState.EXTRACTING_CONTENT:
        return new RPGBook({
          ...this,
          state: RPGBookState.CONTENT_EXTRACTED,
          children: document
        })
      default:
        throw new Error(
          'Trying to illegaly move state of book ' + this.toString() + ' to ' +
          RPGBookState.toDebugString(RPGBookState.CONTENT_EXTRACTED) +
          ' you may have a problem somewhere into your commit ' +
          'management workflow.'
        )
    }
  }

  /**
  *
  */
  public markContentExtractionFailure(reason: Error): RPGBook {
    switch (this.state) {
      case RPGBookState.EXTRACTING_CONTENT:
        return new RPGBook({
          ...this,
          state: RPGBookState.CONTENT_EXTRACTION_FAILURE,
          reason
        })
      default:
        throw new Error(
          'Trying to illegaly move state of book ' + this.toString() + ' to ' +
          RPGBookState.toDebugString(RPGBookState.CONTENT_EXTRACTION_FAILURE) +
          ' you may have a problem somewhere into your commit ' +
          'management workflow.'
        )
    }
  }

  /**
  *
  */
  public markReady(): RPGBook {
    switch (this.state) {
      case RPGBookState.CONTENT_EXTRACTED:
        return this.setState(RPGBookState.READY)
      default:
        throw new Error(
          'Trying to illegaly move state of book ' + this.toString() + ' to ' +
          RPGBookState.toDebugString(RPGBookState.READY) +
          ' you may have a problem somewhere into your commit ' +
          'management workflow.'
        )
    }
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof RPGBook) {
      return (
        other.commit === this.commit &&
        other.identifier === this.identifier &&
        other.path === this.path &&
        other.state === this.state &&
        other.lang === this.lang &&
        other.title === this.title &&
        Hypertext.equals(other.summary, this.summary) &&
        other.children.equals(this.children) &&
        other.reason === this.reason
      )
    }

    return false
  }
}

/**
*
*/
export namespace RPGBook {
  /**
  *
  */
  export type Properties = {
    /**
    *
    */
    commit?: number,

    /**
    *
    */
    identifier?: string | undefined,

    /**
    *
    */
    path?: string,

    /**
    *
    */
    state?: RPGBookState,

    /**
    *
    */
    lang?: string,

    /**
    *
    */
    title?: string,

    /**
    *
    */
    summary?: Hypertext | undefined,

    /**
    *
    */
    children?: RPGDocument,

    /**
    *
    */
    reason?: Error | undefined
  }

  /**
  *
  */
  export const EMPTY: RPGBook = new RPGBook()

  /**
  *
  */
  export function create(properties: Properties = Empty.OBJECT): RPGBook {
    return new RPGBook(properties)
  }

  /**
  *
  */
  export function is(element: RPGElement | undefined): element is RPGBook {
    return element && element instanceof RPGBook
  }

  /**
  *
  */
  export function isEntry(element: Entry<RPGElement> | undefined): element is Entry<RPGBook> {
    return element && element.model instanceof RPGBook
  }

  /**
  *
  */
  export function getCommit(book: RPGBook): number {
    return book.commit
  }

  /**
  *
  */
  export function compareByTitle(left: RPGBook, right: RPGBook): number {
    return left.title.localeCompare(right.title)
  }
}
