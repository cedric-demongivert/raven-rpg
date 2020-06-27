import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'
import { LocalSummary } from '../../../components/LocalSummary'

import { AdversialTestRule } from './AdversialTestRule'
import { CooperationRule } from './CooperationRule'
import { CriticalHitRule } from './CriticalHitRule'
import { RerollRule } from './RerollRule'
import { SelfResolutionRule } from './SelfResolutionRule'
import { SituationalDiceRule } from './SituationalDiceRule'

export function CoreRules () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-core</SubjectIdentifier>
      <SubjectKeyword>Règle</SubjectKeyword>
      <SubjectKeyword>Règle principale</SubjectKeyword>
      <SubjectTitle>Règles principales</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <AdversialTestRule />
        <SelfResolutionRule />
        <CooperationRule />
        <CriticalHitRule />
        <RerollRule />
        <SituationalDiceRule />
      </SubjectContent>
    </Subject>
  )
}
