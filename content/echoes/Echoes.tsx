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
import { Affinity } from './Affinity'
import { Categories } from './Categories'
import { Manifestations } from './Manifestations'
import { Mastery } from './Mastery'

export function Echoes () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>echoes</SubjectIdentifier>
      <SubjectKeyword>Écho</SubjectKeyword>
      <SubjectTitle>Échos</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />
        
        <Introduction />
        <Manifestations />
        <Categories />
        <Affinity />
        <Mastery />
      </SubjectContent>
    </Subject>
  )
}
