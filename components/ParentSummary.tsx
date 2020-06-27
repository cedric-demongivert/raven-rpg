import React from 'react'
import { ReactElement } from 'react'

import { Document } from './Document'
import { Summary } from './Summary'
import { Subject } from './subject/Subject'

export function ParentSummary (props : ParentSummary.Properties) : ReactElement {
  return (
    <Subject.Consumer>{
      (subjectState : Subject.State) => (
        <Document.Consumer>{
          (documentState : Document.State) => (
            <Summary
              subjects={[documentState.document.getParent(subjectState.subject)]}
              document={documentState.document}
              {...props}
            />
          )
        }</Document.Consumer>
      )
    }</Subject.Consumer>
  )
}

export namespace ParentSummary {
  export type Properties = {
    className?: string
  }
}
