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
import { Test } from './Test'
import { Fatalities } from './Fatalities'
import { Hopes } from './Hopes'
import { Madness } from './Madness'
import { Heroism } from './Heroism'
import { Motivation } from './Motivation'
import { Despair } from './Despair'
import { Catharsis } from './Catharsis'

export function Sanity () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-sanity</SubjectIdentifier>
      <SubjectKeyword>règle</SubjectKeyword>
      <SubjectTitle>Volonté</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <Introduction />
        <Test />
        <Fatalities />
        <Hopes />
        <Motivation />
        <Despair />
        <Madness />
        <Heroism />
        <Catharsis />
      </SubjectContent>
    </Subject>
  )
}
