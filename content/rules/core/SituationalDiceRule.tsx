
import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function SituationalDiceRule () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-core-situationnal-dice</SubjectIdentifier>
      <SubjectKeyword>Règle</SubjectKeyword>
      <SubjectKeyword>Règle principale</SubjectKeyword>
      <SubjectKeyword>Résolution</SubjectKeyword>
      <SubjectKeyword>Bonus et malus situationnel</SubjectKeyword>
      <SubjectTitle>Bonus et malus situationnel</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Quand une action intentée est bien argumentée, l'acteur peut se voir
          attribuer un ou plusieurs dés de bonus situationnel. L'acteur lance alors
          des dés de dizaines supplémentaires et garde la dizaine la plus basse
          quand il calcule son score. De la même manière quand une action intentée
          est douteuse ou mal argumentée, l'acteur peut se voir attribuer un ou
          plusieurs dés de malus situationnel. L'acteur lance alors des dés de
          dizaines supplémentaires et garde la dizaine la plus haute quand il
          calcule son score.
        </p>
      </SubjectContent>
    </Subject>
  )
}
