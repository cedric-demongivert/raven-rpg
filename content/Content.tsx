import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../components/subject/SubjectSummary'
import { SubjectContent } from '../components/subject/SubjectContent'
import { SubjectTitle } from '../components/subject/SubjectTitle'
import { SubjectIdentifier } from '../components/subject/SubjectIdentifier'
import { Subject } from '../components/subject/Subject'

import { Characteristics } from './characteristics'
import { Masteries } from './masteries'
import { Knowledges } from './knowledges'
import { Summary } from './Summary'
import { CoreRules } from './rules/core'
import { FightRules } from './rules/fight'
import { Status } from './rules/status'
import { Sanity } from './rules/sanity'
import { Echoes } from './echoes'
import { Alchemy } from './alchemy'
import { Biomancy } from './biomancy'
import { Items } from './items'

import { Feats } from './Feats'

export function Content () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules</SubjectIdentifier>
      <SubjectTitle>Table des lois</SubjectTitle>
      <SubjectSummary>
        <p> Règles du jeu corvus </p>
      </SubjectSummary>
      <SubjectContent>
        <Summary />
        <Characteristics />
        <Masteries />
        <Knowledges />
        <Feats />
        <CoreRules />
        <FightRules />
        <Status />
        <Sanity />
        <Echoes />
        <Alchemy />
        <Biomancy />
        <Items />
      </SubjectContent>
    </Subject>
  )
}
