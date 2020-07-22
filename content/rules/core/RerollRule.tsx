
import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function RerollRule () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-core-reroll</SubjectIdentifier>
      <SubjectKeyword>Règle</SubjectKeyword>
      <SubjectKeyword>Règle principale</SubjectKeyword>
      <SubjectKeyword>Pousser le test</SubjectKeyword>
      <SubjectTitle>Pousser le test</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Lors d'un échec qui n'est pas un échec critique et moyennant une
          justification acceptée par le maître du jeu, un personnage peut
          tenter de repasser un test qu'il vient juste d'échouer. Si celui-ci
          réussi la seconde tentative alors le test est passé, s'il échoue une
          seconde fois alors le joueur est sujet à un échec critique.
        </p>
      </SubjectContent>
    </Subject>
  )
}
