import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'
import { LocalSummary } from '../../components/LocalSummary'

import { Bear } from './bear'
import { Owl } from './owl'

export function Totems () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>biomancy-totems</SubjectIdentifier>
      <SubjectTitle>Totems</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <Bear />
        <Owl />
      </SubjectContent>
    </Subject>
  )
}
