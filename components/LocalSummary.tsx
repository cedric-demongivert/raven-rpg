import React from 'react'
import { ReactElement } from 'react'

import { Document } from './Document'
import { Summary } from './Summary'
import { Subject } from './subject/Subject'

export function LocalSummary (props : LocalSummary.Properties) : ReactElement {
  return (
    <Subject.Consumer>{
      (subjectState : Subject.State) => (
        <Document.Consumer>{
          (documentState : Document.State) => (
            <Summary
              subjects={[subjectState.subject]}
              document={documentState.document}
              {...props}
            />
          )
        }</Document.Consumer>
      )
    }</Subject.Consumer>
  )
}

export namespace LocalSummary {
  export type Properties = {
    className?: string
  }
}
