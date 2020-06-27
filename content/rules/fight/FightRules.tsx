import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'
import { LocalSummary } from '../../../components/LocalSummary'

import { ArmorRule } from './ArmorRule'
import { AttackRule } from './AttackRule'
import { ComaRule } from './ComaRule'
import { DamageRule } from './DamageRule'
import { DeathRule } from './DeathRule'
import { HealthPointRule } from './HealthPointRule'
import { InitiativeRule } from './InitiativeRule'
import { Introduction } from './Introduction'
import { WeigthPointRule } from './WeigthPointRule'
import { WoundsRule } from './WoundsRule'

export function FightRules () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-fight</SubjectIdentifier>
      <SubjectKeyword>Règle</SubjectKeyword>
      <SubjectKeyword>Règle de combat</SubjectKeyword>
      <SubjectTitle>Règles de combat</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <Introduction />
        <InitiativeRule />
        <HealthPointRule />
        <ComaRule />
        <WoundsRule />
        <WeigthPointRule />
        <AttackRule />
        <DamageRule />
        <ArmorRule />
        <DeathRule />
      </SubjectContent>
    </Subject>
  )
}
