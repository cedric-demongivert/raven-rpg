import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

export function Introduction () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-particles-introduction</SubjectIdentifier>
      <SubjectTitle>Introduction</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
      </SubjectContent>
    </Subject>
  )
}
