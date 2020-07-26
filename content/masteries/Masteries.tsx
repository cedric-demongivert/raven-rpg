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
import { WeaponMasteries } from './weaponMasteries'
import { MartialStyleMasteries } from './martialStyleMasteries'
import { ArmorMasteries } from './armorMasteries'
import { SupportMasteries } from './supportMasteries'

export function Masteries () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>masteries</SubjectIdentifier>
      <SubjectKeyword>Maîtrise</SubjectKeyword>
      <SubjectTitle>Maîtrises</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <Introduction />
        <WeaponMasteries />
        <MartialStyleMasteries />
        <ArmorMasteries />
        <SupportMasteries />
      </SubjectContent>
    </Subject>
  )
}
