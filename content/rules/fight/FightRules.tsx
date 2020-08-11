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
import { DamageRule } from './DamageRule'
import { HealthPointRule } from './HealthPointRule'
import { InitiativeRule } from './InitiativeRule'
import { Introduction } from './Introduction'
import { WeigthPointRule } from './WeigthPointRule'
import { ActionRule } from './ActionRule'
import { ProjectileRule } from './ProjectileRule'

export function FightRules () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-fight</SubjectIdentifier>
      <SubjectTitle>Scènes d'action</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <Introduction />
        <InitiativeRule />
        <HealthPointRule />
        <ArmorRule />
        <WeigthPointRule />
        <ActionRule />
        <AttackRule />
        <ProjectileRule />
        <DamageRule />
      </SubjectContent>
    </Subject>
  )
}
