import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'
import { LocalSummary } from '../../../components/LocalSummary'


export function Bear () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>biomancy-bear</SubjectIdentifier>
      <SubjectKeyword>Biomancie</SubjectKeyword>
      <SubjectKeyword>Ours</SubjectKeyword>
      <SubjectTitle>Ours</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

      </SubjectContent>
    </Subject>
  )
}
