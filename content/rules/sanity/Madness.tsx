import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Madness () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-sanity-madness</SubjectIdentifier>
      <SubjectKeyword>règle</SubjectKeyword>
      <SubjectTitle>Folie</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>

      </SubjectContent>
    </Subject>
  )
}
