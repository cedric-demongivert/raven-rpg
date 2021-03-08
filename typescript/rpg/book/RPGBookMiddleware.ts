import { ApplicationMiddleware } from '../../ApplicationMiddleware'
import { ApplicationPublication } from '../../ApplicationPublication'
import { ApplicationStore } from '../../ApplicationStore'

import { Application } from '../../application/Application'
import { Entry } from '../../data/Entry'

import { Commit } from '../../commit/Commit'
import { CommitEvent } from '../../commit/CommitEvent'

import { readRPGBook } from '../../unidoc/readRPGBook'

import { RPGElementTree } from '../tree/RPGElementTree'
import { RPGElementTreeEvent } from '../tree/RPGElementTreeEvent'

import { RPGElementEvent } from '../RPGElementEvent'
import { RPGDocument } from '../RPGDocument'
import { RPGDocumentWalker } from '../RPGDocumentWalker'
import { RPGElement } from '../RPGElement'
import { RPGNode } from '../RPGNode'

import { RPGBook } from './RPGBook'
import { RPGBookAction } from './RPGBookAction'
import { RPGBookState } from './RPGBookState'
import { RPGBookEvent } from './RPGBookEvent'


export class RPGBookMiddleware implements ApplicationMiddleware<Application>
{
  /**
  * @see ApplicationListener.beforeReduction
  */
  public beforeReduction(publication: ApplicationPublication<Application>): void {

  }

  /**
  * @see ApplicationListener.afterEventPublication
  */
  public afterReduction(publication: ApplicationPublication<Application>): void {
    switch (publication.event.type) {
      case RPGBookAction.EXTRACT_CONTENT:
        return this.extractContent(publication)
      default:
        return
    }
  }

  /**
  *
  */
  private extractContent(publication: ApplicationPublication<Application, CommitEvent.ExtractBooks>): void {
    const identifier: number = publication.event.payload
    const book: Entry<RPGBook> | undefined = publication.store.getState().elements.getBookByIdentifier(identifier)

    if (book == null) {
      throw new Error(
        'Unable to extract content of book #' + identifier + ' because the ' +
        'requested book does not exists.'
      )
    }

    const commit: Entry<Commit> = publication.store.getState().commits.getByIdentifier(book.model.commit)

    if (book.model.state === RPGBookState.CONTENT_EXTRACTION_REQUESTED) {
      const operation: Promise<RPGDocument> = readRPGBook(commit.model, book.model)

      publication.store.dispatch(RPGBookEvent.extractingContent(book))

      operation.then(this.handleContentExtractionSuccess.bind(this, publication))
      operation.catch(this.handleContentExtractionFailure.bind(this, publication))
    } else {
      throw new Error(
        'Unable to extract content from book ' + book.toString() + ' ' +
        'because the requested book is not in state ' +
        RPGBookState.toDebugString(RPGBookState.CONTENT_EXTRACTION_REQUESTED) + '.' +
        ' You may have a problem somewhere into your workflow.'
      )
    }
  }

  /**
  *
  */
  private handleContentExtractionSuccess(publication: ApplicationPublication<Application, RPGBookEvent.ExtractContent>, content: RPGDocument): void {
    const identifier: number = publication.event.payload
    const book: Entry<RPGBook> | undefined = publication.store.getState().elements.getBookByIdentifier(identifier)

    if (book == null) {
      throw new Error(
        'Unable to handle the success of the extaction of content of book #' +
        identifier + ' because the requested book does not exists.'
      )
    }

    if (book.model.state === RPGBookState.EXTRACTING_CONTENT) {
      const bookTree: Entry<RPGElementTree> = this.createTree(publication.store, book)
      const walker: RPGDocumentWalker = RPGDocumentWalker.walkDocument(content)
      const parentTrees: Entry<RPGElementTree>[] = []
      const parentElements: Entry<RPGElement>[] = []

      let previousTree: Entry<RPGElementTree> = bookTree

      while (walker.hasNext()) {
        const element: RPGElement = walker.next()
        const entry: Entry<RPGElement> = this.createElement(publication.store, element)
        const tree: Entry<RPGElementTree> = this.createTree(publication.store, entry)

        while (parentElements.length > 0 && parentElements[parentElements.length - 1].model !== walker.parent()) {
          parentElements.pop()
          parentTrees.pop()
        }

        publication.store.dispatch(RPGElementTreeEvent.chain(previousTree, tree))
        publication.store.dispatch(RPGElementTreeEvent.hierarchize(tree, parentElements.length > 0 ? parentTrees[parentTrees.length - 1] : bookTree))

        if (RPGNode.is(element)) {
          parentTrees.push(tree)
          parentElements.push(entry)
        }

        previousTree = tree
      }

      console.log([...publication.store.getState().elements.images.entries].map(x => x.model))

      publication.store.dispatch(RPGBookEvent.contentExtracted(book, content))
    } else {
      throw new Error(
        'Unable to handle success of the extraction of the content of book ' +
        book.toString() + ' because the requested book is not in state ' +
        RPGBookState.toDebugString(RPGBookState.EXTRACTING_CONTENT) +
        '. You may have a problem somewhere into your workflow.'
      )
    }
  }

  /**
  *
  */
  private createElement(store: ApplicationStore<Application>, element: RPGElement): Entry<RPGElement> {
    store.dispatch(RPGElementEvent.extracted(element))
    return store.getState().elements.table.getFirstInserted()
  }

  /**
  *
  */
  private createTree(store: ApplicationStore<Application>, element: Entry<RPGElement>): Entry<RPGElementTree> {
    store.dispatch(RPGElementTreeEvent.add(element))
    return store.getState().documents.table.getFirstInserted()
  }

  /**
  *
  */
  private handleContentExtractionFailure(publication: ApplicationPublication<Application, RPGBookEvent.ExtractContent>, reason: Error): void {
    const identifier: number = publication.event.payload
    const book: Entry<RPGBook> | undefined = publication.store.getState().elements.getBookByIdentifier(identifier)

    if (book == null) {
      throw new Error(
        'Unable to handle the failure of the extraction of the content of ' +
        'book #' + identifier + ' because the requested book does not exists.'
      )
    }

    if (book.model.state === RPGBookState.EXTRACTING_CONTENT) {
      publication.store.dispatch(RPGBookEvent.contentExtractionFailure(book, reason))
    } else {
      throw new Error(
        'Unable to handle failure of the extraction of the content of book ' +
        book.toString() + ' because the requested book is not in state ' +
        RPGBookState.toDebugString(RPGBookState.EXTRACTING_CONTENT) +
        '. You may have a problem somewhere into your workflow.'
      )
    }
  }
}
