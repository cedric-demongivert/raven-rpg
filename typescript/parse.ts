import {
  UnidocAutoCloser,
  UnidocImport,
  UnidocContext,
  UnidocImportExtractor,
  UnidocImportScheme,
  UnidocLexer,
  UnidocOrigin,
  UnidocParser,
  UnidocProducer,
  UnidocReduce
} from "@cedric-demongivert/unidoc"

import { GitRepository } from "./git"
import { DocumentBuilder } from "./model"
import { RepositoryResolver } from "./unidoc"
import { reduceDocumentStream } from "./unidoc/reduceDocumentStream"

/**
 * 
 */
export function parse(repository: GitRepository, commit: string): Promise<DocumentBuilder> {
  return new Promise(function executeParse(resolve, reject): void {
    const lexer: UnidocLexer = new UnidocLexer()
    const parser: UnidocParser = new UnidocParser()
    const autocloser: UnidocAutoCloser = new UnidocAutoCloser()
    const importExtractor: UnidocImportExtractor = new UnidocImportExtractor()
    const reduction: UnidocReduce<DocumentBuilder> = new UnidocReduce(reduceDocumentStream)
    const context: UnidocContext = new UnidocContext(new RepositoryResolver(repository, commit))

    parser.subscribe(lexer)
    autocloser.subscribe(parser)
    importExtractor.subscribe(autocloser)
    reduction.subscribe(importExtractor)

    importExtractor.imports.on(UnidocProducer.NEXT, context.import.bind(context))
    reduction.on(UnidocProducer.NEXT, resolve)
    reduction.on(UnidocProducer.FAILURE, reject)

    const rootImport: UnidocImport = new UnidocImport()

    rootImport.origin.push(UnidocOrigin.fromRuntime(parse).atCoordinates(0, 0, 0))
    rootImport.scheme = UnidocImportScheme.FILE
    rootImport.identifier = './index.unidoc'

    context.feed(rootImport, lexer)
  })
}