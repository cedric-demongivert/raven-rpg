import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

import { UnarmedCombat } from './UnarmedCombat'
import { Light } from './Light'
import { Heavy } from './Heavy'
import { Distance } from './Distance'

export function Weapons () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>items-weapons</SubjectIdentifier>
      <SubjectKeyword>arme</SubjectKeyword>
      <SubjectTitle>Armes</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <UnarmedCombat />
        <Light />
        <Heavy />
        <Distance />
      </SubjectContent>
    </Subject>
  )
}
