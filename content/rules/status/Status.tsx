import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'
import { LocalSummary } from '../../../components/LocalSummary'

import { Introduction } from './Introduction'
import { Coma } from './Coma'
import { Wounds } from './Wounds'

export function Status () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-status</SubjectIdentifier>
      <SubjectTitle>Status</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <Introduction />
        <Coma />
        <Wounds />
      </SubjectContent>
    </Subject>
  )
}
