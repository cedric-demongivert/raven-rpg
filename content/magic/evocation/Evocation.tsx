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

import { Incantation } from './Incantation'
import { Canalization } from './Canalization'

import { Spells } from './spells'

export function Evocation () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-spells</SubjectIdentifier>
      <SubjectTitle>Évocation</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <Introduction />

        <Incantation />
        <Canalization />

        <Spells/>
      </SubjectContent>
    </Subject>
  )
}
