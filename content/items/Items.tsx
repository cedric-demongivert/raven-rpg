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
import { Quality } from './Quality'
import { Weapons } from './weapons'
import { Armors } from './armors'

export function Items () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>items</SubjectIdentifier>
      <SubjectKeyword>objet</SubjectKeyword>
      <SubjectKeyword>équipement</SubjectKeyword>
      <SubjectTitle>Objets & Équipement</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <Introduction />
        <Quality />
        <Weapons />
        <Armors />
      </SubjectContent>
    </Subject>
  )
}
