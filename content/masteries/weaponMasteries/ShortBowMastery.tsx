import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function ShortBowMastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries-weapons-short-bow</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectKeyword>Arc court</SubjectKeyword>
      <SubjectKeyword>Arc</SubjectKeyword>
      <SubjectTitle>Arcs courts</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
      </SubjectContent>
    </Subject>
  )
}
