import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'
import { LocalSummary } from '../../components/LocalSummary'

import { Introduction } from './Introduction'
import { Mutation } from './Mutation'
import { Bestiality } from './Bestiality'

export function Biomancy () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>biomancy</SubjectIdentifier>
      <SubjectKeyword>Biomancie</SubjectKeyword>
      <SubjectTitle>Biomancie</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <Introduction />
        <Mutation />
        <Bestiality />
      </SubjectContent>
    </Subject>
  )
}
