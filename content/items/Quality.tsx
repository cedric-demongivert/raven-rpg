import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'
import { Formula } from '../../components/Formula'

export function Quality () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>items-quality</SubjectIdentifier>
      <SubjectKeyword>qualité</SubjectKeyword>
      <SubjectTitle>Qualité</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>

      </SubjectContent>
    </Subject>
  )
}
