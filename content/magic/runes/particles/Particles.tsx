import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'
import { LocalSummary } from '../../../../components/LocalSummary'

import { Introduction } from './Introduction'
import { Ket } from './Ket'
import { Met } from './Met'
import { Set } from './Set'
import { Tet } from './Tet'
import { Yet } from './Yet'
import { Zet } from './Zet'

export function Particles () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-particles</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Particules</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <Introduction />
        <Ket />
        <Met />
        <Set />
        <Tet />
        <Yet />
        <Zet />
      </SubjectContent>
    </Subject>
  )
}