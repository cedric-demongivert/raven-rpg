import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function Mastery () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>echoes-mastery</SubjectIdentifier>
      <SubjectKeyword>Écho</SubjectKeyword>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectTitle>Maîtrise</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>

      </SubjectContent>
    </Subject>
  )
}
