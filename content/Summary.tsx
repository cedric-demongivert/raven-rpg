import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../components/subject/SubjectSummary'
import { SubjectContent } from '../components/subject/SubjectContent'
import { SubjectTitle } from '../components/subject/SubjectTitle'
import { SubjectKeyword } from '../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../components/subject/SubjectIdentifier'
import { Subject } from '../components/subject/Subject'
import { ParentSummary } from '../components/ParentSummary'

export function Summary () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>summary</SubjectIdentifier>
      <SubjectTitle>Sommaire</SubjectTitle>
      <SubjectKeyword>Sommaire</SubjectKeyword>
      <SubjectSummary>
        <p> Sommaire du document. </p>
      </SubjectSummary>
      <SubjectContent>
        <ParentSummary />
      </SubjectContent>
    </Subject>
  )
}
